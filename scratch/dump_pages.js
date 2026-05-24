const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local
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

async function dump() {
  console.log('Fetching all pages from content_pages...');
  const { data, error } = await supabase
    .from('content_pages')
    .select('id, slug, title, keywords, meta_title, meta_description, content')
    .order('slug');
    
  if (error) {
    console.error('Error fetching pages:', error.message);
    return;
  }
  
  console.log(`Total Pages Found: ${data.length}\n`);
  data.forEach((p, index) => {
    console.log(`[${index + 1}] Title: ${p.title}`);
    console.log(`    Slug: /${p.slug}`);
    console.log(`    Keywords: ${p.keywords ? p.keywords : 'None'}`);
    console.log(`    Meta Title: ${p.meta_title}`);
    console.log(`    Content Length: ${p.content ? p.content.length : 0} characters`);
    console.log('----------------------------------------------------');
  });
}

dump();
