import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { assertAdminApi } from '@/lib/api-security';

export const dynamic = 'force-dynamic';

interface RouteContext {
  params: Promise<{ path: string[] }>;
}

const APPROVED_MIME_TYPES: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  avif: 'image/avif',
  mp4: 'video/mp4',
  webm: 'video/webm',
};

/**
 * GET /api/portfolio/media/[...path]
 *
 * Permanent, branded, secure media delivery route for Define Perspective Portfolio CMS.
 * Streams assets from the private 'portfolio-media-vault' bucket.
 *
 * Security & Governance Rules:
 * 1. Path traversal is strictly rejected (400 Bad Request).
 * 2. Path must resolve within uploads/ with an approved extension.
 * 3. Public requests are authorized ONLY if the asset belongs to a currently eligible
 *    published project (status = 'publicly_published' AND robots_index = true).
 * 4. Administrator requests with a valid dp_admin_session can preview draft media (status = 200/206).
 * 5. Requests for draft assets without admin authorization fail closed with 404 Not Found
 *    (preventing enumeration or leakage of private assets).
 * 6. Supports HTTP Range requests (status 206) for video scrubbing (MP4/WebM).
 * 7. Caching Policy:
 *    - Published assets: Cache-Control: public, max-age=3600, s-maxage=86400, stale-while-revalidate=3600
 *    - Preview/draft assets: Cache-Control: private, no-store, no-cache, must-revalidate
 */
export async function GET(req: NextRequest, props: RouteContext) {
  try {
    const { path: pathSegments } = await props.params;

    if (!pathSegments || pathSegments.length === 0) {
      return new Response('Not Found', { status: 404 });
    }

    // Path normalization & security validation
    const rawPath = pathSegments.join('/');

    // 1. Path traversal guard
    if (
      rawPath.includes('..') ||
      rawPath.includes('//') ||
      rawPath.includes('\\') ||
      rawPath.includes('\0') ||
      /[<>:"|?*]/.test(rawPath)
    ) {
      return new Response('Invalid media path', {
        status: 400,
        headers: { 'X-Content-Type-Options': 'nosniff' },
      });
    }

    // 2. Extension & MIME validation
    const extMatch = rawPath.match(/\.([a-zA-Z0-9]+)$/);
    if (!extMatch) {
      return new Response('Missing file extension', {
        status: 400,
        headers: { 'X-Content-Type-Options': 'nosniff' },
      });
    }

    const ext = extMatch[1].toLowerCase();
    const mimeType = APPROVED_MIME_TYPES[ext];
    if (!mimeType) {
      return new Response('Unsupported Media Type', {
        status: 415,
        headers: { 'X-Content-Type-Options': 'nosniff' },
      });
    }

    const storagePath = rawPath.startsWith('uploads/') ? rawPath : `uploads/${rawPath}`;

    // 3. Authorization check
    // Query published projects to check if this asset belongs to any active public project
    const { data: publishedProjects, error: queryError } = await supabaseAdmin
      .from('portfolio_projects')
      .select('id, hero_image_url, thumbnail_url, video_url, gallery_images')
      .eq('status', 'publicly_published')
      .eq('robots_index', true);

    let isPublished = false;
    if (!queryError && publishedProjects && publishedProjects.length > 0) {
      isPublished = publishedProjects.some((p) => {
        if (p.hero_image_url && p.hero_image_url.includes(storagePath)) return true;
        if (p.thumbnail_url && p.thumbnail_url.includes(storagePath)) return true;
        if (p.video_url && p.video_url.includes(storagePath)) return true;
        if (Array.isArray(p.gallery_images)) {
          return (p.gallery_images as Array<{ storage_path?: string; url?: string }>).some(
            (g) => g?.storage_path === storagePath || (g?.url && g.url.includes(storagePath))
          );
        }
        return false;
      });
    }

    // If not published, check if requester is an authenticated administrator (Preview Mode)
    let isAdminAuthorized = false;
    if (!isPublished) {
      const auth = await assertAdminApi(req);
      if (auth.authorized) {
        isAdminAuthorized = true;
      }
    }

    // Fail closed: If neither publicly published nor admin authenticated, return 404
    if (!isPublished && !isAdminAuthorized) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'X-Content-Type-Options': 'nosniff' },
      });
    }

    // 4. Download asset from private portfolio-media-vault
    const { data: fileBlob, error: downloadError } = await supabaseAdmin.storage
      .from('portfolio-media-vault')
      .download(storagePath);

    if (downloadError || !fileBlob) {
      console.error('[media-route] storage download error for', storagePath, downloadError?.message);
      return new Response('Not Found', {
        status: 404,
        headers: { 'X-Content-Type-Options': 'nosniff' },
      });
    }

    // 5. Cache control with revocation strategy
    const cacheControl = isPublished
      ? 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=3600'
      : 'private, no-store, no-cache, must-revalidate';

    const arrayBuffer = await fileBlob.arrayBuffer();
    const totalLength = arrayBuffer.byteLength;
    const rangeHeader = req.headers.get('range');

    // 6. HTTP Range Requests (RFC 7233) for video/media streaming
    if (rangeHeader && (mimeType.startsWith('video/') || mimeType.startsWith('audio/'))) {
      const matches = rangeHeader.match(/bytes=(\d+)-(\d*)/);
      if (matches) {
        const start = parseInt(matches[1], 10);
        const end = matches[2] ? parseInt(matches[2], 10) : totalLength - 1;

        if (start >= totalLength || end >= totalLength || start > end) {
          return new Response('Requested Range Not Satisfiable', {
            status: 416,
            headers: {
              'Content-Range': `bytes */${totalLength}`,
              'Accept-Ranges': 'bytes',
              'X-Content-Type-Options': 'nosniff',
            },
          });
        }

        const chunk = arrayBuffer.slice(start, end + 1);
        return new Response(chunk, {
          status: 206,
          headers: {
            'Content-Type': mimeType,
            'Content-Range': `bytes ${start}-${end}/${totalLength}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': String(chunk.byteLength),
            'Cache-Control': cacheControl,
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'SAMEORIGIN',
          },
        });
      }
    }

    // 7. Full file response
    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Length': String(totalLength),
        'Accept-Ranges': 'bytes',
        'Cache-Control': cacheControl,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[media-route] unexpected error:', message);
    return new Response('Internal Server Error', { status: 500 });
  }
}

/**
 * HEAD /api/portfolio/media/[...path]
 * Allows clients to query headers (MIME type, content length, range support) without downloading payload.
 */
export async function HEAD(req: NextRequest, props: RouteContext) {
  const getRes = await GET(req, props);
  return new Response(null, {
    status: getRes.status,
    headers: getRes.headers,
  });
}
