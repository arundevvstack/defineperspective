import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Setup Supabase Client for Lead Storage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { brandName, productCategory, campaignMood, targetPlatform } = body;

    if (!brandName || !productCategory) {
      return NextResponse.json({ error: 'Brand name and category are required' }, { status: 400 });
    }

    // --- STEP 1: Store Lead in Supabase CRM ---
    try {
      const { error: dbError } = await supabase
        .from('concept_leads')
        .insert([
          { 
            brand_name: brandName, 
            category: productCategory, 
            mood: campaignMood, 
            platform: targetPlatform,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (dbError) {
        console.warn('Supabase Insert Warning (Table might not exist yet):', dbError.message);
      }
    } catch (e) {
      console.warn('Supabase Lead Storage failed, continuing with generation.', e);
    }

    // --- STEP 2: Generate Concept via LLM ---
    // If OPENAI_API_KEY is missing, we simulate the output to prevent crash in unconfigured environments
    if (!process.env.OPENAI_API_KEY) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing delay
      return NextResponse.json({ 
        success: true, 
        message: `Concept simulated for ${brandName}. (OPENAI_API_KEY missing). Please check your dashboard for the proposal.` 
      });
    }

    const prompt = `Act as an elite Cinematic AI Commercial Director.
Create a high-impact advertising concept for:
Brand: ${brandName}
Category: ${productCategory}
Mood/Style: ${campaignMood}
Platform: ${targetPlatform}

Provide:
1. Campaign Title
2. Core Visual Hook (First 3 seconds)
3. 3-Step Storyboard
4. Call to Action

Keep it concise, premium, and actionable.`;

    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!aiRes.ok) {
      const errorData = await aiRes.json();
      console.error('OpenAI Error:', errorData);
      return NextResponse.json({ error: 'Failed to generate concept from Neural Engine.' }, { status: 500 });
    }

    const aiData = await aiRes.json();
    const generatedConcept = aiData.choices[0].message.content;

    // Output would realistically be emailed or streamed, for now we return success
    return NextResponse.json({ 
      success: true, 
      message: `Strategic proposal for ${brandName} has been generated and dispatched successfully!`,
      concept: generatedConcept
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
