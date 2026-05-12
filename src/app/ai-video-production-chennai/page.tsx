import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.chennai;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Chennai",
    "Best AI Ad Agency Chennai",
    "Cinematic AI Brand Films Chennai",
    "AI Filmmaking Studio Tamil Nadu",
    "AI Ad Film Production Chennai",
    "DP AI Studio Chennai"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-chennai"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Chennai",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-chennai",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chennai Media Zone",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function ChennaiPage() {
  return (
    <AuthorityPageTemplate
      title="Chennai Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the leading AI video production company in Chennai, Tamil Nadu. We specialize in cinematic AI brand films, artistic AI filmmaking, and high-fidelity ad commercials for Chennai's visionary brands."
      location="Chennai, Tamil Nadu"
      contentTitle="Artistic AI Filmmaking in the Cultural Capital"
      contentBody="Chennai's rich cultural heritage meets the future of filmmaking. We provide artistic AI brand stories and commercials that combine traditional storytelling values with cutting-edge neural innovation."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
