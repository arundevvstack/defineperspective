import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getSearchPerformanceData } from '@/lib/intelligence/gsc-connector';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const { searchParams } = new URL(req.url);
  const period = searchParams.get('period') || '28d';
  const days = period === '7d' ? 7 : period === '30d' ? 30 : 28;

  const data = getSearchPerformanceData(days);
  return NextResponse.json(data);
}

