import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, phone, asset_requested, details } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // 1. Store the lead in Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert({
        email,
        name,
        phone,
        asset_requested: asset_requested || 'NEURAL_GENERAL_LEAD',
        details: typeof details === 'string' ? details : JSON.stringify({
          ...details,
          ...body, // Capture all fields just in case
          submission_type: asset_requested
        })
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase Error:', error);
    }

    // 2. Log activity in Tactical Feed
    await supabase.from('seo_audit_logs').insert({
      event: 'NEURAL_CONVERSION',
      details: `New Lead: ${name} (${email}). Asset: ${asset_requested}.`,
      severity: 'high'
    });

    // 3. Email Notification Logic (Simulated)
    // In production, use Resend/SendGrid here to send to defineperspective.in@gmail.com
    console.log('Sending notification to defineperspective.in@gmail.com...');
    console.log('Sending confirmation to lead:', email);

    return NextResponse.json({ 
      success: true, 
      message: 'Neural Lead Transmitted Successfully'
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
