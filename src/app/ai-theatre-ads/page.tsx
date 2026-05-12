import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Theatre Ads India | Big-Screen Cinematic Advertising",
  description: "Dominating the big screen with AI theatre ads. We create high-bitrate, large-format cinematic commercials optimized for theatrical release and mass audience impact.",
  keywords: ["AI Theatre Ads India", "Cinema Advertising AI", "Big Screen Commercials", "Theatre Ad Production Kerala"],
};

export default function AITheatreAdsPage() {
  return (
    <NichePageTemplate 
      title="AI Theatre Ads"
      headline="Neural Big <br /> Screen_"
      subheadline="High-bitrate AI theatre ads engineered for massive audience impact and theatrical cinematic fidelity."
      description="India's authority in cinematic theatre advertising."
      contentTitle="The Big <br /> Experience_"
      contentBody="Theatre advertising requires extreme resolution and sound depth. Our AI Theatre Pipeline is optimized for large-format projection, ensuring your brand story looks and sounds magnificent in the cinema."
    />
  );
}
