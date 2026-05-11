const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local for verification
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) env[key.trim()] = value.trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  console.log('--- NEURAL CORE CONNECTION TEST ---');
  console.log('Target URL:', supabaseUrl);
  
  const { data, error } = await supabase.from('content_pages').select('id').limit(1);
  
  if (error) {
    console.error('RESULT: FAILED');
    console.error('ERROR:', error.message);
  } else {
    console.log('RESULT: SUCCESSFUL');
    console.log('STATUS: SUPABASE IS LIVE');
    console.log('--- TEST COMPLETE ---');
  }
}

check();
