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

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoProductionService",
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
    "serviceType": ["AI Video Production", "TV Commercials", "Brand Films", "Corporate Videos"],
    "areaServed": ["Kerala", "Kochi", "Trivandrum", "Bangalore", "Mumbai", "India", "Dubai"],
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
