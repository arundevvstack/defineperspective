import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getChangeProposals, proposeChange, approveChangeProposal, rejectChangeProposal } from '@/lib/intelligence/change-governance-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const proposals = getChangeProposals();
  return NextResponse.json({
    totalCount: proposals.length,
    pendingReviewCount: proposals.filter(p => p.approvalStatus === 'PENDING_REVIEW').length,
    approvedCount: proposals.filter(p => p.approvalStatus === 'APPROVED').length,
    proposals
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const body = await req.json();
    const { action, actionId } = body;

    if (action === 'APPROVE' && actionId) {
      const approved = approveChangeProposal(actionId, 'Admin Operator');
      if (!approved) return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
      return NextResponse.json({ success: true, proposal: approved });
    }

    if (action === 'REJECT' && actionId) {
      const rejected = rejectChangeProposal(actionId, 'Admin Operator');
      if (!rejected) return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
      return NextResponse.json({ success: true, proposal: rejected });
    }

    if (action === 'PROPOSE') {
      const created = proposeChange(body.proposal);
      return NextResponse.json({ success: true, proposal: created }, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Failed to process governance action' }, { status: 500 });
  }
}

