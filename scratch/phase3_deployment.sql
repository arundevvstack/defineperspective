-- ==============================================================================
-- DP AI STUDIOS - PHASE 3: GEO AUTHORITY LIVE DEPLOYMENT SCRIPT
-- ==============================================================================

-- 1. ADD NEW GEO CONTEXT COLUMNS SAFELY
ALTER TABLE content_pages 
  ADD COLUMN IF NOT EXISTS geo_market_intelligence JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS geo_cinematic_direction TEXT,
  ADD COLUMN IF NOT EXISTS geo_industry_focus TEXT[],
  ADD COLUMN IF NOT EXISTS localized_faqs JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS local_case_studies JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS uniqueness_score NUMERIC(5,2) DEFAULT 100.00,
  ADD COLUMN IF NOT EXISTS regional_cta_logic TEXT,
  ADD COLUMN IF NOT EXISTS geo_entity_tags TEXT[];

-- 2. CREATE PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_content_pages_geo_tags ON content_pages USING GIN (geo_entity_tags);
CREATE INDEX IF NOT EXISTS idx_content_pages_uniqueness ON content_pages (uniqueness_score);

-- 3. INJECT PILOT NODE: KERALA
INSERT INTO content_pages (
    slug, 
    title, 
    meta_title, 
    meta_description, 
    keywords, 
    content, 
    geo_market_intelligence, 
    geo_cinematic_direction, 
    geo_industry_focus, 
    localized_faqs, 
    uniqueness_score, 
    geo_entity_tags
) VALUES (
    'ai-video-production-kerala',
    'AI Video Production Kerala | Premium Cinematic Commercials',
    'AI Video Production Company in Kerala | DP AI Studios',
    'Kerala’s premium AI commercial production authority. Specializing in cinematic tourism, luxury hospitality, and emotional cultural storytelling powered by generative AI.',
    'AI Video Production Kerala, Kochi AI Agency, Trivandrum Commercials, Luxury Hospitality Video, Tourism Cinematics, South India Film Production',
    '# AI Cinematic Production in Kerala
    
Leading the future of visual storytelling across Kerala and South India. Our autonomous production pipeline bridges cultural heritage with high-end generative media to deliver emotionally resonant commercials.

## Capabilities
- Luxury Hospitality Cinematics: Elevating premium resorts with breathtaking realism.
- Tourism & Heritage: Emotionally driven storytelling for Kerala’s cultural landscape.
- Premium Wedding Documentaries: High-end, atmospheric narrative structures.
- Commercial Real Estate: Showcasing luxury properties with cinematic scale.

## Benefits
- Emotional Resonance: Capturing the earthy, rich textures of the region.
- Scale & Speed: Reducing production timelines from months to days.
- Neural Perfection: Pristine visual fidelity matched with human-centric narratives.
',
    '{"primary_driver": "Tourism & Hospitality", "cultural_cue": "Heritage and Emotional Trust"}'::jsonb,
    'Earthy luxury, emotional textures, natural light, and deep cultural realism.',
    ARRAY['Luxury Hospitality', 'Tourism', 'Real Estate', 'Premium Weddings'],
    '[
        {"q": "How does DP AI Studios adapt visuals for the Kerala market?", "a": "We train our neural pipelines to respect natural light, cultural textures, and the earthy, cinematic aesthetic expected by premium South Indian brands."},
        {"q": "Can you handle high-end hospitality campaigns?", "a": "Yes. Our generative systems excel at creating opulent, photorealistic resort and real estate commercials without the logistical delays of massive film crews."}
    ]'::jsonb,
    100.00,
    ARRAY['Kerala', 'Kochi', 'Trivandrum', 'South India', 'Luxury Hospitality']
) ON CONFLICT (slug) DO UPDATE SET 
    geo_market_intelligence = EXCLUDED.geo_market_intelligence,
    geo_cinematic_direction = EXCLUDED.geo_cinematic_direction,
    geo_industry_focus = EXCLUDED.geo_industry_focus,
    localized_faqs = EXCLUDED.localized_faqs,
    geo_entity_tags = EXCLUDED.geo_entity_tags;

-- 4. INJECT PILOT NODE: BANGALORE
INSERT INTO content_pages (
    slug, 
    title, 
    meta_title, 
    meta_description, 
    keywords, 
    content, 
    geo_market_intelligence, 
    geo_cinematic_direction, 
    geo_industry_focus, 
    localized_faqs, 
    uniqueness_score, 
    geo_entity_tags
) VALUES (
    'ai-video-production-bangalore',
    'AI Video Production Bangalore | Tech & SaaS Commercials',
    'AI Video Production Bangalore for SaaS & Startups | DP AI Studios',
    'The premier AI cinematic production studio in Bangalore. We engineer fast-paced, high-tech visual narratives for SaaS, AI startups, and innovation-driven brands.',
    'AI Video Production Bangalore, SaaS Commercials, Tech Startup Videos, Innovation Branding Karnataka, AI Advertising Bangalore',
    '# AI Video Production for Bangalore Innovators
    
Empowering Bangalore’s tech ecosystem with high-velocity, cinematic video production. DP AI Studios is the strategic partner for SaaS companies and innovation brands demanding futuristic, high-conversion visual narratives.

## Capabilities
- SaaS Storytelling: Translating complex software into high-impact visual poetry.
- Product Launch Campaigns: High-speed, high-fidelity ad generation for rapid deployment.
- Tech & Innovation Branding: Establishing absolute category dominance.
- Dynamic Scale: Agile video generation that matches startup deployment cycles.

## Benefits
- High-Speed Go-to-Market: Execute launch commercials in 72 hours.
- Future-Tech Aesthetics: Clean, futuristic, and highly polished motion design.
- Disruption at Scale: Lowering enterprise production costs while raising visual standards.
',
    '{"primary_driver": "SaaS & AI Startups", "cultural_cue": "Innovation and Agility"}'::jsonb,
    'Fast-paced editorial motion, futuristic environments, high-tech realism, and sleek corporate cinematics.',
    ARRAY['SaaS', 'AI Startups', 'Technology Branding', 'Fintech'],
    '[
        {"q": "Why is AI video ideal for Bangalore startups?", "a": "Startups need agility. Our autonomous pipeline allows SaaS and tech brands to deploy enterprise-grade commercials in days, bypassing the rigid constraints of traditional shoots."},
        {"q": "Do you produce commercials for deep-tech companies?", "a": "Absolutely. We specialize in transforming abstract technological concepts into visceral, cinematic visual stories that convert users and attract investors."}
    ]'::jsonb,
    100.00,
    ARRAY['Bangalore', 'Karnataka', 'SaaS', 'AI Startups', 'Tech Hub']
) ON CONFLICT (slug) DO UPDATE SET 
    geo_market_intelligence = EXCLUDED.geo_market_intelligence,
    geo_cinematic_direction = EXCLUDED.geo_cinematic_direction,
    geo_industry_focus = EXCLUDED.geo_industry_focus,
    localized_faqs = EXCLUDED.localized_faqs,
    geo_entity_tags = EXCLUDED.geo_entity_tags;

-- 5. INJECT PILOT NODE: DUBAI
INSERT INTO content_pages (
    slug, 
    title, 
    meta_title, 
    meta_description, 
    keywords, 
    content, 
    geo_market_intelligence, 
    geo_cinematic_direction, 
    geo_industry_focus, 
    localized_faqs, 
    uniqueness_score, 
    geo_entity_tags
) VALUES (
    'ai-video-production-dubai',
    'AI Video Production Dubai | Luxury Cinematic Commercials',
    'Premium AI Video Production Dubai | Luxury Brands | DP AI Studios',
    'The absolute authority in AI cinematic production for Dubai. Delivering ultra-premium, opulent visual campaigns for luxury commerce, high-fashion, and elite real estate.',
    'AI Video Production Dubai, Luxury Commercials UAE, High Fashion Video Production DIFC, Elite Real Estate Video Dubai, Premium Lifestyle Ads',
    '# Premium AI Cinematic Production in Dubai
    
Defining the apex of luxury visual storytelling. DP AI Studios brings ultra-premium generative video pipelines to Dubai’s most elite brands. We engineer commercials that exude opulence, scale, and absolute dominance.

## Capabilities
- Luxury Real Estate: Majestic, hyper-realistic showcases of elite properties.
- High-Fashion Campaigns: Avant-garde, stylized editorial motion.
- Premium Commerce: Elevating luxury retail with pristine visual fidelity.
- Elite Hospitality: Grand cinematic tours of 5-star ecosystems.

## Benefits
- Unmatched Opulence: Visuals that rival global Hollywood-level campaigns.
- Absolute Scale: Unlimited generative locations without production logistics.
- Prestige & Status: Positioning your brand at the absolute forefront of media technology.
',
    '{"primary_driver": "Luxury Commerce & Real Estate", "cultural_cue": "Opulence and Elite Status"}'::jsonb,
    'Opulent, ultra-premium polish, luxury futurism, grand scale, and high-fashion cinematics.',
    ARRAY['Luxury Commerce', 'Premium Real Estate', 'High Fashion', 'Elite Hospitality'],
    '[
        {"q": "Can AI video match the quality of luxury commercial shoots?", "a": "It surpasses it. Our neural engines generate pristine, 8K-fidelity environments and lighting that would cost hundreds of thousands of dollars to construct physically."},
        {"q": "Is this suitable for Dubai high-end real estate?", "a": "It is the perfect medium. We can generate hyper-realistic, cinematic sequences of unbuilt properties or enhance existing portfolios with opulent visual layers."}
    ]'::jsonb,
    100.00,
    ARRAY['Dubai', 'UAE', 'DIFC', 'Luxury Commerce', 'Premium Real Estate']
) ON CONFLICT (slug) DO UPDATE SET 
    geo_market_intelligence = EXCLUDED.geo_market_intelligence,
    geo_cinematic_direction = EXCLUDED.geo_cinematic_direction,
    geo_industry_focus = EXCLUDED.geo_industry_focus,
    localized_faqs = EXCLUDED.localized_faqs,
    geo_entity_tags = EXCLUDED.geo_entity_tags;
