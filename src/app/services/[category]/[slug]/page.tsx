import { notFound } from "next/navigation";
import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";
import { AI_SUBPAGE_DATA } from "@/lib/ai-subpage-data";
import { VIDEO_SUBPAGE_DATA } from "@/lib/video-subpage-data";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: any[] = [];
  
  // Add AI params
  Object.keys(AI_SUBPAGE_DATA).forEach((cat) => {
    Object.keys(AI_SUBPAGE_DATA[cat]).forEach((slug) => {
      params.push({ category: cat, slug });
    });
  });

  // Add Video params
  Object.keys(VIDEO_SUBPAGE_DATA).forEach((cat) => {
    Object.keys(VIDEO_SUBPAGE_DATA[cat]).forEach((slug) => {
      params.push({ category: cat, slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const data = AI_SUBPAGE_DATA[category]?.[slug] || VIDEO_SUBPAGE_DATA[category]?.[slug];
  if (!data) return {};

  return {
    title: `${data.h1} | Video Production India & UAE`,
    description: data.intro.slice(0, 160),
    keywords: [`${data.h1}`, `${data.cat} India`, `${data.cat} Kerala`, `${slug} video production`],
  };
}

export default async function ServiceSubPage({ params }: Props) {
  const { category, slug } = await params;
  const isAi = category?.startsWith("ai-");
  const data = isAi 
    ? AI_SUBPAGE_DATA[category]?.[slug]
    : VIDEO_SUBPAGE_DATA[category]?.[slug];

  if (!data) {
    notFound();
  }

  return (
    <AIServiceTemplate 
      categoryName={data.cat}
      currentPath={`/services/${category}/${slug}`}
      h1={data.h1}
      intro={data.intro}
      services={data.services}
      benefits={data.benefits}
      locationBlock={data.locationBlock}
      faqs={data.faqs}
      type={isAi ? "ai" : "video"}
    />
  );
}
