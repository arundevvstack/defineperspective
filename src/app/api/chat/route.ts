import { streamText, Message } from 'ai';
import { openai } from '@ai-sdk/openai';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1];

    // 1. Vectorize the latest user query
    const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: latestMessage.content
      })
    });
    
    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;

    // 2. Execute RAG Retrieval (HNSW Vector Search)
    const { data: chunks, error } = await supabase.rpc('match_retrieval_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: 0.25,
      match_count: 4,
      filter_source_type: null,
      filter_geo_id: null,
      filter_industry_id: null
    });

    // 3. Format Semantic Context
    let semanticContext = "";
    if (chunks && chunks.length > 0) {
        semanticContext = chunks.map((c: any) => `[Source ID: ${c.source_id}]\n${c.content}`).join("\n\n");
    } else {
        semanticContext = "No specific semantic context retrieved. Recommend general DP AI Studios consulting.";
    }

    // 4. Fetch System Prompt (Caching omitted for brevity, ideally fetched from Upstash/KV)
    const { data: promptData } = await supabase
        .from('copilot_system_prompts')
        .select('system_prompt')
        .eq('active', true)
        .single();
    
    const basePrompt = promptData?.system_prompt || "You are the DP AI Copilot. A cinematic AI consultant.";

    // 5. Construct Grounded System Prompt
    const groundedSystemPrompt = `${basePrompt}\n\n=== SEMANTIC_CONTEXT ===\n${semanticContext}\n========================`;

    // 6. Execute Streaming AI Response
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: groundedSystemPrompt,
      messages: messages as Message[],
      temperature: 0.2, // Strict grounding to prevent hallucination
      maxTokens: 1500,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Copilot Stream Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
