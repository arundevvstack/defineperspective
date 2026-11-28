import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getPolicyRadarEvents } from '@/lib/intelligence/policy-radar';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const events = getPolicyRadarEvents();
  return NextResponse.json({
    events,
    status: 'STATIC_SEED_ACTIVE',
    provenance: {
      sourceProvider: 'Official Search & LLM Policy Baselines',
      evidenceClassification: 'STATIC',
      status: 'OPERATIONAL',
      confidenceScore: 1.0,
      notes:
        'Policy radar displays verified static baseline directives from official search and AI documentation. Automated RSS crawler is scheduled for Phase B3.',
    },
  });
}

