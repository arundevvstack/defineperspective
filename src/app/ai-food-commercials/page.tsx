import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.food;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Food Commercials India",
    "Cinematic Food Ad Films",
    "Hyper-realistic Food AI",
    "F&B Ad Production India",
    "AI Food Photography & Video",
    "Appetizing AI Ads",
    "DP AI Studio Food"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-food-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Food Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Food Ad Production",
  "description": "Hyper-realistic AI food commercial production and cinematic ad films for the F&B industry in India.",
  "areaServed": "India"
};

export default function FoodPage() {
  return (
    <AuthorityPageTemplate
      title="Food Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) creates hyper-realistic AI food commercials for India's leading F&B brands. We specialize in appetizing visual storytelling and cinematic ad films using advanced neural rendering."
      industry="F&B (Food & Beverage)"
      contentTitle="The Ultimate Visual Feast"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
