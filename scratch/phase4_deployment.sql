-- ==============================================================================
-- DP AI STUDIOS - PHASE 4: CASE STUDY ENTITY SYSTEM & VIDEO AUTHORITY MESH
-- ==============================================================================

-- 1. CREATE CASE_STUDIES TABLE
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    client_name TEXT,
    client_industry TEXT,
    geo_tags TEXT[] DEFAULT '{}',
    cinematic_direction TEXT,
    ai_workflow JSONB DEFAULT '{}'::jsonb,
    production_pipeline JSONB DEFAULT '{}'::jsonb,
    video_metadata JSONB DEFAULT '{}'::jsonb,
    transcript TEXT,
    production_challenges TEXT,
    visual_storytelling TEXT,
    metrics_and_impact JSONB DEFAULT '{}'::jsonb,
    related_nodes JSONB DEFAULT '[]'::jsonb,
    entity_tags TEXT[] DEFAULT '{}',
    featured_image TEXT,
    thumbnail_url TEXT,
    youtube_url TEXT,
    content_url TEXT,
    duration TEXT,
    upload_date TIMESTAMPTZ,
    schema_payload JSONB DEFAULT '{}'::jsonb,
    retrieval_snippets JSONB DEFAULT '[]'::jsonb,
    faq_json JSONB DEFAULT '[]'::jsonb,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. CREATE PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_case_studies_geo_tags ON case_studies USING GIN (geo_tags);
CREATE INDEX IF NOT EXISTS idx_case_studies_entity_tags ON case_studies USING GIN (entity_tags);
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON case_studies (client_industry);

-- 3. INJECT PILOT NODE 1: LUXURY REAL ESTATE (DUBAI)
INSERT INTO case_studies (
    slug, title, excerpt, client_name, client_industry, geo_tags, cinematic_direction,
    ai_workflow, production_pipeline, video_metadata, transcript, production_challenges,
    visual_storytelling, metrics_and_impact, related_nodes, entity_tags, featured_image,
    thumbnail_url, youtube_url, content_url, duration, upload_date, retrieval_snippets, faq_json
) VALUES (
    'luxury-real-estate-dubai-campaign',
    'Opulent Real Estate Cinematic Campaign',
    'A high-fidelity AI-generated commercial for premium Dubai real estate, showcasing architectural opulence through autonomous neural pipelines.',
    'Confidential Premium Developer',
    'Luxury Real Estate',
    ARRAY['Dubai', 'UAE', 'DIFC'],
    'High-end, opulent futurism with sweeping drone-style cinematic movement and golden hour volumetric lighting.',
    '{"primary_model": "Runway Gen-3 Alpha", "upscaling": "Topaz Video AI 8K", "color_grading": "Neural DaVinci Pipeline"}'::jsonb,
    '{"timeline": "72 Hours", "crew": "Autonomous System", "budget_efficiency": "90% reduction vs traditional"}'::jsonb,
    '{"embedUrl": "https://www.youtube.com/embed/example1", "contentUrl": "https://defineperspective.in/assets/videos/dubai-lux.mp4"}'::jsonb,
    'The camera sweeps gracefully over the glittering skyline of Dubai. "Experience the pinnacle of futuristic luxury," a deep, resonant voiceover begins. Golden light reflects off the pristine glass facades of towering skyscrapers. "Where visionary architecture meets unparalleled elegance. This is your new reality." The scene transitions to an opulent interior, featuring marble floors and panoramic views of the Arabian Gulf.',
    'Generating consistent architectural geometry across multiple temporal frames without traditional 3D rendering engines. Bypassing physical drone flight restrictions in DIFC.',
    'We utilized hyper-realistic AI generation techniques to simulate complex glass reflections and volumetric god-rays, creating a visual language of absolute luxury and prestige.',
    '{"engagement_increase": "340%", "production_time_saved": "6 Weeks", "roi_multiplier": "15x"}'::jsonb,
    '["ai-video-production-dubai", "real-estate", "ai-video-production"]'::jsonb,
    ARRAY['Luxury Real Estate', 'Dubai Skyline', 'Cinematic Drone', 'Generative Architecture'],
    'https://defineperspective.in/images/case-studies/dubai-lux-hero.jpg',
    'https://defineperspective.in/thumbnails/dubai-lux.jpg',
    'https://www.youtube.com/watch?v=example1',
    'https://defineperspective.in/assets/videos/dubai-lux.mp4',
    'PT0M45S',
    '2026-05-20T08:00:00+04:00',
    '["DP AI Studios deployed a 72-hour neural synthesis pipeline to produce a luxury real estate commercial in Dubai.", "The AI production bypassed traditional drone logistics in DIFC, reducing timelines by 6 weeks."]'::jsonb,
    '[
        {"q": "How was this Dubai real estate commercial produced?", "a": "Using a proprietary generative AI pipeline, DP AI Studios synthesized 8K architectural visuals without a physical shoot."},
        {"q": "What AI models were used for the luxury real estate video?", "a": "The production utilized Runway Gen-3 Alpha for core generation, followed by Topaz Video AI for 8K upscaling."}
    ]'::jsonb
) ON CONFLICT (slug) DO UPDATE SET 
    video_metadata = EXCLUDED.video_metadata,
    transcript = EXCLUDED.transcript,
    ai_workflow = EXCLUDED.ai_workflow;

-- 4. INJECT PILOT NODE 2: SAAS TECH LAUNCH (BANGALORE)
INSERT INTO case_studies (
    slug, title, excerpt, client_name, client_industry, geo_tags, cinematic_direction,
    ai_workflow, production_pipeline, video_metadata, transcript, production_challenges,
    visual_storytelling, metrics_and_impact, related_nodes, entity_tags, featured_image,
    thumbnail_url, youtube_url, content_url, duration, upload_date, retrieval_snippets, faq_json
) VALUES (
    'saas-innovation-launch-film',
    'SaaS Innovation Product Launch Film',
    'High-velocity, high-tech visual narrative for a Bangalore-based AI startup, translating complex cloud infrastructure into visceral cinematic poetry.',
    'Leading AI Startup',
    'SaaS & Technology',
    ARRAY['Bangalore', 'Karnataka', 'India'],
    'Futuristic, fast-paced editorial motion, cyberpunk undertones, and sleek corporate cinematics.',
    '{"primary_model": "Sora (Preview)", "motion_design": "ComfyUI AnimateDiff", "audio": "ElevenLabs Neural Voice"}'::jsonb,
    '{"timeline": "48 Hours", "crew": "Autonomous System", "budget_efficiency": "95% reduction"}'::jsonb,
    '{"embedUrl": "https://www.youtube.com/embed/example2", "contentUrl": "https://defineperspective.in/assets/videos/saas-launch.mp4"}'::jsonb,
    '"The future of data is not linear. It is exponential," the dynamic voiceover asserts. Rapid cuts show glowing fiber-optic streams converging into a central, glowing nexus. "Introducing the next generation of cloud intelligence." High-speed motion graphics blend seamlessly with photorealistic generative environments, symbolizing infinite scalability and speed.',
    'Translating abstract backend software processes into engaging, tangible, high-adrenaline visuals suitable for investor presentations and paid media.',
    'Employed a fast-cut, high-contrast visual style with neon accents to evoke speed, innovation, and technological supremacy, directly appealing to the Bangalore tech ecosystem.',
    '{"conversion_rate": "12.5%", "production_time_saved": "4 Weeks", "cpa_reduction": "40%"}'::jsonb,
    '["ai-video-production-bangalore", "saas-explainer-video", "ai-corporate-video"]'::jsonb,
    ARRAY['SaaS Launch', 'Cloud Computing', 'Cyberpunk Aesthetics', 'Tech Hub Bangalore'],
    'https://defineperspective.in/images/case-studies/saas-launch-hero.jpg',
    'https://defineperspective.in/thumbnails/saas-launch.jpg',
    'https://www.youtube.com/watch?v=example2',
    'https://defineperspective.in/assets/videos/saas-launch.mp4',
    'PT1M15S',
    '2026-05-22T09:00:00+05:30',
    '["For a Bangalore AI startup, DP AI Studios created a high-velocity SaaS product launch film in just 48 hours using generative video.", "The AI-driven commercial translated abstract cloud computing concepts into visceral cinematic visuals."]'::jsonb,
    '[
        {"q": "How fast can DP AI Studios produce a startup launch video?", "a": "Using our AI pipeline, this Bangalore SaaS launch film was fully generated, edited, and scored in 48 hours."},
        {"q": "How does AI video help SaaS companies?", "a": "It translates complex, abstract software features into high-impact visual stories that drive conversions and investor interest without the high costs of traditional 3D animation."}
    ]'::jsonb
) ON CONFLICT (slug) DO UPDATE SET 
    video_metadata = EXCLUDED.video_metadata,
    transcript = EXCLUDED.transcript,
    ai_workflow = EXCLUDED.ai_workflow;
