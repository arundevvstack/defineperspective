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
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

async function runAudit() {
  const { data, error } = await supabaseAdmin.from('case_studies').select('*').limit(1);
  if (error) {
    console.error('FAIL: Could not fetch case_studies', error);
    return;
  }
  
  if (!data || data.length === 0) {
    console.log('No data found, cannot infer columns from a row.');
    return;
  }
  
  const columns = Object.keys(data[0]);
  console.log('Columns found:', columns.join(', '));
}

runAudit();
