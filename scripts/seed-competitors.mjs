import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const competitors = [
  { 
    entity_name: "Regional Ad Studio X", 
    type: "competitor", 
    region: "Kerala", 
    authority_score: 65, 
    metadata: { focus: "Traditional Ads", threat_level: "Medium" } 
  },
  { 
    entity_name: "National Video Network", 
    type: "competitor", 
    region: "India", 
    authority_score: 82, 
    metadata: { focus: "Corporate Films", threat_level: "High" } 
  },
  { 
    entity_name: "Kochi Creative Lab", 
    type: "competitor", 
    region: "Kochi", 
    authority_score: 45, 
    metadata: { focus: "Social Media", threat_level: "Low" } 
  },
  { 
    entity_name: "Global AI Media Group", 
    type: "competitor", 
    region: "India", 
    authority_score: 88, 
    metadata: { focus: "AI Content", threat_level: "Critical" } 
  }
];

async function seed() {
  console.log("Seeding Competitor Pulse Data...");
  const { error } = await supabase.from('entity_graph').upsert(competitors, { onConflict: 'entity_name' });
  if (error) console.error("Seed Error:", error);
  else console.log("Competitor data successfully hydrated.");
}

seed();
