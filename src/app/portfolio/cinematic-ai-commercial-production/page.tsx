import type { Metadata } from "next";
import CinematicHero from "@/components/portfolio/cinematic-commercial/cinematic-hero";
import CinematicTranscript from "@/components/portfolio/cinematic-commercial/cinematic-transcript";
import CinematicOverview from "@/components/portfolio/cinematic-commercial/cinematic-overview";
import CinematicEditorialGrid from "@/components/portfolio/cinematic-commercial/cinematic-editorial-grid";
import CinematicFAQ from "@/components/portfolio/cinematic-commercial/cinematic-faq";
import GlassNavbar from "@/components/glass-navbar";
import CaseStudyCTA from "@/components/portfolio/case-study-cta";

export const metadata: Metadata = {
  title: "Cinematic AI Commercial Production | DP AI Studios India",
  description: "Experience premium cinematic AI storytelling. DP AI Studios is the best AI video production company in India, crafting visceral AI ad films and brand commercials globally.",
  keywords: [
    "best AI video production company in India",
    "top AI TVC production company",
    "AI commercial production company",
    "cinematic AI video production",
    "AI advertisement company India",
    "AI ad film production",
    "AI production company Kerala",
    "AI commercial production Mumbai",
    "AI video production Bangalore",
    "AI TVC production Chennai",
    "AI production studio Kochi",
    "AI video production Dubai",
    "cinematic AI commercial production",
    "AI storytelling agency",
    "generative AI filmmaking company",
    "AI cinematic commercial",
    "AI generated advertisement",
    "AI fashion commercial",
    "AI luxury commercial",
    "AI brand film"
  ],
  openGraph: {
    title: "Cinematic AI Commercial Production | Premium Brand Films",
    description: "Discover the generative filmmaking pipeline behind our premium AI brand commercials, redefining emotional storytelling and visual ambition.",
    url: "https://defineperspective.in/portfolio/cinematic-ai-commercial-production",
    siteName: "DP AI Studio",
    images: [
      {
        url: "https://img.youtube.com/vi/L7aRxqziN8w/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "Cinematic AI Commercial Production - DP AI Studios",
      }
    ],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://defineperspective.in/portfolio/cinematic-ai-commercial-production",
  }
};

export default function CinematicCaseStudy() {
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
            "name": "Cinematic AI Commercial Production"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Cinematic AI Commercial Production Case Study",
        "description": "An deep dive into the generative AI filmmaking pipeline for a premium cinematic brand film by DP AI Studios.",
        "image": "https://img.youtube.com/vi/L7aRxqziN8w/maxresdefault.jpg",
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
          "@id": "https://defineperspective.in/portfolio/cinematic-ai-commercial-production"
        }
      },
      {
        "@type": "VideoObject",
        "name": "Cinematic AI Commercial | Generative AI Filmmaking",
        "description": "Experience the visceral, high-tension aesthetic of this premium AI commercial. Produced by DP AI Studios, India's leading AI video production company, this film utilizes advanced neural rendering, underwater physics simulation, and cinematic color grading to deliver Hollywood-tier emotional storytelling.",
        "thumbnailUrl": "https://img.youtube.com/vi/L7aRxqziN8w/maxresdefault.jpg",
        "uploadDate": "2024-05-20T08:00:00+08:00",
        "duration": "PT0M45S",
        "contentUrl": "https://www.youtube.com/watch?v=L7aRxqziN8w",
        "embedUrl": "https://www.youtube.com/embed/L7aRxqziN8w",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": { "@type": "WatchAction" },
          "userInteractionCount": 1200
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
            "name": "What is cinematic AI video production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cinematic AI video production is the synthesis of advanced generative artificial intelligence with traditional high-end filmmaking techniques. Rather than pointing a physical camera at a subject, directors use complex neural rendering pipelines, image-to-video models, and precise prompt engineering to generate photorealistic, cinematic footage from scratch."
            }
          },
          {
            "@type": "Question",
            "name": "How are AI commercials created?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI commercials are created through a multi-stage generative pipeline beginning with 'Generative Ideation' via text-to-image models. The resulting frames are processed through image-to-video models for motion, followed by rigorous human-led post-production including sound design and cinematic color grading in DaVinci Resolve."
            }
          },
          {
            "@type": "Question",
            "name": "Why use AI for premium brand films?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Using AI for premium brand films unlocks infinite creative scale without the logistical friction of traditional production. Brands can visualize impossible physics, exotic locations, and complex lighting setups without massive crews or expensive equipment, drastically reducing time-to-market."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best AI production company in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Define Perspective (DP AI Studios) is widely regarded as the best AI video production company in India, serving enterprise clients across Mumbai, Bangalore, Chennai, and Dubai with deep technical expertise in AI modeling and senior-level cinematic storytelling."
            }
          },
          {
            "@type": "Question",
            "name": "How does generative AI filmmaking work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generative AI filmmaking leverages machine learning models trained on vast datasets of visual media. A director inputs parameters like camera angle and lighting into the neural network, which synthesizes a new sequence. The human director then curates, edits, and refines these generations into an emotional story."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose DP AI Studios for AI commercials?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DP AI Studios is chosen by premium brands because we direct emotional narratives, not just generate images. Our seasoned storytellers and post-production experts treat AI as a high-end camera, ensuring every commercial is free of visual artifacts, perfectly color-graded, and aligned with brand identity."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white overflow-hidden relative selection:bg-red-500 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Noise Layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('/images/noise.svg')]" />
      
      <GlassNavbar />
      
      <div className="relative z-10">
        <CinematicHero />
        <CinematicTranscript />
        <CinematicOverview />
        <CinematicEditorialGrid />
        <CaseStudyCTA slug="cinematic-ai-commercial-production" />
        <CinematicFAQ />
      </div>
    </main>
  );
}
