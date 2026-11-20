import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { uploadProjectMedia } from '@/app/actions/portfolio-cms';

/**
 * POST /api/portfolio/upload
 * Admin only: Uploads media (images/videos) to the private portfolio media vault.
 * Validates MIME types (JPEG, PNG, WebP, AVIF, MP4, WebM) and max size (50MB).
 */
export async function POST(req: Request) {
  try {
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    const formData = await req.formData();
    const result = await uploadProjectMedia(formData);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(
      {
        data: {
          url: result.url,
          storagePath: result.storagePath,
          isPrivateVault: result.isPrivateVault,
        },
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
