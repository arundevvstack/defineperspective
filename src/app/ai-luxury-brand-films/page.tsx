import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Luxury Brand Films | Cinematic Premium Storytelling",
  description: "Defining luxury through neural artistry. We create premium AI brand films that combine high-end cinematography with advanced generative visual intelligence.",
  keywords: ["AI Luxury Brand Films", "Premium Brand Storytelling", "Cinematic AI Films", "Luxury Marketing AI"],
};

export default function AILuxuryBrandFilmsPage() {
  return (
    <NichePageTemplate 
      title="Luxury AI Films"
      headline="Neural Luxury <br /> Cinema_"
      subheadline="Elite AI brand films engineered for premium perception and cinematic narrative authority."
      description="Defining the future of luxury storytelling."
      contentTitle="The Art of <br /> Precision_"
      contentBody="Luxury requires a level of detail that traditional AI often misses. Our proprietary 'Luxury Neural Architecture' ensures every frame of your brand film exudes craftsmanship, elegance, and cinematic depth."
    />
  );
}
