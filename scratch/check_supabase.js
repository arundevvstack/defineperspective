
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase keys in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTable() {
  console.log("Checking Supabase for case_studies_registry...");
  
  // Try to select a single row from the table to see if it exists
  const { data, error } = await supabase
    .from('case_studies_registry')
    .select('id')
    .limit(1);

  if (error) {
    console.error("❌ Table check failed. Error:", error.message);
  } else {
    console.log("✅ SUCCESS: The 'case_studies_registry' table exists and is accessible!");
    console.log("Data returned:", data);
  }
}

checkTable();
