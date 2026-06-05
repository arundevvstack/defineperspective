import { Metadata } from 'next';
import { supabaseAdmin } from '@/lib/supabase-admin';
import Link from 'next/link';
import Image from 'next/image';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import CaseStudyFilter from './CaseStudyFilter';

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
    .select('title, slug, thumbnail_url, ai_summary, geo, geo_targets, industry, industries, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  // Safe Set-based Deduplication to prevent future CMS clones from breaking SEO
  const rawCaseStudies = caseStudies || [];
  const uniqueTitles = new Set();
  const uniqueCaseStudies = rawCaseStudies.filter(cs => {
    if (uniqueTitles.has(cs.title)) return false;
    uniqueTitles.add(cs.title);
    return true;
  }).map(cs => ({
    ...cs,
    displayGeos: Array.from(new Set([cs.geo, ...(cs.geo_targets || [])])).filter(Boolean),
    displayIndustries: Array.from(new Set([cs.industry, ...(cs.industries || [])])).filter(Boolean)
  }));

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

        {/* Case Studies Grid & Filters */}
        <section className="mt-12">
          <CaseStudyFilter caseStudies={uniqueCaseStudies} />
        </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}
