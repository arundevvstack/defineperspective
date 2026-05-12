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
      subheadline="High-quality AI TV commercials made for national broadcast and social media."
      description="India's leading AI TVC production company."
      contentTitle="Cinematic <br /> Broadcast_"
      contentBody="Traditional TV ads take months to make and cost a lot. Our AI workflow delivers professional commercials 10x faster with many more versions for your brand."
    />
  );
}
