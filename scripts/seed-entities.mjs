import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CORE_ENTITIES = [
  { 
    entity_name: "AI Video Production Kerala", 
    type: "Service", 
    region: "Kerala", 
    authority_score: 98,
    metadata: { keywords: ["ai video production", "kerala", "cinema"] }
  },
  { 
    entity_name: "AI Ad Production India", 
    type: "Service", 
    region: "India", 
    authority_score: 95,
    metadata: { keywords: ["ai ad production", "india", "marketing"] }
  },
  { 
    entity_name: "AI TVC Production Kochi", 
    type: "Service", 
    region: "Kochi", 
    authority_score: 92,
    metadata: { keywords: ["ai tvc", "kochi", "television"] }
  },
  { 
    entity_name: "AI Content Production Global", 
    type: "Service", 
    region: "Global", 
    authority_score: 88,
    metadata: { keywords: ["ai content", "social media", "automation"] }
  }
];

async function seed() {
  console.log("Seeding Core Entities...");
  const { data, error } = await supabase
    .from('entity_graph')
    .upsert(CORE_ENTITIES, { onConflict: 'entity_name' });
  
  if (error) console.error("Seed Error:", error);
  else console.log("Seeded successfully:", data);
}

seed();
