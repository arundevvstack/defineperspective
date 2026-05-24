import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Must use service role to insert

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.YOUTUBE_WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { videoId, title, description, transcript, publishedAt, thumbnailUrl } = body;

    if (!videoId || !title) {
      return NextResponse.json({ error: 'Missing critical video metadata' }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // AI logic could be added here to extract geo_tags and industries from the description/transcript
    const generatedSlug = `yt-${videoId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    const { data, error } = await supabase.from('case_studies').insert({
      slug: generatedSlug,
      title: title,
      excerpt: description?.substring(0, 160) || 'AI Cinematic Commercial Production by DP AI Studios.',
      video_metadata: {
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        contentUrl: null // Wait for direct CDN upload if needed
      },
      transcript: transcript || '',
      thumbnail_url: thumbnailUrl,
      youtube_url: `https://www.youtube.com/watch?v=${videoId}`,
      upload_date: publishedAt,
      published: false, // Ingested as a draft
      client_industry: 'Uncategorized',
      cinematic_direction: 'AI Filmmaking Pipeline',
    });

    if (error) {
      console.error('Supabase Sync Error:', error);
      return NextResponse.json({ error: 'Database ingestion failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Video successfully drafted to case_studies.', slug: generatedSlug });
  } catch (err) {
    console.error('Webhook processing failed:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
