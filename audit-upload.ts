import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables manually
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
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey);
const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

async function runAudit() {
  console.log('--- STORAGE AUDIT ---');
  
  // 1. Verify bucket exists and visibility (Service Role)
  const { data: buckets, error: bucketError } = await supabaseAdmin.storage.listBuckets();
  if (bucketError) {
    console.error('FAIL: Could not list buckets', bucketError);
    return;
  }
  
  const targetBucket = buckets.find(b => b.name === 'case-study-assets');
  if (!targetBucket) {
    console.log('FAIL: Bucket case-study-assets does not exist.');
    return;
  }
  
  console.log(`PASS: Bucket exists.`);
  console.log(`Visibility: Public? ${targetBucket.public}`);

  // 2. Test ANON upload policy
  console.log('\n--- TESTING ANON UPLOAD (Simulating Frontend) ---');
  const mockContent = 'test upload via audit script';
  const filePath = `audit/${Date.now()}.txt`;
  
  const { data: uploadData, error: uploadError } = await supabaseAnon.storage
    .from('case-study-assets')
    .upload(filePath, mockContent, {
      contentType: 'text/plain',
      upsert: true
    });
    
  if (uploadError) {
    console.error('FAIL: Upload failed using Anon key.', uploadError.message);
    return;
  }
  console.log('PASS: Upload succeeded using Anon key!');
  
  // 3. Test getPublicUrl
  const { data: { publicUrl } } = supabaseAnon.storage
    .from('case-study-assets')
    .getPublicUrl(filePath);
    
  console.log(`Public URL Generated: ${publicUrl}`);
  
  // Try to fetch it
  try {
    const res = await fetch(publicUrl);
    if (res.ok) {
      console.log('PASS: File is accessible publicly.');
    } else {
      console.log(`FAIL: File is NOT accessible. HTTP ${res.status}`);
    }
  } catch (e) {
    console.error('FAIL: Could not fetch public URL.', e);
  }
  
  // Clean up
  await supabaseAdmin.storage.from('case-study-assets').remove([filePath]);
  console.log('Cleaned up test file.');
}

runAudit();
