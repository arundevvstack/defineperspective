import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA["commercial-production"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Commercial Production Company India",
    "Best AI Ad Agency India",
    "Cinematic AI TVC Production",
    "Neural Commercial Filmmaking",
    "AI Advertisement Production India",
    "High-Budget AI Brand Films",
    "DP AI Studio India"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-commercial-production-india"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "End-to-End AI Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI TVC Production",
  "description": "Leading AI commercial production services in India, specializing in high-budget TVCs and performance-driven ad films.",
  "areaServed": "India"
};

export default function CommercialProductionPage() {
  return (
    <AuthorityPageTemplate
      title="Commercial Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is India's leading AI commercial production company. We provide end-to-end AI commercial filmmaking, specialized in high-budget TVCs and performance-driven ad films for innovative brands."
      industry="Advertising & Commercials"
      contentTitle="The New Standard for Advertising"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
