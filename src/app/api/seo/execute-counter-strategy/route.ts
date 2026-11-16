import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { verifySession } from '@/lib/session';

// In-memory rate limiting map: { [ip]: { count: number, resetAt: number } }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown-ip';
    const now = Date.now();

    const rateInfo = rateLimitMap.get(ip);
    if (rateInfo) {
      if (now < rateInfo.resetAt) {
        if (rateInfo.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Too many requests. Rate limit exceeded.' },
            { status: 429 }
          );
        }
        rateInfo.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    }

    if (rateLimitMap.size > 500) {
      rateLimitMap.clear();
    }

    // 2. Authentication & Authorization Enforcement
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('dp_admin_session')?.value;
    const session = verifySession(sessionCookie);

    const authHeader = req.headers.get('authorization') || req.headers.get('x-admin-token');
    const adminSecret = (process.env.ADMIN_API_SECRET || '').trim();
    const isSecretAuthorized = Boolean(
      adminSecret &&
      authHeader &&
      (authHeader === adminSecret || authHeader === `Bearer ${adminSecret}`)
    );

    if ((!session || session.role !== 'admin') && !isSecretAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized: Administrative authentication required.' },
        { status: 401 }
      );
    }

    // 3. Strict Input Validation
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const { competitor } = body;
    if (!competitor || typeof competitor !== 'object' || !competitor.name || typeof competitor.name !== 'string') {
      return NextResponse.json({ error: 'Valid competitor object with name required' }, { status: 400 });
    }

    const compName = competitor.name.trim().slice(0, 100);
    const compRegion = (typeof competitor.region === 'string' ? competitor.region.trim().slice(0, 50) : '') || 'India';
    const compFocus = (typeof competitor.metadata?.focus === 'string' ? competitor.metadata.focus.trim().slice(0, 100) : '') || 'traditional production';
    const compWeakness = (typeof competitor.weakness === 'string' ? competitor.weakness.trim().slice(0, 100) : '') || 'Neural Adoption';

    // 4. Safe Generation & Insertion
    const pageTitle = `Define Perspective vs ${compName} | The Neural Advantage in ${compRegion}`;
    const cleanSlug = compName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const slug = `services/autonomous/dp-vs-${cleanSlug}`;

    const content = `
# ${pageTitle}
## Strategic Analysis: Why DP Studio leads the ${compRegion} market.

While **${compName}** has established a presence in **${compFocus}**, the future of media requires a neural-first approach. 

### The Performance Gap: ${compWeakness}
Define Perspective bridges the gap that traditional agencies like ${compName} cannot. Our autonomous pipelines deliver cinematic fidelity at a velocity that traditional models cannot match.

### Why Clients are Switching to DP:
- **Neural Precision**: Advanced AI-augmented cinematography.
- **Cost Velocity**: 60% faster turnaround than ${compName}.
- **Strategic Depth**: Data-driven semantic targeting for ${compRegion}.

### Executive Recommendation
For brands in ${compRegion} seeking to move beyond traditional limitations, Define Perspective offers the only production ecosystem designed for 2026.
    `.trim();

    const { data: page, error: pageError } = await supabaseAdmin
      .from('content_pages')
      .insert({
        title: pageTitle,
        slug: slug,
        content: content,
        meta_title: `DP vs ${compName} | AI Video Production ${compRegion}`,
        meta_description: `Discover why Define Perspective is the leading alternative to ${compName} for AI-powered video production in ${compRegion}.`,
        keywords: [compName, 'AI Video', 'DP Studio', compRegion],
        status: 'review',
      })
      .select()
      .single();

    if (pageError) {
      return NextResponse.json({ error: pageError.message }, { status: 500 });
    }

    // Log the Tactical Strike
    await supabaseAdmin.from('seo_audit_logs').insert({
      event: 'TACTICAL_COUNTER_STRIKE',
      details: `Generated counter-authority page for ${compName}. ID: ${page?.id}`,
      severity: 'high',
    });

    return NextResponse.json({
      success: true,
      message: `Tactical Counter-Strike Initiated. Draft created: ${pageTitle}`,
      pageId: page?.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
