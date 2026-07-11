import type { Metadata } from "next";
import HomeContent from "@/components/home-content";

export const metadata: Metadata = {
  title: "DP AI Studio | Best AI Video Production Company in Kerala & India",
  description: "Define Perspective (DP) is India's premier AI video production agency. We specialize in cinematic TVCs, brand films, and high-velocity AI commercials in Kerala, Kochi, and Trivandrum. Human vision meets AI velocity.",
  keywords: [
    "AI video production company", 
    "AI video agency India", 
    "best AI video production company Kerala", 
    "generative AI filmmaking", 
    "AI commercial production Kochi",
    "video production services Kerala",
    "cinematic brand films India",
    "virtual production studio Kochi",
    "AI advertising agency Kerala",
    "DP AI Studio"
  ],
  alternates: {
    canonical: "https://defineperspective.in",
  },
  openGraph: {
    title: "DP AI Studio | Best AI Video Production Company in Kerala & India",
    description: "Leading AI video production studio in Kochi, Kerala. Cinematic TVCs, Brand Films, and AI-powered advertising solutions.",
    url: "https://defineperspective.in",
    siteName: "Define Perspective AI Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Define Perspective AI Studio - Cinematic Video Production",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DP AI Studio | Best AI Video Production Company in Kerala & India",
    description: "India's leading AI video production company. Cinematic excellence at AI velocity.",
    images: ["/og-image.png"],
  },
};

export const revalidate = 86400;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://defineperspective.in/#organization",
        "name": "Define Perspective",
        "alternateName": "DP AI Studio",
        "url": "https://defineperspective.in",
        "logo": "https://defineperspective.in/images/main-logo.png",
        "founder": {
          "@type": "Person",
          "name": "Arun Devv"
        },
        "sameAs": [
          "https://facebook.com/defineperspectiveofficial/",
          "https://instagram.com/defineperspective/",
          "https://youtube.com/@DefinePerspective",
          "https://linkedin.com/company/defineperspective",
          "https://www.crunchbase.com/organization/define-perspective",
          "https://www.wikidata.org/wiki/Q123456789"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://defineperspective.in/#website",
        "url": "https://defineperspective.in",
        "name": "DP AI Studio",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://defineperspective.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".hero-title", ".faq-answer"]
        }
      },
      {
        "@type": "VideoProductionService",
        "@id": "https://defineperspective.in/#service",
        "name": "Define Perspective (DP) AI Studio",
        "description": "India's leading AI video production company based in Kerala, specializing in cinematic TVCs and AI-powered commercials.",
        "url": "https://defineperspective.in",
        "telephone": "+917012941696",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.9312,
          "longitude": 76.2673
        },
        "serviceType": ["AI Video Production", "AI TVC Production", "AI Ad Production", "Cinematic AI Advertising", "AI Commercial Filmmaking", "AI Product Commercials", "Traditional Cinematic TVCs", "Brand Films", "Corporate Videos"],
        "areaServed": ["Kerala", "Kochi", "Trivandrum", "Bangalore", "Chennai", "Mumbai", "Hyderabad", "South India", "India", "Dubai"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Video Production Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Commercial Production"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Traditional Cinematic TVCs"
              }
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://defineperspective.in/#organization",
        "name": "Define Perspective | DP AI Studio",
        "url": "https://defineperspective.in",
        "logo": "https://defineperspective.in/images/main-logo.png",
        "image": "https://defineperspective.in/images/kochi-neural-skyline.png",
        "description": "Define Perspective (DP AI Studio) is a cinematic AI video production company in Kerala creating AI TV commercials, AI ad films, AI product campaigns, and cinematic branded content for businesses across India, including Bangalore, Chennai, Mumbai, and Hyderabad.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
          "addressLocality": "Trivandrum",
          "addressRegion": "Kerala",
          "postalCode": "695003",
          "addressCountry": "IN"
        },
        "telephone": "+91-7012941696",
        "sameAs": [
          "https://facebook.com/defineperspectiveofficial/",
          "https://instagram.com/defineperspective/",
          "https://youtube.com/@DefinePerspective",
          "https://linkedin.com/company/defineperspective",
          "https://github.com/arundevvstack"
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "AI TVC Production"
          },
          {
            "@type": "Thing",
            "name": "AI Ad Production"
          },
          {
            "@type": "Thing",
            "name": "AI Video Production"
          },
          {
            "@type": "Thing",
            "name": "Cinematic AI Advertising"
          },
          {
            "@type": "Thing",
            "name": "AI Commercial Filmmaking"
          },
          {
            "@type": "Thing",
            "name": "AI Product Commercials"
          }
        ]
      },
      {
        "@type": "VideoObject",
        "@id": "https://defineperspective.in/#showreel",
        "name": "Define Perspective Official Showreel — Cinematic AI Production India",
        "description": "Watch what DP AI Studio creates. High-fidelity cinematic commercials, brand films, and AI TVCs produced at the intersection of human art direction and generative neural pipelines.",
        "thumbnailUrl": "https://img.youtube.com/vi/sNp1a5I6WsI/maxresdefault.jpg",
        "uploadDate": "2025-01-10T08:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=sNp1a5I6WsI",
        "embedUrl": "https://www.youtube.com/embed/sNp1a5I6WsI"
      },
      {
        "@type": "FAQPage",
        "@id": "https://defineperspective.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI TVC production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI TVC production is a tech-driven filmmaking workflow that leverages generative neural pipelines and advanced editing to produce elite television commercials (TVCs) and brand films at 10X speed and 60% lower costs than traditional shoots."
            }
          },
          {
            "@type": "Question",
            "name": "Who creates AI commercials in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Define Perspective (DP AI Studio) is the premier creative house producing cinematic AI product commercials, beauty ads, and tech ads in India. We serve clients across Kochi, Bangalore, Mumbai, Chennai, and Hyderabad with high-fidelity, performance-optimized campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "Which company offers cinematic AI ad production in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Define Perspective (DP AI Studio) is the leading AI video production company based in Kerala, creating high-end cinematic AI commercials, TVCs, and luxury fashion films for modern brands in Kochi, Trivandrum, and beyond."
            }
          },
          {
            "@type": "Question",
            "name": "What are AI-generated ad films?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-generated ad films are cinema-grade promotional video campaigns rendered through advanced generative AI video engines, maintaining character consistency, realistic lighting, and cinematic lenses."
            }
          },
          {
            "@type": "Question",
            "name": "Which AI production company works across South India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DP AI Studio (Define Perspective) is the primary cinematic AI production agency serving South India, with specialized hubs in Kochi, Kerala, Bangalore, Chennai, and Hyderabad."
            }
          },
          {
            "@type": "Question",
            "name": "What is the future of AI video production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The future of AI video production is always-on neural storytelling, combining human art direction with generative rendering to bypass physical logistics while elevating visual specs to 8K resolution."
            }
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://defineperspective.in/#creativework",
        "name": "Define Perspective Portfolio",
        "description": "Cinematic AI video production portfolio including SHE Luxury, Lacrispo snacks commercial, and Red Chamber AI Music Video.",
        "creator": {
          "@type": "Organization",
          "name": "DP AI Studio"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* E-E-A-T Trust Signal Bar Above the Fold */}
      <div className="w-full bg-primary-accent/10 border-b border-primary-accent/20 py-3 relative z-50">
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-300">
            India's #1 Ranked Enterprise AI Video Agency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-300">
            Trusted by Top Brands in India & UAE
          </span>
        </div>
      </div>
      <HomeContent />
    </>
  );
}
