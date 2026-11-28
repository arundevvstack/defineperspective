import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getSearchPerformanceData, fetchLiveGscPerformance, isGscLiveConfigured } from '@/lib/intelligence/gsc-connector';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const { searchParams } = new URL(req.url);
  const period = searchParams.get('period') || '28d';
  const forceArchive = searchParams.get('source') === 'archive';
  const days = period === '7d' ? 7 : period === '30d' ? 30 : 28;

  // If live credentials are configured and client didn't explicitly request historical archive
  if (!forceArchive && isGscLiveConfigured()) {
    try {
      const liveResult = await fetchLiveGscPerformance(undefined, days);
      if (liveResult.success && liveResult.data) {
        return NextResponse.json(liveResult.data);
      }
      // If live API failed, fallback to historical archive with explicit error provenance notes
      const archiveData = getSearchPerformanceData(days);
      if (archiveData.provenance) {
        archiveData.provenance.notes = `Live API sync failed (${liveResult.error || 'Unknown error'}). Fallback to historical evidence archive.`;
      }
      return NextResponse.json(archiveData);
    } catch (err: unknown) {
      console.warn('[SEARCH PERFORMANCE API] Error during live fetch, falling back to archive:', err);
    }
  }

  const data = getSearchPerformanceData(days);
  return NextResponse.json(data);
}

