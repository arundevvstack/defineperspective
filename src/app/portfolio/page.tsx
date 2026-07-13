import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio-content";
import { Suspense } from "react";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const revalidate = 60; // ISR revalidation

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Explore the work of a leading AI ad film production company in Kochi. We deliver cinematic AI video production for brands in Kerala and across India. Recognized as the Best AI Video Production Agency India.",
  keywords: [
    "AI ad film production company Kochi",
    "AI video production for brands in Kerala",
    "who is the best ai video production company",
    "top ai video creators for brands",
    "Best AI Video Production Agency India",
    "Video production portfolio Kerala",
    "AI video production company India"
  ],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "Cinematic AI video production for brands in Kerala. Top AI video creators in India.",
    url: "https://defineperspective.in/portfolio",
  },
};

export default async function PortfolioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://defineperspective.in/portfolio/luxury-ai-jewellery-tvc-production",
        "name": "Luxury AI Jewellery TVC Production"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://defineperspective.in/portfolio/cinematic-ai-commercial-production",
        "name": "Cinematic AI Commercial Production"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://defineperspective.in/portfolio/dotspace-commercial",
        "name": "Dotspace Commercial"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://defineperspective.in/portfolio/banaras-silk",
        "name": "Banaras Silk AI Film"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://defineperspective.in/portfolio/bb-serum-tvc",
        "name": "BB Serum TVC"
      }
    ]
  };

  // Fetch case studies directly on the server to preserve Zero-Regression and pass as props
  const { data: caseStudies } = await supabaseAdmin
    .from('case_studies')
    .select('title, slug, thumbnail_url, ai_summary, geo, geo_targets, industry, industries, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  // Safe Set-based Deduplication
  const rawCaseStudies = caseStudies || [];
  const uniqueTitles = new Set();
  const uniqueCaseStudies = rawCaseStudies.filter(cs => {
    if (uniqueTitles.has(cs.title)) return false;
    uniqueTitles.add(cs.title);
    return true;
  }).map(cs => {
    const isRedChamber = cs.slug === 'this-looks-like-a-1m-film-but-it-s-ai-red-chamber-cinematic-ai-music-video' || cs.title.includes('RED CHAMBER');
    return {
      ...cs,
      slug: isRedChamber ? 'red-chamber-ai-music-video-production' : cs.slug,
      title: isRedChamber ? 'Red Chamber | Cinematic AI Music Video by DP AI Studios (Define Perspective)' : cs.title,
      ai_summary: isRedChamber ? 'Experience Red Chamber, a cinematic AI music video created by DP AI Studios (Define Perspective). This project showcases photorealistic AI filmmaking, cinematic storytelling, virtual cinematography, AI image generation, and premium visual production, demonstrating how generative AI can be used to create emotionally engaging, film-quality music videos.' : cs.ai_summary,
      industry: isRedChamber ? 'Entertainment & Music' : cs.industry,
      industries: isRedChamber ? ['Entertainment', 'Music Video'] : cs.industries,
      displayGeos: Array.from(new Set([cs.geo, ...(cs.geo_targets || [])])).filter(Boolean),
      displayIndustries: isRedChamber ? ['Entertainment', 'Music Video'] : Array.from(new Set([cs.industry, ...(cs.industries || [])])).filter(Boolean)
    };
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="h-1 w-24 bg-transparent border-2 border-primary-accent animate-pulse rounded-full hover:bg-transparent transition-all duration-300" /></div>}>
        <PortfolioContent caseStudies={uniqueCaseStudies} />
      </Suspense>
    </>
  );
}
