import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

// Non-GET methods are strictly rejected
export async function POST() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Audit log inspection requires GET.' },
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
 * GET /api/seo/audit-logs
 * 
 * Authenticated server-side API route for retrieving tactical SEO audit and system logs.
 * Replaces direct browser SELECT on public.seo_audit_logs.
 * Protected by assertAdminApi (session cookie or ADMIN_API_SECRET bearer).
 */
export async function GET(req: Request) {
  try {
    // 1. IP Rate Limiting (60 req/min)
    const rateLimitResponse = await checkRateLimit(req, 60, 60 * 1000);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Strict Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Query Parameter Validation & Bounded Pagination
    const { searchParams } = new URL(req.url);
    const rawLimit = searchParams.get('limit');
    const parsedLimit = parseInt(rawLimit || '10', 10);
    const limit = Number.isNaN(parsedLimit) ? 10 : Math.min(Math.max(parsedLimit, 1), 50);

    // 4. Construct Query via supabaseAdmin (service_role)
    const { data, error } = await supabaseAdmin
      .from('seo_audit_logs')
      .select('id, event, details, severity, page_slug, created_at')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('[GET /api/seo/audit-logs] Database query error:', error.code);
      return NextResponse.json(
        { error: 'Failed to retrieve audit logs from database.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      logs: data || [],
      count: data?.length || 0,
    });
  } catch (error: any) {
    console.error('[GET /api/seo/audit-logs] Unexpected error:', error?.message);
    return NextResponse.json(
      { error: 'Internal server error while retrieving audit logs.' },
      { status: 500 }
    );
  }
}

