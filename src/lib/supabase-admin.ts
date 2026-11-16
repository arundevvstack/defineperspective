import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client using service role key.
 * NEVER import this from client components or pages — only from server actions and API routes.
 * Bypasses RLS for admin write operations (publisher, embedding insertion).
 */

const isProduction = process.env.NODE_ENV === 'production';
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

if (!supabaseUrl || !supabaseServiceKey) {
  if (isProduction) {
    throw new Error(
      '[CRITICAL] Supabase service role credentials (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) are missing in production. Refusing to initialize admin client with dummy fallback.'
    );
  }
  console.warn('[supabase-admin] Missing service role credentials in development. Operating in safe offline dev mode.');
}

// In development only, use safe offline fallback to prevent unhandled local crashes when credentials are unset
export const supabaseAdmin = createClient(
  supabaseUrl || 'https://offline-dev.supabase.co',
  supabaseServiceKey || 'dummy-service-key-offline',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
