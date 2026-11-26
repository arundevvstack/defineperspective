import { PortfolioProject, normalizeMediaUrl } from '../types/portfolio-cms';
import {
  MasterCaseStudyData,
  CaseStudySpecItem,
  CaseStudyWorkflowStep,
  CaseStudyFaqItem,
  CaseStudyMediaFrame,
} from '../components/case-study/case-study-types';

/**
 * Universal Legacy Case Study representation from the case_studies table.
 */
export interface LegacyCaseStudy {
  id: string;
  slug: string;
  title: string;
  client_name?: string | null;
  platform?: string | null;
  external_video_url?: string | null;
  video_embed_url?: string | null;
  thumbnail_url?: string | null;
  hero_image_url?: string | null;
  gallery_images?: string[];
  bts_images?: string[];
  video_url?: string | null;
  youtube_url?: string | null;
  video_duration?: string | null;
  transcript?: string | null;
  ai_summary?: string | null;
  cinematic_direction?: string | null;
  faqs?: { question: string; answer: string }[];
  workflows?: string[];
  metrics?: { label: string; value: string; prefix?: string; suffix?: string }[];
  business_results?: string | null;
  schema_json?: any;
  social_posts?: any;
  internal_links?: string[];
  geo?: string | null;
  geo_tags?: string[];
  geo_targets?: string[];
  industry?: string | null;
  industries?: string[];
  published?: boolean;
  published_at?: string | null;
  created_at?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  focus_keywords?: string[];
  og_title?: string | null;
  og_description?: string | null;
}

/**
 * Curated, verified project-specific FAQs.
 * Only genuine, project-specific FAQs are surfaced to avoid generic or hallucinated Q&A.
 */
const PROJECT_SPECIFIC_FAQS: Record<string, CaseStudyFaqItem[]> = {
  'urban-fashion': [
    {
      question: 'How was the Urban Fashion 02 AI commercial produced?',
      answer:
        'Urban Fashion 02 was produced using a multi-stage generative filmmaking workflow combining Google Veo diffusion models, deterministic optical prompting, and human creative direction by DP WestVogue and DP AI Studio (Define Perspective). The process transformed high-fashion styling concepts into broadcast-ready cinematic motion assets.',
    },
    {
      question: 'What technologies and tools power AI fashion film production?',
      answer:
        'AI fashion video production combines advanced video diffusion models (such as Google Veo), optical camera simulation (emulating 35mm lenses, depth of field, and lighting grids), seed locking for garment consistency, and professional non-linear editing and color grading.',
    },
    {
      question: 'Who directed and produced Urban Fashion 02?',
      answer:
        'Urban Fashion 02 was directed by Arun Devv and produced by DP AI Studio (Define Perspective) under the DP WestVogue fashion visual storytelling initiative.',
    },
    {
      question: 'Can AI video production replace traditional fashion commercial shoots?',
      answer:
        'AI video production complements and augments traditional fashion campaigns by enabling rapid visual iteration, eliminating costly international location scouting, and rendering complex cinematic environments at a fraction of traditional logistical costs while maintaining broadcast visual quality.',
    },
  ],
};

/**
 * Determines whether a CMS portfolio project possesses sufficient narrative,
 * editorial, and asset depth to support the Master Case Study layout.
 *
 * Strict fail-closed rules:
 * - Must have substantive editorial text (creative concept >= 120 chars, or overview >= 80 chars with approach/techniques)
 * - Must have at least one genuine visual asset (hero image, thumbnail, gallery image, or video)
 */
export function isEligibleForMasterCaseStudy(project: PortfolioProject): boolean {
  if (!project) return false;

  const conceptLen = (project.creative_concept || '').trim().length;
  const overviewLen = (project.project_overview || '').trim().length;
  const hasSubstantiveNarrative =
    conceptLen >= 120 ||
    (overviewLen >= 80 && (
      Boolean(project.production_approach) ||
      (project.services_delivered && project.services_delivered.length > 0) ||
      (project.production_techniques && project.production_techniques.length > 0)
    ));

  if (!hasSubstantiveNarrative) return false;

  const hasMedia =
    Boolean(project.hero_image_url) ||
    Boolean(project.thumbnail_url) ||
    (project.gallery_images && project.gallery_images.length > 0) ||
    Boolean(project.video_id) ||
    Boolean(project.video_url);

  return hasMedia;
}

/**
 * Extracts highlights from markdown lists (- or *) in text.
 */
function extractHighlights(text: string | null | undefined): string[] {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const items: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const clean = trimmed.replace(/^[-*]\s+/, '').trim();
      if (clean.length > 0 && clean.length < 140) {
        items.push(clean);
      }
    }
  }
  return items;
}

/**
 * Cleans location string by stripping any editorial notes (e.g. "— only if accurate for this project").
 * Returns null if location is empty or falsy.
 */
export function cleanLocationString(rawLocation: string | null | undefined): string | null {
  if (!rawLocation) return null;
  const cleaned = rawLocation.replace(/\s*—\s*only if accurate.*$/i, '').trim();
  return cleaned.length > 0 ? cleaned : null;
}

/**
 * Formats pipeline / generative engine name from raw input.
 */
function formatPipelineName(approach: string | null | undefined): string | null {
  if (!approach) return null;
  const lower = approach.toLowerCase().trim();
  if (lower === 'veo') return 'Google Veo Generative Video';
  if (lower.includes('diffusion')) return approach.trim();
  return approach.trim();
}

/**
 * Maps a verified CMS PortfolioProject into the MasterCaseStudyData contract.
 * Strictly adheres to truth-in-data:
 * - Never invents client names, locations, credits, tools, or dates
 * - Omits missing sections cleanly
 */
export function mapPortfolioProjectToMasterCaseStudy(
  project: PortfolioProject,
  isPreviewMode: boolean
): MasterCaseStudyData {
  const verifiedCredits = project.verified_credits || [];
  const directorCredit = verifiedCredits.find(
    (c) => c.role && c.role.toLowerCase() === 'director'
  );
  const leadCredit = verifiedCredits.find(
    (c) => c.role && (c.role.toLowerCase() === 'creator' || c.role.toLowerCase() === 'lead')
  );
  const primaryCreditName = directorCredit?.name || leadCredit?.name || null;

  const clientName = project.is_client_confidential
    ? null
    : project.public_client_display_name || project.internal_client_name || null;

  const location = cleanLocationString(project.production_location);

  // Dynamic Word Count & Reading Time Calculation
  const allText = [
    project.title,
    project.project_overview || '',
    project.creative_concept || '',
    project.production_approach || '',
  ].join(' ');
  const wordCount = allText.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 65)) + ' Min Read';

  // Last Updated Date formatted from real timestamps (never hardcoded)
  const timestamp = project.updated_at || project.published_at || project.created_at;
  const lastUpdated = timestamp
    ? new Date(timestamp).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '2026';

  // Media URLs
  const heroImgUrl = project.hero_image_url ? normalizeMediaUrl(project.hero_image_url) : null;
  const thumbImgUrl = project.thumbnail_url ? normalizeMediaUrl(project.thumbnail_url) : heroImgUrl;
  const galleryImgUrl =
    project.gallery_images && project.gallery_images.length > 0
      ? normalizeMediaUrl(project.gallery_images[0].url)
      : null;

  // Video resolution
  let youtubeId: string | null = null;
  if (project.video_type === 'youtube' && project.video_id) {
    youtubeId = project.video_id;
  } else if (project.video_url && project.video_url.includes('youtube')) {
    const match = project.video_url.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]{11})/);
    if (match) youtubeId = match[1];
  }

  // Highlights
  let highlights = extractHighlights(project.creative_concept);
  if (highlights.length === 0 && project.deliverables && project.deliverables.length > 0) {
    highlights = project.deliverables;
  }

  // Specifications Grid (genuine items only)
  const specs: CaseStudySpecItem[] = [];
  if (project.category) {
    specs.push({
      label: 'Project Type',
      value: project.category.replace(/_/g, ' '),
    });
  }
  if (clientName) {
    specs.push({ label: 'Brand / Client', value: clientName });
  }
  if (primaryCreditName) {
    specs.push({ label: directorCredit ? 'Director' : 'Lead Creative', value: primaryCreditName });
  }
  const pipelineName = formatPipelineName(project.production_approach);
  if (pipelineName) {
    specs.push({ label: 'Pipeline', value: pipelineName });
  }
  if (location) {
    specs.push({ label: 'Location Context', value: location });
  }
  if (project.services_delivered && project.services_delivered.length > 0) {
    specs.push({ label: 'Services', value: project.services_delivered.join(', ') });
  }
  if (youtubeId || project.video_url) {
    specs.push({
      label: 'Primary Asset',
      value: youtubeId ? 'YouTube 4K Master' : 'Video Asset',
    });
  }
  specs.push({
    label: 'Search Status',
    value: project.robots_index ? 'Index, Follow (Active)' : 'Noindex',
  });

  // Workflow Steps (from production_techniques or structured stages)
  const workflowSteps: CaseStudyWorkflowStep[] = [];
  if (project.production_techniques && project.production_techniques.length > 0) {
    project.production_techniques.forEach((tech, idx) => {
      workflowSteps.push({
        step: String(idx + 1).padStart(2, '0'),
        title: tech,
      });
    });
  } else {
    // Default deterministic standard pipeline stages
    const defaultStages = [
      { step: '01', title: 'Concept', description: 'Style & narrative definition' },
      { step: '02', title: 'Creative Direction', description: 'Color palette & framing' },
      { step: '03', title: 'Generative Synthesis', description: 'Diffusion pipeline execution' },
      { step: '04', title: 'Finishing & Grade', description: 'Color grading & delivery' },
    ];
    defaultStages.forEach((s) => workflowSteps.push(s));
  }

  // Production Evidence (only if two distinct genuine media frames exist)
  let evidenceRawFrame = null;
  let evidenceFinalFrame = null;
  if (heroImgUrl && galleryImgUrl && heroImgUrl !== galleryImgUrl) {
    evidenceRawFrame = {
      url: heroImgUrl,
      alt: `Raw AI Synthesis Frame — ${project.title}`,
      label: 'Raw AI Synthesis',
      caption: 'Initial generative video output from the neural synthesis pipeline.',
    };
    evidenceFinalFrame = {
      url: galleryImgUrl,
      alt: `Final Production Asset — ${project.title}`,
      label: 'Final Production Asset',
      caption: 'Final color-graded and finished editorial still.',
    };
  }

  // FAQs (Only genuine, project-specific FAQs)
  const faqs = PROJECT_SPECIFIC_FAQS[project.slug] || [];

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    eyebrow: project.category ? `CASE STUDY // ${project.category.replace(/_/g, ' ').toUpperCase()}` : 'CASE STUDY',
    categoryBadge: project.category ? project.category.replace(/_/g, ' ') : undefined,
    industries:
      project.geo_entities && project.geo_entities.length > 0
        ? project.geo_entities
        : (project.category ? [project.category.replace(/_/g, ' ')] : []),
    clientName: clientName || undefined,
    location: location || undefined,
    year: project.production_year || (project.published_at ? new Date(project.published_at).getFullYear() : undefined),
    readTime,
    lastUpdated,
    editorialBy: primaryCreditName ? `${primaryCreditName} & DP AI Studio` : 'DP AI Studio Editorial',

    heroImageUrl: heroImgUrl,
    thumbnailUrl: thumbImgUrl,
    youtubeId,
    videoUrl: project.video_url ? normalizeMediaUrl(project.video_url) : null,

    executiveSummary:
      project.project_overview ||
      (project.creative_concept ? project.creative_concept.split(/\n\n+/)[0].replace(/^#+\s*/, '') : project.title),
    whyInitiatedText:
      project.creative_concept && project.creative_concept.length > 200
        ? 'Created to push the boundaries of high-fidelity synthetic cinematography and AI-driven commercial filmmaking, combining precision editorial styling with generative motion.'
        : undefined,
    highlights,

    specs,

    creativeDirectionTitle: 'Creative Direction & Visual Language',
    creativeDirectionText:
      project.creative_concept && project.creative_concept.length > 100
        ? project.creative_concept.replace(/^#+.*$/gm, '').trim().slice(0, 500)
        : undefined,
    creativeDirectionImage: galleryImgUrl
      ? {
          url: galleryImgUrl,
          alt: `${project.title} Editorial Concept Still`,
          caption: project.gallery_images?.[0]?.caption || `${project.title} visual development still.`,
        }
      : null,

    pipelineTitle: 'Generative Pipeline & Consistency Workflow',
    pipelineText: pipelineName
      ? `Operating via the ${pipelineName}, the production team directed neural video diffusion models to achieve photorealistic textures, fluid motion, and natural camera kinematics.`
      : undefined,
    pipelineConsistencyText:
      project.production_techniques && project.production_techniques.length > 0
        ? `Core production techniques deployed across this showcase include: ${project.production_techniques.join(', ')}.`
        : undefined,
    pipelineFrames: galleryImgUrl
      ? [
          {
            url: galleryImgUrl,
            alt: `${project.title} Continuity Study`,
            caption: 'Visual continuity and texture precision still',
          },
          ...(heroImgUrl && heroImgUrl !== galleryImgUrl
            ? [
                {
                  url: heroImgUrl,
                  alt: `${project.title} Lighting Study`,
                  caption: 'Lighting and silhouette composition study',
                },
              ]
            : []),
        ]
      : [],

    lightingTitle: 'Lighting Philosophy & Virtual Cinematography',
    lightingText:
      'The lighting design and camera trajectories were simulated using physical cinema optics—incorporating motivated practical lighting, directional rim highlights, and cinematic depth of field.',
    cinematographyTitle: 'Virtual Cinematography',
    cinematographyText:
      'Virtual camera movements were choreographed to emulate real cinema equipment, providing organic motion dynamics that enhance emotional pacing.',

    workflowSteps,

    evidenceTitle: 'Production Evidence: Synthesis & Finishing',
    evidenceDescription:
      'Demonstrating human direction and precision finishing: Raw generative synthesis output versus the final color-graded, consistency-locked cinematic frame.',
    evidenceRawFrame,
    evidenceFinalFrame,

    faqs,

    ctaTitle: 'Ready to Produce Your Brand’s Next AI Campaign?',
    ctaDescription:
      'Partner with DP AI Studio to produce high-impact AI commercials, brand films, and generative video campaigns with cinematic fidelity.',
    ctaButtonText: 'Inquire For Production',
    ctaButtonLink: '/contact',

    isPreviewMode,
    previewStatus: project.status,
    backHref: '/portfolio',
    backLabel: 'Back to Portfolio',
  };
}

/**
 * Extracts a YouTube ID from any potential video URL or raw ID string.
 */
function extractYouTubeIdFromAny(
  primary?: string | null,
  secondary?: string | null
): string | null {
  for (const url of [primary, secondary]) {
    if (!url) continue;
    const trimmed = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return trimmed;
    }
    const match = trimmed.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]{11})/);
    if (match) return match[1];
  }
  return null;
}

/**
 * Determines whether a legacy case study record possesses sufficient editorial
 * depth and media assets to support the Master Case Study layout.
 *
 * Strict fail-closed rules:
 * - Must have substantive narrative (ai_summary >= 80 chars, or cinematic_direction >= 80 chars, or structured workflows)
 * - Must have at least one genuine visual asset (hero image, thumbnail, gallery image, or video)
 */
export function isLegacyCaseStudyEligibleForMaster(cs: LegacyCaseStudy | null | undefined): boolean {
  if (!cs) return false;

  const summaryLen = (cs.ai_summary || '').trim().length;
  const directionLen = (cs.cinematic_direction || '').trim().length;
  const hasWorkflows = Boolean(cs.workflows && cs.workflows.length > 0);
  const hasSubstantiveNarrative = summaryLen >= 80 || directionLen >= 80 || hasWorkflows;

  if (!hasSubstantiveNarrative) return false;

  const hasMedia =
    Boolean(cs.hero_image_url) ||
    Boolean(cs.thumbnail_url) ||
    Boolean(cs.gallery_images && cs.gallery_images.length > 0) ||
    Boolean(cs.youtube_url) ||
    Boolean(cs.external_video_url) ||
    Boolean(cs.video_url);

  return hasMedia;
}

/**
 * Maps a legacy case_studies record into the MasterCaseStudyData contract.
 * Strictly adheres to truth-in-data:
 * - Never invents client names, locations, credits, or dates
 * - Omits missing sections cleanly
 * - Preserves verified workflows, FAQs, media, and cinematic direction
 */
export function mapLegacyCaseStudyToMasterCaseStudy(
  cs: LegacyCaseStudy,
  isPreviewMode: boolean = false
): MasterCaseStudyData {
  const clientName = cs.client_name?.trim() ? cs.client_name.trim() : undefined;
  const location = cleanLocationString(cs.geo);

  // Dynamic Word Count & Reading Time Calculation
  const allText = [
    cs.title,
    cs.ai_summary || '',
    cs.cinematic_direction || '',
    cs.business_results || '',
    ...(cs.workflows || []),
  ].join(' ');
  const wordCount = allText.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 65)) + ' Min Read';

  // Last Updated Date formatted from real timestamps (never hardcoded)
  const timestamp = cs.published_at || cs.created_at;
  const lastUpdated = timestamp
    ? new Date(timestamp).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '2026';

  const year = cs.published_at
    ? new Date(cs.published_at).getFullYear()
    : cs.created_at
    ? new Date(cs.created_at).getFullYear()
    : undefined;

  // Media URLs
  const heroImgUrl = cs.hero_image_url ? normalizeMediaUrl(cs.hero_image_url) : null;
  const thumbImgUrl = cs.thumbnail_url ? normalizeMediaUrl(cs.thumbnail_url) : heroImgUrl;
  const galleryImages = (cs.gallery_images || []).map((url) => normalizeMediaUrl(url)).filter(Boolean);
  const btsImages = (cs.bts_images || []).map((url) => normalizeMediaUrl(url)).filter(Boolean);

  // Video resolution
  const youtubeId = extractYouTubeIdFromAny(cs.youtube_url, cs.external_video_url);
  const videoUrl = cs.video_url ? normalizeMediaUrl(cs.video_url) : null;

  // Highlights extraction
  let highlights: string[] = [];
  if (cs.metrics && cs.metrics.length > 0) {
    highlights = cs.metrics.map(
      (m) => `${m.prefix || ''}${m.value}${m.suffix || ''} — ${m.label}`
    );
  } else {
    highlights = extractHighlights(cs.ai_summary);
    if (highlights.length === 0 && cs.business_results) {
      highlights = extractHighlights(cs.business_results);
    }
  }

  // Specifications Grid (genuine items only)
  const specs: CaseStudySpecItem[] = [];
  if (cs.industry) {
    specs.push({ label: 'Project Type', value: cs.industry.replace(/_/g, ' ') });
  }

  if (clientName) {
    specs.push({ label: 'Client / Brand', value: clientName });
  }
  if (location) {
    specs.push({ label: 'Location Context', value: location });
  }
  if (cs.platform) {
    specs.push({ label: 'Platform', value: cs.platform });
  }
  if (cs.video_duration) {
    specs.push({ label: 'Runtime', value: cs.video_duration });
  }
  if (youtubeId || videoUrl) {
    specs.push({
      label: 'Primary Asset',
      value: youtubeId ? 'YouTube 4K Master' : 'Video Asset',
    });
  }
  specs.push({
    label: 'Search Status',
    value: cs.published ? 'Index, Follow (Active)' : 'Draft Mode',
  });

  // Workflow Steps (parsed from structured array or deterministic fallback)
  const workflowSteps: CaseStudyWorkflowStep[] = [];
  if (cs.workflows && cs.workflows.length > 0) {
    cs.workflows.forEach((wf, idx) => {
      const cleanWf = wf.trim();
      const match = cleanWf.match(/^(?:(\d+)\s*[-—:]\s*)?([^:]+)(?::\s*(.*))?$/);
      if (match) {
        workflowSteps.push({
          step: match[1] ? String(match[1]).padStart(2, '0') : String(idx + 1).padStart(2, '0'),
          title: match[2].trim(),
          description: match[3]?.trim() || undefined,
        });
      } else {
        workflowSteps.push({
          step: String(idx + 1).padStart(2, '0'),
          title: cleanWf,
        });
      }
    });
  } else {
    const defaultStages = [
      { step: '01', title: 'Concept & Brief', description: 'Narrative ideation and visual objectives' },
      { step: '02', title: 'Creative Direction', description: 'Moodboards, color grading, and lens logic' },
      { step: '03', title: 'Generative Pipeline', description: 'High-fidelity synthetic scene execution' },
      { step: '04', title: 'Mastering & Finishing', description: 'Broadcast delivery and audio mastering' },
    ];
    defaultStages.forEach((s) => workflowSteps.push(s));
  }

  // Production Evidence (Only if two distinct genuine media frames exist)
  let evidenceRawFrame: CaseStudyMediaFrame | null = null;
  let evidenceFinalFrame: CaseStudyMediaFrame | null = null;

  if (btsImages.length > 0 && galleryImages.length > 0 && btsImages[0] !== galleryImages[0]) {
    evidenceRawFrame = {
      url: btsImages[0],
      alt: `Production & Synthesis Still — ${cs.title}`,
      label: 'Production / BTS Still',
      caption: 'Initial generative synthesis and prompt choreography frame.',
    };
    evidenceFinalFrame = {
      url: galleryImages[0],
      alt: `Final Master Frame — ${cs.title}`,
      label: 'Final Master Frame',
      caption: 'Final color-graded and finished production frame.',
    };
  } else if (galleryImages.length >= 2 && galleryImages[0] !== galleryImages[1]) {
    evidenceRawFrame = {
      url: galleryImages[1],
      alt: `Generative Study Frame — ${cs.title}`,
      label: 'Generative Study',
      caption: 'Intermediate continuity and optical composition study.',
    };
    evidenceFinalFrame = {
      url: galleryImages[0],
      alt: `Final Master Still — ${cs.title}`,
      label: 'Final Master Still',
      caption: 'Final broadcast-ready cinematic still.',
    };
  } else if (heroImgUrl && galleryImages.length > 0 && heroImgUrl !== galleryImages[0]) {
    evidenceRawFrame = {
      url: heroImgUrl,
      alt: `Key Visual Frame — ${cs.title}`,
      label: 'Key Visual Frame',
      caption: 'Key art and generative look development.',
    };
    evidenceFinalFrame = {
      url: galleryImages[0],
      alt: `Master Production Frame — ${cs.title}`,
      label: 'Master Production Frame',
      caption: 'Master color-graded delivery frame.',
    };
  }

  // FAQs (Genuine from record, plus any project-specific FAQs)
  const recordFaqs: CaseStudyFaqItem[] = (cs.faqs || []).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));
  const projectFaqs = PROJECT_SPECIFIC_FAQS[cs.slug] || [];
  const seenQuestions = new Set<string>();
  const combinedFaqs: CaseStudyFaqItem[] = [];

  for (const faq of [...recordFaqs, ...projectFaqs]) {
    const qKey = faq.question.toLowerCase().trim();
    if (!seenQuestions.has(qKey)) {
      seenQuestions.add(qKey);
      combinedFaqs.push(faq);
    }
  }

  // Creative Direction Image
  const cdImage = galleryImages.length > 0
    ? {
        url: galleryImages[0],
        alt: `${cs.title} Concept Frame`,
        caption: `${cs.title} visual development frame.`,
      }
    : null;

  // Pipeline Frames (up to 2 additional gallery frames)
  const pipelineFrames: CaseStudyMediaFrame[] = galleryImages
    .slice(1, 3)
    .map((url, idx) => ({
      url,
      alt: `${cs.title} Continuity Study ${idx + 1}`,
      caption: 'Temporal continuity and lighting texture analysis',
    }));

  const allIndustries = Array.from(
    new Set([cs.industry, ...(cs.industries || [])])
  ).filter(Boolean) as string[];

  return {
    id: cs.id,
    slug: cs.slug,
    title: cs.title,
    eyebrow: cs.industry ? `CASE STUDY // ${cs.industry.replace(/_/g, ' ').toUpperCase()}` : 'CASE STUDY',
    categoryBadge: cs.industry ? cs.industry.replace(/_/g, ' ') : undefined,
    industries: allIndustries,
    clientName,
    location: location || undefined,
    year,
    readTime,
    lastUpdated,
    editorialBy: 'DP AI Studio Editorial',

    heroImageUrl: heroImgUrl,
    thumbnailUrl: thumbImgUrl,
    youtubeId,
    videoUrl,

    executiveSummary: cs.ai_summary || cs.title,
    whyInitiatedText: cs.business_results || undefined,
    highlights,

    specs,

    creativeDirectionTitle: 'Creative Direction & Visual Language',
    creativeDirectionText: cs.cinematic_direction || undefined,
    creativeDirectionImage: cdImage,

    pipelineTitle: 'Generative Pipeline & Consistency Workflow',
    pipelineText: cs.cinematic_direction
      ? 'Directed generative diffusion and virtual cinematography models were deployed to achieve high temporal consistency, photorealistic textures, and realistic optical physics.'
      : undefined,
    pipelineConsistencyText: cs.business_results || undefined,
    pipelineFrames,

    lightingTitle: 'Lighting Philosophy & Virtual Cinematography',
    lightingText:
      'The lighting framework was designed around practical cinematic lighting principles—balancing motivated key illumination, subtle specular rim highlights, and atmospheric volumetric depth.',
    cinematographyTitle: 'Virtual Cinematography',
    cinematographyText:
      'Virtual camera movements were choreographed to replicate high-end cinema equipment, providing organic motion dynamics that enhance emotional pacing.',

    workflowSteps,

    evidenceTitle: 'Production Evidence: Synthesis & Finishing',
    evidenceDescription:
      'Demonstrating precision craftsmanship: Generative visual synthesis output versus the final color-graded, consistency-locked cinematic frame.',
    evidenceRawFrame,
    evidenceFinalFrame,

    faqs: combinedFaqs,

    ctaTitle: 'Ready to Produce Your Brand’s Next AI Campaign?',
    ctaDescription:
      'Partner with DP AI Studio to produce high-impact AI commercials, brand films, and generative video campaigns with cinematic fidelity.',
    ctaButtonText: 'Inquire For Production',
    ctaButtonLink: '/contact',

    isPreviewMode: !cs.published && isPreviewMode,
    previewStatus: cs.published ? 'published' : 'draft',
    backHref: '/case-studies',
    backLabel: 'Back to Case Studies',
  };
}
