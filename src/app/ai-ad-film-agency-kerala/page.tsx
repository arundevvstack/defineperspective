import NichePageTemplate from "@/components/ai-video-hub/NichePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ad Film Agency Kerala | Cinematic Advertising Kerala",
  description: "No.1 AI ad film agency in Kerala. We operate at the intersection of heritage cinema and neural innovation, providing Kochi and Trivandrum's commercial market with elite AI-integrated TVCs.",
  keywords: ["AI Ad Film Agency Kerala", "AI Video Production Kerala", "Ad Filmmaker Kochi", "AI Commercials Trivandrum"],
};

export default function AIAdFilmAgencyKeralaPage() {
  return (
    <NichePageTemplate 
      title="Kerala AI Agency"
      headline="Neural Kerala <br /> Heritage_"
      subheadline="No.1 AI ad film agency in Kerala, blending God's Own Country's cinematic heritage with high-velocity neural creativity."
      description="Kerala's authority in AI ad film production."
      contentTitle="Heritage X <br /> Intelligence_"
      contentBody="Kerala has a rich history of storytelling. We are evolving that tradition through our Kochi AI Lab, delivering world-class AI commercials and brand films for Kerala's leading startups and established heritage brands."
    />
  );
}
