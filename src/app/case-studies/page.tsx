import { Metadata } from 'next';
import { supabaseAdmin } from '@/lib/supabase-admin';
import Link from 'next/link';
import Image from 'next/image';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';

export const revalidate = 60; // ISR revalidation

export const metadata: Metadata = {
  title: 'AI Commercial Production Case Studies | DP AI Studios',
  description: 'Explore deep-dive technical case studies of cinematic AI video production, virtual production, and AI workflows for brands across India.',
  keywords: [
    'AI video production case studies',
    'cinematic AI workflows',
    'AI commercial production India',
    'AI advertising examples'
  ],
  openGraph: {
    title: 'AI Commercial Production Case Studies | DP AI Studios',
    description: 'Deep-dive technical case studies of cinematic AI video production and generative workflows.',
    url: 'https://defineperspective.in/case-studies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://defineperspective.in/case-studies',
  }
};

export default async function CaseStudiesListingPage() {
  const { data: caseStudies } = await supabaseAdmin
    .from('case_studies')
    .select('title, slug, thumbnail_url, ai_summary, geo, industry, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  // Safe Set-based Deduplication to prevent future CMS clones from breaking SEO
  const rawCaseStudies = caseStudies || [];
  const uniqueTitles = new Set();
  const uniqueCaseStudies = rawCaseStudies.filter(cs => {
    if (uniqueTitles.has(cs.title)) return false;
    uniqueTitles.add(cs.title);
    return true;
  });

  // Generate CollectionPage Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Commercial Production Case Studies",
    "description": "Deep-dive technical case studies of cinematic AI video production and generative workflows.",
    "url": "https://defineperspective.in/case-studies",
    "isPartOf": {
      "@type": "Organization",
      "name": "DP AI Studios",
      "url": "https://defineperspective.in/"
    },
    "hasPart": uniqueCaseStudies.map(cs => ({
      "@type": "Article",
      "headline": cs.title,
      "url": `https://defineperspective.in/case-studies/${cs.slug}`
    }))
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-20 pb-40 relative overflow-hidden selection:bg-primary-accent/30">
      <GlassNavbar />
      
      {/* Background Graphic Nodes */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[1000px] w-[1000px] bg-primary-accent/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-[800px] w-[800px] bg-white/5 blur-[180px] rounded-full" />
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="py-16 md:py-24 max-w-4xl">
          <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 block">Strategic Node {" // "} 02</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-8 leading-tight drop-shadow-2xl">
            Case <span className="text-primary-accent">Studies.</span>
          </h1>
          <p className="text-base md:text-xl text-zinc-400 font-light max-w-2xl uppercase tracking-[0.15em] leading-relaxed">
            Deep-dive editorial analysis of our cinematic AI advertising workflows. Explore how we engineer broadcast-ready generative films for industry leaders.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="mt-12">
          {uniqueCaseStudies.length === 0 ? (
            <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl text-center">
              <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">No public case studies found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {uniqueCaseStudies.map((cs) => (
                <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black shrink-0">
                    {cs.thumbnail_url ? (
                      <Image 
                        src={cs.thumbnail_url} 
                        alt={cs.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
                        <span className="text-zinc-800 font-bold text-2xl uppercase opacity-30">DP AI</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{cs.industry}</span>
                      <span className="px-2 py-1 bg-primary-accent/10 rounded text-[10px] font-mono text-primary-accent uppercase tracking-wider">{cs.geo}</span>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-4 group-hover:text-primary-accent transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    
                    {cs.ai_summary && (
                      <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                        {cs.ai_summary}
                      </p>
                    )}
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        {new Date(cs.published_at || cs.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-accent group-hover:translate-x-2 transition-transform flex items-center gap-2">
                        Read Case Study &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}
