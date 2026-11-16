import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

// Non-GET HTTP methods are strictly rejected
export async function POST() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Lead intelligence retrieval requires GET.' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

/**
 * GET /api/seo/leads
 * 
 * Authenticated server-side proxy route for retrieving customer lead intelligence.
 * Strictly requires admin authentication (HTTP-only session cookie or ADMIN_API_SECRET bearer).
 * Utilizes the server-only supabaseAdmin client (service role) to query public.leads.
 */
export async function GET(req: Request) {
  try {
    // 1. IP Rate Limiting (60 requests per minute per IP)
    const rateLimitResponse = await checkRateLimit(req, 60, 60 * 1000);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Strict Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Query Parameter Parsing & Server-Side Validation
    const { searchParams } = new URL(req.url);
    const rawLimit = searchParams.get('limit');
    const rawOffset = searchParams.get('offset');
    const rawSearch = searchParams.get('search');

    // Bounded pagination: limit in [1, 100], default 50; offset >= 0, default 0
    const parsedLimit = parseInt(rawLimit || '50', 10);
    const limit = Number.isNaN(parsedLimit) ? 50 : Math.min(Math.max(parsedLimit, 1), 100);

    const parsedOffset = parseInt(rawOffset || '0', 10);
    const offset = Number.isNaN(parsedOffset) ? 0 : Math.max(parsedOffset, 0);

    // 4. Construct Query using server-side supabaseAdmin
    // Explicitly query only the fields required by the UI (avoids SELECT *)
    let query = supabaseAdmin
      .from('leads')
      .select(
        'id, name, email, company, industry, region, budget, score, interest_cluster, created_at',
        { count: 'exact' }
      );

    // Optional sanitized search filter
    if (rawSearch && rawSearch.trim().length > 0) {
      // Sanitize search string to prevent filter syntax injection
      const sanitized = rawSearch.trim().slice(0, 100).replace(/[%_(),]/g, '');
      if (sanitized.length > 0) {
        query = query.or(
          `name.ilike.%${sanitized}%,company.ilike.%${sanitized}%,email.ilike.%${sanitized}%,industry.ilike.%${sanitized}%`
        );
      }
    }

    // Ordering and Bounded Range
    query = query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      // Log generic error code; never log customer PII or stack traces
      console.error('[GET /api/seo/leads] Database query error code:', error.code);
      return NextResponse.json(
        { error: 'Failed to retrieve lead records from database.' },
        { status: 500 }
      );
    }

    const total = count ?? (data?.length || 0);

    return NextResponse.json({
      leads: data || [],
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    });

  } catch (err: any) {
    // Fail closed without leaking internals
    console.error('[GET /api/seo/leads] Unexpected execution failure');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

