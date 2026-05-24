import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import VideoEntityLayer from '@/components/seo/VideoEntityLayer';
import Link from 'next/link';
import CaseStudyClient from '@/components/ui/CaseStudyClient';

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: page } = await supabase
    .from('case_studies')
    .select('title, excerpt, featured_image, geo_tags, client_industry')
    .eq('slug', slug)
    .single();

  if (!page) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${page.title} | DP AI Studios`,
    description: page.excerpt,
    keywords: [`${page.client_industry} video`, ...(page.geo_tags || []), 'AI video production', 'case study'].join(', '),
    openGraph: {
      title: page.title,
      description: page.excerpt,
      images: page.featured_image ? [{ url: page.featured_image }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: caseStudy } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!caseStudy) {
    notFound();
  }

  // Safely parse JSONB fields
  const aiWorkflow = typeof caseStudy.ai_workflow === 'string' ? JSON.parse(caseStudy.ai_workflow) : caseStudy.ai_workflow;
  const videoMeta = typeof caseStudy.video_metadata === 'string' ? JSON.parse(caseStudy.video_metadata) : caseStudy.video_metadata;
  const pipeline = typeof caseStudy.production_pipeline === 'string' ? JSON.parse(caseStudy.production_pipeline) : caseStudy.production_pipeline;
  const metrics = typeof caseStudy.metrics_and_impact === 'string' ? JSON.parse(caseStudy.metrics_and_impact) : caseStudy.metrics_and_impact;
  const faqs = typeof caseStudy.faq_json === 'string' ? JSON.parse(caseStudy.faq_json) : caseStudy.faq_json;
  const relatedSlugs = typeof caseStudy.related_nodes === 'string' ? JSON.parse(caseStudy.related_nodes) : caseStudy.related_nodes;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <VideoEntityLayer 
        id={caseStudy.id}
        title={caseStudy.title}
        description={caseStudy.excerpt}
        thumbnailUrl={caseStudy.thumbnail_url || caseStudy.featured_image}
        uploadDate={caseStudy.upload_date}
        duration={caseStudy.duration || "PT1M00S"}
        embedUrl={videoMeta?.embedUrl || caseStudy.youtube_url}
        contentUrl={videoMeta?.contentUrl || caseStudy.content_url}
        transcript={caseStudy.transcript || ''}
        slug={caseStudy.slug}
        geoTags={caseStudy.geo_tags || []}
        industry={caseStudy.client_industry}
        aiWorkflow={aiWorkflow}
        faqJson={faqs || []}
      />

      {/* Cinematic Experience Client-Side Orchestration */}
      <CaseStudyClient 
        caseStudy={caseStudy}
        videoMeta={videoMeta}
        aiWorkflow={aiWorkflow}
        pipeline={pipeline}
        relatedSlugs={relatedSlugs}
      />
    </div>
  );
}
