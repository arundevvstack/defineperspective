import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { videoId, title } = await req.json();

    if (!videoId) {
      return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
    }

    // 1. Fetch Transcript (Simulated logic for now - requires YouTube Transcript API)
    // In production, you would use 'youtube-transcript-api' or similar
    const simulatedTranscript = `This is a cinematic AI production by Define Perspective. We specialize in AI TVCs and luxury brand films...`;

    // 2. AI Content Generation (The Neural Layer)
    // Conceptually calling OpenAI/Claude to generate a premium editorial article
    const generatedArticle = {
      title: `${title} | Cinematic AI Production Intelligence`,
      content: `### The Vision\n${simulatedTranscript}\n\n### AI Production Values\nOur proprietary neural pipelines ensure maximum visual fidelity...`,
      meta_title: `Experience ${title} - Premium AI Brand Film by DP`,
      meta_description: `Watch the latest AI commercial production: ${title}. Exploring the future of cinematic advertising and visual storytelling.`,
      keywords: ['AI Video Production', 'AI TVC', 'Cinematic AI', 'Define Perspective'],
      schema: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": title,
        "description": `Cinematic AI production of ${title}`,
        "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        "uploadDate": new Date().toISOString(),
      }
    };

    // 3. Store in Supabase Content Pages
    const { data: page, error: pageError } = await supabase
      .from('content_pages')
      .insert({
        title: generatedArticle.title,
        slug: `ai-films/${videoId}`,
        content: generatedArticle.content,
        meta_title: generatedArticle.meta_title,
        meta_description: generatedArticle.meta_description,
        schema_json: generatedArticle.schema,
        keywords: generatedArticle.keywords,
        status: 'review' // Human approval required as per Safety Rules
      })
      .select()
      .single();

    if (pageError) throw pageError;

    // 4. Sync YouTube Record
    await supabase
      .from('youtube_sync')
      .upsert({
        youtube_video_id: videoId,
        title: title,
        transcript: simulatedTranscript,
        generated_article_id: page.id,
        synced_at: new Date().toISOString()
      });

    return NextResponse.json({ 
      success: true, 
      message: 'Neural SEO Article drafted for review.',
      pageId: page.id 
    });

  } catch (error: any) {
    console.error('YouTube Sync Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
