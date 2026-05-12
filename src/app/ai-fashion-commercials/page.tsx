import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.fashion;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Fashion Commercials India",
    "Luxury AI Brand Films",
    "Neural Runway Visuals",
    "Digital Fashion Content India",
    "AI Fashion Ad Production",
    "Cinematic Fashion AI",
    "DP AI Studio Fashion"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-fashion-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Fashion Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Fashion Ad Production",
  "description": "High-end cinematic AI fashion films and commercial production for luxury brands in India.",
  "areaServed": "India"
};

export default function FashionPage() {
  return (
    <AuthorityPageTemplate
      title="Fashion Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the leading creator of luxury AI fashion commercials in India. We specialize in cinematic fashion films, digital runway visuals, and high-fidelity brand storytelling for premium fashion labels."
      industry="Luxury Fashion"
      contentTitle="The Future of Fashion Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
