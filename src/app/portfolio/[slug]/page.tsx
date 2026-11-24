import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { isReservedSlug, GalleryImage, PortfolioProject, normalizeMediaUrl } from '@/types/portfolio-cms';
import { getPublicPublishedProject, getAdminPreviewProject } from '@/app/actions/portfolio-cms';
import GlassNavbar from '@/components/glass-navbar';
import LiteYouTube from '@/components/lite-youtube';
import MasterCaseStudyLayout from '@/components/case-study/master-case-study-layout';
import {
  isEligibleForMasterCaseStudy,
  mapPortfolioProjectToMasterCaseStudy,
  cleanLocationString,
} from '@/lib/case-study-mapper';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
  Film,
  Building,
} from 'lucide-react';

interface DynamicPortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR revalidation

/**
 * Dynamic SEO Metadata Generation
 */
export async function generateMetadata(
  props: DynamicPortfolioPageProps
): Promise<Metadata> {
  const { slug } = await props.params;

  // Fail closed if reserved static route
  if (isReservedSlug(slug)) {
    return {};
  }

  const { isEnabled: isDraftMode } = await draftMode();
  let project: PortfolioProject | null = null;
  let isPreviewMode = false;

  if (isDraftMode) {
    const previewRes = await getAdminPreviewProject(slug);
    if (previewRes.success && previewRes.data) {
      project = previewRes.data;
      // A project may bypass preview mode only when status is publicly_published (or published) AND robots_index is true
      const isPublicEligible =
        (project.status === 'publicly_published' || project.status === 'published') &&
        project.robots_index === true;
      if (!isPublicEligible) {
        isPreviewMode = true;
      }
    }
  }

  if (!project) {
    project = await getPublicPublishedProject(slug);
  }

  const isPublicEligible =
    project !== null &&
    (project.status === 'publicly_published' || project.status === 'published') &&
    project.robots_index === true;

  // Never expose unpublished or non-indexable records to anonymous visitors
  if (!project || (!isDraftMode && !isPublicEligible)) {
    return {
      title: 'Project Not Found | DP AI Studio',
      robots: { index: false, follow: false },
    };
  }

  // When previewing an unpublished draft: enforce strict noindex, nofollow, nocache, noarchive
  if (isPreviewMode) {
    return {
      title: `[PREVIEW] ${project.title} | DP AI Studio`,
      description: project.seo_description || project.project_overview || project.title,
      robots: {
        index: false,
        follow: false,
        nocache: true,
        noarchive: true,
      },
    };
  }

  const pageTitle = project.seo_title || `${project.title} | DP AI Studio India`;
  const locationContext = cleanLocationString(project.production_location);
  const pageDescription =
    project.seo_description ||
    project.project_overview ||
    project.creative_concept ||
    `Cinematic AI ad film and video production case study: ${project.title}. Produced by DP AI Studio (Define Perspective)${locationContext ? ` — ${locationContext}` : ''}.`;
  const canonicalUrl =
    project.canonical_url || `https://defineperspective.in/portfolio/${project.slug}`;

  const defaultKeywords = [
    'AI fashion commercial',
    'AI fashion film India',
    'generative AI fashion video',
    'cinematic AI commercial',
    'DP AI Studio',
    'Define Perspective',
    'DP WestVogue',
    'India',
  ];

  const keywords = Array.from(
    new Set([
      ...(project.focus_keywords || []),
      ...defaultKeywords,
      ...(project.geo_entities || []),
      ...(project.category ? [project.category.replace(/_/g, ' ')] : []),
    ])
  );

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: project.robots_index !== false,
      follow: true,
    },
    openGraph: {
      title: project.og_title || pageTitle,
      description: project.og_description || pageDescription,
      url: canonicalUrl,
      images: project.hero_image_url
        ? [
            {
              url: project.hero_image_url,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

/**
 * Public Dynamic Portfolio Page
 */
export default async function DynamicPortfolioProjectPage(
  props: DynamicPortfolioPageProps
) {
  const { slug } = await props.params;

  // STRICT ZERO-REGRESSION GUARD:
  // If slug matches any reserved static route or system keyword,
  // return notFound() immediately so static route handlers are NEVER shadowed.
  if (isReservedSlug(slug)) {
    notFound();
  }

  const { isEnabled: isDraftMode } = await draftMode();
  let project: PortfolioProject | null = null;
  let isPreviewMode = false;

  if (isDraftMode) {
    const previewRes = await getAdminPreviewProject(slug);
    if (previewRes.success && previewRes.data) {
      project = previewRes.data;
      // A project may bypass preview mode only when status is publicly_published (or published) AND robots_index is true
      const isPublicEligible =
        (project.status === 'publicly_published' || project.status === 'published') &&
        project.robots_index === true;
      if (!isPublicEligible) {
        isPreviewMode = true;
      }
    }
  }

  if (!project) {
    project = await getPublicPublishedProject(slug);
  }

  // Admin preview fallback must never expose unpublished or non-indexable records to anonymous visitors
  const isPublicEligible =
    project !== null &&
    (project.status === 'published' || project.status === 'publicly_published') &&
    project.robots_index === true;

  if (!project || (!isPreviewMode && !isPublicEligible)) {
    notFound();
  }

  const clientName = project.is_client_confidential
    ? null
    : project.public_client_display_name || project.internal_client_name || null;

  const canonicalUrl =
    project.canonical_url || `https://defineperspective.in/portfolio/${project.slug}`;

  const cleanedLocation = cleanLocationString(project.production_location);

  const defaultKeywords = [
    'AI fashion commercial',
    'AI fashion film India',
    'generative AI fashion video',
    'cinematic AI commercial',
    'DP AI Studio',
    'Define Perspective',
    'DP WestVogue',
    'India',
  ];

  const keywordsList = Array.from(
    new Set([
      ...(project.focus_keywords || []),
      ...defaultKeywords,
      ...(project.geo_entities || []),
      ...(project.category ? [project.category.replace(/_/g, ' ')] : []),
    ])
  );

  // Check eligibility for master case study layout
  const eligibleForMaster = isEligibleForMasterCaseStudy(project);
  const masterCaseStudyData = eligibleForMaster
    ? mapPortfolioProjectToMasterCaseStudy(project, isPreviewMode)
    : null;

  // JSON-LD Structured Data: only for published pages, never for previews
  const jsonLd = isPreviewMode ? null : {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': project.schema_type || 'CreativeWork',
        '@id': `${canonicalUrl}#creativework`,
        headline: project.title,
        name: project.title,
        description: project.project_overview || project.creative_concept || project.seo_description,
        image: project.hero_image_url ? normalizeMediaUrl(project.hero_image_url) : undefined,
        datePublished: project.published_at || project.created_at,
        dateModified: project.updated_at || project.published_at || project.created_at,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        inLanguage: 'en-US',
        author: {
          '@type': 'Organization',
          '@id': 'https://defineperspective.in/#organization',
          name: 'DP AI Studio',
          legalName: 'Define Perspective',
          url: 'https://defineperspective.in',
        },
        creator: {
          '@type': 'Organization',
          name: 'Define Perspective (DP AI Studio)',
          url: 'https://defineperspective.in',
        },
        producer: {
          '@type': 'Organization',
          name: 'DP AI Studio',
          url: 'https://defineperspective.in',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Define Perspective',
          url: 'https://defineperspective.in',
        },
        locationCreated: cleanedLocation ? {
          '@type': 'Place',
          name: cleanedLocation,
        } : undefined,
        keywords: keywordsList.join(', '),
      },
      ...(project.video_url || project.video_id ? [
        {
          '@type': 'VideoObject',
          '@id': `${canonicalUrl}#video`,
          name: project.title,
          description: project.project_overview || project.creative_concept || project.title,
          thumbnailUrl: [
            normalizeMediaUrl(project.video_thumbnail_url || project.hero_image_url || 'https://defineperspective.in/images/og-default.jpg')
          ],
          uploadDate: project.published_at || project.created_at,
          contentUrl: project.video_url ? normalizeMediaUrl(project.video_url) : undefined,
          embedUrl: project.video_embed_url || (project.video_type === 'youtube' && project.video_id ? `https://www.youtube.com/embed/${project.video_id}` : undefined),
          productionCompany: {
            '@type': 'Organization',
            name: 'DP AI Studio (Define Perspective)',
            url: 'https://defineperspective.in',
          },
        }
      ] : []),
      ...(masterCaseStudyData && masterCaseStudyData.faqs.length > 0 ? [
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: masterCaseStudyData.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      ] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://defineperspective.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: 'https://defineperspective.in/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  // ---------------------------------------------------------------------------
  // DATA-DRIVEN MASTER CASE STUDY EXPERIENCE UPGRADE
  // If the project possesses sufficient narrative and media depth,
  // render the 11-module Master Case Study layout modeled after Red Chamber.
  // Projects without sufficient case study material retain the default layout.
  // ---------------------------------------------------------------------------
  if (masterCaseStudyData) {
    return (
      <>
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <MasterCaseStudyLayout data={masterCaseStudyData} />
      </>
    );
  }

  // ---------------------------------------------------------------------------
  // DEFAULT PORTFOLIO PROJECT LAYOUT (Clean fallback for incomplete projects)
  // ---------------------------------------------------------------------------
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-amber-500/30">
      {/* ADMIN PREVIEW BANNER */}
      {isPreviewMode && (
        <div className="sticky top-0 z-50 w-full bg-amber-500/95 text-black py-2.5 px-4 backdrop-blur-md shadow-lg border-b border-amber-400">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              <span>ADMIN PREVIEW MODE — UNPUBLISHED DRAFT</span>
              <span className="opacity-75 font-normal">({project.status})</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-black/10 px-2 py-0.5 rounded">noindex, nofollow</span>
              <Link
                href={`/admin/portfolio/${project.id}/edit`}
                className="bg-black text-amber-400 px-3 py-1 rounded hover:bg-neutral-900 transition-colors"
              >
                Return to Editor
              </Link>
            </div>
          </div>
        </div>
      )}

      <GlassNavbar />

      {/* JSON-LD Script (Published only) */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 md:px-12 pt-36 md:pt-44 pb-28 relative z-10 space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Works
          </Link>
        </div>

        {/* Header / Hero Titles */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30">
              {project.category.replace('_', ' ')}
            </span>
            {clientName && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                <Building className="w-3.5 h-3.5 text-neutral-500" />
                {clientName}
              </span>
            )}
            {project.production_year && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                <Calendar className="w-3.5 h-3.5" />
                {project.production_year}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          {project.project_overview && (
            <p className="text-lg md:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
              {project.project_overview}
            </p>
          )}
        </header>

        {/* Hero Video / Media Showcase */}
        <section className="rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative">
          {project.video_type === 'youtube' && project.video_id ? (
            <div className="aspect-video w-full">
              <LiteYouTube
                videoId={project.video_id}
                title={project.title}
                description={project.project_overview || undefined}
                priority
              />
            </div>
          ) : project.video_type === 'vimeo' && project.video_id ? (
            <div className="aspect-video w-full relative">
              <iframe
                src={`https://player.vimeo.com/video/${project.video_id}?autoplay=0&title=0&byline=0&portrait=0`}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (project.video_type === 'custom' || project.video_type === 'mux' || (project.video_type as string) === 'direct') && (project.video_url || project.video_id) ? (
            <div className="aspect-video w-full">
              <video
                src={normalizeMediaUrl(project.video_url || project.video_id || '')}
                poster={normalizeMediaUrl(project.video_thumbnail_url || project.hero_image_url || undefined) || undefined}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ) : project.hero_image_url ? (
            <div className="aspect-video w-full relative">
              <img
                src={normalizeMediaUrl(project.hero_image_url)}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video w-full flex items-center justify-center text-neutral-600 bg-neutral-900">
              <Film className="w-16 h-16 stroke-1" />
            </div>
          )}
        </section>

        {/* Project Details & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* Main Narrative Content */}
          <div className="lg:col-span-8 space-y-10">
            {project.creative_concept && (
              <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-widest text-amber-500 font-mono">
                  Concept & Execution
                </h2>
                <div className="text-neutral-300 font-light text-base md:text-lg leading-relaxed whitespace-pre-line space-y-4">
                  {project.creative_concept}
                </div>
              </section>
            )}

            {project.production_approach && (
              <section className="space-y-4 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur">
                <h3 className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Production Stack & Generative Pipeline
                </h3>
                <p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                  {project.production_approach}
                </p>
              </section>
            )}

            {/* Semantic Editorial Context for AI Search Engines & Brand Authority */}
            <section className="space-y-6 pt-4 border-t border-neutral-800/80">
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-light text-white tracking-tight">
                  Cinematic AI Commercial Production & Brand Direction
                </h2>
                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                  Produced by <strong className="text-neutral-200 font-medium">DP AI Studio</strong> (the cinematic generative video production division of <strong className="text-neutral-200 font-medium">Define Perspective</strong>), this commercial showcase represents the leading edge of AI fashion films in India. The production bridges high-fidelity neural image synthesis, temporal motion dynamics, and editorial luxury styling under the <strong className="text-neutral-200 font-medium">DP WestVogue</strong> commercial series.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cleanedLocation && (
                  <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-1">
                      Production Context
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      {cleanedLocation}
                    </p>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-1">
                    Production Architecture
                  </h3>
                  <p className="text-xs text-neutral-300 font-light">
                    Generative Diffusion Video & Synthetic Fashion Direction
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Metadata */}
          <div className="lg:col-span-4 space-y-8">
            {/* Services Delivered */}
            {project.services_delivered && project.services_delivered.length > 0 && (
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-mono flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-amber-500" />
                  Services Delivered
                </h3>
                <ul className="space-y-2">
                  {project.services_delivered.map((service: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-xs font-mono text-neutral-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Facts */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3 text-xs font-mono">
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-500">Category</span>
                <span className="text-neutral-200 capitalize">
                  {project.category.replace('_', ' ')}
                </span>
              </div>
              {clientName && (
                <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-500">Client</span>
                  <span className="text-neutral-200">{clientName}</span>
                </div>
              )}
              {project.production_year && (
                <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-500">Year</span>
                  <span className="text-neutral-200">{project.production_year}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-500">Studio</span>
                <span className="text-amber-400">DP AI Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        {project.gallery_images && project.gallery_images.length > 0 && (
          <section className="space-y-6 pt-10">
            <h2 className="text-xs uppercase tracking-widest text-amber-500 font-mono">
              Visual Stills & Frame Artifacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery_images.map((img: GalleryImage, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-video group"
                >
                  <img
                    src={normalizeMediaUrl(img.url)}
                    alt={img.alt_text || `${project.title} frame still ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="p-8 md:p-16 rounded-3xl border border-neutral-800 bg-gradient-to-br from-amber-500/10 via-neutral-950 to-black text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              Ready to Produce Your Brand&apos;s Next AI Campaign?
            </h2>
            <p className="text-sm md:text-base text-neutral-400 font-light">
              We partner with global luxury labels, high-growth startups, and visionary directors to build world-class AI commercials and synthetic films.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-500/10"
              >
                Inquire For Production
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
