import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import {
  getProjectById,
  mutateProject,
  deleteDraftProject,
  setProjectPublishStatus,
} from '@/app/actions/portfolio-cms';
import {
  MutateProjectInput,
  parsePortfolioStatus,
  sanitizePublicPortfolioProject,
} from '@/types/portfolio-cms';

interface RouteContext {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/portfolio/[id]
 * Retrieves project by ID.
 * Admin: Can view any project regardless of status.
 * Public: Restricted strictly to publicly_published AND robots_index=true.
 *         Confidential client names are sanitized. Non-matching projects return 404
 *         to prevent enumeration of internal drafts/reviews/archived records.
 */
export async function GET(req: Request, props: RouteContext) {
  try {
    const { id } = await props.params;
    if (!id) {
      return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
    }

    const result = await getProjectById(id);
    if (!result.success || !result.data) {
      return NextResponse.json({ error: result.error || 'Project not found' }, { status: 404 });
    }

    const project = result.data;

    // Check admin authorization
    const auth = await assertAdminApi(req);
    if (auth.authorized) {
      return NextResponse.json({ data: project }, { status: 200 });
    }

    // Public view: strictly restricted to publicly_published AND robots_index=true
    if (project.status === 'publicly_published' && project.robots_index === true) {
      return NextResponse.json(
        { data: sanitizePublicPortfolioProject(project) },
        { status: 200 }
      );
    }

    // Fail closed: Return 404 for drafts, in-review, approved, or archived projects to non-admins
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * PUT /api/portfolio/[id]
 * Admin only: Mutate project details or transition publishing lifecycle status.
 */
export async function PUT(req: Request, props: RouteContext) {
  try {
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    const { id } = await props.params;
    if (!id) {
      return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
    }

    const body = await req.json();

    // Check if this is a status transition request
    if (body.action === 'status_transition') {
      const parsed = parsePortfolioStatus(body.status);
      if (!parsed.success || !parsed.status) {
        return NextResponse.json({ error: parsed.error }, { status: 400 });
      }
      const notes = typeof body.audit_notes === 'string' ? body.audit_notes : undefined;
      const statusResult = await setProjectPublishStatus(id, parsed.status, notes);

      if (!statusResult.success) {
        return NextResponse.json({ error: statusResult.error }, { status: 400 });
      }

      return NextResponse.json({ success: true, status: statusResult.status }, { status: 200 });
    }

    // Standard mutation
    const mutationInput = body as MutateProjectInput;
    if (mutationInput.status !== undefined) {
      const parsed = parsePortfolioStatus(mutationInput.status);
      if (!parsed.success || !parsed.status) {
        return NextResponse.json({ error: parsed.error }, { status: 400 });
      }
      mutationInput.status = parsed.status;
    }
    const mutateResult = await mutateProject(id, mutationInput);

    if (!mutateResult.success) {
      return NextResponse.json({ error: mutateResult.error }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, id },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * PATCH /api/portfolio/[id]
 * Alias for PUT mutation handler.
 */
export const PATCH = PUT;

/**
 * DELETE /api/portfolio/[id]
 * Admin only: Delete draft project. Cannot delete published project.
 */
export async function DELETE(req: Request, props: RouteContext) {
  try {
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    const { id } = await props.params;
    if (!id) {
      return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
    }

    const result = await deleteDraftProject(id);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
