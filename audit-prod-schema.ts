import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      process.env[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '');
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  // Method 1: Try information_schema (often fails via REST)
  const { data: infoData, error: infoError } = await supabaseAdmin
    .from('information_schema.columns')
    .select('column_name')
    .eq('table_name', 'case_studies')
    .in('column_name', ['seo_title', 'seo_description', 'focus_keywords', 'og_title', 'og_description']);

  console.log('--- info schema ---');
  console.log('Error:', infoError?.message);
  console.log('Data:', infoData);

  // Method 2: Direct select
  const { data: selectData, error: selectError } = await supabaseAdmin
    .from('case_studies')
    .select('seo_title, seo_description, focus_keywords, og_title, og_description')
    .limit(1);

  console.log('--- direct select ---');
  console.log('Error:', selectError?.message);
}

run();
