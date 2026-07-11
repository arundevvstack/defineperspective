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
import { ArrowRight, ChevronDown, Zap, Target, Star, CheckCircle2, Camera, Sparkles, Globe, BrainCircuit, Lightbulb, Search, BarChart3, Presentation } from 'lucide-react';
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
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 relative overflow-hidden font-sans selection:bg-white/30">
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

      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        
        {/* =========================================
            SECTION 01: HERO SECTION
            ========================================= */}
        <header className="mb-40 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="space-y-12">
            <h1 className="text-6xl md:text-[12rem] font-blacker uppercase leading-[0.75] text-white italic drop-shadow-2xl">
              {caseStudy.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-primary-accent">{caseStudy.title.split(' ').pop()}_</span>
            </h1>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
             <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Executive Summary</span>
                <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-wider line-clamp-4">
                  {caseStudy.ai_summary}
                </p>
             </div>
             <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Client</span>
                <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-wider">
                  {caseStudy.client_name || 'Global Brand'}
                </p>
             </div>
             <div className="flex flex-wrap gap-4 items-end justify-start md:justify-end">
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Sector</p>
                   <p className="text-xs font-black text-white uppercase tracking-widest">{displayIndustries[0] || 'Premium'}</p>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Location</p>
                   <p className="text-xs font-black text-white uppercase tracking-widest">{displayGeos[0] || 'Global'}</p>
                </div>
             </div>
          </div>
        </header>

        {/* =========================================
            SECTION 02: HERO MASTERPLATE
            ========================================= */}
        <section className="mb-60 relative group">
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl transition-all duration-700 hover:border-primary-accent/30 bg-black">
              {caseStudy.video_url ? (
                <video 
                  src={caseStudy.video_url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <Image 
                  src={caseStudy.hero_image_url || caseStudy.thumbnail_url || '/placeholder.jpg'}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-12 pointer-events-none">
                 <div className="mt-auto">
                    <h2 className="text-2xl md:text-4xl font-black uppercase text-white">The Master Creative</h2>
                    <p className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mt-2">Node 01 // Cinematic Shot</p>
                 </div>
              </div>
           </div>
        </section>

        {/* =========================================
            SECTION 03: CREATIVE STRATEGY
            ========================================= */}
        {caseStudy.cinematic_direction && (
          <section className="mb-60 grid md:grid-cols-2 gap-32 items-center">
             <div className="space-y-12">
                <div className="flex items-center gap-4">
                   <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                      <Search className="text-primary-accent" size={24} />
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black uppercase">Creative Strategy_</h2>
                </div>
                <div className="space-y-8 text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  <p>{caseStudy.cinematic_direction}</p>
                </div>
             </div>
             <div className="grid grid-cols-1 gap-8">
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:bg-white/[0.04] transition-all">
                   <Target className="text-primary-accent mb-6" size={32} />
                   <h4 className="text-lg font-black uppercase tracking-widest mb-4">Precision Targeting</h4>
                   <p className="text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">Defining the aesthetic for {caseStudy.industry || 'the brand'} audience in {caseStudy.geo || 'target markets'}.</p>
                </div>
                <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:bg-white/[0.04] transition-all">
                   <Lightbulb className="text-primary-accent mb-6" size={32} />
                   <h4 className="text-lg font-black uppercase tracking-widest mb-4">Visual Logic</h4>
                   <p className="text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">Utilizing advanced lighting and AI generation to elevate the brand narrative.</p>
                </div>
             </div>
          </section>
        )}

        {/* =========================================
            SECTION 04: PRODUCTION WORKFLOW
            ========================================= */}
        {caseStudy.workflows && caseStudy.workflows.length > 0 && (
          <section className="mb-60">
             <div className="flex items-center gap-4 mb-20">
                 <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                    <Camera className="text-primary-accent" size={24} />
                 </div>
                 <h2 className="text-3xl md:text-6xl font-black uppercase">High-Velocity Execution_</h2>
             </div>

             <div className="grid md:grid-cols-12 gap-12 group">
                <div className="md:col-span-8 relative aspect-[3/4] md:aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-black max-w-2xl mx-auto w-full flex flex-col justify-center px-12">
                   <div className="space-y-8">
                     {caseStudy.workflows.map((workflow, idx) => (
                       <div key={idx} className="flex items-start gap-6 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                         <div className="text-primary-accent font-black text-xl">{(idx + 1).toString().padStart(2, '0')}</div>
                         <p className="text-zinc-300 font-light text-lg uppercase tracking-widest leading-relaxed">{workflow}</p>
                       </div>
                     ))}
                   </div>
                </div>
                <div className="md:col-span-4 flex flex-col gap-12">
                   <div className="flex-1 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-end">
                      <Sparkles className="text-primary-accent mb-4" size={24} />
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">Workflow</h4>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">Optimized pipeline for cinematic scale.</p>
                   </div>
                   {caseStudy.thumbnail_url && (
                     <div className="flex-1 relative aspect-video rounded-[3rem] overflow-hidden border border-white/10">
                        <Image 
                          src={caseStudy.thumbnail_url}
                          alt="Workflow Phase"
                          fill
                          className="object-cover"
                        />
                     </div>
                   )}
                </div>
             </div>
          </section>
        )}

        {/* =========================================
            SECTION 05: GALLERY (OMNICHANNEL SYSTEM)
            ========================================= */}
        {mediaStory.length > 0 && (
          <section className="mb-60 border-t border-white/5 pt-40">
             <div className="max-w-3xl mb-24">
                <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mb-4">Strategic Assets // OMNICHANNEL</h3>
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">Engineering the <br /> Visual Identity_</h2>
                <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  We didn't just stop at one medium. We built a scalable identity system that maintains luxury fidelity across all brand touchpoints.
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-12 group">
                {mediaStory.map((img, idx) => {
                  const isLarge = idx % 3 === 1; // Make every second image take 2 columns
                  return (
                    <div key={idx} className={`${isLarge ? 'md:col-span-2 aspect-video' : 'aspect-[3/4]'} relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black group-hover:border-primary-accent/20 transition-all`}>
                       <ZoomableImage 
                         src={img} 
                         alt={`Gallery Image ${idx + 1}`} 
                         fill={true} 
                       />
                       <div className={`absolute ${isLarge ? 'bottom-8 left-8' : 'top-8 right-8'} pointer-events-none`}>
                          <div className={`${isLarge ? 'bg-primary-accent px-6 py-2 text-obsidian font-black' : 'bg-black/60 backdrop-blur-md px-3 py-1 text-white/60 font-mono'} rounded-full text-[10px] uppercase tracking-widest`}>
                             {isLarge ? 'Core Asset Node' : 'Variant'}
                          </div>
                       </div>
                    </div>
                  );
                })}
             </div>
          </section>
        )}

        {/* =========================================
            SECTION 06: VIDEOS
            ========================================= */}
        {(() => {
          let renderContent = null;
          
          const getYouTubeId = (url: string | null | undefined) => {
            if (!url) return null;
            if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0];
            if (url.includes('v=')) return url.split('v=')[1]?.split('&')[0];
            if (url.includes('embed/')) return url.split('embed/')[1]?.split('?')[0];
            return null;
          };

          const ytIdPrimary = getYouTubeId(caseStudy.youtube_url);
          const ytIdFallback = getYouTubeId(caseStudy.external_video_url);

          if (ytIdPrimary) {
            renderContent = <LiteYouTube videoId={ytIdPrimary} title={caseStudy.title} />;
          } else if (caseStudy.external_video_url && ytIdFallback) {
            renderContent = <LiteYouTube videoId={ytIdFallback} title={caseStudy.title} />;
          } else if (caseStudy.external_video_url && caseStudy.external_video_url.includes('vimeo')) {
            renderContent = <iframe src={caseStudy.external_video_url} className="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>;
          } else if (caseStudy.video_url) {
            renderContent = <video src={caseStudy.video_url} controls className="w-full h-full object-contain" />;
          }

          if (!renderContent) return null;

          return (
            <section className="mb-60 border-t border-white/5 pt-40">
               <div className="flex items-center gap-4 mb-20">
                  <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                     <Presentation className="text-primary-accent" size={24} />
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black uppercase">The Film_</h2>
               </div>
               <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-black ring-1 ring-white/10 shadow-3xl relative">
                {renderContent}
               </div>
            </section>
          );
        })()}

        {/* =========================================
            SECTION 07: BUSINESS RESULTS & METRICS
            ========================================= */}
        {(caseStudy.business_results || (caseStudy.metrics && caseStudy.metrics.length > 0)) && (
          <section className="mb-60 py-32 rounded-[5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 text-primary-accent opacity-20 pointer-events-none">
                <BarChart3 size={120} />
             </div>
             <div className="container px-12 md:px-24">
                <h2 className="text-3xl md:text-6xl font-black uppercase mb-20 drop-shadow-lg">Business <br /> Result_</h2>
                
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-16">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-4">
                         <p className={`text-5xl md:text-7xl font-black italic tracking-tighter ${idx % 2 !== 0 ? 'text-primary-accent' : 'text-white'}`}>
                           {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                         </p>
                         <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {caseStudy.business_results && (
                  <div className="max-w-3xl">
                    <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                      {caseStudy.business_results}
                    </p>
                  </div>
                )}
             </div>
          </section>
        )}

        {/* =========================================
            SECTION 08: FAQS
            ========================================= */}
        {caseStudy.faqs && caseStudy.faqs.length > 0 && (
          <section className="mb-60 border-t border-white/5 pt-40">
             <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mb-12">Frequently Asked Questions</h3>
             <div className="flex flex-col gap-4 max-w-4xl">
               {caseStudy.faqs.map((faq, idx) => (
                 <details key={idx} className="group bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                   <summary className="flex items-center justify-between cursor-pointer p-8 md:p-10 hover:bg-white/[0.04] transition-colors">
                     <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white pr-6">
                       {faq.question}
                     </h4>
                     <ChevronDown className="shrink-0 text-primary-accent group-open:rotate-180 transition-transform duration-300 w-6 h-6" />
                   </summary>
                   <div className="px-8 md:px-10 pb-8 md:pb-10 pt-2 border-t border-white/5">
                     <p className="text-base text-zinc-400 font-light uppercase tracking-widest leading-loose">
                       {faq.answer}
                     </p>
                   </div>
                 </details>
               ))}
             </div>
          </section>
        )}

        {/* =========================================
            SECTION 09: RELATED PROJECTS
            ========================================= */}
        {related && related.length > 0 && (
          <section className="mb-60 border-t border-white/5 pt-40">
            <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mb-12">Related Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {related.map((cs, idx) => (
                <Link key={cs.id} href={`/case-studies/${cs.slug}`} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 shadow-2xl">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black shrink-0">
                    <Image 
                      src={cs.thumbnail_url || '/placeholder.jpg'} 
                      alt={cs.title} 
                      fill 
                      className="object-contain transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest border border-white/10 rounded-full px-3 py-1">
                        {cs.industry || 'Editorial'}
                      </span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-widest text-white group-hover:text-primary-accent transition-colors leading-tight">
                      {cs.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* =========================================
            SECTION 10: CALL TO ACTION
            ========================================= */}
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/10 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group shadow-3xl mb-40">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
           <div className="relative z-10">
              <div className="flex justify-center mb-12">
                 <span className="px-6 py-2 rounded-full border border-primary-accent/30 bg-primary-accent/10 text-[10px] font-black uppercase text-primary-accent tracking-[0.3em]">
                    Now Available for 2026 Campaigns
                 </span>
              </div>
              <h2 className="text-5xl md:text-[8rem] font-black uppercase text-white mb-16 leading-[0.8] italic">
                Dominate <br /><span className="text-primary-accent italic font-black underline decoration-white/10 underline-offset-8">The Market.</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-10">
                 <Link 
                   href="/contact?subject=Portfolio Inquiry: Enterprise Strategy"
                   className="h-24 px-20 rounded-3xl bg-primary-accent text-obsidian font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4 group/btn"
                 >
                   Launch New Project <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                 </Link>
                 <Link 
                   href="/portfolio"
                   className="h-24 px-20 rounded-3xl border-2 border-white/10 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                 >
                   Project Archives
                 </Link>
              </div>
           </div>
        </section>

      </div>
      <WhatsAppChat />
    </main>
  );
}