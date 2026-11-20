"use server";

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { verifySession, SessionPayload } from '@/lib/session';
import { createSignedAssertion } from '@/lib/portfolio-cms-crypto';
import {
  PortfolioProject,
  PortfolioProjectStatus,
  PortfolioCategory,
  CreateProjectInput,
  MutateProjectInput,
  isValidSlug,
  isReservedSlug,
  isValidCanonicalUrl,
  normalizePortfolioCategory,
  normalizePortfolioVideoType,
  normalizePortfolioSchemaType,
  parsePortfolioStatus,
  validateStatusTransition,
  sanitizePublicPortfolioProject,
} from '@/types/portfolio-cms';

// ==============================================================================
// AUTHENTICATION GUARD
// ==============================================================================
async function assertAdminSession(): Promise<SessionPayload> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('dp_admin_session')?.value;
  const session = verifySession(sessionCookie);

  if (!session || session.role !== 'admin') {
    throw new Error('UNAUTHORIZED: Valid administrator session is required for CMS operations.');
  }

  return session;
}

/**
 * Evaluates whether an RPC error definitively indicates that the stored procedure
 * is missing from the database catalog (unapplied migration).
 *
 * Permitted fallback error codes:
 * - 'PGRST202': PostgREST schema cache function lookup failure (function does not exist)
 * - '42883': PostgreSQL native undefined_function error code
 *
 * Strictly rejects fallback on:
 * - 'P0001': plpgsql raise_exception (cryptographic violation, replay, expiry, signature mismatch)
 * - '42501': insufficient_privilege
 * - Any other execution, transaction, or constraint error
 */
function isRpcFunctionMissing(error: { code?: string } | null): boolean {
  if (!error || !error.code) return false;
  return error.code === 'PGRST202' || error.code === '42883';
}

// ==============================================================================
// ERROR CLASSIFICATION & SANITIZATION (Imported from pure utility module)
// ==============================================================================
import {
  type PortfolioErrorType,
  classifyPortfolioError,
} from '@/lib/portfolio-cms-errors';

export type { PortfolioErrorType };

// ==============================================================================
// 1. ADMIN QUERY: LIST PROJECTS
// ==============================================================================
export interface GetProjectsFilter {
  status?: PortfolioProjectStatus | 'all';
  category?: PortfolioCategory | 'all';
  search?: string;
  limit?: number;
  offset?: number;
}

export async function getProjects(filter?: GetProjectsFilter) {
  const controller = new AbortController();
  const timeoutMs = 3500;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    await assertAdminSession();

    let query = supabaseAdmin
      .from('portfolio_projects')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .abortSignal(controller.signal);

    if (filter?.status && filter.status !== 'all') {
      const parsedStatus = parsePortfolioStatus(filter.status);
      if (!parsedStatus.success || !parsedStatus.status) {
        return {
          success: false,
          errorType: 'DATABASE_CONSTRAINT_VIOLATION' as PortfolioErrorType,
          error: parsedStatus.error || 'Invalid status filter',
          data: [] as PortfolioProject[],
          count: 0,
        };
      }
      query = query.eq('status', parsedStatus.status);
    }

    if (filter?.category && filter.category !== 'all') {
      query = query.eq('category', filter.category);
    }

    if (filter?.search && filter.search.trim()) {
      query = query.ilike('title', `%${filter.search.trim()}%`);
    }

    const limit = filter?.limit || 50;
    const offset = filter?.offset || 0;
    query = query.range(offset, offset + limit - 1);

    const { data, count, error } = await query;

    if (error) {
      const classified = classifyPortfolioError(error, controller.signal.aborted);
      console.error('[portfolio-cms] getProjects error:', classified.errorType, classified.sanitizedMessage);
      return {
        success: false,
        errorType: classified.errorType,
        error: classified.sanitizedMessage,
        data: [] as PortfolioProject[],
        count: 0,
      };
    }

    // Absolute guarantee: an aborted query can NEVER return a successful empty list
    if (controller.signal.aborted) {
      const classified = classifyPortfolioError(null, true);
      return {
        success: false,
        errorType: classified.errorType,
        error: classified.sanitizedMessage,
        data: [] as PortfolioProject[],
        count: 0,
      };
    }

    return {
      success: true,
      errorType: 'NONE' as PortfolioErrorType,
      data: (data || []) as PortfolioProject[],
      count: count || 0,
    };
  } catch (err: unknown) {
    const classified = classifyPortfolioError(err, controller.signal.aborted);
    return {
      success: false,
      errorType: classified.errorType,
      error: classified.sanitizedMessage,
      data: [] as PortfolioProject[],
      count: 0,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

// ==============================================================================
// 2. ADMIN QUERY: GET SINGLE PROJECT BY ID
// ==============================================================================
export async function getProjectById(id: string) {
  const controller = new AbortController();
  const timeoutMs = 3500;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    await assertAdminSession();

    const { data, error } = await supabaseAdmin
      .from('portfolio_projects')
      .select('*')
      .eq('id', id)
      .abortSignal(controller.signal)
      .single();

    if (error) {
      const classified = classifyPortfolioError(error, controller.signal.aborted);
      return { success: false, errorType: classified.errorType, error: classified.sanitizedMessage, data: null };
    }

    if (controller.signal.aborted) {
      const classified = classifyPortfolioError(null, true);
      return { success: false, errorType: classified.errorType, error: classified.sanitizedMessage, data: null };
    }

    return { success: true, errorType: 'NONE' as PortfolioErrorType, data: data as PortfolioProject };
  } catch (err: unknown) {
    const classified = classifyPortfolioError(err, controller.signal.aborted);
    return { success: false, errorType: classified.errorType, error: classified.sanitizedMessage, data: null };
  } finally {
    clearTimeout(timeoutId);
  }
}

// ==============================================================================
// 3. ADMIN MUTATION: CREATE PROJECT
// ==============================================================================
export async function createProject(input: CreateProjectInput) {
  try {
    const session = await assertAdminSession();

    const slug = input.slug.toLowerCase().trim();

    // 1. Slug format validation
    if (!isValidSlug(slug)) {
      return {
        success: false,
        error: 'VALIDATION_FAILED: Slug must be 2-100 characters, lowercase alphanumeric with hyphens only.',
      };
    }

    // 2. Reserved static slug protection
    if (isReservedSlug(slug)) {
      return {
        success: false,
        error: `RESERVED_SLUG_CONFLICT: Slug "${slug}" is permanently reserved for existing bespoke static portfolio routes or system endpoints.`,
      };
    }

    // 3. Construct payload strictly matching V14.9 fn_portfolio_create_project whitelist
    const rpcPayload: Record<string, unknown> = {
      title: input.title.trim(),
      slug,
      category: normalizePortfolioCategory(input.category),
      internal_client_name: input.internal_client_name?.trim() || null,
      is_client_confidential: Boolean(input.is_client_confidential),
      public_client_display_name: input.public_client_display_name?.trim() || null,
      client_website: input.client_website?.trim() || null,
      production_year: input.production_year || new Date().getFullYear(),
      project_overview: input.project_overview?.trim() || null,
      creative_concept: input.creative_concept?.trim() || null,
      production_approach: input.production_approach?.trim() || null,
      services_delivered: input.services_delivered || [],
      production_techniques: input.production_techniques || [],
      deliverables: input.deliverables || [],
      production_location: input.production_location?.trim() || null,
      geo_entities: input.geo_entities || [],
      measured_results: input.measured_results?.trim() || null,
      hero_image_url: input.hero_image_url?.trim() || null,
      thumbnail_url: input.thumbnail_url?.trim() || null,
      gallery_images: input.gallery_images || [],
      video_type: normalizePortfolioVideoType(input.video_type),
      video_id: input.video_id?.trim() || null,
      video_url: input.video_url?.trim() || null,
      video_embed_url: input.video_embed_url?.trim() || null,
      video_thumbnail_url: input.video_thumbnail_url?.trim() || null,
      video_duration: input.video_duration?.trim() || null,
      video_transcript: input.video_transcript?.trim() || null,
      seo_title: input.seo_title?.trim() || null,
      seo_description: input.seo_description?.trim() || null,
      canonical_override: input.canonical_override?.trim() || null,
      is_canonical_override_approved: Boolean(input.is_canonical_override_approved),
      focus_keywords: input.focus_keywords || [],
      og_title: input.og_title?.trim() || null,
      og_description: input.og_description?.trim() || null,
      og_image_url: input.og_image_url?.trim() || null,
      schema_type: normalizePortfolioSchemaType(input.schema_type),
      verified_credits: input.verified_credits || [],
      approval_notes: input.approval_notes?.trim() || null,
    };

    // 4. Attempt Cryptographic RPC first (V14.9 protocol)
    const assertion = createSignedAssertion(session.role, 'admin', rpcPayload);

    const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc(
      'fn_portfolio_create_project',
      {
        p_signed_assertion: assertion,
        p_payload: rpcPayload,
      }
    );

    if (!rpcError && (rpcData?.id || rpcData?.project_id)) {
      revalidatePath('/admin/portfolio');
      return {
        success: true,
        project_id: rpcData.id || rpcData.project_id,
        slug: rpcData.slug || slug,
      };
    }

    // Strictly verify whether the RPC failure is genuinely due to an unapplied migration
    if (rpcError && !isRpcFunctionMissing(rpcError)) {
      console.error('[portfolio-cms] createProject RPC security/execution failure:', rpcError.code, rpcError.message);
      return {
        success: false,
        error: `RPC_MUTATION_FAILED: ${rpcError.message || 'Cryptographic assertion verification or database execution failed.'}`,
      };
    }

    // 5. Fallback: If RPC is not yet registered on current database instance, execute direct admin insert
    const insertPayload = {
      ...rpcPayload,
      canonical_url: `https://defineperspective.in/portfolio/${slug}`,
      status: 'draft' as PortfolioProjectStatus,
      robots_index: false,
      in_sitemap: false,
    };

    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('portfolio_projects')
      .insert([insertPayload])
      .select('id, slug')
      .single();

    if (insertError) {
      console.error('[portfolio-cms] createProject insert error:', insertError.message);
      return { success: false, error: insertError.message };
    }

    revalidatePath('/admin/portfolio');
    return { success: true, project_id: insertData.id, slug: insertData.slug };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return { success: false, error: message };
  }
}

// ==============================================================================
// 4. ADMIN MUTATION: UPDATE/MUTATE PROJECT
// ==============================================================================
export async function mutateProject(projectId: string, input: MutateProjectInput) {
  try {
    const session = await assertAdminSession();

    // 1. Fetch current project to verify publication immutability
    const { data: existing, error: fetchError } = await supabaseAdmin
      .from('portfolio_projects')
      .select('id, slug, has_ever_been_published, status')
      .eq('id', projectId)
      .single();

    if (fetchError || !existing) {
      return { success: false, error: 'Project not found' };
    }

    // 2. Validate slug immutability if slug is modified
    if (input.slug) {
      const newSlug = input.slug.toLowerCase().trim();
      if (!isValidSlug(newSlug)) {
        return {
          success: false,
          error: 'VALIDATION_FAILED: Slug must be 2-100 characters, lowercase alphanumeric with hyphens only.',
        };
      }
      if (isReservedSlug(newSlug)) {
        return {
          success: false,
          error: `RESERVED_SLUG_CONFLICT: Slug "${newSlug}" is permanently reserved.`,
        };
      }
      if (existing.has_ever_been_published && newSlug !== existing.slug) {
        return {
          success: false,
          error: 'IMMUTABILITY_VIOLATION: Slug cannot be modified because this project was previously published to production.',
        };
      }
    }

    // 3. Canonical URL override validation
    if (input.canonical_override && !isValidCanonicalUrl(input.canonical_override)) {
      return {
        success: false,
        error: 'VALIDATION_FAILED: Canonical override must be a secure defineperspective.in URL matching approved structure.',
      };
    }

    // 4. Status validation & lifecycle transition governance
    let validatedStatus: PortfolioProjectStatus | undefined = undefined;
    if (input.status !== undefined) {
      const parsed = parsePortfolioStatus(input.status);
      if (!parsed.success || !parsed.status) {
        return { success: false, error: parsed.error || 'Invalid project status' };
      }
      const transitionCheck = validateStatusTransition(existing.status, parsed.status);
      if (!transitionCheck.valid) {
        return { success: false, error: transitionCheck.error };
      }
      validatedStatus = parsed.status;
    }

    const updates: Record<string, unknown> = {
      ...(input.title !== undefined && { title: input.title.trim() }),
      ...(input.slug !== undefined && { slug: input.slug.toLowerCase().trim() }),
      ...(input.category !== undefined && { category: normalizePortfolioCategory(input.category) }),
      ...(input.internal_client_name !== undefined && { internal_client_name: input.internal_client_name?.trim() || null }),
      ...(input.is_client_confidential !== undefined && { is_client_confidential: Boolean(input.is_client_confidential) }),
      ...(input.public_client_display_name !== undefined && { public_client_display_name: input.public_client_display_name?.trim() || null }),
      ...(input.client_website !== undefined && { client_website: input.client_website?.trim() || null }),
      ...(input.production_year !== undefined && { production_year: input.production_year }),
      ...(input.project_overview !== undefined && { project_overview: input.project_overview?.trim() || null }),
      ...(input.creative_concept !== undefined && { creative_concept: input.creative_concept?.trim() || null }),
      ...(input.production_approach !== undefined && { production_approach: input.production_approach?.trim() || null }),
      ...(input.services_delivered !== undefined && { services_delivered: input.services_delivered }),
      ...(input.production_techniques !== undefined && { production_techniques: input.production_techniques }),
      ...(input.deliverables !== undefined && { deliverables: input.deliverables }),
      ...(input.production_location !== undefined && { production_location: input.production_location?.trim() || null }),
      ...(input.geo_entities !== undefined && { geo_entities: input.geo_entities }),
      ...(input.measured_results !== undefined && { measured_results: input.measured_results?.trim() || null }),
      ...(input.hero_image_url !== undefined && { hero_image_url: input.hero_image_url?.trim() || null }),
      ...(input.thumbnail_url !== undefined && { thumbnail_url: input.thumbnail_url?.trim() || null }),
      ...(input.gallery_images !== undefined && { gallery_images: input.gallery_images }),
      ...(input.video_type !== undefined && { video_type: normalizePortfolioVideoType(input.video_type) }),
      ...(input.video_id !== undefined && { video_id: input.video_id?.trim() || null }),
      ...(input.video_url !== undefined && { video_url: input.video_url?.trim() || null }),
      ...(input.video_embed_url !== undefined && { video_embed_url: input.video_embed_url?.trim() || null }),
      ...(input.video_thumbnail_url !== undefined && { video_thumbnail_url: input.video_thumbnail_url?.trim() || null }),
      ...(input.video_duration !== undefined && { video_duration: input.video_duration?.trim() || null }),
      ...(input.video_transcript !== undefined && { video_transcript: input.video_transcript?.trim() || null }),
      ...(input.seo_title !== undefined && { seo_title: input.seo_title?.trim() || null }),
      ...(input.seo_description !== undefined && { seo_description: input.seo_description?.trim() || null }),
      ...(input.canonical_override !== undefined && { canonical_override: input.canonical_override?.trim() || null }),
      ...(input.is_canonical_override_approved !== undefined && { is_canonical_override_approved: Boolean(input.is_canonical_override_approved) }),
      ...(input.focus_keywords !== undefined && { focus_keywords: input.focus_keywords }),
      ...(input.og_title !== undefined && { og_title: input.og_title?.trim() || null }),
      ...(input.og_description !== undefined && { og_description: input.og_description?.trim() || null }),
      ...(input.og_image_url !== undefined && { og_image_url: input.og_image_url?.trim() || null }),
      ...(input.schema_type !== undefined && { schema_type: normalizePortfolioSchemaType(input.schema_type) }),
      ...(input.verified_credits !== undefined && { verified_credits: input.verified_credits }),
      ...(input.canonical_override !== undefined && { canonical_override: input.canonical_override?.trim() || null }),
      ...(input.is_canonical_override_approved !== undefined && { is_canonical_override_approved: Boolean(input.is_canonical_override_approved) }),
      ...(validatedStatus !== undefined && { status: validatedStatus }),
      ...(input.approval_notes !== undefined && { approval_notes: input.approval_notes?.trim() || null }),
    };

    // 4. Attempt Cryptographic RPC first (V14.9 protocol)
    const assertion = createSignedAssertion(session.role, 'admin', updates);
    const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc(
      'fn_portfolio_mutate_project',
      {
        p_signed_assertion: assertion,
        p_project_id: projectId,
        p_payload: updates,
      }
    );

    if (!rpcError && (rpcData?.id || rpcData?.success)) {
      revalidatePath('/admin/portfolio');
      revalidatePath('/portfolio');
      revalidatePath(`/portfolio/${existing.slug}`);
      return { success: true };
    }

    // Strictly verify whether the RPC failure is genuinely due to an unapplied migration
    if (rpcError && !isRpcFunctionMissing(rpcError)) {
      console.error('[portfolio-cms] updateProject RPC security/execution failure:', rpcError.code, rpcError.message);
      return {
        success: false,
        error: `RPC_MUTATION_FAILED: ${rpcError.message || 'Cryptographic assertion verification or database execution failed.'}`,
      };
    }

    // 5. Fallback: Direct admin update (includes updated_at)
    const directUpdates = {
      ...updates,
      updated_at: new Date().toISOString(),
    };

    const { error: updateError } = await supabaseAdmin
      .from('portfolio_projects')
      .update(directUpdates)
      .eq('id', projectId);

    if (updateError) {
      return { success: false, error: updateError.message };
    }

    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio');
    revalidatePath(`/portfolio/${existing.slug}`);
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return { success: false, error: message };
  }
}

// ==============================================================================
// 5. ADMIN MUTATION: SET PUBLISHING LIFECYCLE STATUS
// ==============================================================================
export async function setProjectPublishStatus(
  projectId: string,
  targetStatus: PortfolioProjectStatus,
  approvalNotes?: string
) {
  try {
    const session = await assertAdminSession();

    const { data: existing, error: fetchError } = await supabaseAdmin
      .from('portfolio_projects')
      .select('id, slug, status, has_ever_been_published, first_published_at')
      .eq('id', projectId)
      .single();

    if (fetchError || !existing) {
      return { success: false, error: 'Project not found' };
    }

    const parsedTarget = parsePortfolioStatus(targetStatus);
    if (!parsedTarget.success || !parsedTarget.status) {
      return { success: false, error: parsedTarget.error || 'Invalid target status' };
    }
    const normalizedTargetStatus = parsedTarget.status;

    // Validate lifecycle transition rules
    const transitionCheck = validateStatusTransition(existing.status, normalizedTargetStatus);
    if (!transitionCheck.valid) {
      return { success: false, error: transitionCheck.error };
    }

    // Short-circuit if status is unchanged
    if (existing.status === normalizedTargetStatus) {
      return { success: true, status: normalizedTargetStatus };
    }

    // 1. Attempt V14.9 RPC mutation first
    const rpcPayload: Record<string, unknown> = {
      status: normalizedTargetStatus,
      ...(approvalNotes?.trim() && { approval_notes: approvalNotes.trim() }),
    };
    const assertion = createSignedAssertion(session.role, 'admin', rpcPayload);
    const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc(
      'fn_portfolio_mutate_project',
      {
        p_signed_assertion: assertion,
        p_project_id: projectId,
        p_payload: rpcPayload,
      }
    );

    if (!rpcError && (rpcData?.id || rpcData?.success)) {
      revalidatePath('/admin/portfolio');
      revalidatePath('/portfolio');
      revalidatePath(`/portfolio/${existing.slug}`);
      return { success: true, status: normalizedTargetStatus };
    }

    // Strictly verify whether the RPC failure is genuinely due to an unapplied migration
    if (rpcError && !isRpcFunctionMissing(rpcError)) {
      console.error('[portfolio-cms] transitionProjectStatus RPC security/execution failure:', rpcError.code, rpcError.message);
      return {
        success: false,
        error: `RPC_MUTATION_FAILED: ${rpcError.message || 'Cryptographic assertion verification or database execution failed.'}`,
      };
    }

    // 2. Direct admin fallback update
    const now = new Date().toISOString();
    const isPublishing = normalizedTargetStatus === 'publicly_published';
    const isArchiving = normalizedTargetStatus === 'archived';

    const updates: Record<string, unknown> = {
      status: normalizedTargetStatus,
      updated_at: now,
      approval_notes: approvalNotes?.trim() || null,
      approved_by: session.role,
      approved_at: now,
    };

    if (isPublishing) {
      updates.published_at = now;
      updates.published_by = session.role;
      updates.has_ever_been_published = true;
      updates.robots_index = true;
      updates.in_sitemap = true;

      if (!existing.first_published_at) {
        updates.first_published_at = now;
        updates.first_published_by = session.role;
        updates.original_published_slug = existing.slug;
      }
    } else if (isArchiving || normalizedTargetStatus === 'draft' || normalizedTargetStatus === 'in_review') {
      updates.robots_index = false;
      updates.in_sitemap = false;
    }

    const { error: updateError } = await supabaseAdmin
      .from('portfolio_projects')
      .update(updates)
      .eq('id', projectId);

    if (updateError) {
      return { success: false, error: updateError.message };
    }

    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio');
    revalidatePath(`/portfolio/${existing.slug}`);

    return { success: true, status: normalizedTargetStatus };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return { success: false, error: message };
  }
}

// ==============================================================================
// 6. ADMIN MUTATION: PERMANENTLY DELETE DRAFT PROJECT
// ==============================================================================
export async function deleteDraftProject(projectId: string) {
  try {
    const session = await assertAdminSession();

    const { data: existing, error: fetchError } = await supabaseAdmin
      .from('portfolio_projects')
      .select('id, slug, status, has_ever_been_published')
      .eq('id', projectId)
      .single();

    if (fetchError || !existing) {
      return { success: false, error: 'Project not found' };
    }

    // Safety rule: Published projects can NEVER be deleted, only archived
    if (existing.has_ever_been_published) {
      return {
        success: false,
        error: 'SAFETY_VIOLATION: Projects that were previously published to production cannot be deleted. Archive the project instead.',
      };
    }

    if (existing.status !== 'draft') {
      return {
        success: false,
        error: 'SAFETY_VIOLATION: Only draft projects can be deleted.',
      };
    }

    // Attempt RPC first
    const assertion = createSignedAssertion(session.role, 'admin', { project_id: projectId });
    const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc(
      'fn_portfolio_delete_draft_project',
      {
        p_signed_assertion: assertion,
        p_project_id: projectId,
      }
    );

    if (!rpcError && rpcData?.success) {
      revalidatePath('/admin/portfolio');
      return { success: true };
    }

    // Strictly verify whether the RPC failure is genuinely due to an unapplied migration
    if (rpcError && !isRpcFunctionMissing(rpcError)) {
      console.error('[portfolio-cms] deleteProject RPC security/execution failure:', rpcError.code, rpcError.message);
      return {
        success: false,
        error: `RPC_MUTATION_FAILED: ${rpcError.message || 'Cryptographic assertion verification or database execution failed.'}`,
      };
    }

    // Direct delete fallback
    const { error: deleteError } = await supabaseAdmin
      .from('portfolio_projects')
      .delete()
      .eq('id', projectId);

    if (deleteError) {
      return { success: false, error: deleteError.message };
    }

    revalidatePath('/admin/portfolio');
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return { success: false, error: message };
  }
}

// ==============================================================================
// 7. ADMIN MEDIA MANAGEMENT: UPLOAD TO MEDIA VAULT
// ==============================================================================
const APPROVED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'video/mp4',
  'video/webm',
];
const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB (Supabase Free tier upload limit)

export async function uploadProjectMedia(formData: FormData) {
  try {
    await assertAdminSession();

    const file = formData.get('file') as File | null;
    if (!file) {
      return { success: false, error: 'No file provided in form data.' };
    }

    // File validation (rejects files exceeding 50 MB before contacting Supabase Storage)
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return {
        success: false,
        error: `FILE_TOO_LARGE: File size exceeds maximum limit of 50MB (${(file.size / (1024 * 1024)).toFixed(1)}MB provided).`,
      };
    }

    if (!APPROVED_MIME_TYPES.includes(file.type)) {
      return {
        success: false,
        error: `INVALID_MIME_TYPE: MIME type "${file.type}" is not supported. Approved: JPEG, PNG, WebP, AVIF, MP4, WebM.`,
      };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
    const cleanBasename = file.name
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .slice(0, 40);
    const storagePath = `uploads/${Date.now()}_${cleanBasename}.${ext}`;

    // Target private vault exclusively (FAIL CLOSED: Never silently expose private CMS assets to public buckets)
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('portfolio-media-vault')
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('[portfolio-cms] upload to portfolio-media-vault failed:', uploadError.message);
      return {
        success: false,
        error: `STORAGE_ERROR: Failed to upload to private portfolio-media-vault (${uploadError.message}). Fail-closed policy enforced.`,
      };
    }

    // For private media vault, generate 1-year signed URL for authenticated display
    const { data: signedData } = await supabaseAdmin.storage
      .from('portfolio-media-vault')
      .createSignedUrl(uploadData.path, 60 * 60 * 24 * 365); // 1 year

    // Permanent branded URL matching https://defineperspective.in/api/portfolio/media/${storagePath}
    const permanentUrl = `https://defineperspective.in/api/portfolio/media/${uploadData.path}`;

    return {
      success: true,
      url: permanentUrl,
      permanentUrl,
      signedUrl: signedData?.signedUrl,
      storagePath: uploadData.path,
      isPrivateVault: true,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return { success: false, error: message };
  }
}

// ==============================================================================
// 8. PUBLIC CMS QUERY: GET PUBLISHED PROJECT (Zero-Collision & Strict RLS Guarantee)
// ==============================================================================
export async function getPublicPublishedProject(slug: string): Promise<PortfolioProject | null> {
  const cleanSlug = slug.toLowerCase().trim();

  // 1. Never serve dynamic CMS content for reserved static routes or invalid slug formatting
  if (!cleanSlug || isReservedSlug(cleanSlug) || !isValidSlug(cleanSlug)) {
    return null;
  }

  try {
    // 2. Query via server-side admin client (fail-closed against anon RLS revocation in V14.9)
    // Strictly filter: status = 'publicly_published' AND robots_index = true
    const { data, error } = await supabaseAdmin
      .from('portfolio_projects')
      .select('*')
      .eq('slug', cleanSlug)
      .eq('status', 'publicly_published')
      .eq('robots_index', true)
      .single();

    if (error || !data) {
      return null;
    }

    return sanitizePublicPortfolioProject(data as PortfolioProject);
  } catch (err) {
    console.error('[portfolio-cms] getPublicPublishedProject error:', err);
    return null;
  }
}

// ==============================================================================
// 9. PUBLIC CMS QUERY: GET PUBLISHED PORTFOLIO SHOWCASE
// ==============================================================================
export async function getPublicPublishedProjects(category?: PortfolioCategory): Promise<PortfolioProject[]> {
  try {
    let query = supabaseAdmin
      .from('portfolio_projects')
      .select('*')
      .eq('status', 'publicly_published')
      .eq('robots_index', true)
      .order('production_year', { ascending: false })
      .order('published_at', { ascending: false });

    if (category) {
      query = query.eq('category', normalizePortfolioCategory(category));
    }

    const { data, error } = await query;
    if (error || !data) return [];

    return (data as PortfolioProject[]).map(sanitizePublicPortfolioProject);
  } catch (err) {
    console.error('[portfolio-cms] getPublicPublishedProjects error:', err);
    return [];
  }
}

// ==============================================================================
// 10. ADMIN CMS QUERY: GET PROJECT FOR PREVIEW (Secure Admin Draft Preview)
// ==============================================================================
export async function getAdminPreviewProject(slugOrId: string): Promise<{
  success: boolean;
  data: PortfolioProject | null;
  error?: string;
}> {
  try {
    await assertAdminSession();

    const cleanInput = slugOrId.toLowerCase().trim();
    if (!cleanInput) {
      return { success: false, data: null, error: 'INVALID_INPUT: Missing identifier' };
    }

    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(cleanInput);

    let query = supabaseAdmin.from('portfolio_projects').select('*');
    if (isUuid) {
      query = query.eq('id', cleanInput);
    } else {
      if (isReservedSlug(cleanInput) || !isValidSlug(cleanInput)) {
        return { success: false, data: null, error: 'INVALID_SLUG: Reserved or invalid slug' };
      }
      query = query.eq('slug', cleanInput);
    }

    const { data, error } = await query.single();
    if (error || !data) {
      return { success: false, data: null, error: 'NOT_FOUND: Project not found' };
    }

    const project = data as PortfolioProject;

    // Strict status enforcement: Do NOT permit archived projects
    if (project.status === 'archived') {
      return {
        success: false,
        data: null,
        error: 'ARCHIVED_PROJECT: Archived projects cannot be previewed.',
      };
    }

    // Allow draft, in_review, approved, or publicly_published
    return {
      success: true,
      data: sanitizePublicPortfolioProject(project),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'UNAUTHORIZED';
    return { success: false, data: null, error: message };
  }
}
