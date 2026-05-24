const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8').split('\n').reduce((acc, line) => {
  const [key, ...val] = line.split('=');
  if (key && val) acc[key.trim()] = val.join('=').trim();
  return acc;
}, {});
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function checkSchema() {
  const { data, error } = await supabase
    .from('content_pages')
    .select('geo_market_intelligence, geo_cinematic_direction')
    .limit(1);
    
  if (error) {
    console.error('Schema error:', error);
  } else {
    console.log('Schema exists. Data:', data);
  }
}

checkSchema();
