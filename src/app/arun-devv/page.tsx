import type { Metadata } from "next";
import ArunDevvContent from "@/components/arun-devv-content";

export const metadata: Metadata = {
  title: "Arun Devv | Best AI Content Architect & Filmmaker in Kerala & India",
  description: "Arun Devv is a leading AI Content Architect, Filmmaker, and Media Consultant in Kerala. Specializing in cinematic AI storytelling, ad film production, and brand narrative strategy across Kochi, South India, and beyond.",
  keywords: [
    "Arun Devv",
    "AI Content Architect Kerala",
    "Best AI Filmmaker Kerala",
    "AI Video Creator Kochi",
    "AI Ad Film Maker India",
    "Media Consultant Kerala",
    "AI Commercial Production India",
    "Cinematic AI Storytelling",
    "AI Brand Film Director",
    "AI Creative Strategist India",
    "AI Production Expert Kerala",
    "AI Advertising Specialist",
    "AI Commercial Director South India",
    "Generative AI Content Creator",
    "AI Branding Consultant India",
    "Content Architect Trivandrum",
    "Video Creator Kochi",
    "AI Media Consultant India",
    "Define Perspective"
  ],
  openGraph: {
    title: "Arun Devv | Best AI Content Architect & AI Filmmaker in India",
    description: "Arun Devv specializes in cinematic AI storytelling, commercial production, and premium brand systems. 20+ years of creative authority.",
    url: "https://defineperspective.in/arun-devv",
    type: "profile",
    siteName: "Define Perspective",
    images: [
      {
        url: "https://defineperspective.in/images/arun-devv/arun-4.jpg",
        width: 1200,
        height: 630,
        alt: "Arun Devv - AI Content Architect & Filmmaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Devv | AI Content Architect & Filmmaker",
    description: "Architecting the future of brand narratives through cinematic AI production.",
    images: ["https://defineperspective.in/images/arun-devv/arun-4.jpg"],
  },
  alternates: {
    canonical: "https://defineperspective.in/arun-devv",
  },
};

export default function ArunDevvPage() {
  return <ArunDevvContent />;
}
