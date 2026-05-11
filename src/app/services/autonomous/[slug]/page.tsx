import { notFound } from "next/navigation";
import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";
import { supabase } from "@/lib/supabase";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: page } = await supabase
    .from('content_pages')
    .select('*')
    .eq('slug', `services/${slug}`)
    .maybeSingle();

  if (!page) return {};

  return {
    title: page.meta_title || `${page.title} | DP AI Studio`,
    description: page.meta_description,
    keywords: page.keywords,
  };
}

export default async function AutonomousServicePage({ params }: Props) {
  const { slug } = await params;

  // 1. Fetch from Database
  const { data: page } = await supabase
    .from('content_pages')
    .select('*')
    .eq('slug', `services/${slug}`)
    .maybeSingle();

  if (!page) {
    notFound();
  }

  // 2. Map Database Content to Cinematic Template
  // We decompose the markdown/text into template blocks
  const sections = page.content.split('##');
  const intro = sections[0].replace(/# .*/, '').trim();
  
  const services = sections.find((s: string) => s.includes('Capabilities') || s.includes('Why Choose'))
    ?.split('\n-')
    .slice(1)
    .map((s: string) => s.trim()) || ["Neural Video Synthesis", "Regional SEO Optimization"];

  const benefits = sections.find((s: string) => s.includes('Process'))
    ?.split('\n1.')
    .slice(1)
    .map((s: string) => s.trim()) || ["Increased ROI", "Market Dominance"];

  return (
    <>
      <AIRetrievalLayer 
        title={page.title}
        region={page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}
        entityId={page.id}
        insights={services}
      />
      <AIServiceTemplate 
        h1={page.title.split('|')[0].trim()}
        intro={intro || "Leading the future of cinematic AI production."}
        services={services}
        benefits={benefits}
        locationBlock={`Defining the perspective of search authority in ${page.keywords?.includes('Kerala') ? 'Kerala' : 'India'}. Our neural networks are optimized for maximum regional impact.`}
        faqs={[
          { q: `What is ${page.title.split('|')[0].trim()}?`, a: `It is an advanced cinematic production workflow leveraging high-fidelity AI models.` },
          { q: "How long does it take?", a: "Our neural pipeline reduces traditional production time by 60% while maintaining DP's premium quality." }
        ]}
        currentPath={`/services/autonomous/${slug}`}
        categoryName="Neural Studio"
        type="ai"
      />
    </>
  );
}
