import type { Metadata } from "next";
import HomeContent from "@/components/home-content";

export const metadata: Metadata = {
  title: "Define Perspective | Elite AI Media Production & Video India",
  description: "2026-era media studio fusion human cinematic filmmaking with proprietary AI pipelines. Specialized in TVCs, Brand Films, and Virtual Production in Kerala & India.",
  keywords: ["Video production Kerala", "AI video agency India", "commercial photography Kerala", "brand film production", "explainer video services"],
  openGraph: {
    title: "Define Perspective | AI-Augmented Media Evolution",
    description: "The future of vision. Human craft meets AI velocity.",
    url: "https://defineperspective.in",
  },
};

export default function Home() {
  return <HomeContent />;
}
