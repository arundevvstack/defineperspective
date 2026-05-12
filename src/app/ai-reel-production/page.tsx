import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Reel Production India | Viral Social Media Content",
  description: "Dominating social algorithms with high-velocity AI reel production. We create viral short-form content for Instagram, YouTube Shorts, and TikTok.",
  keywords: ["AI Reel Production", "Viral Reels AI", "Social Media Content AI", "Instagram Ads AI"],
};

export default function AIReelProductionPage() {
  return (
    <NichePageTemplate 
      title="AI Reel Production"
      headline="Viral Neural <br /> Reels_"
      subheadline="High-velocity AI reel production engineered for viral reach and high-frequency social engagement."
      description="India's leading AI social media content studio."
      contentTitle="Algorithm <br /> Dominance_"
      contentBody="Social algorithms favor frequency and quality. Our AI Reel Systems generate dozens of high-fidelity, high-hook variations of your brand story to find the winning viral path instantly."
    />
  );
}
