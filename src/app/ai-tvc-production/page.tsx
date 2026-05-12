import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI TVC Production India | High-End Television Commercials",
  description: "Propelling brands into the future with AI TVC production. We create high-fidelity, broadcast-ready television commercials using advanced neural cinematic pipelines.",
  keywords: ["AI TVC Production", "Television Commercials AI", "Cinematic TVCs India", "AI Ad Agency"],
};

export default function AITVCProductionPage() {
  return (
    <NichePageTemplate 
      title="AI TVC Production"
      headline="Neural TVC <br /> Studio_"
      subheadline="Broadcast-ready AI television commercials engineered for maximum reach and cinematic authority."
      description="India's leading AI TVC production company."
      contentTitle="Cinematic <br /> Broadcast_"
      contentBody="Legacy TVC production involves massive crews and months of lead time. Our AI-First workflow delivers broadcast-fidelity commercials with 10x content variations for targeted media buying."
    />
  );
}
