import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getSearchPerformanceData } from '@/lib/intelligence/gsc-connector';
import { getPolicyRadarEvents } from '@/lib/intelligence/policy-radar';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const startTime = Date.now();

  // Task 1A: GSC Historical Evidence Archive Processing
  let gscArchiveStatus: 'COMPLETED' | 'FAILED' = 'COMPLETED';
  let gscArchiveRecords = 0;
  try {
    const searchData = getSearchPerformanceData(28);
    gscArchiveRecords = searchData.dailyTrend.length + searchData.topQueries.length;
  } catch {
    gscArchiveStatus = 'FAILED';
  }

  // Task 1B: GSC Live Cloud API Ingestion (Pending GCP OAuth credentials)
  const gscLiveApiStatus = 'NOT_CONNECTED';

  // Task 2: GA4 Web Analytics Sync (Pending GA4 API Connector)
  const ga4Status = 'NOT_CONNECTED';

  // Task 3: Policy Radar Sync (Static verified seeds active; live crawler pending Phase B3)
  let policyStatus: 'STATIC_SEED_ACTIVE' | 'FAILED' = 'STATIC_SEED_ACTIVE';
  let staticEventsCount = 0;
  try {
    const events = getPolicyRadarEvents();
    staticEventsCount = events.length;
  } catch {
    policyStatus = 'FAILED';
  }

  // Task 4: 30-Day Retention Cleanup (Option B Approved)
  let purgeStatus: 'COMPLETED' | 'DATABASE_NOT_MIGRATED' | 'FAILED' = 'DATABASE_NOT_MIGRATED';
  let deletedSecurity = 0;
  let deletedSyncs = 0;
  let deletedSearch = 0;
  let purgeMessage = 'Durable retention RPC prune_intelligence_retention_30d requires Supabase migration.';

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('offline-dev')) {
      const { data, error } = await supabaseAdmin.rpc('prune_intelligence_retention_30d');
      if (error) {
        purgeStatus = 'DATABASE_NOT_MIGRATED';
        purgeMessage = `Retention RPC unmigrated: ${error.message}`;
      } else if (data) {
        purgeStatus = 'COMPLETED';
        deletedSecurity = data.deleted_security_events || 0;
        deletedSyncs = data.deleted_sync_runs || 0;
        deletedSearch = data.deleted_search_snapshots || 0;
        purgeMessage = 'Successfully purged records older than 30 days.';
      }
    } else {
      purgeStatus = 'DATABASE_NOT_MIGRATED';
    }
  } catch (err: unknown) {
    purgeStatus = 'FAILED';
    purgeMessage = err instanceof Error ? err.message : 'Retention purge failed';
  }

  // Task 5: Metric Snapshots (Durable persistence pending database migration)
  const metricSnapshotStatus = 'NOT_CONNECTED';

  const durationMs = Date.now() - startTime;

  return NextResponse.json({
    executedAt: new Date().toISOString(),
    durationMs,
    tasks: {
      gscArchiveProcessing: {
        status: gscArchiveStatus,
        recordsProcessed: gscArchiveRecords,
        provenance: 'Historical CSV archive (data/gsc-api/normalized/)',
      },
      gscLiveApiSync: {
        status: gscLiveApiStatus,
        message: 'Live GSC API connector pending production GCP OAuth credentials.',
      },
      ga4Sync: {
        status: ga4Status,
        message: 'GA4 Data API connector pending GCP service account credentials.',
      },
      policyRadarSync: {
        status: policyStatus,
        staticEventsLoaded: staticEventsCount,
        message: 'Static verified policy seeds active. Live RSS crawler pending Phase B3.',
      },
      metricSnapshots: {
        status: metricSnapshotStatus,
        snapshotsCreated: 0,
        message: 'Durable metric snapshot persistence pending database migration.',
      },
      retentionPurge30d: {
        status: purgeStatus,
        deletedSecurityEvents: deletedSecurity,
        deletedSyncs: deletedSyncs,
        deletedSearchSnapshots: deletedSearch,
        message: purgeMessage,
      },
    },
  });
}
