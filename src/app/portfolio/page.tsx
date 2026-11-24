import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio-content";
import { Suspense } from "react";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getPublicPublishedProjects } from "@/app/actions/portfolio-cms";
import { isReservedSlug, PortfolioProject, normalizeMediaUrl } from "@/types/portfolio-cms";

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

  // Safe Set-based Deduplication & Normalization for legacy case studies
  const rawCaseStudies = caseStudies || [];
  const uniqueTitles = new Set<string>();
  const uniqueLowerTitles = new Set<string>();
  const uniqueSlugs = new Set<string>();

  const uniqueCaseStudies = rawCaseStudies.filter(cs => {
    if (uniqueTitles.has(cs.title)) return false;
    uniqueTitles.add(cs.title);
    uniqueLowerTitles.add(cs.title.toLowerCase().trim());
    uniqueSlugs.add(cs.slug.toLowerCase().trim());
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

  // Fetch published CMS portfolio projects safely (Fail-Safe: never breaks legacy portfolio if unmigrated or unavailable)
  let cmsProjects: PortfolioProject[] = [];
  try {
    cmsProjects = await getPublicPublishedProjects();
  } catch (err) {
    console.warn('[portfolio] getPublicPublishedProjects unavailable, falling back to legacy case studies:', err);
    cmsProjects = [];
  }

  // Filter and map CMS projects to the portfolio grid format
  // Strict invariants: status = publicly_published AND robots_index = true AND not reserved static slug AND not duplicate
  const validCmsItems = (cmsProjects || [])
    .filter(p => {
      if (!p || !p.slug || !p.title) return false;
      if (p.status !== 'publicly_published' || p.robots_index !== true) return false;
      const cleanSlug = p.slug.toLowerCase().trim();
      if (isReservedSlug(cleanSlug)) return false; // Never duplicate or shadow 13 bespoke static routes
      if (uniqueSlugs.has(cleanSlug)) return false; // Never duplicate existing slug
      if (uniqueLowerTitles.has(p.title.toLowerCase().trim())) return false; // Never duplicate existing title
      return true;
    })
    .map(p => {
      const cleanSlug = p.slug.toLowerCase().trim();
      uniqueSlugs.add(cleanSlug);
      uniqueLowerTitles.add(p.title.toLowerCase().trim());

      const rawGeos = [p.production_location, ...(p.geo_entities || [])].filter(Boolean) as string[];
      const displayGeos = Array.from(new Set(rawGeos));

      const rawIndustries = [
        p.category ? p.category.replace(/_/g, ' ') : null,
        ...(p.services_delivered || []),
        ...(p.deliverables || []),
      ].filter(Boolean) as string[];
      const displayIndustries = Array.from(new Set(rawIndustries));

      return {
        id: p.id,
        title: p.title,
        slug: cleanSlug,
        href: `/portfolio/${cleanSlug}`,
        thumbnail_url: normalizeMediaUrl(p.thumbnail_url || p.hero_image_url || null) || null,
        hero_image_url: normalizeMediaUrl(p.hero_image_url || null) || null,
        ai_summary: p.project_overview || p.creative_concept || '',
        geo: p.production_location || 'India',
        geo_targets: p.geo_entities || [],
        category: p.category,
        videoId: p.video_id || null,
        video_type: p.video_type || null,
        video_url: p.video_url || null,
        client: p.public_client_display_name || 'DP AI Studio',
        industry: p.category ? p.category.replace(/_/g, ' ') : 'AI Commercial',
        industries: displayIndustries.length > 0 ? displayIndustries : ['AI Commercial'],
        displayGeos: displayGeos.length > 0 ? displayGeos : ['India'],
        displayIndustries: displayIndustries.length > 0 ? displayIndustries : ['AI Commercial'],
        published_at: p.published_at || p.created_at,
        created_at: p.created_at,
        isCmsProject: true,
      };
    });

  // Preserve all legacy case studies in original order, then append published CMS projects
  const allPortfolioItems = [...uniqueCaseStudies, ...validCmsItems];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="h-1 w-24 bg-transparent border-2 border-primary-accent animate-pulse rounded-full hover:bg-transparent transition-all duration-300" /></div>}>
        <PortfolioContent caseStudies={allPortfolioItems} />
      </Suspense>
    </>
  );
}
