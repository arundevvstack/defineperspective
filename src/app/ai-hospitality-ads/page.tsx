import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.hospitality;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Hospitality Ads India",
    "Luxury Hotel AI Brand Films",
    "Resort Marketing AI India",
    "Cinematic Tourism Ads AI",
    "Hospitality Video Production India",
    "DP AI Studio Hospitality"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-hospitality-ads"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Hospitality Ad Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Hospitality Ad Production",
  "description": "Sophisticated AI brand films and cinematic commercials for India's most prestigious hotels and resorts.",
  "areaServed": "India"
};

export default function HospitalityPage() {
  return (
    <AuthorityPageTemplate
      title="Hospitality Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) creates sophisticated AI hospitality commercials and brand films for India's elite hotel and resort groups. We blend architectural AI rendering with cinematic storytelling."
      industry="Hospitality & Tourism"
      contentTitle="The Art of Luxury Living"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
