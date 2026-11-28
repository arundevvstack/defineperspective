import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { transitionRecommendationStatus } from '@/lib/intelligence/recommendations-engine';

export async function POST(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const { id } = await props.params;

  try {
    const body = await req.json();
    const { action, operatorNotes } = body;

    if (!action || !['APPROVE', 'REJECT', 'START_REVIEW', 'MARK_EXECUTED'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action. Must be APPROVE, REJECT, START_REVIEW, or MARK_EXECUTED.' },
        { status: 400 }
      );
    }

    const updated = transitionRecommendationStatus(id, action, operatorNotes);
    if (!updated) {
      return NextResponse.json(
        { error: `Recommendation ${id} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      recommendation: updated,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process recommendation action.' },
      { status: 500 }
    );
  }
}
