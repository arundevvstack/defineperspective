import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getBingPerformanceData } from '@/lib/intelligence/bing-connector';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const data = getBingPerformanceData();
  return NextResponse.json(data);
}

