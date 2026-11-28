import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getDataSourcesStatus } from '@/lib/intelligence/data-sources-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const sources = getDataSourcesStatus();
  return NextResponse.json({
    totalCount: sources.length,
    operationalCount: sources.filter(s => s.status === 'OPERATIONAL').length,
    notConnectedCount: sources.filter(s => s.status === 'DATA_NOT_CONNECTED' || s.status === 'CONNECTION_REQUIRED').length,
    sources
  });
}

