import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.corporate;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Corporate Films India",
    "Professional AI Brand Storytelling",
    "Internal Communication AI Videos",
    "Leadership AI Brand Films",
    "Corporate Video Production India",
    "Cinematic Corporate AI",
    "DP AI Studio Corporate"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-corporate-films"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional AI Corporate Film Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Corporate Video Production",
  "description": "High-end cinematic AI corporate films and internal communication videos for top-tier companies in India.",
  "areaServed": "India"
};

export default function CorporatePage() {
  return (
    <AuthorityPageTemplate
      title="Corporate Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the premier provider of professional AI corporate films in India. We deliver high-fidelity brand stories, leadership films, and internal communication videos that communicate vision with cinematic authority."
      industry="Corporate & Enterprise"
      contentTitle="The Evolution of Corporate Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
