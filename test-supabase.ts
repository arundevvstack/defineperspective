import { supabase } from './src/lib/supabase';

async function testConnection() {
  console.log('Testing Supabase Connection...');
  const { data, error } = await supabase.from('content_pages').select('id').limit(1);
  
  if (error) {
    console.error('Connection Failed:', error.message);
    if (error.message.includes('placeholder')) {
      console.log('STATUS: Using Placeholder URL. Environment variables are likely MISSING.');
    }
  } else {
    console.log('Connection Successful! Supabase is LIVE.');
    console.log('Data sample:', data);
  }
}

testConnection();
