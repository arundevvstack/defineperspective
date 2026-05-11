import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { topic, node } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const activeNode = node || "Kochi, IN";

    // 1. AI Synthesis (Simulated - in production call OpenAI/Gemini)
    // The engine would search public trends and synthesize a unique report
    const synthesisData = {
      title: `${topic} (${activeNode})`,
      summary: `An exclusive executive report exploring the intersection of cinematic storytelling and neural AI pipelines in the ${topic} sector for the ${activeNode} market.`,
      content: `### ${activeNode} Market Overview\nThe landscape of ${topic} in ${activeNode} is shifting towards autonomous production...\n\n### Strategic Framework\n1. Neural Asset Generation\n2. Cinematic Lighting Synthesis\n3. Real-time Market Adaptation...`,
      category: topic.toLowerCase().includes('luxury') ? 'Luxury Strategy' : 'AI Intelligence',
      metadata: {
        keywords: [topic, activeNode, 'AI Advertising', 'Cinematic AI', 'Define Perspective'],
        sentiment: 'bullish',
        market_readiness: 'high'
      }
    };

    // 2. Store in Supabase
    // Table: lead_magnets (id, title, summary, content, category, metadata_json, download_count, created_at)
    console.log('Inserting Guide into Supabase:', synthesisData.title);
    
    const { data, error: dbError } = await supabase
      .from('lead_magnets')
      .insert({
        title: synthesisData.title,
        summary: synthesisData.summary,
        content: synthesisData.content,
        category: synthesisData.category,
        metadata_json: synthesisData.metadata,
        download_count: 0
      })
      .select()
      .single();

    if (dbError) {
      console.error('Supabase DB Error:', dbError);
      return NextResponse.json({ 
        error: 'Database error: Ensure the "lead_magnets" table is created with the correct columns.',
        details: dbError.message 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Guide created.',
      guideId: data.id 
    });

  } catch (error: any) {
    console.error('Lead Magnet Engine Critical Error:', error);
    return NextResponse.json({ error: error.message || 'Unknown internal error' }, { status: 500 });
  }
}
