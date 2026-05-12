import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Food Commercials | Cinematic Food & Beverage Ads",
  description: "Specialized AI food commercial production. We combine high-speed food cinematography with neural enhancement for hyper-realistic and delicious ad films.",
  keywords: ["AI Food Commercials", "Restaurant Ads AI", "Cinematic Food Videos", "AI Beverage Ads"],
};

export default function AIFoodCommercialsPage() {
  return (
    <NichePageTemplate 
      title="AI Food Commercials"
      headline="Hyper-Real <br /> Neural Taste_"
      subheadline="Cinematic AI food commercials engineered for hyper-realistic visual appeal and high-conversion marketing."
      description="India's leading AI food media house."
      contentTitle="The Science <br /> of Craving_"
      contentBody="Food advertising requires meticulous detail. Our 'Neural Flavor Pipeline' enhances every texture, drop, and sizzle, creating food commercials that drive immediate desire and restaurant traffic."
    />
  );
}
