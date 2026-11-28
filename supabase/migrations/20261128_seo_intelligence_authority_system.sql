-- ==============================================================================
-- DEFINE PERSPECTIVE | DP AI STUDIO
-- ENTERPRISE SEO, AEO & GEO INTELLIGENCE AND AUTHORITY GOVERNANCE SCHEMA
-- Migration: 20261128_seo_intelligence_authority_system.sql
-- Status: STAGING CANDIDATE (Zero mutation to production database bdvhkvftsaxgrxiemdsg)
-- Security: Strict service_role isolation via Row Level Security (RLS)
-- ==============================================================================

-- 1. Protected Asset Registry
CREATE TABLE IF NOT EXISTS public.seo_protected_assets (
    id TEXT PRIMARY KEY,
    url TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    h1 TEXT NOT NULL,
    canonical_url TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    protection_tier TEXT NOT NULL DEFAULT 'PRIMARY_SERVICE',
    is_locked BOOLEAN NOT NULL DEFAULT true,
    baseline_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ranking_keywords_count INT NOT NULL DEFAULT 0,
    historical_clicks INT NOT NULL DEFAULT 0,
    historical_impressions INT NOT NULL DEFAULT 0,
    prohibited_actions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_protected_assets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_protected_assets" ON public.seo_protected_assets;
CREATE POLICY "service_role_seo_protected_assets" ON public.seo_protected_assets
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 2. Keyword Intelligence
CREATE TABLE IF NOT EXISTS public.seo_keyword_intelligence (
    id TEXT PRIMARY KEY,
    keyword TEXT NOT NULL UNIQUE,
    search_intent TEXT NOT NULL,
    search_volume INT,
    search_volume_source TEXT NOT NULL,
    search_volume_period TEXT,
    search_volume_confidence NUMERIC(3,2) NOT NULL DEFAULT 0.0,
    keyword_difficulty INT,
    cpc NUMERIC(10,2),
    current_rank_position NUMERIC(5,2),
    ranking_url TEXT,
    impressions INT NOT NULL DEFAULT 0,
    clicks INT NOT NULL DEFAULT 0,
    ctr NUMERIC(5,2) NOT NULL DEFAULT 0.0,
    cluster TEXT NOT NULL,
    commercial_tier TEXT NOT NULL,
    target_url TEXT NOT NULL,
    is_protected BOOLEAN NOT NULL DEFAULT false,
    opportunity_score INT NOT NULL DEFAULT 0,
    provenance JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_keyword_intelligence ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_keyword_intelligence" ON public.seo_keyword_intelligence;
CREATE POLICY "service_role_seo_keyword_intelligence" ON public.seo_keyword_intelligence
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 3. Verified Competitor Entities & Monitoring
CREATE TABLE IF NOT EXISTS public.seo_competitor_entities (
    id TEXT PRIMARY KEY,
    domain TEXT NOT NULL UNIQUE,
    company_name TEXT NOT NULL,
    business_category TEXT NOT NULL,
    geography TEXT NOT NULL,
    competitive_classification TEXT NOT NULL,
    discovery_source TEXT NOT NULL,
    evidence TEXT NOT NULL,
    relevant_services JSONB NOT NULL DEFAULT '[]'::jsonb,
    positioning TEXT NOT NULL,
    landing_pages JSONB NOT NULL DEFAULT '[]'::jsonb,
    observed_ranking_keywords JSONB NOT NULL DEFAULT '[]'::jsonb,
    threat_level TEXT NOT NULL DEFAULT 'MEDIUM',
    last_verified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_competitor_entities ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_competitor_entities" ON public.seo_competitor_entities;
CREATE POLICY "service_role_seo_competitor_entities" ON public.seo_competitor_entities
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 4. Keyword Gap Analysis Records
CREATE TABLE IF NOT EXISTS public.seo_keyword_gaps (
    id TEXT PRIMARY KEY,
    gap_type TEXT NOT NULL,
    query TEXT NOT NULL UNIQUE,
    intent TEXT NOT NULL,
    search_demand TEXT NOT NULL,
    source TEXT NOT NULL,
    competitors_observed JSONB NOT NULL DEFAULT '[]'::jsonb,
    competitor_urls JSONB NOT NULL DEFAULT '[]'::jsonb,
    dp_current_status TEXT NOT NULL,
    dp_relevant_url TEXT,
    commercial_relevance TEXT NOT NULL,
    competition_level TEXT NOT NULL,
    recommended_action TEXT NOT NULL,
    risk_level TEXT NOT NULL,
    confidence_score NUMERIC(3,2) NOT NULL DEFAULT 0.0,
    evidence TEXT NOT NULL,
    priority TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_keyword_gaps ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_keyword_gaps" ON public.seo_keyword_gaps;
CREATE POLICY "service_role_seo_keyword_gaps" ON public.seo_keyword_gaps
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 5. Ranking Defence Alerts
CREATE TABLE IF NOT EXISTS public.seo_ranking_defence_alerts (
    id TEXT PRIMARY KEY,
    keyword TEXT NOT NULL,
    affected_url TEXT NOT NULL,
    severity TEXT NOT NULL,
    alert_type TEXT NOT NULL,
    baseline_position NUMERIC(5,2) NOT NULL,
    current_position NUMERIC(5,2) NOT NULL,
    impression_delta_pct NUMERIC(5,2) NOT NULL,
    ctr_delta_pct NUMERIC(5,2) NOT NULL,
    observed_period TEXT NOT NULL,
    likely_cause TEXT NOT NULL,
    confidence NUMERIC(3,2) NOT NULL,
    recommended_investigation TEXT NOT NULL,
    proposed_recovery_action TEXT NOT NULL,
    requires_human_approval BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

ALTER TABLE public.seo_ranking_defence_alerts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_ranking_defence_alerts" ON public.seo_ranking_defence_alerts;
CREATE POLICY "service_role_seo_ranking_defence_alerts" ON public.seo_ranking_defence_alerts
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 6. AEO & GEO Observations
CREATE TABLE IF NOT EXISTS public.seo_aeo_geo_observations (
    id TEXT PRIMARY KEY,
    query TEXT NOT NULL,
    platform TEXT NOT NULL,
    observation_date DATE NOT NULL,
    dp_mentioned BOOLEAN NOT NULL DEFAULT false,
    dp_position INT,
    dp_recommended BOOLEAN NOT NULL DEFAULT false,
    dp_cited BOOLEAN NOT NULL DEFAULT false,
    cited_url TEXT,
    competitors_mentioned JSONB NOT NULL DEFAULT '[]'::jsonb,
    competitor_citations JSONB NOT NULL DEFAULT '[]'::jsonb,
    answer_snippet TEXT NOT NULL,
    methodology TEXT NOT NULL,
    confidence_score NUMERIC(3,2) NOT NULL,
    geographic_scope TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_aeo_geo_observations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_aeo_geo_observations" ON public.seo_aeo_geo_observations;
CREATE POLICY "service_role_seo_aeo_geo_observations" ON public.seo_aeo_geo_observations
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 7. Content Opportunity & Planner
CREATE TABLE IF NOT EXISTS public.seo_content_planner (
    id TEXT PRIMARY KEY,
    topic TEXT NOT NULL,
    primary_keyword TEXT NOT NULL,
    supporting_keywords JSONB NOT NULL DEFAULT '[]'::jsonb,
    search_intent TEXT NOT NULL,
    page_type TEXT NOT NULL,
    existing_url_match TEXT,
    cannibalization_risk TEXT NOT NULL DEFAULT 'NONE',
    proposed_url TEXT NOT NULL,
    content_brief TEXT NOT NULL,
    aeo_question_blocks JSONB NOT NULL DEFAULT '[]'::jsonb,
    geo_strategy TEXT NOT NULL,
    required_proof_assets JSONB NOT NULL DEFAULT '[]'::jsonb,
    opportunity_scores JSONB NOT NULL,
    review_status TEXT NOT NULL DEFAULT 'DRAFT_PROPOSAL',
    draft_content TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.seo_content_planner ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_content_planner" ON public.seo_content_planner;
CREATE POLICY "service_role_seo_content_planner" ON public.seo_content_planner
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 8. Change Governance, Baselines & Rollback Audit
CREATE TABLE IF NOT EXISTS public.seo_change_governance (
    action_id TEXT PRIMARY KEY,
    target_asset TEXT NOT NULL,
    action_type TEXT NOT NULL,
    original_state TEXT NOT NULL,
    proposed_state TEXT NOT NULL,
    evidence TEXT NOT NULL,
    reason TEXT NOT NULL,
    expected_outcome TEXT NOT NULL,
    risk_classification TEXT NOT NULL,
    seo_impact_assessment TEXT NOT NULL,
    aeo_geo_impact_assessment TEXT NOT NULL,
    requires_human_approval BOOLEAN NOT NULL DEFAULT true,
    approval_status TEXT NOT NULL DEFAULT 'PENDING_REVIEW',
    approved_by TEXT,
    execution_status TEXT NOT NULL DEFAULT 'NOT_STARTED',
    rollback_plan TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    executed_at TIMESTAMPTZ
);

ALTER TABLE public.seo_change_governance ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_seo_change_governance" ON public.seo_change_governance;
CREATE POLICY "service_role_seo_change_governance" ON public.seo_change_governance
    FOR ALL TO service_role USING (true) WITH CHECK (true);

