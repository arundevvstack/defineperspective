import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import {
  getProjects,
  createProject,
  getPublicPublishedProjects,
} from '@/app/actions/portfolio-cms';
import {
  CreatePortfolioProjectInput,
  PortfolioCategory,
  PortfolioProjectStatus,
  parsePortfolioStatus,
  sanitizePublicPortfolioProject,
} from '@/types/portfolio-cms';

/**
 * GET /api/portfolio
 * Public: Returns published portfolio projects (restricted to publicly_published AND robots_index=true).
 * Admin: If authenticated as admin and `all=true` or status filter provided, returns admin list.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const isAdminView = searchParams.get('all') === 'true' || searchParams.has('status');

    if (isAdminView) {
      const auth = await assertAdminApi(req);
      if (!auth.authorized) {
        return auth.response;
      }

      const rawStatus = searchParams.get('status');
      let status: PortfolioProjectStatus | undefined = undefined;
      if (rawStatus && rawStatus !== 'all') {
        const parsed = parsePortfolioStatus(rawStatus);
        if (!parsed.success || !parsed.status) {
          return NextResponse.json({ error: parsed.error }, { status: 400 });
        }
        status = parsed.status;
      }
      const category = searchParams.get('category') as PortfolioCategory | null;
      const search = searchParams.get('search') || undefined;

      const result = await getProjects({
        status,
        category: category || undefined,
        search,
      });

      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }

      return NextResponse.json({ data: result.data, count: result.count }, { status: 200 });
    }

    // Public view: published and indexed projects only (confidential client data sanitized)
    const category = searchParams.get('category') as PortfolioCategory | null;
    const projects = await getPublicPublishedProjects(category || undefined);

    return NextResponse.json(
      { data: projects.map(sanitizePublicPortfolioProject) },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * POST /api/portfolio
 * Admin only: Create a new portfolio project draft.
 */
export async function POST(req: Request) {
  try {
    const auth = await assertAdminApi(req);
    if (!auth.authorized) {
      return auth.response;
    }

    const body = (await req.json()) as CreatePortfolioProjectInput;
    if (!body || !body.title || !body.slug || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, and category are required' },
        { status: 400 }
      );
    }

    const result = await createProject(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, project_id: result.project_id, slug: result.slug },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
