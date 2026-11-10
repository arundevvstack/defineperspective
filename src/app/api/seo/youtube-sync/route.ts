import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{5,32}$/;

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const rateLimitResponse = await checkRateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) return auth.response;

    // 3. Strict Input Validation
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Body must be a valid JSON object' }, { status: 400 });
    }

    const { videoId, title } = body;

    if (!videoId || typeof videoId !== 'string' || !YOUTUBE_ID_REGEX.test(videoId.trim())) {
      return NextResponse.json(
        { error: 'Valid YouTube Video ID is required (alphanumeric, dashes, underscores, 5-32 characters).' },
        { status: 400 }
      );
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0 || title.trim().length > 200) {
      return NextResponse.json(
        { error: 'Valid title string is required (max 200 characters).' },
        { status: 400 }
      );
    }

    const cleanVideoId = videoId.trim();
    const cleanTitle = title.trim();

    // 4. Fetch Transcript (Simulated logic for now - requires YouTube Transcript API)
    const simulatedTranscript = `This is a cinematic AI production by Define Perspective. We specialize in AI TVCs and luxury brand films...`;

    // 5. AI Content Generation (The Neural Layer)
    const generatedArticle = {
      title: `${cleanTitle} | Cinematic AI Production Intelligence`,
      content: `### The Vision\n${simulatedTranscript}\n\n### AI Production Values\nOur proprietary neural pipelines ensure maximum visual fidelity...`,
      meta_title: `Experience ${cleanTitle} - Premium AI Brand Film by DP`,
      meta_description: `Watch the latest AI commercial production: ${cleanTitle}. Exploring the future of cinematic advertising and visual storytelling.`,
      keywords: ['AI Video Production', 'AI TVC', 'Cinematic AI', 'Define Perspective'],
      schema: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": cleanTitle,
        "description": `Cinematic AI production of ${cleanTitle}`,
        "thumbnailUrl": `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`,
        "uploadDate": new Date().toISOString(),
      }
    };

    // 6. Store in Supabase Content Pages using service role client
    const { data: page, error: pageError } = await supabaseAdmin
      .from('content_pages')
      .insert({
        title: generatedArticle.title,
        slug: `ai-films/${cleanVideoId}`,
        content: generatedArticle.content,
        meta_title: generatedArticle.meta_title,
        meta_description: generatedArticle.meta_description,
        schema_json: generatedArticle.schema,
        keywords: generatedArticle.keywords,
        status: 'review'
      })
      .select()
      .single();

    if (pageError) {
      console.warn('[youtube-sync] Content page insert warning:', pageError.message);
    }

    // 7. Sync YouTube Record
    const { error: syncError } = await supabaseAdmin
      .from('youtube_sync')
      .upsert({
        youtube_video_id: cleanVideoId,
        title: cleanTitle,
        transcript: simulatedTranscript,
        generated_article_id: page?.id || null,
        synced_at: new Date().toISOString()
      }, { onConflict: 'youtube_video_id' });

    if (syncError) {
      console.warn('[youtube-sync] youtube_sync record upsert warning:', syncError.message);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Neural SEO Article drafted for review.',
      pageId: page?.id || null 
    });

  } catch (error: any) {
    console.error('YouTube Sync Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
