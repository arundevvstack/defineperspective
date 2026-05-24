-- ==============================================================================
-- DP AI STUDIOS — INTELLIGENCE PUBLISHER™
-- CANONICAL SCHEMA: case_studies (CONSOLIDATED)
-- Run this in Supabase SQL Editor
-- ==============================================================================

-- 1. Drop the old fragmented table
DROP TABLE IF EXISTS public.case_studies_registry CASCADE;

-- 2. Create the canonical case_studies table
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    client_name TEXT NOT NULL DEFAULT 'Confidential',

    -- Platform & Media
    platform TEXT NOT NULL DEFAULT 'youtube',
    external_video_url TEXT NOT NULL,
    video_embed_url TEXT,
    thumbnail_url TEXT,
    video_duration TEXT DEFAULT 'PT1M00S',

    -- Core Content
    transcript TEXT DEFAULT '',
    ai_summary TEXT NOT NULL DEFAULT '',
    cinematic_direction TEXT DEFAULT '',

    -- Structured Data (JSONB)
    faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
    workflows JSONB NOT NULL DEFAULT '[]'::jsonb,
    schema_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    social_posts JSONB NOT NULL DEFAULT '{}'::jsonb,
    internal_links JSONB NOT NULL DEFAULT '[]'::jsonb,

    -- GEO & Industry Authority
    geo TEXT DEFAULT '',
    geo_tags TEXT[] DEFAULT '{}',
    industry TEXT DEFAULT '',

    -- Publishing State
    published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Enable RLS
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
-- Public read: only published case studies
CREATE POLICY "public_read_case_studies"
ON public.case_studies
FOR SELECT
TO anon, authenticated
USING (published = true);

-- Service role: full access (bypasses RLS by default, but explicit for safety)
CREATE POLICY "service_role_full_access_case_studies"
ON public.case_studies
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Authenticated admin: insert and update
CREATE POLICY "authenticated_insert_case_studies"
ON public.case_studies
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "authenticated_update_case_studies"
ON public.case_studies
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "authenticated_delete_case_studies"
ON public.case_studies
FOR DELETE
TO authenticated
USING (true);

-- 5. Auto-update trigger for updated_at
CREATE OR REPLACE FUNCTION update_case_studies_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_case_studies_updated_at ON public.case_studies;
CREATE TRIGGER trg_case_studies_updated_at
    BEFORE UPDATE ON public.case_studies
    FOR EACH ROW
    EXECUTE FUNCTION update_case_studies_timestamp();

-- 6. Performance indexes
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON public.case_studies(published);
CREATE INDEX IF NOT EXISTS idx_case_studies_geo ON public.case_studies(geo);
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON public.case_studies(industry);

-- ==============================================================================
-- VERIFICATION
-- ==============================================================================
-- Run after deployment:
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'case_studies' ORDER BY ordinal_position;
-- SELECT * FROM pg_policies WHERE tablename = 'case_studies';
