import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

// Standard RFC 4122 UUID regex pattern
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Rejection handlers for unsupported HTTP methods
export async function POST() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Guide content retrieval requires GET.' },
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
 * GET /api/seo/lead-magnets?id=<uuid>
 * 
 * Authenticated administrative endpoint to retrieve full proprietary guide content.
 * 
 * Security Controls:
 * - Rate limited via process-local checkRateLimit (best-effort heuristic).
 * - Requires authenticated admin role via assertAdminApi (dp_admin_session or ADMIN_API_SECRET).
 * - Strictly validates UUID format prior to database access.
 * - Restricts query to certified admin projection (includes content & metadata_json).
 * - Uses server-only supabaseAdmin (service_role) to bypass RLS column gating.
 * - Public visitors and non-admin sessions strictly receive 401 Unauthorized.
 */
export async function GET(req: Request) {
  try {
    // 1. Sliding Window Rate Limiting (60 requests per minute per IP, process-local best-effort)
    const rateLimitResponse = await checkRateLimit(req, 60, 60 * 1000);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // 2. Administrative Authentication & Role Verification
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Query Parameter Extraction & UUID Format Validation
    const { searchParams } = new URL(req.url);
    const rawId = searchParams.get('id');

    if (!rawId || typeof rawId !== 'string' || !UUID_REGEX.test(rawId.trim())) {
      return NextResponse.json(
        { error: 'Validation Error: A valid guide UUID is required in query parameter "id".' },
        { status: 400 }
      );
    }

    const guideId = rawId.trim();

    // 4. Retrieve Requested Guide using Server-Side supabaseAdmin
    const { data, error } = await supabaseAdmin
      .from('lead_magnets')
      .select('id, title, summary, content, category, metadata_json, download_count, created_at')
      .eq('id', guideId)
      .maybeSingle();

    if (error) {
      // Log generic error code; never expose schema or stack trace
      console.error('[GET /api/seo/lead-magnets] Database query error code:', error.code);
      return NextResponse.json(
        { error: 'Failed to retrieve guide from database.' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Guide not found.' },
        { status: 404 }
      );
    }

    // 5. Return Certified Admin Guide Object
    return NextResponse.json({
      success: true,
      guide: data,
    }, { status: 200 });

  } catch {
    // Fail closed with generic safe error response
    console.error('[GET /api/seo/lead-magnets] Unexpected server exception');
    return NextResponse.json(
      { error: 'An unexpected internal error occurred.' },
      { status: 500 }
    );
  }
}

