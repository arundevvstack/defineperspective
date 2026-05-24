import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase-admin';
import Link from 'next/link';
import Image from 'next/image';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import LiteYouTube from '@/components/lite-youtube';
import { ArrowRight } from 'lucide-react';

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
  industry: string;
  published: boolean;
  published_at: string;
  created_at: string;
};

// ==============================================================================
// REVALIDATION
// ==============================================================================
export const revalidate = 60;

// ==============================================================================
// METADATA
// ==============================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: cs } = await supabaseAdmin
    .from('case_studies')
    .select('title, ai_summary, thumbnail_url, geo, industry, geo_tags, published')
    .eq('slug', slug)
    .maybeSingle();

  if (!cs) return { title: 'Case Study Not Found | DP AI Studios' };

  const description = cs.ai_summary?.substring(0, 160) || `${cs.title} — AI cinematic production by DP AI Studios.`;

  return {
    title: `${cs.title} | DP AI Studios`,
    description,
    keywords: [cs.industry, 'AI video production', 'cinematic AI', ...(cs.geo_tags || [])].join(', '),
    openGraph: {
      title: cs.title,
      description,
      images: cs.thumbnail_url ? [{ url: cs.thumbnail_url }] : [],
      type: 'article',
    },
    alternates: {
      canonical: `https://defineperspective.in/case-studies/${slug}`,
    },
    ...(cs.published ? {} : { robots: { index: false, follow: false } }),
  };
}

// ==============================================================================
// PAGE
// ==============================================================================
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const { data: cs } = await supabaseAdmin
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!cs) notFound();

  const caseStudy = cs as CaseStudy;
  const isPublic = caseStudy.published === true;

  // Fetch related case studies (same industry or latest)
  const { data: related } = await supabaseAdmin
    .from('case_studies')
    .select('title, slug, thumbnail_url, industry')
    .eq('published', true)
    .neq('slug', slug)
    .limit(3);

  // Generate Article & Speakable Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.ai_summary,
    "image": caseStudy.thumbnail_url || "https://defineperspective.in/og-image.jpg",
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
    <main className="bg-obsidian text-white min-h-screen font-sans selection:bg-primary-accent/30 pt-20">
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

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end overflow-hidden border-b border-white/5 pb-16">
        {caseStudy.thumbnail_url && (
          <div className="absolute inset-0 z-0">
            <Image src={caseStudy.thumbnail_url} alt={caseStudy.title} fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />
          </div>
        )}

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{caseStudy.industry}</span>
              <span className="px-3 py-1.5 bg-primary-accent/10 border border-primary-accent/20 rounded-full text-[10px] font-mono text-primary-accent uppercase tracking-widest">{caseStudy.geo}</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{caseStudy.platform}</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-[1.1] drop-shadow-2xl">
              {caseStudy.title}
            </h1>
            
            <div className="flex items-center gap-6 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              <p>Client: <span className="text-white font-bold">{caseStudy.client_name || "Confidential"}</span></p>
              <p>Date: <span className="text-white font-bold">{new Date(caseStudy.published_at || caseStudy.created_at).getFullYear()}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <div className="container mx-auto px-6 md:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* ── LEFT NARRATIVE COLUMN ── */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* 2. Campaign Summary */}
          <section id="campaign-summary" className="prose prose-invert prose-xl max-w-none">
            <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">01 // Campaign Summary</h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-200">
              {caseStudy.ai_summary}
            </p>
          </section>

          {/* 3. Final Film / YouTube Embed */}
          <section className="relative group">
            <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">02 // The Final Film</h2>
            <div className="relative rounded-[2rem] overflow-hidden bg-black/60 border border-white/10 shadow-2xl aspect-video w-full group-hover:border-primary-accent/40 transition-colors duration-700">
              {caseStudy.video_embed_url ? (
                <iframe
                  src={caseStudy.video_embed_url}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={caseStudy.title}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <a href={caseStudy.external_video_url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-widest font-bold flex items-center gap-3">
                    ▶ Watch on {caseStudy.platform}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* 4. Creative Direction */}
          {caseStudy.cinematic_direction && (
            <section id="creative-direction">
              <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">03 // Creative Direction</h2>
              <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem]">
                <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                  {caseStudy.cinematic_direction}
                </p>
              </div>
            </section>
          )}

          {/* 5. Tools & Tech Stack */}
          {caseStudy.workflows && caseStudy.workflows.length > 0 && (
            <section>
              <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">04 // Generative Stack & Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {caseStudy.workflows.map((tool) => (
                  <div key={tool} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-accent shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-wider text-zinc-200">{tool}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Production Breakdown (Transcript / Detailed text) */}
          {caseStudy.transcript && caseStudy.transcript.length > 0 && (
            <section>
              <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">05 // Dialogue & Scripting</h2>
              <div className="bg-neutral-900/40 p-8 rounded-[2rem] border border-white/5 h-96 overflow-y-auto custom-scrollbar">
                <div className="text-zinc-400 font-mono leading-relaxed text-xs sm:text-sm whitespace-pre-wrap">
                  {caseStudy.transcript}
                </div>
              </div>
            </section>
          )}

          {/* FAQ SEO Injection */}
          {caseStudy.faqs && caseStudy.faqs.length > 0 && (
            <section>
              <h2 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 border-b border-white/10 pb-4">06 // Analysis & FAQ</h2>
              <div className="space-y-4">
                {caseStudy.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-white text-sm md:text-base font-bold uppercase tracking-wide mb-3">{faq.question}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* ── RIGHT SIDEBAR / CONTEXT ── */}
        <aside className="lg:col-span-4 space-y-12">
          
          {/* Internal Linking / Semantic Clustering */}
          {caseStudy.internal_links && caseStudy.internal_links.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] sticky top-32">
              <h3 className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6">Semantic Pathways</h3>
              <div className="flex flex-col gap-3">
                {caseStudy.internal_links.map((link) => (
                  <Link key={link} href={link} className="text-xs uppercase tracking-wider bg-white/5 hover:bg-primary-accent hover:text-obsidian transition-all px-4 py-3 rounded-xl text-zinc-300 font-bold border border-white/10 flex items-center justify-between group">
                    <span>{link.split('/').pop()?.replace(/-/g, ' ')}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Sidebar CTA */}
          <div className="bg-gradient-to-br from-primary-accent/20 to-transparent border border-primary-accent/30 p-8 rounded-[2rem]">
            <h3 className="text-xl font-black uppercase mb-4 text-white">Scale your brand</h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Want to achieve similar cinematic velocity? Let's build your next high-conversion generative campaign.</p>
            <Link href="/contact" className="w-full text-center block py-4 bg-primary-accent text-obsidian font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors">
              Start Project
            </Link>
          </div>

        </aside>
      </div>

      {/* ── 7. RELATED PROJECTS & CTA ── */}
      <section className="border-t border-white/5 bg-white/[0.01] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">Related <span className="text-primary-accent">Intelligence.</span></h2>
              <p className="text-sm uppercase tracking-widest text-zinc-500 font-mono">Explore adjacent cinematic benchmarks</p>
            </div>
            <Link href="/case-studies" className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors border border-white/10 px-6 py-3 rounded-full bg-white/5">
              View All Case Studies <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related?.map((cs) => (
              <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="group block bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-primary-accent/30 transition-all">
                <div className="aspect-[16/10] relative bg-black border-b border-white/5">
                  {cs.thumbnail_url && <Image src={cs.thumbnail_url} alt={cs.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />}
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-3 block">{cs.industry}</span>
                  <h3 className="text-lg font-bold uppercase text-white group-hover:text-primary-accent transition-colors">{cs.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/case-studies" className="flex items-center justify-center gap-3 w-full text-xs uppercase tracking-widest font-bold text-zinc-400 border border-white/10 px-6 py-4 rounded-xl bg-white/5">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ── GLOBAL FOOTER CTA ── */}
      <section className="container mx-auto px-6 md:px-12 my-20">
        <div className="p-12 md:p-32 rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase text-white mb-12 leading-[1.1]">
              Engineer Your <br /><span className="text-primary-accent">Advantage.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/portfolio" className="h-16 px-12 rounded-full border-2 border-primary-accent text-white font-bold uppercase tracking-widest text-xs hover:bg-primary-accent hover:text-obsidian transition-all shadow-xl flex items-center justify-center gap-4">
                View Visual Portfolio
              </Link>
              <Link href="https://wa.me/917012941696" target="_blank" className="h-16 px-12 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-obsidian transition-all flex items-center justify-center gap-4">
                Connect via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </main>
  );
}
