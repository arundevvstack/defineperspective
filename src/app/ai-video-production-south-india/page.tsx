import { Metadata } from "next";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { LOCATION_DATA } from "@/constants/seo-data";

const data = LOCATION_DATA["south-india"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Video Production South India",
    "No. 1 AI Video Studio South India",
    "Cinematic AI Ads Kerala Tamil Nadu Karnataka",
    "Best AI Ad Agency South India",
    "AI Commercial Production Regional",
    "DP AI Studio South India"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-south-india"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Define Perspective (DP AI Studio) South India",
  "image": "https://defineperspective.in/images/main-logo.png",
  "url": "https://defineperspective.in/ai-video-production-south-india",
  "telephone": "+91-7012941696",
  "areaServed": [
    { "@type": "State", "name": "Kerala" },
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "State", "name": "Karnataka" },
    { "@type": "State", "name": "Andhra Pradesh" },
    { "@type": "State", "name": "Telangana" }
  ],
  "sameAs": [
    "https://instagram.com/defineperspective/",
    "https://youtube.com/@DefinePerspective"
  ]
};

export default function SouthIndiaPage() {
  return (
    <AuthorityPageTemplate
      title="South India Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the undisputed leader in AI video production across South India. We serve Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh with cinematic AI excellence and regional brand storytelling."
      location="South India"
      contentTitle="Dominating the AI Filmmaking Landscape in the South"
      contentBody="South India is the powerhouse of Indian cinema and tech. We provide regional and national brands with world-class cinematic AI commercials, leveraging our nodes in Kochi, Trivandrum, and Bangalore to serve the entire region."
      faqs={data.faqs}
      schema={schema}
      theme="theme-blue"
    />
  );
}
