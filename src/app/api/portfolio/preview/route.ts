import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { assertAdminApi } from '@/lib/api-security';
import { getAdminPreviewProject } from '@/app/actions/portfolio-cms';

/**
 * Validates and sanitizes internal redirect URLs.
 * Strictly enforces safe relative internal paths starting with a single '/'.
 * Rejects protocol-relative URLs (//), backslashes, external URLs, CRLF, and malformed paths.
 */
function getSafeInternalRedirect(rawPath: string | null | undefined, defaultPath: string = '/portfolio'): string {
  if (!rawPath || typeof rawPath !== 'string') {
    return defaultPath;
  }

  const trimmed = rawPath.trim();

  // Must begin with a single '/' and never '//' (protocol-relative) or '/\'
  if (!trimmed.startsWith('/') || trimmed.startsWith('//') || trimmed.startsWith('/\\')) {
    return defaultPath;
  }

  // Must not contain backslashes or CRLF injection characters
  if (trimmed.includes('\\') || /[\r\n]/.test(trimmed)) {
    return defaultPath;
  }

  try {
    const parsed = new URL(trimmed, 'https://defineperspective.in');
    if (parsed.origin !== 'https://defineperspective.in') {
      return defaultPath;
    }
    return parsed.pathname + parsed.search;
  } catch {
    return defaultPath;
  }
}

/**
 * GET /api/portfolio/preview
 * Dedicated administrator-only preview endpoint.
 *
 * Requirements:
 * - Validates administrator authentication via existing assertAdminApi (401 on failure).
 * - Validates query parameter identifier (id or slug).
 * - Fetches project using server-side access layer with archived exclusion.
 * - Enables Next.js Draft Mode only upon verified authorization.
 * - Redirects to /portfolio/[slug].
 */
export async function GET(req: Request) {
  try {
    // 1. Mandatory administrator session validation
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    // 2. Validate query identifier or exit draft mode request
    const { searchParams } = new URL(req.url);
    if (searchParams.get('disable') === 'true' || searchParams.get('exit') === 'true') {
      const draft = await draftMode();
      draft.disable();
      const defaultRedirect = searchParams.get('slug') ? `/portfolio/${searchParams.get('slug')}` : '/portfolio';
      const redirectPath = getSafeInternalRedirect(searchParams.get('redirect'), defaultRedirect);
      redirect(redirectPath);
    }

    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    const identifier = id || slug;

    if (!identifier) {
      return NextResponse.json(
        { error: 'Missing required query parameter: id or slug is required.' },
        { status: 400 }
      );
    }

    // 3. Fetch project via trusted server-side access layer
    const result = await getAdminPreviewProject(identifier);
    if (!result.success || !result.data) {
      const isArchived = result.error?.startsWith('ARCHIVED_PROJECT');
      return NextResponse.json(
        { error: result.error || 'Project not found' },
        { status: isArchived ? 403 : 404 }
      );
    }

    const project = result.data;

    // 4. Enable temporary Next.js Draft Mode
    const draft = await draftMode();
    draft.enable();

    // 5. Redirect to dynamic portfolio slug route
    redirect(`/portfolio/${project.slug}`);
  } catch (err: unknown) {
    // Next.js redirect() throws a NEXT_REDIRECT error which must be re-thrown
    if (err && typeof err === 'object' && 'digest' in err && typeof (err as { digest: string }).digest === 'string' && (err as { digest: string }).digest.startsWith('NEXT_REDIRECT')) {
      throw err;
    }
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
