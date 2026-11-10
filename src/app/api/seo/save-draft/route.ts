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

    // Clean up memory cache periodically
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

    const { keyword, region } = body;
    if (!keyword || typeof keyword !== 'string' || keyword.trim().length < 2 || keyword.length > 100) {
      return NextResponse.json(
        { error: 'Valid keyword required (2-100 characters)' },
        { status: 400 }
      );
    }

    const cleanKeyword = keyword.trim();
    const cleanRegion = (typeof region === 'string' ? region.trim().slice(0, 50) : '') || 'India';

    // 4. Safe Generation & Insertion
    const pageTitle = `${cleanKeyword} | Premium AI Video Production ${cleanRegion}`;
    const slug = cleanKeyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const generatedContent = `
# ${pageTitle}
Experience the future of visual storytelling with Define Perspective. Our neural production pipelines deliver unparalleled cinematic quality for ${cleanKeyword}.

## Why Choose DP for ${cleanKeyword}?
- **Neural Precision**: Advanced AI models tailored for the ${cleanRegion} market.
- **Cinematic Heritage**: Combining traditional filmmaking expertise with cutting-edge AI.
- **Velocity**: From concept to final render in a fraction of traditional timelines.

## Our Process
1. **Semantic Strategy**: Aligning your brand with regional search intent.
2. **Neural Generation**: High-fidelity AI video and image synthesis.
3. **Executive Finishing**: Professional color grading and sound design.
    `.trim();

    const { data, error } = await supabaseAdmin
      .from('content_pages')
      .insert({
        title: pageTitle,
        slug: `services/${slug}`,
        content: generatedContent,
        meta_title: `Best ${cleanKeyword} in ${cleanRegion} | DP AI Studio`,
        meta_description: `Leading AI-powered production for ${cleanKeyword} in ${cleanRegion}. Cinematic quality, neural efficiency.`,
        keywords: [cleanKeyword, 'AI Video', 'DP Studio', cleanRegion],
        status: 'review',
        schema_json: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: cleanKeyword,
          provider: {
            '@type': 'Organization',
            name: 'Define Perspective',
          },
          areaServed: cleanRegion,
        },
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Update trend status
    await supabaseAdmin
      .from('ai_trends')
      .update({ status: 'drafted' })
      .eq('keyword', cleanKeyword);

    return NextResponse.json({
      success: true,
      message: `Autonomous draft created for ${cleanKeyword}`,
      pageId: data?.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
