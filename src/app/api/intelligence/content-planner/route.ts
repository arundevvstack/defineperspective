import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getContentOpportunities, updateOpportunityStatus } from '@/lib/intelligence/content-opportunity-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const opportunities = getContentOpportunities();
  return NextResponse.json({
    totalCount: opportunities.length,
    approvedCount: opportunities.filter(o => o.reviewStatus === 'APPROVED').length,
    pendingApprovalCount: opportunities.filter(o => o.reviewStatus === 'PENDING_HUMAN_APPROVAL').length,
    opportunities
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const { id, reviewStatus } = await req.json();
    if (!id || !reviewStatus) {
      return NextResponse.json({ error: 'Missing id or reviewStatus' }, { status: 400 });
    }

    const updated = updateOpportunityStatus(id, reviewStatus);
    if (!updated) {
      return NextResponse.json({ error: 'Opportunity not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, opportunity: updated });
  } catch {
    return NextResponse.json({ error: 'Failed to update opportunity status' }, { status: 500 });
  }
}

