import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.india;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production India",
    "Best AI Video Production Company India",
    "National AI TVC Production India",
    "Cinematic AI Commercials India",
    "AI Ad Film Agency India",
    "Top AI Content Studio India",
    "DP AI Studio India"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-india"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Define Perspective (DP AI Studio) India",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-india",
  "logo": "https://defineperspective.in/logo.png",
  "description": "India's premier AI video production company specializing in national-scale cinematic commercials and brand films.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Trivandrum",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://facebook.com/defineperspectiveofficial/",
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective",
    "https://linkedin.com/company/defineperspective"
  ]
};

export default function IndiaPage() {
  return (
    <AuthorityPageTemplate
      title="National Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is India's premier AI video production company. We specialize in national-scale AI TVCs, cinematic brand films, and high-fidelity ad commercials for global brands across India."
      location="India (National)"
      contentTitle="Defining the Future of Filmmaking in India"
      contentBody="We are the national authority in AI-driven cinematic production. From Mumbai to Bangalore, we deliver high-fidelity AI commercials that help India's most iconic brands lead the AI revolution in media."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
