import { NextResponse } from 'next/server';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';
import { getKeywordGaps } from '@/lib/intelligence/keyword-gap-service';

export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Use POST with authentication.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function POST(req: Request) {
  try {
    const rateLimitResponse = await checkRateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    const auth = await assertAdminApi(req);
    if (!auth.authorized) return auth.response;

    let node = "Kochi, IN";
    try {
      const body = await req.json();
      if (body && typeof body.node === 'string') {
        const sanitizedNode = body.node.trim().slice(0, 100);
        if (sanitizedNode.length > 0) node = sanitizedNode;
      }
    } catch {
      // Body optional
    }

    const cityName = node.split(',')[0].trim() || 'Kochi';
    const verifiedGaps = getKeywordGaps();

    // Localize gaps according to verified regional focus
    const regionalTrends = verifiedGaps.map(gap => ({
      region: cityName,
      keyword: gap.query,
      momentum: gap.confidenceScore * 100, // Derived directly from empirical confidence score
      status: gap.priority === 'P1_CRITICAL' ? 'critical_gap' : 'opportunity',
      detected_at: new Date().toISOString(),
      recommendedAction: gap.recommendedAction,
      evidence: gap.evidence
    }));

    return NextResponse.json({ 
      success: true, 
      gaps_identified: regionalTrends.length,
      trends: regionalTrends,
      scan_depth: `Empirical Gap Sweep: ${node}`
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
