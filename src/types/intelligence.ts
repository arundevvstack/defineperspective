/**
 * DP INTELLIGENCE CENTRE — CANONICAL TYPE DEFINITIONS
 * Authoritative Type Specifications for Phase B1.2 / Phase B2
 */

export type SystemOperationalStatus =
  | 'OPERATIONAL'
  | 'NO_EVENTS_RECORDED'
  | 'DATA_NOT_CONNECTED'
  | 'LAST_SYNC_FAILED'
  | 'DATA_STALE';

export type EvidenceClassification =
  | 'LIVE-VERIFIED'
  | 'SOURCE-VERIFIED'
  | 'DATABASE-VERIFIED'
  | 'CONFIGURED'
  | 'CALCULATED'
  | 'STATIC'
  | 'SIMULATED'
  | 'UNAVAILABLE'
  | 'NOT VERIFIED';

export type TelemetryStorageTier =
  | 'BUFFERED_MEMORY'
  | 'PERSISTED_DATABASE'
  | 'UNAVAILABLE';

export interface DataProvenance {
  sourceProvider: string;
  evidenceClassification: EvidenceClassification;
  lastRetrievedAt: string | null; // ISO 8601
  status: SystemOperationalStatus;
  confidenceScore: number; // 0.0 - 1.0
  notes?: string;
  storageTier?: TelemetryStorageTier;
}

export interface MetricEnvelope<T> {
  value: T | null;
  unit: string;
  meta: DataProvenance;
}

// Security Operations
export type SecurityEventType =
  | 'SPAM_URL_BLOCK_410'
  | 'RATE_LIMIT_429'
  | 'AUTH_FAIL_401'
  | 'QUERY_PARAM_STRIP_301'
  | 'APPLICATION_ERROR_500';

export interface SecurityTelemetryEvent {
  id: string;
  eventTimestamp: string;
  eventType: SecurityEventType;
  requestPath: string;
  httpMethod: string;
  httpStatusCode: number;
  ipHash?: string; // Optional internal HMAC correlation token. Never exposed as visitor identity.
  userAgentCategory: 'BOT_VERIFIED' | 'BOT_SUSPICIOUS' | 'BROWSER' | 'API_CLIENT' | 'UNKNOWN';
  actionTaken: 'BLOCKED_410' | 'THROTTLED_429' | 'REJECTED_401' | 'STRIPPED_301' | 'LOGGED_500';
  storageTier: TelemetryStorageTier;
  ruleId?: string;
  metadata?: Record<string, unknown>;
}

export interface SecurityTelemetrySummary {
  aggregations: {
    total410Blocks: number;
    total429Throttles: number;
    total401Rejections: number;
    total500Errors: number;
    totalParamStrips: number;
    threatMitigationEfficacyPct: number | null; // Strictly null: denominator methodology undefined
    threatMitigationExplanation: string;
  };
  recentEvents: Omit<SecurityTelemetryEvent, 'ipHash'>[]; // Privacy: ipHash stripped from all API outputs
  provenance: DataProvenance;
}

// Search Performance (Google Search Console)
export interface SearchQueryItem {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number; // Retrospective aggregate mean
}

export interface SearchPageItem {
  pageUrl: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

export interface SearchPerformanceDailyItem {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

export interface SearchPerformanceData {
  summary: {
    totalClicks: MetricEnvelope<number>;
    totalImpressions: MetricEnvelope<number>;
    averageCtr: MetricEnvelope<number>;
    averagePosition: MetricEnvelope<number>; // Retrospective mean
  };
  dailyTrend: SearchPerformanceDailyItem[];
  topQueries: SearchQueryItem[];
  topPages: SearchPageItem[];
  dataLagNotice: string;
  provenance: DataProvenance;
}

// Competitor Intelligence
export interface CompetitorEntity {
  id: string;
  domain: string;
  companyName: string;
  verificationStatus: 'VERIFIED' | 'QUARANTINED' | 'ARCHIVED';
  monitoringTier: 'PRIMARY' | 'STANDARD' | 'OPPORTUNISTIC';
  sitemapUrl: string | null;
  lastObservedAt: string | null;
  createdAt: string;
}

export interface CompetitorObservation {
  id: string;
  competitorId: string;
  observationDate: string;
  observationType: 'NEW_PAGE' | 'REMOVED_PAGE' | 'METADATA_DIFF' | 'ROBOTS_TXT_CHANGE';
  observedUrl: string;
  details?: Record<string, unknown>;
}

// AI Search Intelligence (AEO / GEO)
export interface AISearchStatus {
  evaluationStatus: 'DATA_NOT_CONNECTED' | 'OPERATIONAL';
  paidEvaluations: 'DISABLED' | 'ENABLED';
  lastEvaluationTimestamp: string | null;
  mentionRatePct: MetricEnvelope<number>;
  citationSharePct: MetricEnvelope<number>;
  testedPromptsCount: MetricEnvelope<number>;
  provenance: DataProvenance;
}

// Global Policy & Algorithm Radar
export interface PolicyRadarEvent {
  id: string;
  sourceFeed: string;
  canonicalUrl: string;
  title: string;
  summary: string | null;
  publishedAt: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO';
  impactDomain: 'SEARCH_ALGORITHM' | 'AI_CRAWLER_DIRECTIVE' | 'PRIVACY_COMPLIANCE' | 'SYSTEM_UPDATE';
  dpRelevanceAssessment: string | null;
}

// Evidence-Based Recommendations Engine
export type RecommendationLifecycleStatus =
  | 'DETECTED'
  | 'ANALYSED'
  | 'PROPOSED'
  | 'HUMAN_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'EXECUTED';

export interface IntelligenceRecommendation {
  id: string;
  title: string;
  issueDescription: string;
  supportingEvidence: Record<string, unknown>;
  dataSource: string;
  observationTimestamp: string;
  confidenceLevel: number; // 0.0 - 1.0
  expectedImpact: 'HIGH' | 'MEDIUM' | 'LOW';
  proposedAction: string;
  lifecycleStatus: RecommendationLifecycleStatus;
  operatorNotes?: string;
  reviewedAt?: string;
  createdAt: string;
}

// Executive Command Cockpit Aggregation
export interface ExecutiveIntelligenceSummary {
  overview: {
    threatMitigationEfficacy: MetricEnvelope<number>; // null until formal methodology approved
    edgeBlocks24h: MetricEnvelope<number>;
    searchClicks28d: MetricEnvelope<number>;
    searchAvgPosition28d: MetricEnvelope<number>; // GSC retrospective mean
    liveSerpRank: MetricEnvelope<number>; // null (Option A)
    aiCitationShare: MetricEnvelope<number>; // null (Option A)
    criticalPolicyAlerts: MetricEnvelope<number>;
    verifiedCompetitorsCount: MetricEnvelope<number>;
  };
  serviceHealth: Array<{
    serviceId: string;
    displayName: string;
    status: SystemOperationalStatus;
    lastSyncTimestamp: string | null;
    message: string;
  }>;
  recentSecurityIncidents: Array<{
    id: string;
    timestamp: string;
    eventType: SecurityEventType;
    path: string;
    clientCategory: string; // Bot / Browser / Client. Never exposed as visitor identity.
    actionTaken: string;
    storageTier: TelemetryStorageTier;
  }>;
  pendingRecommendations: IntelligenceRecommendation[];
  retrievedAt: string;
}
