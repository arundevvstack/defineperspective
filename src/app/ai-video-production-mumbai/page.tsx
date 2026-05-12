import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.mumbai;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI TVC Production Mumbai",
    "Best AI Ad Agency Mumbai",
    "Cinematic AI Studio Mumbai",
    "National AI Ad Films India",
    "AI Commercial Production Mumbai",
    "AI Video Production House Mumbai",
    "DP AI Studio Mumbai"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-mumbai"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Mumbai",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-mumbai",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai Media District",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://facebook.com/defineperspectiveofficial/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function MumbaiPage() {
  return (
    <AuthorityPageTemplate
      title="Mumbai Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the elite AI TVC production company in Mumbai, Maharashtra. We deliver national-scale AI commercials, high-budget cinematic brand films, and state-of-the-art AI ad production for Mumbai's leading brands."
      location="Mumbai, Maharashtra"
      contentTitle="Cinematic AI Excellence in the Ad Capital"
      contentBody="Mumbai is the heart of India's advertising industry. We bring cutting-edge AI filmmaking to Mumbai's top brands, delivering high-fidelity TVCs and cinematic content that meets the highest standards of national broadcasting."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
