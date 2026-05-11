import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { email, name, sourceUrl, asset } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('leads')
      .insert({
        email,
        name,
        source_url: sourceUrl,
        asset_requested: asset || '2026_AI_Strategy_Guide'
      })
      .select()
      .single();

    if (error) throw error;

    // Log the conversion in the Tactical Feed
    await supabase.from('seo_audit_logs').insert({
      event: 'LEAD_CONVERSION',
      details: `New lead captured from ${sourceUrl}. Asset: ${asset}`,
      severity: 'medium'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      leadId: data.id 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
