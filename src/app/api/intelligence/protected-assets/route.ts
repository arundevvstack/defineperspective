import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getProtectedAssets, toggleAssetLock } from '@/lib/intelligence/protected-assets-registry';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const assets = getProtectedAssets();
  return NextResponse.json({
    totalCount: assets.length,
    flagshipCount: assets.filter(a => a.protectionTier === 'FLAGSHIP_CORE').length,
    lockedCount: assets.filter(a => a.isLocked).length,
    assets
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const { id, isLocked } = await req.json();
    if (!id || typeof isLocked !== 'boolean') {
      return NextResponse.json({ error: 'Missing id or boolean isLocked parameter' }, { status: 400 });
    }

    const result = toggleAssetLock(id, isLocked, auth.session?.role || 'admin_token');
    if (!result.success) {
      return NextResponse.json({ error: result.error || 'Failed to update asset lock state' }, { status: 403 });
    }

    return NextResponse.json({ success: true, asset: result.asset });
  } catch {
    return NextResponse.json({ error: 'Failed to update asset lock state' }, { status: 500 });
  }
}

