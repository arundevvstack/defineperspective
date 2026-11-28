import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getSearchPerformanceData } from '@/lib/intelligence/gsc-connector';
import { getSecurityTelemetrySummary } from '@/lib/intelligence/security-telemetry';
import { getCompetitors } from '@/lib/intelligence/competitor-service';
import { getPolicyRadarEvents } from '@/lib/intelligence/policy-radar';
import { getRecommendations } from '@/lib/intelligence/recommendations-engine';
import { ExecutiveIntelligenceSummary } from '@/types/intelligence';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const searchData = getSearchPerformanceData(28);
  const securityData = getSecurityTelemetrySummary(24);
  const competitors = getCompetitors();
  const policyEvents = getPolicyRadarEvents();
  const recommendations = getRecommendations();

  const criticalAlerts = policyEvents.filter(
    (p) => p.severity === 'CRITICAL' || p.severity === 'HIGH'
  ).length;

  const totalEdgeBlocks =
    securityData.aggregations.total410Blocks + securityData.aggregations.total429Throttles;

  const response: ExecutiveIntelligenceSummary = {
    overview: {
      threatMitigationEfficacy: {
        value: null, // Strictly null: denominator methodology undefined
        unit: '%',
        meta: {
          sourceProvider: 'Edge Middleware & API Security Guard',
          evidenceClassification: 'UNAVAILABLE',
          lastRetrievedAt: securityData.provenance.lastRetrievedAt,
          status: 'NO_EVENTS_RECORDED',
          confidenceScore: 0,
          notes:
            'Threat mitigation efficacy is UNAVAILABLE (null). Calculating efficacy from block counts alone is mathematically invalid without a verifiable denominator of total inbound threat pressure.',
        },
      },
      edgeBlocks24h: {
        value: totalEdgeBlocks,
        unit: 'events',
        meta: {
          sourceProvider: 'Edge Spam Firewall & Rate Limiter',
          evidenceClassification: 'CALCULATED',
          lastRetrievedAt: securityData.provenance.lastRetrievedAt,
          status: totalEdgeBlocks > 0 ? 'OPERATIONAL' : 'NO_EVENTS_RECORDED',
          confidenceScore: 1.0,
          storageTier: 'BUFFERED_MEMORY',
          notes: 'Calculated from Next.js runtime edge buffer (BUFFERED_MEMORY). Not yet persisted in database.',
        },
      },
      searchClicks28d: searchData.summary.totalClicks,
      searchAvgPosition28d: searchData.summary.averagePosition,
      liveSerpRank: {
        value: null,
        unit: 'rank',
        meta: {
          sourceProvider: 'Third-Party SERP Tracking',
          evidenceClassification: 'UNAVAILABLE',
          lastRetrievedAt: null,
          status: 'DATA_NOT_CONNECTED',
          confidenceScore: 0,
          notes: 'Option A active: Third-party paid SERP tracking disabled at launch. Relying on GSC aggregate average position.',
        },
      },
      aiCitationShare: {
        value: null,
        unit: '%',
        meta: {
          sourceProvider: 'Synthetic AI Evaluation Matrix',
          evidenceClassification: 'CONFIGURED',
          lastRetrievedAt: null,
          status: 'DATA_NOT_CONNECTED',
          confidenceScore: 0,
          notes: 'Option A active: Paid AI search evaluations disabled at launch ($0.00/mo baseline).',
        },
      },
      criticalPolicyAlerts: {
        value: criticalAlerts,
        unit: 'alerts',
        meta: {
          sourceProvider: 'Official Search & LLM Policy Feeds',
          evidenceClassification: 'SOURCE-VERIFIED',
          lastRetrievedAt: new Date().toISOString(),
          status: 'OPERATIONAL',
          confidenceScore: 1.0,
        },
      },
      verifiedCompetitorsCount: {
        value: competitors.length,
        unit: 'entities',
        meta: {
          sourceProvider: 'Verified Competitor Registry',
          evidenceClassification: 'CONFIGURED',
          lastRetrievedAt: new Date().toISOString(),
          status: competitors.length > 0 ? 'OPERATIONAL' : 'NO_EVENTS_RECORDED',
          confidenceScore: 1.0,
          storageTier: 'BUFFERED_MEMORY',
          notes: 'Option B active: Competitor registry in memory (BUFFERED_MEMORY). Non-persistent until database migration.',
        },
      },
    },
    serviceHealth: [
      {
        serviceId: 'gsc-search-analytics',
        displayName: 'Google Search Console',
        status: searchData.provenance.status,
        lastSyncTimestamp: searchData.provenance.lastRetrievedAt,
        message: 'Historical evidence archive active; live Google API connector pending production OAuth environment variables.',
      },
      {
        serviceId: 'edge-security-telemetry',
        displayName: 'Edge Security Telemetry',
        status: securityData.provenance.status,
        lastSyncTimestamp: securityData.provenance.lastRetrievedAt,
        message: 'In-memory edge telemetry buffer active (BUFFERED_MEMORY). Durable storage requires future database migration.',
      },
      {
        serviceId: 'ga4-web-analytics',
        displayName: 'Google Analytics 4',
        status: 'DATA_NOT_CONNECTED',
        lastSyncTimestamp: null,
        message: 'GA4 measurement credentials pending operator provisioning.',
      },
      {
        serviceId: 'competitor-registry',
        displayName: 'Competitor Registry',
        status: competitors.length > 0 ? 'OPERATIONAL' : 'NO_EVENTS_RECORDED',
        lastSyncTimestamp: null,
        message: 'Empty launch registry in memory (BUFFERED_MEMORY). Non-persistent until database migration.',
      },
      {
        serviceId: 'policy-radar',
        displayName: 'Official Policy Radar',
        status: 'OPERATIONAL',
        lastSyncTimestamp: new Date().toISOString(),
        message: 'Verified static search algorithms and LLM crawler directives baseline active. Live RSS sync pending Phase B3.',
      },
      {
        serviceId: 'ai-search-evaluations',
        displayName: 'AI Search Evaluator',
        status: 'DATA_NOT_CONNECTED',
        lastSyncTimestamp: null,
        message: 'Option A: Paid evaluations disabled at launch.',
      },
    ],
    recentSecurityIncidents: securityData.recentEvents.slice(0, 10).map((e) => ({
      id: e.id,
      timestamp: e.eventTimestamp,
      eventType: e.eventType,
      path: e.requestPath,
      clientCategory: e.userAgentCategory, // Privacy: Category only. Never expose IP as visitor identity.
      actionTaken: e.actionTaken,
      storageTier: e.storageTier,
    })),
    pendingRecommendations: recommendations.filter(
      (r) => r.lifecycleStatus === 'PROPOSED' || r.lifecycleStatus === 'HUMAN_REVIEW'
    ),
    retrievedAt: new Date().toISOString(),
  };

  return NextResponse.json(response);
}
