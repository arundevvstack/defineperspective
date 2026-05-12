import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.jewellery;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Jewellery Commercials India",
    "Luxury AI Jewellery Ad",
    "Hyper-realistic Gemstone Rendering",
    "AI Jewellery Photography India",
    "Cinematic Jewellery Films",
    "DP AI Studio Jewellery"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-jewellery-commercials"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Jewellery Commercial Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "AI Jewellery Ad Production",
  "description": "Hyper-realistic AI commercials and cinematic ad films for luxury jewellery brands in India.",
  "areaServed": "India"
};

export default function JewelleryPage() {
  return (
    <AuthorityPageTemplate
      title="Jewellery Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) creates breathtaking AI jewellery commercials with hyper-realistic gemstone rendering and cinematic detail. We are the elite choice for India's leading luxury jewellery brands."
      industry="Luxury Jewellery"
      contentTitle="Breathtaking Detail & Infinite Sparkle"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
    />
  );
}
