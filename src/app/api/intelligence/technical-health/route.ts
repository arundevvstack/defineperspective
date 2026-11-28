import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getTechnicalSeoAudit } from '@/lib/intelligence/technical-seo-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const audit = getTechnicalSeoAudit();
  return NextResponse.json(audit);
}

