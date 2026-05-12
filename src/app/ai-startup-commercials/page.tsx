import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.startup;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Startup Commercials India",
    "High-Impact Startup Pitch Videos",
    "SaaS Brand Storytelling India",
    "Startup Video Ad Agency",
    "AI Product Demos for Startups",
    "DP AI Studio Startups"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-startup-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Startup Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "Startup Video Production",
  "description": "High-velocity AI commercials and cinematic brand films for India's innovative startup ecosystem.",
  "areaServed": "India"
};

export default function StartupPage() {
  return (
    <AuthorityPageTemplate
      title="Startup Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) produces high-impact AI commercials and brand films for India's startup ecosystem. We provide high-velocity growth storytelling that helps startups scale and secure funding."
      industry="Startups & Innovation"
      contentTitle="High-Velocity Growth Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
