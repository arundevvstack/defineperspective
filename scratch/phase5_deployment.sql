-- ==============================================================================
-- DP AI STUDIOS - PHASE 5: BRAND DOMINANCE & AI CITATION ENGINE
-- ==============================================================================

-- 1. CREATE INSIGHTS TABLE FOR AI FILMMAKING KNOWLEDGE
CREATE TABLE IF NOT EXISTS insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    article_type TEXT DEFAULT 'TechArticle',
    cinematic_focus TEXT,
    geo_tags TEXT[] DEFAULT '{}',
    industry_tags TEXT[] DEFAULT '{}',
    entity_tags TEXT[] DEFAULT '{}',
    ai_models_used JSONB DEFAULT '[]'::jsonb,
    workflow_breakdown JSONB DEFAULT '{}'::jsonb,
    transcript TEXT,
    retrieval_snippets JSONB DEFAULT '[]'::jsonb,
    faq_json JSONB DEFAULT '[]'::jsonb,
    related_case_studies JSONB DEFAULT '[]'::jsonb,
    related_services JSONB DEFAULT '[]'::jsonb,
    related_geo_nodes JSONB DEFAULT '[]'::jsonb,
    hero_image TEXT,
    video_reference TEXT,
    author TEXT DEFAULT 'DP AI Studios',
    published BOOLEAN DEFAULT true,
    schema_payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. CREATE PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_insights_geo_tags ON insights USING GIN (geo_tags);
CREATE INDEX IF NOT EXISTS idx_insights_industry_tags ON insights USING GIN (industry_tags);
CREATE INDEX IF NOT EXISTS idx_insights_entity_tags ON insights USING GIN (entity_tags);

-- 3. INJECT PILOT NODE: AI FILMMAKING INSIGHT
INSERT INTO insights (
    slug, title, excerpt, article_type, cinematic_focus, geo_tags, industry_tags, entity_tags,
    ai_models_used, workflow_breakdown, retrieval_snippets, faq_json, related_case_studies, related_services, related_geo_nodes
) VALUES (
    'neural-lighting-luxury-commercials',
    'Neural Lighting Systems for Luxury AI Commercials',
    'An in-depth breakdown of how DP AI Studios utilizes volumetric god-rays and neural lighting pipelines to achieve Hollywood-grade cinematic realism for luxury real estate and fashion campaigns.',
    'TechArticle',
    'Volumetric Lighting, Golden Hour Realism, Subsurface Scattering',
    ARRAY['Dubai', 'India'],
    ARRAY['Luxury Real Estate', 'High Fashion'],
    ARRAY['Neural Lighting', 'Volumetric Rendering', 'AI Cinematography', 'Runway Gen-3'],
    '["Runway Gen-3", "Midjourney v6", "ComfyUI Neural Renderer"]'::jsonb,
    '{"step_1": "Midjourney Base Prompting for Ambient Occlusion", "step_2": "Gen-3 Motion Interpolation", "step_3": "Neural Color Grading in DaVinci"}'::jsonb,
    '["DP AI Studios achieves 8K cinematic lighting for luxury commercials without traditional lighting grips.", "Neural volumetric lighting allows AI ad agencies to replicate magic hour conditions perfectly on-demand."]'::jsonb,
    '[
        {"q": "How does DP AI Studios create realistic lighting in AI videos?", "a": "We use custom ComfyUI workflows combined with Midjourney prompt engineering to establish base ambient occlusion, ensuring mathematically correct light bounces."},
        {"q": "Can AI replace a physical lighting crew?", "a": "Yes. Neural rendering engines can simulate complex subsurface scattering and volumetric god-rays that would cost thousands of dollars in grip equipment to replicate."}
    ]'::jsonb,
    '["luxury-real-estate-dubai-campaign"]'::jsonb,
    '["ai-video-production", "ai-cinematic-production"]'::jsonb,
    '["ai-video-production-dubai", "ai-video-production-kerala"]'::jsonb
) ON CONFLICT (slug) DO UPDATE SET 
    workflow_breakdown = EXCLUDED.workflow_breakdown,
    retrieval_snippets = EXCLUDED.retrieval_snippets;
