import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getGa4PerformanceData } from '@/lib/intelligence/ga4-connector';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const data = getGa4PerformanceData();
  return NextResponse.json(data);
}

