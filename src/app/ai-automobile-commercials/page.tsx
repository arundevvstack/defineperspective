import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.automobile;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Automobile Commercials India",
    "High-Octane AI Car Ads",
    "Neural Vehicle Rendering",
    "AI Automotive Filmmaking",
    "Cinematic Car Ad Production",
    "DP AI Studio Automobile"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-automobile-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automobile Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Automotive Ad Production",
  "description": "High-octane AI car commercials and cinematic automobile brand films for India's leading automotive brands.",
  "areaServed": "India"
};

export default function AutomobilePage() {
  return (
    <AuthorityPageTemplate
      title="Automobile Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) produces high-octane AI automobile commercials and cinematic brand films for India's leading vehicle brands. We use neural precision to redefine vehicle advertising."
      industry="Automotive & Vehicles"
      contentTitle="High-Octane Storytelling with Neural Precision"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
