import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.kochi;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Kochi",
    "Best AI Ad Agency Kochi",
    "AI Theater Commercials Kochi",
    "AI Film Studio Ernakulam",
    "Cinematic AI Production Kochi",
    "AI Reel Production Kochi",
    "DP AI Studio Kochi"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-kochi"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Kochi",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-kochi",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kochi Metro Region",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9312,
    "longitude": 76.2673
  },
  "sameAs": [
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function KochiPage() {
  return (
    <AuthorityPageTemplate
      title="Kochi Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the #1 AI video production agency in Kochi, Kerala. We specialize in cinematic AI theater ads, performance-driven AI commercials, and high-conversion social media content for Kochi's retail and commercial sectors."
      location="Kochi, Kerala"
      contentTitle="Strategic AI Ad Filmmaking in Kochi"
      contentBody="As Kochi's premier AI ad agency, we deliver theater-grade AI commercials and viral content. Our Kochi operations are designed for high-velocity production, helping brands dominate the digital and cinema landscape in Kerala."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
