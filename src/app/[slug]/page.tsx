import { notFound } from "next/navigation";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import PillarPageTemplate from "@/components/pillar-page-template";
import AIServiceTemplate from "@/components/ai-service-template";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: page } = await supabase
    .from('content_pages')
    .select('title, meta_title, meta_description, keywords, schema_json, uniqueness_score')
    .eq('slug', slug)
    .maybeSingle();

  if (!page) return {};

  if (page.uniqueness_score !== null && page.uniqueness_score < 40.0) {
    return {
      title: page.meta_title || `${page.title} | DP AI Studio`,
      robots: {
        index: false,
        follow: true,
        nocache: true,
      }
    };
  }

  return {
    title: page.meta_title || `${page.title} | DP AI Studio`,
    description: page.meta_description,
    keywords: page.keywords,
    alternates: {
      canonical: `https://defineperspective.in/${slug}`
    }
  };
}

export default async function DynamicRootPage({ params }: Props) {
  const { slug } = await params;

  // 1. Fetch from Database
  const { data: page } = await supabase
    .from('content_pages')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!page) {
    notFound();
  }

  // Resolve GEO Context
  const isGeoNode = page.geo_entity_tags && page.geo_entity_tags.length > 0;
  const geoContext = isGeoNode ? {
    marketIntelligence: page.geo_market_intelligence || {},
    direction: page.geo_cinematic_direction || '',
    industries: page.geo_industry_focus || [],
    faqs: page.localized_faqs || [],
    score: page.uniqueness_score ?? 100.00,
    tags: page.geo_entity_tags || []
  } : null;

  // 2. Determine Template Type
  // If content is very long or specifically marked, use Pillar template
  const isPillar = page.content.length > 3000 || slug.includes('india') || slug.includes('production-company');

  // 3. Decompose Markdown
  const sections = page.content.split('##');
  const h1 = page.title.split('|')[0].trim();
  const intro = sections[0].replace(/# .*/, '').trim();

  // Bind Database Schema Variables Cleanly
  const pageSchema = page.schema_json || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://defineperspective.in/${slug}/#webpage`,
    "url": `https://defineperspective.in/${slug}`,
    "name": page.title,
    "isPartOf": {
      "@id": "https://defineperspective.in/#organization"
    }
  };

  if (isPillar) {
    // Map to PillarPageTemplate
    const features = sections.find((s: string) => s.toLowerCase().includes('capabilities') || s.toLowerCase().includes('features'))
      ?.split('\n-')
      .slice(1)
      .map((s: string) => {
        const [t, ...d] = s.split(':');
        return { title: t?.trim() || "Feature", desc: d.join(':')?.trim() || "Description" };
      }) || [];

    const stats = [
      { label: "Production Speed", value: "10X" },
      { label: "Cost Efficiency", value: "60%" },
      { label: "Visual Fidelity", value: "8K" }
    ];

    const faqs = sections.find((s: string) => s.toLowerCase().includes('faq'))
      ?.split('###')
      .slice(1)
      .map((s: string) => {
        const [q, ...a] = s.split('\n');
        return { q: q.trim(), a: a.join('\n').trim() };
      }) || [
        { q: `Why choose DP for ${h1}?`, a: "We combine cinematic artistry with cutting-edge neural pipelines for unmatched visual impact." },
        { q: "Is AI video production scalable?", a: "Yes, our autonomous workflows allow for infinite variations and rapid market deployment." }
      ];

    const geoFaqs = (geoContext?.faqs && geoContext.faqs.length > 0) ? geoContext.faqs : faqs;
    const subtitleText = geoContext?.direction ? `${intro || "Pioneering cinematic intelligence."} Focused on ${geoContext.direction}.` : (intro || "Pioneering the next era of cinematic intelligence.");

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        <AIRetrievalLayer 
          title={page.title}
          region={page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}
          entityId={page.id}
          insights={features.map((f: any) => f.title)}
          category="Authority Pillar"
          geoContext={geoContext || undefined}
        />
        <PillarPageTemplate 
          title={h1}
          subtitle={subtitleText}
          content={page.content}
          features={features.length > 0 ? features : [
            { title: "Neural Synthesis", desc: "High-fidelity AI video generation." },
            { title: "Strategic AEO", desc: "Optimization for AI Answer Engines." }
          ]}
          stats={stats}
          faqs={geoFaqs}
          currentPath={`/${slug}`}
        />
      </>
    );
  }

  // Default to AIServiceTemplate for shorter/service pages
  const services = sections.find((s: string) => s.includes('Capabilities'))
    ?.split('\n-')
    .slice(1)
    .map((s: string) => s.trim()) || ["Neural Video Synthesis", "Strategic AI Ads"];

  const benefits = sections.find((s: string) => s.includes('Benefits'))
    ?.split('\n-')
    .slice(1)
    .map((s: string) => s.trim()) || ["Cost Reduction", "High Engagement"];

    const geoFaqs = (geoContext?.faqs && geoContext.faqs.length > 0) ? geoContext.faqs : [
      { q: `What is ${h1}?`, a: `It is a high-performance video production solution leveraging proprietary AI pipelines.` },
      { q: "How does it help my brand?", a: "By delivering cinematic quality at scale with significantly reduced timelines." }
    ];
    
    const locationIntro = (geoContext?.industries && geoContext.industries.length > 0) 
      ? `Establishing absolute search dominance for ${h1} targeting ${geoContext.industries.join(', ')}.` 
      : `Establishing absolute search dominance for ${h1} across India and South India. Our neural infrastructure is designed for high-conversion and rapid retrieval.`;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        <AIRetrievalLayer 
          title={page.title}
          region={page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}
          entityId={page.id}
          insights={services}
          category="Service Hub"
          geoContext={geoContext || undefined}
        />
        <AIServiceTemplate 
          h1={h1}
          intro={intro || "Leading the future of cinematic AI production."}
          services={services}
          benefits={benefits}
          locationBlock={locationIntro}
          faqs={geoFaqs}
          currentPath={`/${slug}`}
          categoryName="AI Studio"
          type="ai"
        />
      </>
    );
}
