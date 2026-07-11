import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase-admin';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Reveal } from '@/components/ui/reveal';
import { ZoomableImage } from '@/components/ui/zoomable-image';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import CaseStudyHeroBanner from '@/components/case-study-hero-banner';
import CaseStudyEditorial from '@/components/case-study-editorial';
import CaseStudyEditorialBottom from '@/components/case-study-editorial-bottom';
import { getRelatedCaseStudies, CaseStudyNode } from '@/lib/related-engine';

// ==============================================================================
// TYPES
// ==============================================================================
type Props = {
  params: Promise<{ slug: string }>;
};

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client_name: string;
  platform: string;
  external_video_url: string;
  video_embed_url: string | null;
  thumbnail_url: string | null;
  hero_image_url: string | null;
  gallery_images: string[];
  bts_images: string[];
  video_url: string | null;
  youtube_url: string | null;
  video_duration: string;
  transcript: string;
  ai_summary: string;
  cinematic_direction: string;
  faqs: { question: string; answer: string }[];
  workflows: string[];
  metrics: { label: string; value: string; prefix?: string; suffix?: string }[];
  business_results: string;
  schema_json: any;
  social_posts: any;
  internal_links: string[];
  geo: string;
  geo_tags: string[];
  geo_targets: string[];
  industry: string;
  industries: string[];
  published: boolean;
  published_at: string;
  created_at: string;
  seo_title: string | null;
  seo_description: string | null;
  focus_keywords: string[];
  og_title: string | null;
  og_description: string | null;
};

// ==============================================================================
// REVALIDATION & PARAMS
// ==============================================================================
export const revalidate = 60;

export async function generateStaticParams() {
  const { data: caseStudies } = await supabaseAdmin
    .from('case_studies')
    .select('slug')
    .eq('published', true);

  return (caseStudies || []).map((cs) => ({
    slug: cs.slug,
  }));
}

// ==============================================================================
// METADATA
// ==============================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const { data: cs } = await supabaseAdmin
    .from('case_studies')
    .select('title, ai_summary, thumbnail_url, hero_image_url, geo, geo_targets, industry, industries, geo_tags, published, seo_title, seo_description, focus_keywords, og_title, og_description')
    .eq('slug', decodedSlug)
    .maybeSingle();

  if (!cs) return { title: 'Case Study Not Found | DP AI Studios' };

  const displayGeos = Array.from(new Set([cs.geo, ...(cs.geo_targets || [])])).filter(Boolean);
  const displayIndustries = Array.from(new Set([cs.industry, ...(cs.industries || [])])).filter(Boolean);

  const displaySeoTitle = cs.seo_title || `${cs.title} | DP AI Studios`;
  const displaySeoDescription = cs.seo_description || cs.ai_summary?.substring(0, 160) || `${cs.title} — AI cinematic production by DP AI Studios.`;
  const displayOgTitle = cs.og_title || cs.seo_title || cs.title;
  const displayOgDescription = cs.og_description || cs.seo_description || displaySeoDescription;
  
  const keywords = cs.focus_keywords && cs.focus_keywords.length > 0
    ? cs.focus_keywords.join(', ')
    : [...displayIndustries, 'AI video production', 'cinematic AI', ...displayGeos].join(', ');

  return {
    title: displaySeoTitle,
    description: displaySeoDescription,
    keywords,
    openGraph: {
      title: displayOgTitle,
      description: displayOgDescription,
      images: [{ 
        url: cs.hero_image_url || cs.thumbnail_url || `https://defineperspective.in/api/og?title=${encodeURIComponent(cs.title)}&industry=${encodeURIComponent(cs.industry)}&geo=${encodeURIComponent(cs.geo)}` 
      }],
      type: 'article',
    },
    alternates: {
      canonical: `https://defineperspective.in/case-studies/${slug}`,
    },
    robots: cs.published 
      ? { index: true, follow: true } 
      : { index: false, follow: false },
  };
}
// ==============================================================================
// PAGE
// ==============================================================================
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const { data: cs } = await supabaseAdmin
    .from('case_studies')
    .select('*')
    .eq('slug', decodedSlug)
    .maybeSingle();

  if (!cs) notFound();

  const caseStudy = cs as CaseStudy;
  const isPublic = caseStudy.published === true;

  // Fetch ALL published case studies to feed the scoring engine
  const { data: allPublished } = await supabaseAdmin
    .from('case_studies')
    .select('id, slug, title, industry, geo, geo_tags, workflows, internal_links, platform, thumbnail_url, published_at, created_at')
    .eq('published', true);

  // Run Related Intelligence Heuristics
  const related = allPublished 
    ? getRelatedCaseStudies(caseStudy, allPublished as CaseStudyNode[], 3)
    : [];

  const displayGeos = Array.from(new Set([caseStudy.geo, ...(caseStudy.geo_targets || [])])).filter(Boolean);
  const displayIndustries = Array.from(new Set([caseStudy.industry, ...(caseStudy.industries || [])])).filter(Boolean);

  // Flat array of all media for the Media Story section
  const mediaStory = [...(caseStudy.gallery_images || []), ...(caseStudy.bts_images || [])].filter(Boolean);

  // Generate Article & Speakable Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.ai_summary,
    "image": caseStudy.hero_image_url || caseStudy.thumbnail_url || "https://defineperspective.in/og-image.jpg",
    "imageGallery": caseStudy.gallery_images,
    "author": {
      "@type": "Organization",
      "name": "DP AI Studios",
      "url": "https://defineperspective.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DP AI Studios",
      "logo": {
        "@type": "ImageObject",
        "url": "https://defineperspective.in/logo.png"
      }
    },
    "datePublished": caseStudy.published_at || caseStudy.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://defineperspective.in/case-studies/${caseStudy.slug}`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#campaign-summary", "#creative-direction"]
    }
  };

  // Generate BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://defineperspective.in/" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://defineperspective.in/case-studies" },
      { "@type": "ListItem", "position": 3, "name": caseStudy.title, "item": `https://defineperspective.in/case-studies/${caseStudy.slug}` }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pb-40 relative overflow-hidden font-sans selection:bg-white/30">
      <ScrollProgress />
      <GlassNavbar />

      {/* ── DRAFT MODE BANNER ── */}
      {!isPublic && (
        <div className="bg-amber-500 text-black text-center text-xs font-bold uppercase tracking-widest py-3 px-4 sticky top-20 z-50">
          ⚠️ Draft Mode: AI Enrichment Pending. Hidden from public indexing.
        </div>
      )}

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      {/* ── JSON-LD SCHEMA ── */}
      {caseStudy.schema_json && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudy.schema_json) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* =========================================
          SECTION 01: HERO BANNER
          ========================================= */}
      <div className="relative z-10">
        <CaseStudyHeroBanner caseStudy={caseStudy} />
      </div>

      <CaseStudyEditorial caseStudy={caseStudy} related={related} mediaStory={mediaStory} />
      <CaseStudyEditorialBottom caseStudy={caseStudy} related={related} mediaStory={mediaStory} />
      <WhatsAppChat />
    </main>
  );
}