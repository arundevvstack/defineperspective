// ==============================================================================
// DP AI STUDIOS - PHASE 8: SUPABASE EDGE FUNCTION ORCHESTRATOR (DENO)
// Target: supabase/functions/generate-embeddings/index.ts
// Purpose: Securely chunk transcripts, execute text-embedding-3-small, extract entities via gpt-4o-mini, and ingest into retrieval_chunks.
// ==============================================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"
import OpenAI from "https://esm.sh/openai@4.28.0"

// Initialize secure environment variables
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

// Helper: Naive Text Splitter (Target: ~300 words with 50-word overlap)
function chunkText(text: string, maxWords: number = 300, overlap: number = 50): string[] {
    const words = text.split(/\s+/);
    const chunks: string[] = [];
    let i = 0;
    while (i < words.length) {
        const chunk = words.slice(i, i + maxWords).join(" ");
        chunks.push(chunk);
        i += (maxWords - overlap);
    }
    return chunks;
}

serve(async (req) => {
    try {
        const { record } = await req.json() // The row from edge_embedding_queue
        
        if (!record || !record.source_id) {
            return new Response("Missing payload", { status: 400 })
        }

        // 1. Mark queue as 'processing'
        await supabase
            .from('edge_embedding_queue')
            .update({ status: 'processing' })
            .eq('id', record.id)

        // 2. Fetch Source Data (Case Study)
        const { data: caseStudy } = await supabase
            .from('case_studies')
            .select('id, title, excerpt, transcript')
            .eq('id', record.source_id)
            .single()

        if (!caseStudy || !caseStudy.transcript) {
            return new Response("No transcript available to process", { status: 200 })
        }

        // 3. Semantic Chunking
        const textToProcess = `${caseStudy.title}\n${caseStudy.excerpt}\n${caseStudy.transcript}`;
        const chunks = chunkText(textToProcess);

        // 4. Batch Vectorization (text-embedding-3-small)
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: chunks,
        });

        // 5. Ingest Vectors into retrieval_chunks
        for (let i = 0; i < chunks.length; i++) {
            await supabase.from('retrieval_chunks').insert({
                source_type: 'case_study',
                source_id: caseStudy.id,
                chunk_index: i,
                content: chunks[i],
                embedding: embeddingResponse.data[i].embedding,
                semantic_confidence: 0.95 // Baseline assignment
            });
        }

        // 6. Entity & FAQ Extraction (gpt-4o-mini)
        const gptResponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "system",
                    content: "You are an AI filmmaking entity extractor. Output JSON containing 'entities' (brands, locations, cinematic styles) and 'faqs' (3 Q&A pairs)."
                },
                {
                    role: "user",
                    content: `Analyze this commercial transcript:\n${caseStudy.transcript}`
                }
            ]
        });

        const intelligenceData = JSON.parse(gptResponse.choices[0].message.content || '{}');
        
        // 7. Auto-Save FAQs back to Case Study
        if (intelligenceData.faqs) {
            await supabase
                .from('case_studies')
                .update({ faq_json: intelligenceData.faqs })
                .eq('id', caseStudy.id);
        }

        // 8. Mark Queue as Completed
        await supabase
            .from('edge_embedding_queue')
            .update({ status: 'completed' })
            .eq('id', record.id)

        return new Response(JSON.stringify({ success: true, chunksGenerated: chunks.length }), { headers: { "Content-Type": "application/json" } })

    } catch (error) {
        console.error("Edge Function Error:", error)
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } })
    }
})
