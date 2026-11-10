import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

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

    const { topic, node } = body;

    if (!topic || typeof topic !== 'string' || topic.trim().length === 0 || topic.trim().length > 150) {
      return NextResponse.json(
        { error: 'Valid topic string is required (1-150 characters).' },
        { status: 400 }
      );
    }

    const cleanTopic = topic.trim();
    const cleanNode = (typeof node === 'string' && node.trim().length > 0)
      ? node.trim().slice(0, 100)
      : 'Kochi, IN';

    // 4. AI Synthesis (Simulated Neural Engine)
    const synthesisData = {
      title: `${cleanTopic} (${cleanNode})`,
      summary: `An exclusive executive report exploring the intersection of cinematic storytelling and neural AI pipelines in the ${cleanTopic} sector for the ${cleanNode} market.`,
      content: `### ${cleanNode} Market Overview\nThe landscape of ${cleanTopic} in ${cleanNode} is shifting towards autonomous production...\n\n### Strategic Framework\n1. Neural Asset Generation\n2. Cinematic Lighting Synthesis\n3. Real-time Market Adaptation...`,
      category: cleanTopic.toLowerCase().includes('luxury') ? 'Luxury Strategy' : 'AI Intelligence',
      metadata: {
        keywords: [cleanTopic, cleanNode, 'AI Advertising', 'Cinematic AI', 'Define Perspective'],
        sentiment: 'bullish',
        market_readiness: 'high'
      }
    };

    // 5. Store in Supabase using service-role admin client
    const { data, error: dbError } = await supabaseAdmin
      .from('lead_magnets')
      .insert({
        title: synthesisData.title,
        summary: synthesisData.summary,
        content: synthesisData.content,
        category: synthesisData.category,
        metadata_json: synthesisData.metadata,
        download_count: 0
      })
      .select()
      .single();

    if (dbError) {
      console.warn('[generate-lead-magnet] Database insert warning:', dbError.message);
      return NextResponse.json({ 
        error: 'Database operation failed. Verify lead_magnets table schema.',
        details: dbError.message 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Guide created.',
      guideId: data?.id || null 
    });

  } catch (error: any) {
    console.error('Lead Magnet Engine Critical Error:', error);
    return NextResponse.json({ error: error.message || 'Unknown internal error' }, { status: 500 });
  }
}
