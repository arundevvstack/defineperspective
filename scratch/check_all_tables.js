const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase keys");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
  console.log("Checking tables...");
  
  const { data: reg, error: regErr } = await supabase.from('case_studies_registry').select('*').limit(1);
  if (regErr) {
    console.error("case_studies_registry error:", regErr.message);
  } else {
    console.log("case_studies_registry exists!");
    if (reg.length > 0) {
      console.log("Columns:", Object.keys(reg[0]));
    } else {
      console.log("Registry is empty.");
    }
  }

  const { data: cs, error: csErr } = await supabase.from('case_studies').select('*').limit(1);
  if (csErr) {
    console.error("case_studies error:", csErr.message);
  } else {
    console.log("case_studies exists!");
    if (cs.length > 0) {
      console.log("Columns:", Object.keys(cs[0]));
    } else {
      console.log("case_studies is empty.");
    }
  }
}

checkTables();
