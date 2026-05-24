import type { Metadata } from "next";
import CaseStudyHero from "@/components/portfolio/case-study-hero";
import CaseStudyTranscript from "@/components/portfolio/case-study-transcript";
import ProjectOverview from "@/components/portfolio/project-overview";
import ProductionBentoGrid from "@/components/portfolio/production-bento-grid";
import CaseStudyFAQ from "@/components/portfolio/case-study-faq";
import GlassNavbar from "@/components/glass-navbar";
import CaseStudyCTA from "@/components/portfolio/case-study-cta";

export const metadata: Metadata = {
  title: "Luxury AI Jewellery TVC Production | DP AI Studios India",
  description: "Explore our flagship cinematic AI jewellery commercial. DP AI Studios is the best AI TVC production company in India, delivering premium AI ad films across Kerala, Mumbai, Bangalore, and Dubai.",
  keywords: [
    "best AI TVC production company in India",
    "top AI TVC production company",
    "AI TVC production Kerala",
    "AI video production company India",
    "AI ad film production company",
    "AI commercial production company",
    "cinematic AI video production",
    "luxury AI commercial production",
    "AI advertisement company India",
    "AI production studio Kerala",
    "AI commercial production Mumbai",
    "AI jewellery commercial",
    "cinematic AI storytelling",
    "generative AI filmmaking"
  ],
  openGraph: {
    title: "Luxury AI Jewellery TVC Production | Cinematic AI Advertising",
    description: "Discover how generative filmmaking and AI workflows created this premium luxury jewellery commercial at a fraction of traditional production times.",
    url: "https://defineperspective.in/portfolio/luxury-ai-jewellery-tvc-production",
    siteName: "DP AI Studio",
    images: [
      {
        url: "https://img.youtube.com/vi/ViVvFiF-kBQ/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "Luxury AI Jewellery Commercial Production - DP AI Studios",
      }
    ],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://defineperspective.in/portfolio/luxury-ai-jewellery-tvc-production",
  }
};

export default function LuxuryJewelleryCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://defineperspective.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://defineperspective.in/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Luxury AI Jewellery TVC Production"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Luxury AI Jewellery TVC Production Case Study",
        "description": "An in-depth look at the cinematic AI video production pipeline for a premium jewellery commercial by DP AI Studios.",
        "image": "https://img.youtube.com/vi/ViVvFiF-kBQ/maxresdefault.jpg",
        "author": {
          "@type": "Organization",
          "name": "Define Perspective | DP AI Studio"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Define Perspective | DP AI Studio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://defineperspective.in/images/main-logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://defineperspective.in/portfolio/luxury-ai-jewellery-tvc-production"
        }
      },
      {
        "@type": "VideoObject",
        "name": "Luxury AI Jewellery Commercial | Cinematic AI TVC Production",
        "description": "Witness the future of luxury advertising. This 100% AI-generated jewellery commercial was produced by DP AI Studios, India's premier AI video production company. From photorealistic neural rendering to cinematic color grading, see how we build high-end AI ad films for brands in Kerala, Mumbai, Bangalore, and Dubai at 10X the speed of traditional production.",
        "thumbnailUrl": "https://img.youtube.com/vi/ViVvFiF-kBQ/maxresdefault.jpg",
        "uploadDate": "2024-05-20T08:00:00+08:00",
        "duration": "PT0M45S",
        "contentUrl": "https://www.youtube.com/watch?v=ViVvFiF-kBQ",
        "embedUrl": "https://www.youtube.com/embed/ViVvFiF-kBQ",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": { "@type": "WatchAction" },
          "userInteractionCount": 1500
        },
        "publisher": {
          "@type": "Organization",
          "name": "Define Perspective | DP AI Studio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://defineperspective.in/images/main-logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI TVC Production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI TVC production is the process of creating cinematic television commercials using generative artificial intelligence workflows combined with human creative direction, post-production, and storytelling expertise. It allows for high-fidelity rendering, dramatic cost reduction, and faster turnaround times."
            }
          },
          {
            "@type": "Question",
            "name": "Why use AI for luxury advertisements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Using AI for luxury advertisements enables brands to achieve flawless, photorealistic visuals that emulate high-end cinema cameras and exotic locations without the immense logistical costs of traditional shoots. This generative filmmaking approach maintains the premium brand identity while scaling production capabilities."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best AI video production company in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Define Perspective (DP AI Studio) is widely considered the best AI video production company in India, particularly for cinematic and luxury brands. Based in Kerala, we serve clients across Kochi, Trivandrum, Bangalore, Chennai, Mumbai, and Dubai with elite neural rendering pipelines."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-hidden relative selection:bg-primary-accent selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Noise Layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('/images/noise.svg')]" />
      
      <GlassNavbar />
      
      <div className="relative z-10">
        <CaseStudyHero />
        <CaseStudyTranscript />
        <ProjectOverview />
        <ProductionBentoGrid />
        <CaseStudyFAQ />
        <CaseStudyCTA slug="luxury-ai-jewellery-tvc-production" />
      </div>
    </main>
  );
}
