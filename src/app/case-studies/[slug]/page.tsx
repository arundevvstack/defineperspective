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
import LiteYouTube from '@/components/lite-youtube';
import { ArrowRight } from 'lucide-react';
import { getRelatedCaseStudies, CaseStudyNode } from '@/lib/related-engine';
import MediaGallery from './MediaGallery';

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
// REVALIDATION
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
    <main className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-white/30">
      <ScrollProgress />
      <GlassNavbar />

      {/* ── DRAFT MODE BANNER ── */}
      {!isPublic && (
        <div className="bg-amber-500 text-black text-center text-xs font-bold uppercase tracking-widest py-3 px-4 sticky top-20 z-50">
          ⚠️ Draft Mode: AI Enrichment Pending. Hidden from public indexing.
        </div>
      )}

      {/* ── JSON-LD SCHEMA ── */}
      {caseStudy.schema_json && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudy.schema_json) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* =========================================
          SECTION 01: CINEMATIC COVER
          ========================================= */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end bg-neutral-950 overflow-hidden">
        {/* Dynamic Media Background */}
        {caseStudy.video_url ? (
          <div className="absolute inset-0 z-0">
            <video 
              src={caseStudy.video_url} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover fixed top-0 left-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-950/90 z-0" />
            <div className="absolute inset-0 bg-black/30 z-0" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('${caseStudy.hero_image_url || caseStudy.thumbnail_url || ""}')` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-950/90" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
        
        {/* Cover Typography */}
        <Reveal className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1 max-w-5xl">
            {/* Issue Number & Date */}
            <div className="flex items-center gap-6 mb-8 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/70">
              <span>VOL. {(new Date(caseStudy.created_at).getMonth() + 1).toString().padStart(2, '0')}</span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>{new Date(caseStudy.created_at).getFullYear()}</span>
              <span className="w-8 h-[1px] bg-white/30 hidden md:block"></span>
              <span className="hidden md:block">DP {caseStudy.industry?.toUpperCase() || 'EDITORIAL'} EDITION</span>
            </div>

            {/* Split Title */}
            {(() => {
              const parts = caseStudy.title.split(/[-–—]/);
              const mainTitle = parts[0]?.trim() || caseStudy.title;
              const subTitle = parts.length > 1 ? parts.slice(1).join('-').trim() : '';
              return (
                <div className="flex flex-col gap-4">
                  <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif uppercase leading-[0.85] text-white tracking-tighter drop-shadow-2xl mix-blend-overlay opacity-90">
                    {mainTitle}
                  </h1>
                  {subTitle && (
                    <h2 className="text-xl md:text-3xl font-serif italic tracking-wide text-white/80 max-w-2xl">
                      {subTitle}
                    </h2>
                  )}
                </div>
              );
            })()}
          </div>
          
          <div className="shrink-0 hidden md:flex flex-col items-end text-[10px] font-mono tracking-[0.2em] uppercase text-right text-white/50">
            <span>CLIENT / {caseStudy.client_name || 'CONFIDENTIAL'}</span>
            <span>PLATFORM / {caseStudy.platform || 'DIGITAL'}</span>
            <span>AGENCY / DP AI STUDIOS</span>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 02: EDITOR'S NOTE
          ========================================= */}
      <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-16 border-b border-white/5 relative z-20">
        <Reveal delay={0.2} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Drop Cap Paragraph */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-12">01 // Editor's Note</h3>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-300 font-light first-letter:text-6xl md:first-letter:text-8xl first-letter:font-serif first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                {caseStudy.ai_summary}
              </p>
            </div>
          </div>

          {/* Right: Metadata Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 content-start border-l border-white/5 pl-0 lg:pl-16">
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-3 border-b border-white/5 pb-2">Location</span>
              <p className="text-sm text-white font-serif italic">{displayGeos.join(', ') || 'Global'}</p>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-3 border-b border-white/5 pb-2">Industry</span>
              <p className="text-sm text-white font-serif italic">{displayIndustries.join(', ') || 'N/A'}</p>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-3 border-b border-white/5 pb-2">Client</span>
              <p className="text-sm text-white font-serif italic">{caseStudy.client_name || 'Confidential'}</p>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-3 border-b border-white/5 pb-2">Format</span>
              <p className="text-sm text-white font-serif italic">{caseStudy.platform || 'Multi-platform'}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 03: FULL BLEED IMAGE STORY
          ========================================= */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <section className="w-full bg-neutral-950 overflow-hidden relative z-20">
          <div className="flex flex-col gap-0 md:gap-4 lg:gap-8 pb-8">
            {/* Image 1: Full Width Hero Spread */}
            {caseStudy.gallery_images[0] && (
              <Reveal delay={0.1}>
                <div className="relative w-full h-[60vh] md:h-[90vh]">
                  <ZoomableImage src={caseStudy.gallery_images[0]} alt="Story Image 1" fill className="absolute inset-0 w-full h-full" />
                </div>
              </Reveal>
            )}
            
            {/* Images 2 & 3: Two-image split spread side-by-side */}
            {(caseStudy.gallery_images[1] || caseStudy.gallery_images[2]) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8">
                {caseStudy.gallery_images[1] && (
                  <Reveal delay={0.1}>
                    <div className="relative w-full h-[50vh] md:h-[80vh]">
                      <ZoomableImage src={caseStudy.gallery_images[1]} alt="Story Image 2" fill className="absolute inset-0 w-full h-full" />
                    </div>
                  </Reveal>
                )}
                {caseStudy.gallery_images[2] && (
                  <Reveal delay={0.2}>
                    <div className="relative w-full h-[50vh] md:h-[80vh]">
                      <ZoomableImage src={caseStudy.gallery_images[2]} alt="Story Image 3" fill className="absolute inset-0 w-full h-full" />
                    </div>
                  </Reveal>
                )}
              </div>
            )}
            
            {/* Image 4: Giant Portrait (Centered) */}
            {caseStudy.gallery_images[3] && (
              <Reveal delay={0.1} className="flex justify-center w-full px-4 py-8 md:py-24">
                <div className="relative w-full md:w-[60vw] lg:w-[45vw] h-[70vh] md:h-[120vh]">
                  <ZoomableImage src={caseStudy.gallery_images[3]} alt="Story Image 4" fill className="absolute inset-0 w-full h-full" />
                  <div className="absolute -bottom-8 md:-bottom-16 left-0 right-0 text-center">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-white/50">{caseStudy.platform || 'DIGITAL'} ARCHIVE</span>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Image 5: Cinematic Landscape Full Bleed */}
            {caseStudy.gallery_images[4] && (
              <Reveal delay={0.1}>
                <div className="relative w-full h-[50vh] md:h-[70vh] mt-16 md:mt-0">
                  <ZoomableImage src={caseStudy.gallery_images[4]} alt="Story Image 5" fill className="absolute inset-0 w-full h-full" />
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* =========================================
          SECTION 04: VISUAL STORYTELLING MOSAIC
          ========================================= */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 5 && (
        <section className="bg-neutral-950 py-16 md:py-32 px-4 md:px-8 relative z-20">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
            {/* 60% Image */}
            {caseStudy.gallery_images[5] && (
              <Reveal delay={0.1} className="md:col-span-8 md:row-span-2 relative">
                <ZoomableImage src={caseStudy.gallery_images[5]} alt="Mosaic Image 1" fill className="absolute inset-0 w-full h-full" />
              </Reveal>
            )}
            {/* 20% / 20% Stack */}
            <div className="md:col-span-4 md:row-span-2 flex flex-col gap-4 md:gap-8">
              {caseStudy.gallery_images[6] && (
                <Reveal delay={0.2} className="relative flex-1">
                  <ZoomableImage src={caseStudy.gallery_images[6]} alt="Mosaic Image 2" fill className="absolute inset-0 w-full h-full" />
                </Reveal>
              )}
              {caseStudy.gallery_images[7] && (
                <Reveal delay={0.3} className="relative flex-1">
                  <ZoomableImage src={caseStudy.gallery_images[7]} alt="Mosaic Image 3" fill className="absolute inset-0 w-full h-full" />
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          SECTION 05: THE VISION
          ========================================= */}
      {(caseStudy.cinematic_direction || caseStudy.ai_summary) && (
        <section className="bg-neutral-900 text-white py-32 md:py-48 px-6 md:px-16 border-t border-b border-white/5 relative z-20">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-8 md:mb-16">02 // The Vision</h3>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif italic leading-tight text-white mb-16">
              "{caseStudy.title} Reimagined."
            </h2>
            <div className="prose prose-invert prose-xl mx-auto max-w-prose text-left">
              <p className="text-zinc-300 font-light leading-loose text-lg md:text-xl">
                {caseStudy.cinematic_direction || caseStudy.ai_summary}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 06: FEATURED MAGAZINE SPREAD
          ========================================= */}
      {caseStudy.bts_images && caseStudy.bts_images.length > 0 && (
        <section className="bg-neutral-950 py-32 overflow-hidden px-4 md:px-16 relative z-20">
          <Reveal className="max-w-7xl mx-auto">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-16 text-center">03 // Behind The Scenes</h3>
            <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-[#ececec] text-black shadow-2xl flex items-center justify-center overflow-hidden transform -rotate-1 md:-rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Mock Magazine Center Fold Shadow */}
              <div className="absolute inset-y-0 left-1/2 w-12 -ml-6 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10 hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row w-full h-full p-4 md:p-12 gap-8 md:gap-16">
                {/* Left Page */}
                <div className="flex-1 relative border border-black/5 p-4 flex flex-col justify-between">
                  <div className="text-[8px] font-mono tracking-widest text-black/50 uppercase flex justify-between">
                    <span>DP Studios</span>
                    <span>Page 142</span>
                  </div>
                  <h4 className="text-4xl md:text-6xl font-serif uppercase leading-none tracking-tighter mt-12 mb-8">
                    The Process.
                  </h4>
                  <div className="relative w-full h-48 md:flex-1">
                    <ZoomableImage src={caseStudy.bts_images[0]} alt="BTS 1" fill className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                {/* Right Page */}
                <div className="flex-1 relative border border-black/5 hidden md:block">
                  <ZoomableImage src={caseStudy.bts_images[1] || caseStudy.bts_images[0]} alt="BTS 2" fill className="absolute inset-0 w-full h-full" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 text-xs font-mono uppercase tracking-widest text-black/80 z-20 pointer-events-none">
                    Production Archive
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* THE FILM (Embed) */}
      {(caseStudy.youtube_url || caseStudy.video_url || caseStudy.external_video_url) && (
        <section className="bg-neutral-950 py-24 px-4 relative z-20">
          <Reveal className="max-w-5xl mx-auto">
             <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-12 text-center">04 // The Film</h3>
             <div className="aspect-video w-full rounded-none overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl">
              {caseStudy.youtube_url ? (
                <LiteYouTube videoId={caseStudy.youtube_url.split('v=')[1]?.split('&')[0] || ''} title={caseStudy.title} />
              ) : caseStudy.video_url ? (
                <video src={caseStudy.video_url} controls className="w-full h-full object-cover" />
              ) : caseStudy.external_video_url && caseStudy.external_video_url.includes('vimeo') ? (
                <iframe src={caseStudy.external_video_url} className="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              ) : null}
             </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 07: KEY DELIVERABLES (WORKFLOWS)
          ========================================= */}
      {caseStudy.workflows && caseStudy.workflows.length > 0 && (
        <section className="bg-neutral-950 py-32 px-6 md:px-16 border-t border-white/5 relative z-20">
          <Reveal className="max-w-6xl mx-auto">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-16">05 // Generative Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {caseStudy.workflows.map((workflow, idx) => (
                <div key={idx} className="flex gap-8 group items-start border-b border-white/5 pb-8">
                  <span className="text-4xl md:text-6xl font-serif italic text-white/20 group-hover:text-primary-accent transition-colors">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-lg md:text-xl font-light text-zinc-300 mt-2">{workflow}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 09: FINAL STATEMENT
          ========================================= */}
      <section className="bg-black py-48 px-6 text-center relative z-20 border-y border-white/10">
        <Reveal className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white leading-tight">
            "{caseStudy.cinematic_direction?.split('.')[0] || caseStudy.ai_summary.split('.')[0] || "Innovation lies at the intersection of logic and art"}."
          </h2>
          <div className="mt-16 w-16 h-[1px] bg-white/30 mx-auto"></div>
          <span className="block mt-8 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50">{caseStudy.client_name || 'DP AI STUDIOS'}</span>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 08: SEMANTIC PATHWAYS
          ========================================= */}
      {caseStudy.internal_links && caseStudy.internal_links.length > 0 && (
        <section className="bg-neutral-950 py-24 px-6 md:px-16 relative z-20">
          <Reveal className="max-w-7xl mx-auto text-center">
            <h3 className="text-xs md:text-sm font-serif italic tracking-wider text-white mb-12">Further Exploration</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.internal_links.map((link) => {
                const displayText = link.split('/').pop()?.replace(/-/g, ' ');
                return (
                  <Link 
                    key={link} 
                    href="/services" 
                    prefetch={false}
                    className="text-[10px] md:text-xs uppercase tracking-[0.2em] px-6 py-4 border border-white/10 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                  >
                    {displayText}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 10: RELATED CASE STUDIES
          ========================================= */}
      {related && related.length > 0 && (
        <section className="bg-neutral-950 py-32 px-6 md:px-16 relative z-20">
          <Reveal className="max-w-screen-2xl mx-auto">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-16 text-center">Volume Index // Keep Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((cs, idx) => (
                <Reveal key={cs.id} delay={idx * 0.1}>
                  <Link href={`/case-studies/${cs.slug}`} className="group block relative aspect-[3/4] overflow-hidden">
                    <Image 
                      src={cs.thumbnail_url || '/placeholder.jpg'} 
                      alt={cs.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">{cs.industry || 'Editorial'}</span>
                      <h4 className="text-3xl font-serif uppercase leading-none text-white">{cs.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Include the floating WhatsApp button */}
      <WhatsAppChat />
    </main>
  );
}
