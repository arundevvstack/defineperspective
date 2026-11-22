/**
 * DP AI STUDIO — PORTFOLIO CMS TYPE DEFINITIONS
 * Authoritative TypeScript contracts matching Supabase V14.9 Database Proposal.
 */

export type PortfolioProjectStatus =
  | 'draft'
  | 'in_review'
  | 'approved'
  | 'published'
  | 'publicly_published'
  | 'archived';

export type PortfolioCategory =
  | 'commercial'
  | 'fashion'
  | 'luxury'
  | 'automotive'
  | 'hospitality'
  | 'technology'
  | 'narrative'
  | 'experimental';

export type PortfolioVideoType = 'mux' | 'vimeo' | 'youtube' | 'custom' | 'none';

export type PortfolioSchemaType = 'CreativeWork' | 'VideoObject' | 'Article';

export type PortfolioAdminRole = 'admin' | 'editor' | 'reviewer';

export const PORTFOLIO_CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  { label: 'Commercial', value: 'commercial' },
  { label: 'Fashion & Apparel', value: 'fashion' },
  { label: 'Luxury & High Jewelry', value: 'luxury' },
  { label: 'Automotive & Mobility', value: 'automotive' },
  { label: 'Hospitality & Travel', value: 'hospitality' },
  { label: 'Technology & Enterprise', value: 'technology' },
  { label: 'Narrative & Brand Film', value: 'narrative' },
  { label: 'Experimental & AI Exploration', value: 'experimental' },
];

export const PORTFOLIO_VIDEO_TYPES: { label: string; value: PortfolioVideoType }[] = [
  { label: 'None (Static Hero Only)', value: 'none' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Vimeo', value: 'vimeo' },
  { label: 'Mux Stream', value: 'mux' },
  { label: 'Custom Video / Direct URL', value: 'custom' },
];

export const PORTFOLIO_SCHEMA_TYPES: { label: string; value: PortfolioSchemaType }[] = [
  { label: 'Creative Work (Default)', value: 'CreativeWork' },
  { label: 'Video Object', value: 'VideoObject' },
  { label: 'Article / Case Study', value: 'Article' },
];

export function normalizePortfolioCategory(val: string | null | undefined): PortfolioCategory {
  if (!val) return 'commercial';
  const lower = val.toLowerCase().trim();
  if (['commercial', 'fashion', 'luxury', 'automotive', 'hospitality', 'technology', 'narrative', 'experimental'].includes(lower)) {
    return lower as PortfolioCategory;
  }
  // Safe backward-compatible mappings
  if (lower === 'music_video' || lower === 'ai_exploration') return 'experimental';
  if (lower === 'documentary') return 'narrative';
  return 'commercial';
}

export function normalizePortfolioVideoType(val: string | null | undefined): PortfolioVideoType {
  if (!val) return 'none';
  const lower = val.toLowerCase().trim();
  if (['mux', 'vimeo', 'youtube', 'custom', 'none'].includes(lower)) {
    return lower as PortfolioVideoType;
  }
  if (lower === 'direct') return 'custom';
  return 'none';
}

export function normalizePortfolioSchemaType(val: string | null | undefined): PortfolioSchemaType {
  if (!val) return 'CreativeWork';
  const clean = val.trim();
  if (['CreativeWork', 'VideoObject', 'Article'].includes(clean)) {
    return clean as PortfolioSchemaType;
  }
  if (clean === 'Movie' || clean === 'VisualArtwork') return 'CreativeWork';
  return 'CreativeWork';
}

export const VALID_PORTFOLIO_STATUSES = [
  'draft',
  'in_review',
  'approved',
  'publicly_published',
  'archived',
] as const;

export interface StatusParseResult {
  success: boolean;
  status?: PortfolioProjectStatus;
  error?: string;
}

/**
 * Fail-Closed Status Parser and Validator.
 * Rejects null, undefined, empty string, whitespace, and unknown values with clear error messages.
 * Maps legacy 'published' -> 'publicly_published'.
 * NEVER silently defaults to 'draft' on invalid input.
 */
export function parsePortfolioStatus(val: unknown): StatusParseResult {
  if (val === null || val === undefined) {
    return {
      success: false,
      error: 'VALIDATION_FAILED: Status value is missing (null or undefined).',
    };
  }

  if (typeof val !== 'string') {
    return {
      success: false,
      error: `VALIDATION_FAILED: Status must be a string, received ${typeof val}.`,
    };
  }

  const clean = val.trim();
  if (clean.length === 0) {
    return {
      success: false,
      error: 'VALIDATION_FAILED: Status value cannot be empty or whitespace.',
    };
  }

  // Canonical mapping of legacy 'published' -> 'publicly_published'
  if (clean === 'published') {
    return { success: true, status: 'publicly_published' };
  }

  if (['draft', 'in_review', 'approved', 'publicly_published', 'archived'].includes(clean)) {
    return { success: true, status: clean as PortfolioProjectStatus };
  }

  return {
    success: false,
    error: `VALIDATION_FAILED: "${clean}" is not a valid portfolio status. Valid values: draft, in_review, approved, publicly_published, archived.`,
  };
}

/**
 * Normalizes portfolio status for mutation execution.
 * Fails closed by throwing a validation error on invalid input.
 */
export function normalizePortfolioStatus(val: unknown): PortfolioProjectStatus {
  const parsed = parsePortfolioStatus(val);
  if (!parsed.success || !parsed.status) {
    throw new Error(parsed.error || 'VALIDATION_FAILED: Invalid portfolio status.');
  }
  return parsed.status;
}

/**
 * Editorial Publishing Governance: Validates state machine transitions.
 * Enforces: draft -> in_review -> approved -> publicly_published.
 * Direct draft -> publicly_published bypass is strictly forbidden.
 * Archived -> publicly_published without review is strictly forbidden.
 */
export function validateStatusTransition(
  fromStatus: unknown,
  toStatus: unknown
): { valid: boolean; error?: string } {
  const fromParsed = parsePortfolioStatus(fromStatus);
  const toParsed = parsePortfolioStatus(toStatus);

  if (!fromParsed.success || !fromParsed.status) {
    return { valid: false, error: `CURRENT_STATUS_INVALID: ${fromParsed.error}` };
  }
  if (!toParsed.success || !toParsed.status) {
    return { valid: false, error: `TARGET_STATUS_INVALID: ${toParsed.error}` };
  }

  const current = fromParsed.status;
  const target = toParsed.status;

  if (current === target) {
    return { valid: true };
  }

  const allowedTransitions: Record<string, string[]> = {
    draft: ['in_review', 'archived'],
    in_review: ['approved', 'draft', 'archived'],
    approved: ['publicly_published', 'in_review', 'draft', 'archived'],
    publicly_published: ['archived'],
    archived: ['draft', 'in_review'],
  };

  const allowed = allowedTransitions[current] || [];
  if (!allowed.includes(target)) {
    if (target === 'publicly_published' && current !== 'approved') {
      return {
        valid: false,
        error: `PUBLISHING_GOVERNANCE_VIOLATION: Cannot publish project directly from "${current}". Projects must progress through editorial review and be in "approved" status before publication. Permitted transitions from "${current}": ${allowed.join(', ')}.`,
      };
    }
    return {
      valid: false,
      error: `INVALID_STATUS_TRANSITION: Cannot transition project from "${current}" to "${target}". Permitted targets from "${current}": ${allowed.join(', ')}.`,
    };
  }

  return { valid: true };
}

/**
 * Sanitizes portfolio project data for public output.
 * If client confidentiality is enabled, internal client name is strictly redacted.
 */
export function sanitizePublicPortfolioProject(project: PortfolioProject): PortfolioProject {
  const sanitized = { ...project };
  if (sanitized.is_client_confidential) {
    sanitized.internal_client_name = null;
  }
  return sanitized;
}

export interface VerifiedCredit {
  role: string;
  name: string;
  company?: string;
}

export interface GalleryImage {
  url: string;
  alt_text: string;
  caption?: string;
  is_decorative?: boolean;
  storage_path?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;

  // Core Metadata
  title: string;
  internal_client_name: string | null;
  is_client_confidential: boolean;
  public_client_display_name: string | null;
  client_website: string | null;
  category: PortfolioCategory;
  production_year: number | null;

  // Rich Editorial Content
  verified_credits: VerifiedCredit[];
  project_overview: string | null;
  creative_concept: string | null;
  production_approach: string | null;
  services_delivered: string[];
  production_techniques: string[];
  deliverables: string[];
  production_location: string | null;
  geo_entities: string[];
  measured_results: string | null;

  // Media Vault Assets
  hero_image_url: string | null;
  thumbnail_url: string | null;
  gallery_images: GalleryImage[];

  // Video Configuration
  video_type: PortfolioVideoType;
  video_id: string | null;
  video_url: string | null;
  video_embed_url: string | null;
  video_thumbnail_url: string | null;
  video_duration: string | null;
  video_transcript: string | null;

  // SEO & Social Search Signals
  seo_title: string | null;
  seo_description: string | null;
  canonical_override: string | null;
  canonical_url: string | null;
  is_canonical_override_approved: boolean;
  focus_keywords: string[];
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  schema_type: PortfolioSchemaType;

  // Lifecycle State & Search Engine Control
  status: PortfolioProjectStatus;
  robots_index: boolean;
  in_sitemap: boolean;

  // Publication Audit & History Tracking
  has_ever_been_published: boolean;
  original_published_slug: string | null;
  first_published_at: string | null;
  first_published_by: string | null;
  published_at: string | null;
  published_by: string | null;
  approved_at: string | null;
  approved_by: string | null;
  approval_notes: string | null;

  // System Timestamps
  created_at: string;
  updated_at: string;
}

export interface CreateProjectInput {
  title: string;
  slug: string;
  category: PortfolioCategory;
  internal_client_name?: string | null;
  is_client_confidential?: boolean;
  public_client_display_name?: string | null;
  client_website?: string | null;
  production_year?: number | null;
  project_overview?: string | null;
  creative_concept?: string | null;
  production_approach?: string | null;
  services_delivered?: string[];
  production_techniques?: string[];
  deliverables?: string[];
  production_location?: string | null;
  geo_entities?: string[];
  measured_results?: string | null;
  hero_image_url?: string | null;
  thumbnail_url?: string | null;
  gallery_images?: GalleryImage[];
  video_type?: PortfolioVideoType;
  video_id?: string | null;
  video_url?: string | null;
  video_embed_url?: string | null;
  video_thumbnail_url?: string | null;
  video_duration?: string | null;
  video_transcript?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  focus_keywords?: string[];
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  schema_type?: PortfolioSchemaType;
  verified_credits?: VerifiedCredit[];
  canonical_override?: string | null;
  is_canonical_override_approved?: boolean;
  approval_notes?: string | null;
}

export type MutateProjectInput = Partial<CreateProjectInput> & {
  status?: PortfolioProjectStatus;
  approval_notes?: string;
  canonical_override?: string | null;
  is_canonical_override_approved?: boolean;
};

// Aliases for compatibility
export type CreatePortfolioProjectInput = CreateProjectInput;
export type MutatePortfolioProjectInput = MutateProjectInput;


/**
 * 24 Permanently Reserved Slugs matching public.reserved_portfolio_slugs in V14.9 migration.
 * A dynamic CMS project must NEVER collide with or overwrite these routes.
 */
export const RESERVED_PORTFOLIO_SLUGS: readonly string[] = [
  // 13 Bespoke Static Portfolio Routes
  'banaras-silk',
  'dotspace-commercial',
  'she-diamond',
  'swarna-kosa',
  'kumbayah-kombucha',
  'luxury-ai-jewellery-tvc-production',
  'leelama-restaurant',
  'bb-serum-tvc',
  'desert-queen',
  'she-body-lotion',
  'fashion-editorial',
  'to-u-commercial',
  'cinematic-ai-commercial-production',
  // 11 Core System & Namespace Reservations
  'categories',
  'search',
  'all',
  'tag',
  'tags',
  'case-studies',
  'admin',
  'api',
  'login',
  'new',
  'edit'
] as const;

export function isValidSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') return false;
  // Lowercase alphanumeric with single hyphen separators, 2-100 chars
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length >= 2 && slug.length <= 100;
}

export function isReservedSlug(slug: string): boolean {
  if (!slug) return false;
  return RESERVED_PORTFOLIO_SLUGS.includes(slug.toLowerCase().trim());
}

export function isValidCanonicalUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  return /^https:\/\/defineperspective\.in\/portfolio\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(url);
}

/**
 * Pure synchronous helper to extract storage path from either a permanent media URL,
 * a legacy signed URL, or a direct storage path.
 */
export function extractMediaStoragePath(urlOrPath: string): string | null {
  if (!urlOrPath) return null;
  // Case 1: https://defineperspective.in/api/portfolio/media/uploads/... or /api/portfolio/media/uploads/...
  const mediaMatch = urlOrPath.match(/\/api\/portfolio\/media\/(.+)$/);
  if (mediaMatch) {
    return mediaMatch[1];
  }
  // Case 2: Supabase signed URL or direct storage URL containing portfolio-media-vault/uploads/...
  const vaultMatch = urlOrPath.match(/portfolio-media-vault\/(uploads\/[^?#]+)/);
  if (vaultMatch) {
    return vaultMatch[1];
  }
  // Case 3: Direct storage path (e.g. uploads/...)
  if (urlOrPath.startsWith('uploads/')) {
    return urlOrPath;
  }
  return null;
}

/**
 * Normalizes internal media URLs to root-relative paths (/api/portfolio/media/...).
 * - Recognizes existing 'https://defineperspective.in/api/portfolio/media/...' or
 *   'http://defineperspective.in/api/portfolio/media/...' URLs.
 * - Converts only this known internal media route to its root-relative equivalent:
 *   '/api/portfolio/media/...'.
 * - Recognizes legacy Supabase signed URLs only when the hostname matches the configured
 *   Supabase project (process.env.NEXT_PUBLIC_SUPABASE_URL) and the path belongs to
 *   'portfolio-media-vault/uploads/'. Converts them to '/api/portfolio/media/uploads/...'
 *   without carrying query tokens.
 * - Preserves the complete path, query parameters, and encoded characters for known routes.
 * - Leaves unrelated external URLs (e.g. YouTube, Vimeo, Unsplash, unconfigured Supabase projects) unchanged.
 * - Handles null, undefined, empty, non-string, and malformed inputs safely.
 * - Does not change database records.
 */
export function normalizeMediaUrl(url: string | null | undefined): string {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return '';
  }

  // Already root-relative internal media route
  if (trimmed.startsWith('/api/portfolio/media/')) {
    return trimmed;
  }

  // Recognize known internal media route with Production origin (http, https, with or without www)
  // Preserve complete path, query strings, and encoded characters
  const match = trimmed.match(/^https?:\/\/(?:www\.)?defineperspective\.in(\/api\/portfolio\/media\/.*)$/i);
  if (match && match[1]) {
    return match[1];
  }

  // Recognize legacy Supabase signed URLs only when the hostname matches the configured
  // Supabase project and the path belongs to portfolio-media-vault/uploads/
  try {
    const parsedUrl = new URL(trimmed);
    const configuredSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let configuredHost: string | null = null;
    if (configuredSupabaseUrl && typeof configuredSupabaseUrl === 'string') {
      try {
        configuredHost = new URL(configuredSupabaseUrl).hostname.toLowerCase();
      } catch {
        configuredHost = null;
      }
    }

    if (configuredHost && parsedUrl.hostname.toLowerCase() === configuredHost) {
      const vaultMatch = parsedUrl.pathname.match(/\/portfolio-media-vault\/(uploads\/.+)$/);
      if (vaultMatch && vaultMatch[1]) {
        // Convert to /api/portfolio/media/uploads/... without query tokens
        return `/api/portfolio/media/${vaultMatch[1]}`;
      }
    }
  } catch {
    // Malformed or non-URL inputs safely fall through
  }

  // Unrelated external URLs or other paths remain untouched
  return trimmed;
}
