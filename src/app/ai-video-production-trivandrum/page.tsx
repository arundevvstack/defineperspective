import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.trivandrum;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Trivandrum",
    "Best AI Video Production Company Trivandrum",
    "AI Ad Film Agency Kerala",
    "AI Commercial Studio Trivandrum",
    "Cinematic AI Ads Kerala",
    "AI Filmmaking Studio TVM",
    "DP AI Studio Trivandrum"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-trivandrum"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Trivandrum",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-trivandrum",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
    "addressLocality": "Trivandrum",
    "addressRegion": "Kerala",
    "postalCode": "695003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.5241,
    "longitude": 76.9366
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function TrivandrumPage() {
  return (
    <AuthorityPageTemplate
      title="Trivandrum Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the leading AI video production company in Trivandrum, India, specializing in cinematic AI commercials, AI TVCs, and high-end ad film production for enterprise brands in Kerala."
      location="Trivandrum, Kerala"
      contentTitle="The Hub of AI Innovation in Trivandrum"
      contentBody="Define Perspective brings world-class AI filmmaking to the capital of Kerala. Our Trivandrum studio focuses on enterprise-level cinematic AI production, delivering high-impact TVCs and brand films that resonate with global audiences."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
