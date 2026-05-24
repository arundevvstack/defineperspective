import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

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

  const { data: cs } = await supabase
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

  const { data: cs } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  console.log('[CaseStudyPage Debug]', {
    requestedSlug: slug,
    rowFound: !!cs,
    published: cs?.published
  });

  if (!cs) notFound();

  const caseStudy = cs as CaseStudy;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* ── DRAFT MODE BANNER ── */}
      {!caseStudy.published && (
        <div className="bg-amber-500 text-black text-center text-xs font-bold uppercase tracking-widest py-2 px-4 sticky top-0 z-50">
          ⚠️ Draft Mode: AI Enrichment Pending. This node is hidden from public indexing.
        </div>
      )}

      {/* ── JSON-LD SCHEMA ── */}
      {caseStudy.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudy.schema_json) }}
        />
      )}

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {caseStudy.thumbnail_url && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${caseStudy.thumbnail_url})` }}
          />
        )}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <div className="relative z-10 text-center max-w-4xl px-6 py-20">
          <p className="text-amber-500 uppercase tracking-widest text-xs sm:text-sm mb-4 font-medium">
            {caseStudy.industry} · {caseStudy.geo}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
          {caseStudy.cinematic_direction && (
            <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto">
              {caseStudy.cinematic_direction}
            </p>
          )}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* ── LEFT COLUMN: Primary Content ── */}
        <div className="lg:col-span-8 space-y-16 sm:space-y-24">

          {/* Video Embed (Facade-loaded) */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-light mb-6 tracking-wide">The Film</h2>
            <div className="aspect-video w-full bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
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
                <a
                  href={caseStudy.external_video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  ▶ Watch on {caseStudy.platform}
                </a>
              )}
            </div>
          </section>

          {/* AI Summary — The Core Authority Signal */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-light mb-6 tracking-wide">Project Overview</h2>
            <div id="ai-summary" className="prose prose-invert prose-lg max-w-none">
              <p className="text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
                {caseStudy.ai_summary}
              </p>
            </div>
          </section>

          {/* Transcript */}
          {caseStudy.transcript && caseStudy.transcript.length > 0 && (
            <section className="bg-neutral-900/60 p-6 sm:p-8 rounded-xl border border-neutral-800">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Full Transcript</h3>
              <div className="text-neutral-400 font-light leading-relaxed text-sm whitespace-pre-wrap max-h-[400px] overflow-y-auto pr-2">
                {caseStudy.transcript}
              </div>
            </section>
          )}

          {/* FAQ Section — SEO-critical, server-rendered */}
          {caseStudy.faqs && caseStudy.faqs.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-light mb-8 tracking-wide">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {caseStudy.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                  <div key={idx} className="border-b border-neutral-800 pb-6 last:border-0">
                    <h3 className="text-white text-base sm:text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── RIGHT COLUMN: Sidebar HUD ── */}
        <aside className="lg:col-span-4 space-y-8">

          {/* Workflow Proof */}
          {caseStudy.workflows && caseStudy.workflows.length > 0 && (
            <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-5 border-b border-neutral-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Production Workflow
              </h3>
              <ul className="space-y-3">
                {caseStudy.workflows.map((w: string) => (
                  <li key={w} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="w-1 h-1 rounded-full bg-amber-500/60 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Metadata */}
          <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 rounded-xl">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-5 border-b border-neutral-800 pb-3">
              Project Details
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-neutral-600 text-xs uppercase mb-0.5">Client</dt>
                <dd className="text-white">{caseStudy.client_name}</dd>
              </div>
              <div>
                <dt className="text-neutral-600 text-xs uppercase mb-0.5">Location</dt>
                <dd className="text-white">{caseStudy.geo}</dd>
              </div>
              <div>
                <dt className="text-neutral-600 text-xs uppercase mb-0.5">Industry</dt>
                <dd className="text-white">{caseStudy.industry}</dd>
              </div>
              <div>
                <dt className="text-neutral-600 text-xs uppercase mb-0.5">Platform</dt>
                <dd className="text-white capitalize">{caseStudy.platform}</dd>
              </div>
            </dl>
          </div>

          {/* GEO Authority Tags */}
          {caseStudy.geo_tags && caseStudy.geo_tags.length > 0 && (
            <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-800 pb-3">
                GEO Authority
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.geo_tags.map((tag: string) => (
                  <span key={tag} className="text-xs uppercase tracking-wider bg-neutral-800 px-3 py-1.5 rounded text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Semantic Internal Links */}
          {caseStudy.internal_links && caseStudy.internal_links.length > 0 && (
            <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-800 pb-3">
                Related Authority Nodes
              </h3>
              <div className="flex flex-col gap-2">
                {caseStudy.internal_links.map((link: string) => (
                  <Link
                    key={link}
                    href={link}
                    className="text-xs uppercase tracking-wider bg-neutral-800 hover:bg-amber-600 transition-colors px-3 py-2 rounded text-neutral-300 hover:text-white"
                  >
                    {link.replace(/^\//, '').replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* ── TEMPORARY DEBUG BLOCK ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mt-12 p-6 bg-red-900/20 border border-red-500/50 rounded-xl text-xs font-mono text-neutral-300">
          <h4 className="text-red-400 font-bold mb-3 uppercase tracking-widest">SSR Debug Data</h4>
          <p>Slug: {caseStudy.slug}</p>
          <p>Published: {String(caseStudy.published)}</p>
          <p>Draft: {String(!caseStudy.published)}</p>
          <p>AI Summary Exists: {String(!!caseStudy.ai_summary && caseStudy.ai_summary !== 'Pending AI enrichment.')}</p>
          <p>FAQ Count: {caseStudy.faqs?.length || 0}</p>
        </div>
      </div>
    </div>
  );
}
