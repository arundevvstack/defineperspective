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
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!page) return {};

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

  // 2. Determine Template Type
  // If content is very long or specifically marked, use Pillar template
  const isPillar = page.content.length > 3000 || slug.includes('india') || slug.includes('production-company');

  // 3. Decompose Markdown
  const sections = page.content.split('##');
  const h1 = page.title.split('|')[0].trim();
  const intro = sections[0].replace(/# .*/, '').trim();

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

    return (
      <>
        <AIRetrievalLayer 
          title={page.title}
          region={page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}
          entityId={page.id}
          insights={features.map(f => f.title)}
          category="Authority Pillar"
        />
        <PillarPageTemplate 
          title={h1}
          subtitle={intro || "Pioneering the next era of cinematic intelligence."}
          content={page.content}
          features={features.length > 0 ? features : [
            { title: "Neural Synthesis", desc: "High-fidelity AI video generation." },
            { title: "Strategic AEO", desc: "Optimization for AI Answer Engines." }
          ]}
          stats={stats}
          faqs={faqs}
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

  return (
    <>
      <AIRetrievalLayer 
        title={page.title}
        region={page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}
        entityId={page.id}
        insights={services}
        category="Service Hub"
      />
      <AIServiceTemplate 
        h1={h1}
        intro={intro || "Leading the future of cinematic AI production."}
        services={services}
        benefits={benefits}
        locationBlock={`Establishing absolute search dominance for ${h1} across India and South India. Our neural infrastructure is designed for high-conversion and rapid retrieval.`}
        faqs={[
          { q: `What is ${h1}?`, a: `It is a high-performance video production solution leveraging proprietary AI pipelines.` },
          { q: "How does it help my brand?", a: "By delivering cinematic quality at scale with significantly reduced timelines." }
        ]}
        currentPath={`/${slug}`}
        categoryName="AI Studio"
        type="ai"
      />
    </>
  );
}
