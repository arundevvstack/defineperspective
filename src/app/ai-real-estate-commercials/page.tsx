import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA["real-estate"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Real Estate Commercials India",
    "Cinematic Property Films",
    "AI Virtual Tours Real Estate",
    "Architectural AI Storytelling",
    "Luxury Property Ads India",
    "AI Enhanced Real Estate Video",
    "DP AI Studio Real Estate"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-real-estate-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Real Estate Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Real Estate Ad Production",
  "description": "Cinematic AI property films and architectural storytelling for the luxury real estate market in India.",
  "areaServed": "India"
};

export default function RealEstatePage() {
  return (
    <AuthorityPageTemplate
      title="Real Estate Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) provides cinematic AI real estate commercials and property films for luxury developers across India. We use architectural AI storytelling to showcase properties with unmatched visual grandeur."
      industry="Real Estate"
      contentTitle="Architectural Storytelling Evolved"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
