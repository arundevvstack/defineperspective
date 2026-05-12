import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.hyderabad;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Hyderabad",
    "Best AI Ad Agency Hyderabad",
    "AI Commercial Studio Hyderabad",
    "Digital AI Content Production",
    "Cinematic AI Studio Hyderabad",
    "AI Filmmaking Telangana",
    "DP AI Studio Hyderabad"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-hyderabad"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Hyderabad",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-hyderabad",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hyderabad IT District",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function HyderabadPage() {
  return (
    <AuthorityPageTemplate
      title="Hyderabad Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the top AI video production company in Hyderabad, Telangana. We provide high-end AI commercials, dynamic digital content, and cinematic brand films for Hyderabad's media and tech hub."
      location="Hyderabad, Telangana"
      contentTitle="Dynamic AI Filmmaking in India's Media Hub"
      contentBody="Hyderabad's dynamic media landscape is perfectly suited for AI-driven storytelling. We create high-impact AI commercials and digital content that help Hyderabad's most innovative brands reach a global audience."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
