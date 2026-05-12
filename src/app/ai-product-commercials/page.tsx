import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.product;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Product Commercials India",
    "E-commerce AI Video Production",
    "Hyper-realistic Product Ads",
    "High-Conversion Retail Videos",
    "AI Product Storytelling",
    "Digital Product Films India",
    "DP AI Studio Product"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-product-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Product Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Product Ad Production",
  "description": "Hyper-realistic AI product commercials and high-conversion retail videos for brands across India.",
  "areaServed": "India"
};

export default function ProductPage() {
  return (
    <AuthorityPageTemplate
      title="Product Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) creates high-impact AI product commercials for e-commerce and retail brands in India. We specialize in hyper-realistic AI product videos that drive authority and conversions."
      industry="Product & Retail"
      contentTitle="High-Conversion Neural Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
