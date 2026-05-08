import type { Metadata } from "next";
import ArunDevvContent from "@/components/arun-devv-content";

export const metadata: Metadata = {
  title: "Arun Devv | Best AI Video Creator in India & Content Architect Kerala",
  description: "Arun Devv is India's leading AI video creator and content architect. 20+ years expertise in cinematic storytelling, AI ad films, and brand strategy across Kerala, Kochi, Trivandrum, and India.",
  keywords: [
    "Best Content Architect in Kerala",
    "Best Video Creator in Kerala",
    "Best AI Video Creator in India",
    "Senior Content Strategist India",
    "Cinematic Brand Storyteller Kerala",
    "AI Commercial Director India",
    "Creative Director Kerala",
    "Best AI Video Creator in Kerala",
    "AI Video Production Expert India",
    "Cinematic Content Creator South India",
    "AI Ad Film Maker Kerala",
    "Video Production Company Trivandrum",
    "AI Commercial Production Kerala",
    "AI Video Agency India",
    "Luxury Brand Content Creator India",
    "Viral Content Strategist India",
    "AI Filmmaker South India",
    "Content Architect Trivandrum",
    "Video Creator Kochi",
    "AI Media Consultant India"
  ],
  openGraph: {
    title: "Arun Devv | Best AI Video Creator in India & Content Architect Kerala",
    description: "20+ years of expertise in content strategy, cinematic storytelling, and AI-powered video production across India.",
    url: "https://defineperspective.in/arun-devv",
    type: "profile",
    images: [
      {
        url: "https://defineperspective.in/images/arun-devv/arun-4.jpg",
        width: 1200,
        height: 630,
        alt: "Arun Devv - Content Architect & AI Video Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Devv | Best AI Video Creator in India",
    description: "Senior Content Strategist & AI Filmmaker building high-impact brand stories.",
    images: ["https://defineperspective.in/images/arun-devv/arun-4.jpg"],
  },
  alternates: {
    canonical: "https://defineperspective.in/arun-devv",
  },
};

export default function ArunDevvPage() {
  return <ArunDevvContent />;
}
