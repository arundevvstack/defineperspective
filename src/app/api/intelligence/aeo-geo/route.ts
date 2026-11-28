import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getAeoGeoObservations, addAeoGeoObservation } from '@/lib/intelligence/aeo-geo-intelligence-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const observations = getAeoGeoObservations();
  const mentionedCount = observations.filter(o => o.dpMentioned).length;
  const citedCount = observations.filter(o => o.dpCited).length;

  return NextResponse.json({
    summary: {
      totalObservations: observations.length,
      brandMentionRatePct: observations.length > 0 ? Number(((mentionedCount / observations.length) * 100).toFixed(1)) : 0,
      citationRatePct: observations.length > 0 ? Number(((citedCount / observations.length) * 100).toFixed(1)) : 0,
      platformsMonitored: ['Google AI Overviews', 'Perplexity', 'Gemini', 'ChatGPT Search']
    },
    observations
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const body = await req.json();
    const created = addAeoGeoObservation(body);
    return NextResponse.json({ success: true, observation: created }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to record AEO/GEO observation' }, { status: 500 });
  }
}

