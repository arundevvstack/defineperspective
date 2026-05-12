import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Real Estate Videos | Virtual Tours & Property Ads",
  description: "Transforming real estate marketing with AI. We create cinematic virtual tours, aerial neural reconstructions, and high-conversion property ads.",
  keywords: ["AI Real Estate Videos", "Virtual Property Tours AI", "Real Estate Ads AI", "Neural Property Marketing"],
};

export default function AIRealEstateVideosPage() {
  return (
    <NichePageTemplate 
      title="AI Real Estate"
      headline="Neural Space <br /> Marketing_"
      subheadline="Cinematic AI real estate videos engineered for immersive virtual tours and high-ticket property conversions."
      description="India's leading AI real estate media studio."
      contentTitle="Virtual <br /> Immersion_"
      contentBody="Static photos are no longer enough. Our AI Property Workflows generate immersive, cinematic walkthroughs that allow buyers to experience the lifestyle and scale of your development before it's even finished."
    />
  );
}
