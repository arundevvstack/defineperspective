import { Metadata } from "next";
import AIVideoProductionIndiaClient from "./ClientPage";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in India, Kerala & South India",
  description: "Define Perspective is the premier AI video production company in India, Kerala, and South India. Specialized in cinematic AI brand films, ad commercials, and neural VFX for global brands in Mumbai, Bangalore, Kochi & UAE.",
  keywords: [
    "AI Video Production Company India",
    "AI Video Production Kerala",
    "AI Video Production South India",
    "Best AI Video Production Studio Kochi",
    "AI Brand Film Production India",
    "Neural Video Production Agency Kerala",
    "AI Ad Film Production India",
    "Cinematic AI Studio South India",
    "AI Video Production Kochi",
    "Best AI video production company for ads"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-company-india"
  }
};

export default function AIVideoProductionIndiaPage() {
  return <AIVideoProductionIndiaClient />;
}
