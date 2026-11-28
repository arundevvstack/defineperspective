import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getSecurityTelemetrySummary } from '@/lib/intelligence/security-telemetry';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const { searchParams } = new URL(req.url);
  const timeframe = searchParams.get('timeframe') || '24h';
  const hours = timeframe === '1h' ? 1 : timeframe === '7d' ? 168 : timeframe === '30d' ? 720 : 24;

  const data = getSecurityTelemetrySummary(hours);
  return NextResponse.json(data);
}

