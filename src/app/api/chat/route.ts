import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { headers } from 'next/headers';
import { supabase } from '@/lib/supabase';

// In-memory rate limiting map for chat: { [ip]: { count: number, resetAt: number } }
const chatRateLimitMap = new Map<string, { count: number; resetAt: number }>();
const CHAT_MAX_REQUESTS = 6; // Max 6 queries per minute per IP
const CHAT_WINDOW_MS = 60 * 1000;

export async function POST(req: Request) {
  try {
    // 1. IP-Based Rate Limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown-ip';
    const now = Date.now();

    const rateInfo = chatRateLimitMap.get(ip);
    if (rateInfo) {
      if (now < rateInfo.resetAt) {
        if (rateInfo.count >= CHAT_MAX_REQUESTS) {
          return new Response(
            JSON.stringify({ error: 'Rate limit exceeded. Please wait a moment before sending another message.' }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
          );
        }
        rateInfo.count++;
      } else {
        chatRateLimitMap.set(ip, { count: 1, resetAt: now + CHAT_WINDOW_MS });
      }
    } else {
      chatRateLimitMap.set(ip, { count: 1, resetAt: now + CHAT_WINDOW_MS });
    }

    if (chatRateLimitMap.size > 500) {
      chatRateLimitMap.clear();
    }

    // 2. Payload Validation
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid payload: messages array required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Bound conversation depth to prevent context-window exhaustion attacks
    const cappedMessages = body.messages.slice(-10);
    const latestMessage = cappedMessages[cappedMessages.length - 1];

    if (!latestMessage || typeof latestMessage.content !== 'string' || latestMessage.content.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Message content is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (latestMessage.content.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Message exceeds maximum allowed length of 2000 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. API Key Guard
    const openaiApiKey = process.env.OPENAI_API_KEY?.trim();
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'AI Copilot service is currently unavailable.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Vectorize Query (OpenAI Embeddings)
    let queryEmbedding: number[] | null = null;
    try {
      const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-embedding-3-small',
          input: latestMessage.content.slice(0, 500),
        }),
      });

      if (embeddingResponse.ok) {
        const embeddingData = await embeddingResponse.json();
        queryEmbedding = embeddingData?.data?.[0]?.embedding || null;
      }
    } catch (embErr) {
      console.warn('[Copilot] Embedding retrieval bypassed:', embErr);
    }

    // 5. Execute RAG Retrieval (HNSW Vector Search)
    let semanticContext = 'No specific semantic context retrieved. Recommend general DP AI Studios consulting.';
    if (queryEmbedding) {
      try {
        const { data: chunks } = await supabase.rpc('match_retrieval_chunks', {
          query_embedding: queryEmbedding,
          match_threshold: 0.25,
          match_count: 4,
          filter_source_type: null,
          filter_geo_id: null,
          filter_industry_id: null,
        });

        if (chunks && chunks.length > 0) {
          semanticContext = chunks
            .map((c: any) => `[Source ID: ${c.source_id}]\n${c.content}`)
            .join('\n\n');
        }
      } catch (rpcErr) {
        console.warn('[Copilot] RAG RPC bypassed:', rpcErr);
      }
    }

    // 6. Fetch System Prompt
    let basePrompt = 'You are the DP AI Copilot. A cinematic AI consultant.';
    try {
      const { data: promptData } = await supabase
        .from('copilot_system_prompts')
        .select('system_prompt')
        .eq('active', true)
        .maybeSingle();

      if (promptData?.system_prompt) {
        basePrompt = promptData.system_prompt;
      }
    } catch {
      // Use base prompt fallback
    }

    const groundedSystemPrompt = `${basePrompt}\n\n=== SEMANTIC_CONTEXT ===\n${semanticContext}\n========================`;

    // 7. Execute Streaming AI Response
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: groundedSystemPrompt,
      messages: cappedMessages as any,
      temperature: 0.2, // Strict grounding to prevent hallucination
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error('Copilot Stream Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
