import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.theatre;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Theater Ads India",
    "High-Impact Cinema Commercials",
    "4K AI Cinema Ad Production",
    "8K Neural Motion Theatre Ads",
    "AI Cinema Advertising India",
    "DP AI Studio Theatre"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-theatre-ads"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Theatre Ad Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Cinema Ad Production",
  "description": "High-impact, theater-grade AI commercials and cinema advertising production in 4K and 8K neural motion.",
  "areaServed": "India"
};

export default function TheatrePage() {
  return (
    <AuthorityPageTemplate
      title="Theatre Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) produces high-impact AI theater ads and cinema commercials for brands across India. We specialize in 4K/8K neural motion visuals designed for the big screen's unmatched impact."
      industry="Cinema & Theater"
      contentTitle="Big Screen Impact with Neural Fidelity"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
