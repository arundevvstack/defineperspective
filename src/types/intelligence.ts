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

// ==============================================================================
// EXPANDED SEO, AEO & GEO INTELLIGENCE AND AUTHORITY GOVERNANCE SPECIFICATIONS
// ==============================================================================

export type AssetProtectionTier = 'FLAGSHIP_CORE' | 'PRIMARY_SERVICE' | 'REGIONAL_HUB' | 'EDITORIAL' | 'PORTFOLIO_CASE_STUDY';
export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface ProtectedAsset {
  id: string;
  url: string;
  slug: string;
  title: string;
  h1: string;
  canonicalUrl: string;
  metaDescription: string;
  protectionTier: AssetProtectionTier;
  isLocked: boolean;
  baselineTimestamp: string;
  rankingKeywordsCount: number;
  historicalClicks: number;
  historicalImpressions: number;
  prohibitedAutonomousActions: string[];
}

export interface KeywordIntelligenceItem {
  id: string;
  keyword: string;
  searchIntent: 'COMMERCIAL' | 'TRANSACTIONAL' | 'INFORMATIONAL' | 'NAVIGATIONAL';
  searchVolume: number | null;
  searchVolumeSource: string;
  searchVolumePeriod: string | null;
  searchVolumeConfidence: number; // 0.0 - 1.0
  keywordDifficulty: number | null;
  cpc: number | null;
  currentRankPosition: number | null; // GSC aggregate position
  rankingUrl: string | null;
  impressions: number;
  clicks: number;
  ctr: number;
  cluster: string;
  commercialTier: 'HIGH_TICKET' | 'MID_TIER' | 'VOLUME_DRIVER' | 'REGIONAL_AUTHORITY';
  targetUrl: string;
  isProtected: boolean;
  opportunityScore: number;
  provenance: DataProvenance;
}

export type KeywordGapType = 
  | 'GAP_A_COMPETITOR_RANKS_DP_DOES_NOT'
  | 'GAP_B_DP_UNIQUE_AUTHORITY'
  | 'GAP_C_BOTH_RANK_COMPETITOR_OUTPERFORMS'
  | 'GAP_D_EMERGING_DEMAND'
  | 'GAP_E_COMMERCIAL_HIGH_INTENT'
  | 'GAP_F_AI_SEARCH_GAP';

export interface KeywordGapItem {
  id: string;
  gapType: KeywordGapType;
  query: string;
  intent: 'COMMERCIAL' | 'TRANSACTIONAL' | 'INFORMATIONAL';
  searchDemand: string;
  source: string;
  competitorsObserved: string[];
  competitorUrls: string[];
  dpCurrentStatus: string;
  dpRelevantUrl: string | null;
  commercialRelevance: 'VERY_HIGH' | 'HIGH' | 'MEDIUM';
  competitionLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  recommendedAction: string;
  riskLevel: RiskLevel;
  confidenceScore: number;
  evidence: string;
  priority: 'P1_CRITICAL' | 'P2_HIGH' | 'P3_MEDIUM';
}

export interface RankingDefenceAlert {
  id: string;
  keyword: string;
  affectedUrl: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  alertType: 'POSITION_DROP' | 'IMPRESSIONS_DECLINE' | 'CTR_DECAY' | 'COMPETITOR_INCURSION' | 'CANONICAL_THREAT';
  baselinePosition: number;
  currentPosition: number;
  impressionDeltaPct: number;
  ctrDeltaPct: number;
  observedPeriod: string;
  likelyCause: string;
  confidence: number;
  recommendedInvestigation: string;
  proposedRecoveryAction: string;
  requiresHumanApproval: boolean;
  status: 'ACTIVE' | 'INVESTIGATING' | 'ACTION_PROPOSED' | 'RESOLVED' | 'DISMISSED';
  createdAt: string;
}

export interface AEOGEOObservation {
  id: string;
  query: string;
  platform: 'Google AI Overviews' | 'Perplexity' | 'Gemini' | 'ChatGPT Search' | 'Claude';
  observationDate: string;
  dpMentioned: boolean;
  dpPosition: number | null;
  dpRecommended: boolean;
  dpCited: boolean;
  citedUrl: string | null;
  competitorsMentioned: string[];
  competitorCitations: Array<{ competitor: string; url: string }>;
  answerSnippet: string;
  methodology: 'OBSERVED_SEARCH' | 'USER_QUERY_EVIDENCE' | 'MANUAL_AUDIT';
  confidenceScore: number;
  geographicScope: 'India National' | 'Kerala' | 'Trivandrum' | 'Kochi' | 'International';
}

export interface ContentOpportunityItem {
  id: string;
  topic: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  searchIntent: string;
  pageType: 'SERVICE_LANDING' | 'CASE_STUDY' | 'INDUSTRY_PILLAR' | 'GEO_HUB' | 'METHODOLOGY_GUIDE' | 'COMMERCIAL_PRICING';
  existingUrlMatch: string | null;
  cannibalizationRisk: 'NONE' | 'LOW' | 'HIGH_OVERLAP';
  proposedUrl: string;
  contentBrief: string;
  aeoQuestionBlocks: string[];
  geoStrategy: string;
  requiredProofAssets: string[];
  opportunityScore: {
    searchScore: number;
    commercialScore: number;
    competitiveScore: number;
    aeoGeoScore: number;
    strategicRelevance: number;
    implementationRisk: RiskLevel;
    confidence: number;
    compositeScore: number;
  };
  reviewStatus: 'DRAFT_PROPOSAL' | 'NEEDS_REVISION' | 'PENDING_HUMAN_APPROVAL' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface TechnicalSeoAudit {
  timestamp: string;
  totalIndexedUrls: number;
  crawlableUrls: number;
  brokenLinksCount: number;
  canonicalMismatches: number;
  missingH1Count: number;
  missingMetaCount: number;
  sitemapStatus: 'VALID' | 'WARNING' | 'ERROR';
  robotsTxtStatus: 'VALID' | 'RESTRICTIVE' | 'PERMISSIVE';
  structuredDataStatus: 'ALL_PASS' | 'WARNINGS_DETECTED' | 'ERRORS_DETECTED';
  coreWebVitalsStatus: 'REAL_USER_DATA_UNAVAILABLE' | 'PASSING' | 'NEEDS_IMPROVEMENT';
  notes: string;
  provenance: DataProvenance;
}

export interface ChangeGovernanceProposal {
  actionId: string;
  targetAsset: string;
  actionType: 'CONTENT_CREATION' | 'METADATA_OPTIMIZATION' | 'INTERNAL_LINKING' | 'SCHEMA_ENRICHMENT' | 'DEFENCE_ACTION';
  originalState: string;
  proposedState: string;
  evidence: string;
  reason: string;
  expectedOutcome: string;
  riskClassification: RiskLevel;
  seoImpactAssessment: string;
  aeoGeoImpactAssessment: string;
  requiresHumanApproval: boolean;
  approvalStatus: 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED' | 'EXECUTED';
  approvedBy: string | null;
  timestamp: string;
  executionStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'ROLLED_BACK';
  rollbackPlan: string;
}

export interface DataSourceStatus {
  sourceId: string;
  displayName: string;
  sourceType: 'FIRST_PARTY' | 'THIRD_PARTY_API' | 'OBSERVED_RESEARCH' | 'AI_ANALYSIS' | 'INTERNAL_ENGINE';
  status: 'OPERATIONAL' | 'DATA_NOT_CONNECTED' | 'DATA_UNAVAILABLE' | 'NO_DATA_YET' | 'CONNECTION_REQUIRED';
  lastSyncTimestamp: string | null;
  credentialsConfigured: boolean;
  requiredCredentials: string[];
  costModel: 'FREE_INCLUDED' | 'PAID_SUBSCRIPTION' | 'CREDENTIAL_REQUIRED';
  notes: string;
}
