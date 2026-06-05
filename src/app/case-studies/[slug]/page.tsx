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
          <div className="flex-1 max-w-6xl">
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
                  <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif uppercase leading-[0.9] text-white tracking-tight drop-shadow-2xl mix-blend-overlay opacity-90 max-w-[1200px]">
                    {mainTitle}
                  </h1>
                  {subTitle && (
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif italic tracking-wide text-white/80 max-w-[800px] leading-relaxed">
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
      <section className="bg-neutral-950 py-32 md:py-48 px-6 md:px-16 border-b border-white/5 relative z-20">
        <Reveal delay={0.2} className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Drop Cap Paragraph */}
          <div className="lg:col-span-8">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-12">01 // Editor's Note</h3>
            <div className="prose prose-invert prose-lg max-w-[700px]">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-300 font-light first-letter:text-6xl md:first-letter:text-[100px] first-letter:font-serif first-letter:text-white first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
                {caseStudy.ai_summary}
              </p>
            </div>
          </div>

          {/* Right: Metadata Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-16 content-start border-l border-white/5 pl-0 lg:pl-16 mt-16 lg:mt-0">
            <div>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase mb-4 border-b border-white/5 pb-3">Location</span>
              <p className="text-base text-white font-serif italic">{displayGeos.join(', ') || 'Global'}</p>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase mb-4 border-b border-white/5 pb-3">Industry</span>
              <p className="text-base text-white font-serif italic">{displayIndustries.join(', ') || 'N/A'}</p>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase mb-4 border-b border-white/5 pb-3">Client</span>
              <p className="text-base text-white font-serif italic">{caseStudy.client_name || 'Confidential'}</p>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase mb-4 border-b border-white/5 pb-3">Format</span>
              <p className="text-base text-white font-serif italic">{caseStudy.platform || 'Multi-platform'}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 03: THE VISION (CREATIVE DIRECTION)
          ========================================= */}
      {(caseStudy.cinematic_direction || caseStudy.ai_summary) && (
        <section className="bg-neutral-900 text-white py-32 md:py-48 px-6 md:px-16 border-b border-white/5 relative z-20">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-12 md:mb-16">02 // The Vision</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight text-white mb-16">
              "{caseStudy.title} Reimagined."
            </h2>
            <div className="prose prose-invert prose-xl mx-auto max-w-[700px] text-left">
              <p className="text-zinc-300 font-light leading-loose text-lg md:text-xl">
                {caseStudy.cinematic_direction || caseStudy.ai_summary}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 04: EDITORIAL IMAGE STORY
          ========================================= */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <section className="w-full bg-neutral-950 overflow-hidden relative z-20 py-32 md:py-48">
          <div className="flex flex-col gap-32 md:gap-48 px-4 md:px-16 max-w-screen-2xl mx-auto">
            
            {/* Pattern A: Full-width cinematic spread */}
            {caseStudy.gallery_images[0] && (
              <Reveal delay={0.1}>
                <div className="relative w-full">
                  <ZoomableImage src={caseStudy.gallery_images[0]} alt="Editorial Spread 1" fill={false} />
                  <div className="mt-6 text-right">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">FIG 01 // {caseStudy.platform?.toUpperCase() || 'DIGITAL'} ARCHIVE</span>
                  </div>
                </div>
              </Reveal>
            )}
            
            {/* Pattern B: 50/50 Luxury Split */}
            {(caseStudy.gallery_images[1] || caseStudy.gallery_images[2]) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {caseStudy.gallery_images[1] && (
                  <Reveal delay={0.1}>
                    <div className="relative w-full">
                      <ZoomableImage src={caseStudy.gallery_images[1]} alt="Editorial Split 1" fill={false} />
                    </div>
                  </Reveal>
                )}
                {caseStudy.gallery_images[2] && (
                  <Reveal delay={0.3}>
                    <div className="relative w-full">
                      <ZoomableImage src={caseStudy.gallery_images[2]} alt="Editorial Split 2" fill={false} />
                    </div>
                  </Reveal>
                )}
              </div>
            )}
            
            {/* Pattern C: Single Portrait, Max Height */}
            {caseStudy.gallery_images[3] && (
              <Reveal delay={0.1} className="flex flex-col items-center justify-center w-full">
                <div className="relative w-full max-w-3xl">
                  <ZoomableImage src={caseStudy.gallery_images[3]} alt="Editorial Portrait 1" fill={false} />
                  <div className="mt-8 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">FIG 02 // STUDIO SELECTION</span>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Pattern E: Full-width cinematic finish */}
            {caseStudy.gallery_images[4] && (
              <Reveal delay={0.1}>
                <div className="relative w-full">
                  <ZoomableImage src={caseStudy.gallery_images[4]} alt="Editorial Spread Finish" fill={false} />
                </div>
              </Reveal>
            )}

            {/* Any Remaining Images: Standard Single Column Flow */}
            {caseStudy.gallery_images.length > 5 && (
              <div className="flex flex-col gap-32 md:gap-48">
                {caseStudy.gallery_images.slice(5).map((img, idx) => (
                  <Reveal key={idx} delay={0.1}>
                    <div className="relative w-full max-w-5xl mx-auto">
                      <ZoomableImage src={img} alt={`Editorial Archive ${idx + 5}`} fill={false} />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================
          SECTION 05: MAGAZINE DOCUMENTARY (BTS)
          ========================================= */}
      {caseStudy.bts_images && caseStudy.bts_images.length > 0 && (
        <section className="bg-neutral-900 py-32 md:py-48 px-4 md:px-16 relative z-20 border-t border-white/5">
          <Reveal className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-24">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-6">03 // Behind The Scenes</h3>
              <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight text-white">The Documentary.</h2>
            </div>
            
            {/* Pattern D: Magazine Spread (Side-by-Side Large) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {caseStudy.bts_images.map((img, idx) => (
                <div key={idx} className="relative w-full flex flex-col">
                  <ZoomableImage src={img} alt={`BTS Documentary ${idx + 1}`} fill={false} />
                  <div className="mt-6 border-b border-white/10 pb-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">PLATE {(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* THE FILM (Embed) */}
      {(caseStudy.youtube_url || caseStudy.video_url || caseStudy.external_video_url) && (
        <section className="bg-neutral-950 py-32 md:py-48 px-4 md:px-16 relative z-20">
          <Reveal className="max-w-6xl mx-auto">
             <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-16 text-center">04 // The Film</h3>
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
          SECTION 06: KEY DELIVERABLES (WORKFLOWS)
          ========================================= */}
      {caseStudy.workflows && caseStudy.workflows.length > 0 && (
        <section className="bg-neutral-950 py-32 md:py-48 px-6 md:px-16 border-t border-white/5 relative z-20">
          <Reveal className="max-w-5xl mx-auto">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-24 text-center">05 // Generative Stack</h3>
            <div className="flex flex-col gap-16">
              {caseStudy.workflows.map((workflow, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start border-b border-white/5 pb-16">
                  <span className="text-5xl md:text-7xl font-serif italic text-white/20 shrink-0 leading-none">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed max-w-[700px]">
                    {workflow}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 07: FINAL STATEMENT
          ========================================= */}
      <section className="bg-black py-48 md:py-[300px] px-6 text-center relative z-20 border-y border-white/10">
        <Reveal className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight max-w-[900px] mx-auto">
            "{caseStudy.cinematic_direction?.split('.')[0] || caseStudy.ai_summary.split('.')[0] || "Innovation lies at the intersection of logic and art"}."
          </h2>
          <div className="mt-24 w-16 h-[1px] bg-white/30 mx-auto"></div>
          <span className="block mt-12 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50">{caseStudy.client_name || 'DP AI STUDIOS'}</span>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 08: SEMANTIC PATHWAYS
          ========================================= */}
      {caseStudy.internal_links && caseStudy.internal_links.length > 0 && (
        <section className="bg-neutral-950 py-32 md:py-48 px-6 md:px-16 relative z-20">
          <Reveal className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm md:text-base font-serif italic tracking-wider text-white mb-16">Further Exploration</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {caseStudy.internal_links.map((link) => {
                const displayText = link.split('/').pop()?.replace(/-/g, ' ');
                return (
                  <Link 
                    key={link} 
                    href="/services" 
                    prefetch={false}
                    className="text-xs uppercase tracking-[0.2em] px-8 py-5 border border-white/10 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 transition-all"
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
          SECTION 09: RELATED CASE STUDIES
          ========================================= */}
      {related && related.length > 0 && (
        <section className="bg-neutral-950 py-32 md:py-48 px-6 md:px-16 relative z-20 border-t border-white/5">
          <Reveal className="max-w-screen-2xl mx-auto">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-24 text-center">Volume Index // Keep Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {related.map((cs, idx) => (
                <Reveal key={cs.id} delay={idx * 0.1}>
                  <Link href={`/case-studies/${cs.slug}`} className="group block relative w-full h-auto">
                    <div className="relative w-full aspect-[3/4] overflow-hidden mb-8">
                      <Image 
                        src={cs.thumbnail_url || '/placeholder.jpg'} 
                        alt={cs.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">{cs.industry || 'Editorial'}</span>
                      <h4 className="text-2xl font-serif uppercase leading-tight text-white group-hover:text-primary-accent transition-colors">{cs.title}</h4>
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
