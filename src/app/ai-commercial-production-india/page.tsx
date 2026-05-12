import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Commercial Production India | Cinematic Ad Films",
  description: "Elite AI commercial production house in India. We combine cinematic filmmaking with advanced neural synthesis to create high-performing ad films for national brands.",
  keywords: ["AI Commercial Production India", "AI Ad Films India", "Cinematic AI Commercials", "AI Advertising Agency"],
};

export default function AICommercialProductionPage() {
  return (
    <NichePageTemplate 
      title="AI Commercials"
      headline="Neural Ad <br /> Production_"
      subheadline="Luxury AI commercials engineered for high-velocity brand scaling and cinematic authority."
      description="India's leading AI commercial production house."
      contentTitle="The Future of <br /> Advertising_"
      contentBody="Legacy ad films are slow and expensive. Our neural pipeline delivers Hollywood-grade commercial content in 72 hours, allowing brands to dominate every screen with zero quality compromise."
    />
  );
}
