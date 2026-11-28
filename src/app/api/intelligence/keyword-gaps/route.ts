import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getKeywordGaps } from '@/lib/intelligence/keyword-gap-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const gaps = getKeywordGaps();
  return NextResponse.json({
    totalGaps: gaps.length,
    criticalPriorityCount: gaps.filter(g => g.priority === 'P1_CRITICAL').length,
    gaps
  });
}

