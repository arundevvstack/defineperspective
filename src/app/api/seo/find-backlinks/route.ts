import { NextResponse } from 'next/server';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

// Verified, legitimate industry publication and citation targets for AI video production
const VERIFIED_EDITORIAL_CITATION_TARGETS = [
  { name: "Kerala Startup Mission (KSUM)", url: "https://startupmission.kerala.gov.in", da: 58, relevance: 98, notes: "Official ecosystem partner. Case studies on regional AI innovation." },
  { name: "Broadcast & CableSat India", url: "https://broadcastandcablesat.co.in", da: 48, relevance: 92, notes: "National broadcast authority. Suitable for 4K DCI-P3 mastering articles." },
  { name: "Afaqs! (Advertising & Media)", url: "https://afaqs.com", da: 68, relevance: 95, notes: "India’s leading marketing portal. Feature DP AI Studio TVC breakthroughs." },
  { name: "Campaign India", url: "https://campaignindia.in", da: 62, relevance: 94, notes: "Advertising trade press for Indian agencies and production houses." },
  { name: "YourStory / TechSparks", url: "https://yourstory.com", da: 84, relevance: 88, notes: "Feature on AI commercial filmmaking and founder journey." }
];

export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Use POST with authentication.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function POST(req: Request) {
  try {
    const rateLimitResponse = await checkRateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    const auth = await assertAdminApi(req);
    if (!auth.authorized) return auth.response;

    const opportunities = VERIFIED_EDITORIAL_CITATION_TARGETS.map(source => ({
      source_name: source.name,
      url: source.url,
      domain_authority: source.da,
      relevance_score: source.relevance,
      editorial_notes: source.notes,
      status: 'VERIFIED_EDITORIAL_TARGET',
      provenance: 'Legitimate Industry Publication Registry'
    }));

    return NextResponse.json({ 
      success: true, 
      count: opportunities.length,
      opportunities,
      notice: 'Zero spam outreach. All targets represent legitimate editorial, press, or regional trade publications.'
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
