import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client using service role key.
 * NEVER import this from client components or pages — only from server actions and API routes.
 * Bypasses RLS for admin write operations (publisher, embedding insertion).
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('[supabase-admin] Missing service role credentials. Publisher writes will fail.');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
