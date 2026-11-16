import { createClient } from '@supabase/supabase-js';

const isProduction = process.env.NODE_ENV === 'production';
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

if (!supabaseUrl || !supabaseAnonKey) {
  if (isProduction) {
    throw new Error(
      '[CRITICAL] Supabase public credentials (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are missing in production. Refusing to initialize with dummy fallback.'
    );
  }
  console.warn('[supabase] Missing public credentials in development. Operating in safe offline dev mode.');
}

// In development only, use safe offline fallback to prevent unhandled local crashes when credentials are unset
export const supabase = createClient(
  supabaseUrl || 'https://offline-dev.supabase.co',
  supabaseAnonKey || 'dummy-anon-key-offline'
);
