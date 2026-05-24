import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Requires elevated privileges to query raw vectors safely
const openaiApiKey = process.env.OPENAI_API_KEY || '';

export async function POST(request: Request) {
  try {
    const { query, filter_source_type, limit = 5 } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Semantic query is required' }, { status: 400 });
    }

    if (!openaiApiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 2. Generate Vector Embedding for the User's Query using native fetch
    const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: query
      })
    });
    
    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;

    // 3. Execute Vector Retrieval via Supabase RPC (match_retrieval_chunks)
    const { data: chunks, error } = await supabase.rpc('match_retrieval_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: 0.3, // Baseline similarity threshold
      match_count: limit,
      filter_source_type: filter_source_type || null,
      filter_geo_id: null,
      filter_industry_id: null
    });

    if (error) {
      console.error('Vector Retrieval Error:', error);
      return NextResponse.json({ error: 'Semantic search execution failed' }, { status: 500 });
    }

    // 4. Return Contextual RAG Payload
    return NextResponse.json({
      query,
      results: chunks,
      metadata: {
        model: 'text-embedding-3-small',
        retrieval_count: chunks.length,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (err) {
    console.error('Semantic Search API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
