import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { url, userAgent } = data;
    
    // In a real app, you would use:
    // const { data, error } = await supabase.from('threat_logs').insert([...])

    // Mocking a successful tracking event
    const timestamp = new Date().toISOString();
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

    console.log(`[TRACKING] ${timestamp} | IP: ${ip} | URL: ${url}`);

    return NextResponse.json({ 
      success: true, 
      id: Math.random().toString(36).substr(2, 9),
      timestamp 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
