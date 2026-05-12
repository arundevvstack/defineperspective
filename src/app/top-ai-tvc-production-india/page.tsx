import { Metadata } from "next";
import TopAITVCProductionIndiaClient from "./ClientPage";

// 🚀 ADVANCED SEO METADATA FOR SEARCH DOMINANCE
export const metadata: Metadata = {
  title: "Best AI TVC Production Company in India, Kerala & South India",
  description: "Define Perspective is the #1 AI TVC Production Company in India, Kerala, and South India. Specialized in luxury AI commercials, cinematic brand films, and neural VFX for global brands in Kochi, Mumbai & Dubai.",
  keywords: [
    "Top AI TVC Production India",
    "Best AI TVC Production Company India",
    "AI TVC Production Kerala",
    "AI Video Production South India",
    "AI TVC Agency Kochi",
    "Best AI Ad Film Makers India",
    "Luxury AI Commercial Production India",
    "AI Video Production Company Kerala",
    "AI Advertising Agency Kochi",
    "AI TVC Production Company South India",
    "Cinematic AI Studio India",
    "AI Brand Film Production Kerala"
  ],
  alternates: {
    canonical: "https://defineperspective.in/top-ai-tvc-production-india"
  },
  openGraph: {
    title: "Best AI TVC Production Company in India, Kerala & South India",
    description: "Leading the future of AI advertising in India. Premium AI commercials for luxury brands.",
    url: "https://defineperspective.in/top-ai-tvc-production-india",
    siteName: "DP AI Studio",
    images: [{ url: "/images/og-ai-tvc-india.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  }
};

// 🛰️ ADVANCED SCHEMA MARKUP (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://defineperspective.in/#organization",
      "name": "Define Perspective (DP AI Studio)",
      "url": "https://defineperspective.in",
      "logo": "https://defineperspective.in/logo.png",
      "description": "India's leading cinematic AI TVC production company specializing in luxury commercials and brand films."
    },
    {
      "@type": "Service",
      "serviceType": "AI TVC Production",
      "provider": { "@id": "https://defineperspective.in/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Trivandrum" },
        { "@type": "City", "name": "Mumbai" }
      ],
      "description": "High-end AI commercial filmmaking and TVC production services in India and Kerala."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best AI TVC production company in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Define Perspective (DP AI Studio) is recognized as the best AI TVC production company in India, Kerala, and South India, delivering cinematic AI commercials for global brands."
          }
        },
        {
          "@type": "Question",
          "name": "Who provides AI video production in Kerala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Define Perspective is the leading AI video production studio in Kerala, serving Kochi and Trivandrum with world-class AI ad films."
          }
        }
      ]
    }
  ]
};

export default function TopAITVCProductionIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopAITVCProductionIndiaClient />
    </>
  );
}
