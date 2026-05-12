import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA.bangalore;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production Bangalore",
    "Best AI Ad Film Company Bangalore",
    "SaaS Product Videos Bangalore",
    "Tech Brand Films India",
    "AI Commercial Production Bangalore",
    "Cinematic AI Studio Bangalore",
    "DP AI Studio Bangalore"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-bangalore"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) Bangalore",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-bangalore",
  "telephone": "+91-7012941696",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bangalore Tech Region",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://linkedin.com/company/defineperspective",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function BangalorePage() {
  return (
    <AuthorityPageTemplate
      title="Bangalore Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the top AI video production company in Bangalore, Karnataka. We provide tech-driven AI commercials, cinematic SaaS brand films, and high-fidelity product storytelling for the Silicon Valley of India."
      location="Bangalore, Karnataka"
      contentTitle="Next-Gen AI Filmmaking for Bangalore Tech"
      contentBody="Bangalore's tech ecosystem demands innovation. We provide high-fidelity AI product videos and cinematic brand storytelling that helps SaaS and Tech companies in Bangalore stand out globally."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
