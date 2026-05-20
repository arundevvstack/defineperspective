-- ==============================================================================
-- DEFINE PERSPECTIVE | DP AI STUDIO
-- ENTERPRISE SUPABASE ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- 1. Enable RLS on the concept_leads table
ALTER TABLE public.concept_leads ENABLE ROW LEVEL SECURITY;

-- 2. Drop any existing permissive policies to ensure clean state
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.concept_leads;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.concept_leads;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.concept_leads;

-- 3. Create strict insert policy for anonymous/authenticated users (from Next.js API)
-- Only allow inserts. No reads, updates, or deletes.
CREATE POLICY "Allow anonymous inserts via API" 
ON public.concept_leads
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- 4. Create strict read/write policy for Service Role (Admin/Backend)
-- Service Role bypasses RLS by default, but explicit policies ensure safety if config changes.
CREATE POLICY "Allow full access for service role" 
ON public.concept_leads
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- INSTRUCTIONS FOR DEPLOYMENT:
-- 1. Open Supabase Dashboard -> SQL Editor
-- 2. Paste this script and click "Run"
-- 3. Verify under Authentication -> Policies that concept_leads is secured.
-- ==============================================================================
