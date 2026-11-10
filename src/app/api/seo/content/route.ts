import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi, checkRateLimit } from '@/lib/api-security';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ALLOWED_STATUSES = new Set(['draft', 'review', 'published', 'archived']);

// Method Not Allowed handlers for unsupported methods
export async function POST() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Content creation uses dedicated generator routes. Use GET, PATCH, or DELETE.' },
    { status: 405, headers: { Allow: 'GET, PATCH, DELETE' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method Not Allowed. Use PATCH for partial updates.' },
    { status: 405, headers: { Allow: 'GET, PATCH, DELETE' } }
  );
}

/**
 * GET /api/seo/content
 * 
 * Authenticated server-side API route for listing content pages in the Neural Editor.
 * Returns both draft and published content for administrative management.
 * Protected by assertAdminApi (session cookie or ADMIN_API_SECRET bearer).
 */
export async function GET(req: Request) {
  try {
    // 1. IP Rate Limiting (60 req/min)
    const rateLimitResponse = await checkRateLimit(req, 60, 60 * 1000);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Query Parameter Parsing
    const { searchParams } = new URL(req.url);
    const rawLimit = searchParams.get('limit');
    const rawStatus = searchParams.get('status');

    const parsedLimit = parseInt(rawLimit || '100', 10);
    const limit = Number.isNaN(parsedLimit) ? 100 : Math.min(Math.max(parsedLimit, 1), 200);

    let query = supabaseAdmin
      .from('content_pages')
      .select('id, title, slug, content, meta_title, meta_description, keywords, status, schema_json, created_at, updated_at')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (rawStatus && ALLOWED_STATUSES.has(rawStatus.toLowerCase())) {
      query = query.eq('status', rawStatus.toLowerCase());
    }

    const { data, error } = await query;

    if (error) {
      console.error('[GET /api/seo/content] Database query error:', error.code);
      return NextResponse.json(
        { error: 'Failed to retrieve content pages from database.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      pages: data || [],
      count: data?.length || 0,
    });
  } catch (error: any) {
    console.error('[GET /api/seo/content] Unexpected error:', error?.message);
    return NextResponse.json(
      { error: 'Internal server error while retrieving content.' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/seo/content
 * 
 * Authenticated server-side API route for updating an existing content page.
 * Replaces direct browser UPDATE on public.content_pages.
 */
export async function PATCH(req: Request) {
  try {
    // 1. IP Rate Limiting (30 updates/min)
    const rateLimitResponse = await checkRateLimit(req, 30, 60 * 1000);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Request Body Parsing & Validation
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const { id, title, content, meta_title, meta_description, status } = body;

    // Validate ID
    if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
      return NextResponse.json(
        { error: 'Invalid or missing content page ID (must be a valid UUID).' },
        { status: 400 }
      );
    }

    // Build sanitised update payload
    const updates: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim().length === 0 || title.length > 255) {
        return NextResponse.json(
          { error: 'Title must be a non-empty string up to 255 characters.' },
          { status: 400 }
        );
      }
      updates.title = title.trim();
    }

    if (content !== undefined) {
      if (typeof content !== 'string') {
        return NextResponse.json({ error: 'Content must be a string.' }, { status: 400 });
      }
      updates.content = content;
    }

    if (meta_title !== undefined) {
      if (meta_title !== null && (typeof meta_title !== 'string' || meta_title.length > 255)) {
        return NextResponse.json(
          { error: 'Meta title must be a string up to 255 characters or null.' },
          { status: 400 }
        );
      }
      updates.meta_title = meta_title ? meta_title.trim() : null;
    }

    if (meta_description !== undefined) {
      if (meta_description !== null && (typeof meta_description !== 'string' || meta_description.length > 500)) {
        return NextResponse.json(
          { error: 'Meta description must be a string up to 500 characters or null.' },
          { status: 400 }
        );
      }
      updates.meta_description = meta_description ? meta_description.trim() : null;
    }

    if (status !== undefined) {
      if (typeof status !== 'string' || !ALLOWED_STATUSES.has(status.toLowerCase())) {
        return NextResponse.json(
          { error: 'Status must be one of: draft, review, published, archived.' },
          { status: 400 }
        );
      }
      updates.status = status.toLowerCase();
    }

    // Must update at least one content field
    if (Object.keys(updates).length <= 1) {
      return NextResponse.json(
        { error: 'At least one field to update must be provided.' },
        { status: 400 }
      );
    }

    // 4. Execute Update via supabaseAdmin (service_role)
    const { data, error } = await supabaseAdmin
      .from('content_pages')
      .update(updates)
      .eq('id', id)
      .select('id, title, slug, content, meta_title, meta_description, status, updated_at')
      .maybeSingle();

    if (error) {
      console.error('[PATCH /api/seo/content] Database update error:', error.code);
      return NextResponse.json(
        { error: 'Failed to update content page in database.' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Content page not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Content page updated successfully.',
      page: data,
    });
  } catch (error: any) {
    console.error('[PATCH /api/seo/content] Unexpected error:', error?.message);
    return NextResponse.json(
      { error: 'Internal server error while updating content.' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/seo/content
 * 
 * Authenticated server-side API route for deleting a content page.
 * Replaces direct browser DELETE operations.
 * Executes parent deletion as a single database operation and verifies row deletion count.
 * Returns 404 if not found, or 409 Conflict if foreign-key dependencies restrict deletion.
 */
export async function DELETE(req: Request) {
  try {
    // 1. IP Rate Limiting (20 deletes/min)
    const rateLimitResponse = await checkRateLimit(req, 20, 60 * 1000);
    if (rateLimitResponse) return rateLimitResponse;

    // 2. Administrative Authentication
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 3. Extract and Validate ID from query string or body
    const { searchParams } = new URL(req.url);
    let targetId = searchParams.get('id');

    if (!targetId) {
      const body = await req.json().catch(() => null);
      if (body && typeof body === 'object' && body.id) {
        targetId = body.id;
      }
    }

    if (!targetId || typeof targetId !== 'string' || !UUID_REGEX.test(targetId)) {
      return NextResponse.json(
        { error: 'Invalid or missing content page ID to delete (must be a valid UUID).' },
        { status: 400 }
      );
    }

    // 4. Single-Operation Deletion with Verification
    // Do not delete child records first. Delete parent directly and verify row count.
    const { data: deletedRows, error: pageError } = await supabaseAdmin
      .from('content_pages')
      .delete()
      .eq('id', targetId)
      .select('id');

    if (pageError) {
      // Check for foreign-key constraint violation (Postgres error 23503)
      if (pageError.code === '23503') {
        console.warn(`[DELETE /api/seo/content] Foreign key restriction prevents deletion of page ${targetId}:`, pageError.message);
        return NextResponse.json(
          { 
            error: 'Conflict: Cannot delete content page because dependent records (such as media sync) reference it. A database cascade constraint or routine is required.',
            code: 'FOREIGN_KEY_VIOLATION'
          },
          { status: 409 }
        );
      }

      console.error('[DELETE /api/seo/content] Database deletion error:', pageError.code);
      return NextResponse.json(
        { error: 'Failed to delete content page from database.' },
        { status: 500 }
      );
    }

    // Verify that a parent row was actually found and deleted
    if (!deletedRows || deletedRows.length === 0) {
      return NextResponse.json(
        { error: 'Content page not found or already deleted.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Content page deleted successfully.',
      deletedId: targetId,
    });
  } catch (error: any) {
    console.error('[DELETE /api/seo/content] Unexpected error:', error?.message);
    return NextResponse.json(
      { error: 'Internal server error while deleting content.' },
      { status: 500 }
    );
  }
}

