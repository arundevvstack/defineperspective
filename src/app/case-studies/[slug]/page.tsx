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
import { ArrowRight, ChevronDown } from 'lucide-react';
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
          SECTION 01: HERO
          ========================================= */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col bg-neutral-950">
        <div className="px-6 md:px-12 w-full max-w-[1400px] mx-auto mb-12">
          {caseStudy.video_url ? (
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black relative">
              <video 
                src={caseStudy.video_url} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 relative">
              <Image 
                src={caseStudy.hero_image_url || caseStudy.thumbnail_url || '/placeholder.jpg'}
                alt={caseStudy.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
        
        <Reveal className="w-full px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-sans font-medium uppercase tracking-[0.08em] text-zinc-500">
            <span>{displayIndustries.join(', ') || 'Industry'}</span>
            <span className="w-4 h-[1px] bg-white/20"></span>
            <span className="text-primary-accent">{displayGeos.join(', ') || 'Global'}</span>
            <span className="w-4 h-[1px] bg-white/20"></span>
            <span>{caseStudy.client_name || 'Client'}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-sans font-bold tracking-[-0.04em] leading-[0.9] text-white max-w-[1000px]">
            {caseStudy.title}
          </h1>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 02: CLIENT OVERVIEW & CHALLENGE
          ========================================= */}
      <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
        <Reveal className="max-w-[800px] mx-auto">
          <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-8">Client Overview & Challenge</h3>
          <div className="prose prose-invert prose-lg">
            <p className="text-lg md:text-xl leading-[1.8] text-zinc-300 font-sans font-normal" id="campaign-summary">
              {caseStudy.ai_summary}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          SECTION 03: GALLERY
          ========================================= */}
      {mediaStory.length > 0 && (
        <section className="w-full bg-neutral-950 relative z-20 py-24 md:py-32">
          <div className="flex flex-col gap-24 md:gap-40 px-6 md:px-12 max-w-[1400px] mx-auto">
            {mediaStory.map((img, idx) => (
              <Reveal key={idx} delay={0.1} className={`w-full flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="relative w-full max-w-[1000px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
                  <ZoomableImage src={img} alt={`Media Story ${idx + 1}`} fill={false} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* =========================================
          SECTION 04: THE FILM
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
        } else if (caseStudy.video_url) {
          renderContent = <video src={caseStudy.video_url} controls className="w-full h-full object-contain" />;
        } else if (caseStudy.external_video_url) {
          if (ytIdFallback) {
            renderContent = <LiteYouTube videoId={ytIdFallback} title={caseStudy.title} />;
          } else if (caseStudy.external_video_url.includes('vimeo')) {
            renderContent = <iframe src={caseStudy.external_video_url} className="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>;
          }
        }

        if (!renderContent) return null;

        return (
          <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
            <Reveal className="max-w-[1400px] mx-auto">
               <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-12 text-center">The Film</h3>
               <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl">
                {renderContent}
               </div>
            </Reveal>
          </section>
        );
      })()}

      {/* =========================================
          SECTION 05: CREATIVE STRATEGY & MARKET ANALYSIS
          ========================================= */}
      {caseStudy.cinematic_direction && (
        <section className="bg-neutral-900 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
          <Reveal className="max-w-[800px] mx-auto">
            <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-8">Creative Strategy & Market Analysis</h3>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-12 leading-[1.1]">
              Vision & Concept
            </h2>
            <div className="prose prose-invert prose-lg">
              <p className="text-lg md:text-xl leading-[1.8] text-zinc-300 font-sans font-normal" id="creative-direction">
                {caseStudy.cinematic_direction}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 06: WORKFLOW & EXECUTION
          ========================================= */}
      {caseStudy.workflows && caseStudy.workflows.length > 0 && (
        <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
          <Reveal className="max-w-[1000px] mx-auto">
            <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-16">Workflow & Execution</h3>
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-[39px] md:left-[50px] top-0 bottom-0 w-[1px] bg-white/10"></div>
              
              <div className="flex flex-col gap-12">
                {caseStudy.workflows.map((workflow, idx) => (
                  <div key={idx} className="relative flex items-start gap-8 md:gap-16">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-sans font-bold text-white tracking-widest">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="pt-2">
                      <p className="text-base md:text-lg font-sans font-normal text-zinc-300 leading-[1.8]">
                        {workflow}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION: METRICS & BUSINESS RESULTS
          ========================================= */}
      {(caseStudy.business_results || (caseStudy.metrics && caseStudy.metrics.length > 0)) && (
        <section className="bg-neutral-900 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
          <Reveal className="max-w-[1000px] mx-auto">
            <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-12 text-center">Business Results & Metrics</h3>
            
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-neutral-950 border border-white/5 rounded-2xl p-6 text-center shadow-xl">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <span className="text-primary-accent">{metric.prefix || ''}</span>
                      {metric.value}
                      <span className="text-primary-accent">{metric.suffix || ''}</span>
                    </div>
                    <div className="text-[10px] font-sans font-medium text-zinc-400 uppercase tracking-widest">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            {caseStudy.business_results && (
              <div className="prose prose-invert prose-lg mx-auto text-center">
                <p className="text-lg md:text-xl leading-[1.8] text-zinc-300 font-sans font-normal">
                  {caseStudy.business_results}
                </p>
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 07: FAQS
          ========================================= */}
      {caseStudy.faqs && caseStudy.faqs.length > 0 && (
        <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
          <Reveal className="max-w-[800px] mx-auto">
            <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-12">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-4">
              {caseStudy.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
                    <h4 className="text-lg md:text-xl font-sans font-semibold text-white tracking-tight pr-6">
                      {faq.question}
                    </h4>
                    <ChevronDown className="shrink-0 text-zinc-500 group-open:rotate-180 transition-transform duration-300 w-5 h-5" />
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                    <p className="text-base text-zinc-400 font-sans font-normal leading-[1.8]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* =========================================
          SECTION 08: RELATED PROJECTS & SERVICES
          ========================================= */}
      <section className="bg-neutral-900 py-24 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
        <Reveal className="max-w-[1400px] mx-auto space-y-24">
          
          {/* Related Case Studies */}
          {related && related.length > 0 && (
            <div>
              <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.08em] text-primary-accent mb-12 text-center">Related Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {related.map((cs, idx) => (
                  <Reveal key={cs.id} delay={idx * 0.1}>
                    <Link href={`/case-studies/${cs.slug}`} className="group flex flex-col h-full bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-900/50 hover:border-white/10 hover:shadow-2xl transition-all duration-500">
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black shrink-0">
                        <Image 
                          src={cs.thumbnail_url || '/placeholder.jpg'} 
                          alt={cs.title} 
                          fill 
                          className="object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-[10px] font-sans font-medium text-zinc-400 uppercase tracking-[0.08em]">
                            {cs.industry || 'Editorial'}
                          </span>
                        </div>
                        <h4 className="text-xl font-sans font-semibold text-white group-hover:text-primary-accent transition-colors leading-tight tracking-tight">
                          {cs.title}
                        </h4>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

           {/* Internal Linking & Services CTA */}
          <div className="pt-24 border-t border-white/5 text-center">
             <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-8">Deploy This Architecture.</h3>
             <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
               Ready to scale your brand with cinematic AI visual production? 
               Explore our <Link href="/pricing" className="text-primary-accent hover:underline">Pricing Plans</Link>, 
               review our <Link href="/services/video-production" className="text-primary-accent hover:underline">Video Production Services</Link>, 
               read our <Link href="/knowledge-center" className="text-primary-accent hover:underline">Knowledge Center</Link>, 
               or get started immediately.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="h-16 px-12 rounded-xl bg-primary-accent text-black font-sans font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center">
                  Contact Studio
                </Link>
                <Link href="/portfolio" className="h-16 px-12 rounded-xl border border-white/10 bg-white/5 text-white font-sans font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center">
                  View Full Portfolio
                </Link>
                <Link href={`/industries/${caseStudy.industry ? caseStudy.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'}`} className="h-16 px-12 rounded-xl border border-white/10 bg-white/5 text-white font-sans font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center">
                  Industry Solutions
                </Link>
             </div>
          </div>
        </Reveal>
      </section>

      {/* Include the floating WhatsApp button */}
      <WhatsAppChat />
    </main>
  );
}
