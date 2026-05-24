-- ==============================================================================
-- DP AI STUDIOS - PHASE 10: INTELLIGENCE PUBLISHER
-- Target: scratch/phase10_intelligence_publisher.sql
-- Purpose: Schema setup for case_studies_registry with strict RLS and vector links
-- ==============================================================================

-- 1. Create the central case_studies_registry table
CREATE TABLE IF NOT EXISTS public.case_studies_registry (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    client_name TEXT NOT NULL,
    geo TEXT,
    industry TEXT,
    ai_summary JSONB NOT NULL DEFAULT '{}',
    faqs JSONB NOT NULL DEFAULT '[]',
    social_posts JSONB NOT NULL DEFAULT '{}',
    external_video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.case_studies_registry ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
-- Allow public read access to published case studies
CREATE POLICY "Allow public read access to case_studies_registry"
ON public.case_studies_registry
FOR SELECT
TO anon, authenticated
USING (published_at IS NOT NULL AND published_at <= now());

-- Allow authenticated users (Admins) to insert and update
CREATE POLICY "Allow authenticated insert to case_studies_registry"
ON public.case_studies_registry
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated update to case_studies_registry"
ON public.case_studies_registry
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated delete from case_studies_registry"
ON public.case_studies_registry
FOR DELETE
TO authenticated
USING (true);

-- 4. Create trigger to update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_case_studies_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_case_studies_updated_at
    BEFORE UPDATE ON public.case_studies_registry
    FOR EACH ROW
    EXECUTE PROCEDURE update_case_studies_updated_at_column();

-- ==============================================================================
-- VERIFICATION QUERY
-- ==============================================================================
-- SELECT * FROM pg_policies WHERE tablename = 'case_studies_registry';
