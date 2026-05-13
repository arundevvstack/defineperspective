import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.delhi;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Delhi",
    "Best AI Ad Film Company Delhi NCR",
    "Corporate Brand Films Gurgaon",
    "National Ad Campaigns Delhi",
    "AI Commercial Production Noida",
    "Cinematic AI Studio Delhi",
    "DP AI Studio Delhi"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-delhi"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Delhi",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-delhi",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "National Capital Region",
    "addressLocality": "Delhi",
    "addressRegion": "NCR",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://linkedin.com/company/defineperspective",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function DelhiPage() {
  return (
    <AuthorityPageTemplate
      title="Delhi Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the leading AI video production agency in Delhi NCR. We deliver high-authority AI commercials, cinematic brand films, and national ad campaigns for the national capital's visionary brands."
      location="Delhi, National Capital Region"
      contentTitle="High-Authority AI Filmmaking for the National Capital"
      contentBody="Delhi is the heart of national brand storytelling. We provide cinematic AI commercials and professional corporate films that help brands in Delhi, Gurgaon, and Noida establish national dominance."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
