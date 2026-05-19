import { Metadata } from "next";
import AIVideoProductionIndiaClient from "./ClientPage";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in India, Kerala & South India",
  description: "Define Perspective is the premier AI video production company in India, Kerala, and South India. Specialized in cinematic AI brand films, ad commercials, and neural VFX for global brands in Mumbai, Bangalore, Kochi & UAE.",
  keywords: [
    "AI Video Production Company India",
    "AI Video Production Kerala",
    "AI Video Production South India",
    "Best AI Video Production Studio Kochi",
    "AI Brand Film Production India",
    "Neural Video Production Agency Kerala",
    "AI Ad Film Production India",
    "Cinematic AI Studio South India",
    "AI Video Production Kochi",
    "Best AI video production company for ads"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-company-india"
  }
};

export default function AIVideoProductionIndiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoProductionService",
        "@id": "https://defineperspective.in/ai-video-production-company-india#service",
        "name": "AI Video Production Services India",
        "description": "Premium cinematic AI video production services in India by DP AI Studio, producing high-fidelity TVCs, commercials, and brand films.",
        "url": "https://defineperspective.in/ai-video-production-company-india",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Define Perspective | DP AI Studio",
          "url": "https://defineperspective.in"
        },
        "areaServed": ["India", "Kerala", "Kochi", "Bangalore", "Mumbai", "Chennai", "Hyderabad"],
        "serviceType": ["AI Video Production", "AI TVC Production", "Cinematic AI Advertising", "AI Commercial Production"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://defineperspective.in/ai-video-production-company-india#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI commercial production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI commercial production is a tech-driven filmmaking process that leverages generative neural pipelines and advanced editing to produce elite brand films, TV commercials (TVCs), and marketing assets at 10X speed and 60% lower costs than traditional shoots."
            }
          },
          {
            "@type": "Question",
            "name": "Who creates cinematic AI ads in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Define Perspective (DP AI Studio) is India's leading AI video production company based in Kerala, creating high-end cinematic AI commercials, TVCs, and luxury fashion films for modern brands in Kochi, Trivandrum, and beyond."
            }
          },
          {
            "@type": "Question",
            "name": "What are AI TV commercials?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI TV commercials (TVCs) are high-fidelity, cinema-grade advertisements rendered through advanced generative AI video engines. They allow national and global brands to achieve theatrical visual quality and infinite variations without linear logistical overhead."
            }
          },
          {
            "@type": "Question",
            "name": "Which studio creates AI product commercials in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DP AI Studio is the premier creative agency producing cinematic AI product commercials, beauty ads, and tech ads in India. We serve clients across Kochi, Bangalore, Mumbai, Chennai, and Hyderabad with high-fidelity, performance-optimized campaigns."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIVideoProductionIndiaClient />
    </>
  );
}
