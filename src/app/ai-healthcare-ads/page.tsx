import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.healthcare;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Healthcare Ads India",
    "Medical AI Brand Films",
    "Pharmaceutical AI Video Production",
    "Empathetic AI Storytelling",
    "Healthcare Digital Content India",
    "Cinematic Medical Visuals",
    "DP AI Studio Healthcare"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-healthcare-ads"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Healthcare Ad Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Healthcare Commercial Production",
  "description": "High-fidelity cinematic AI healthcare commercials and medical brand films for hospitals and pharma brands in India.",
  "areaServed": "India"
};

export default function HealthcarePage() {
  return (
    <AuthorityPageTemplate
      title="Healthcare Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the leading creator of trust-focused AI healthcare commercials in India. We specialize in empathetic medical storytelling, high-fidelity brand films, and visual medical explanations for the elite healthcare sector."
      industry="Healthcare & Medical"
      contentTitle="Empathy-Driven Medical Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
