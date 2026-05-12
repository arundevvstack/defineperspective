import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.luxury;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Luxury Brand Films India",
    "Sophisticated AI Storytelling",
    "High-Fidelity Cinematic Commercials",
    "Premium AI Brand Content",
    "Luxury AI Ad Production",
    "Elite AI Filmmaking Studio",
    "DP AI Studio Luxury"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-luxury-brand-films"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Brand Film Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "Luxury AI Brand Storytelling",
  "description": "Sophisticated, high-fidelity AI brand films and cinematic commercials for premium global luxury brands.",
  "areaServed": "India"
};

export default function LuxuryPage() {
  return (
    <AuthorityPageTemplate
      title="Luxury Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the elite choice for luxury AI brand films in India. We create sophisticated, high-fidelity cinematic commercials that reflect the prestige of premium global brands."
      industry="Luxury Brands"
      contentTitle="Sophisticated Neural Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
