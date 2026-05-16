import { Metadata } from "next";
import AIProductionRevolutionContent from "./AIProductionRevolutionContent";

export const metadata: Metadata = {
  title: "Best AI Video Production Studio in Kerala | Cinematic AI Commercials India",
  description: "Discover how Kerala’s new generation AI video production studios are transforming advertising through cinematic AI commercials, AI TVCs, generative filmmaking, and automated brand storytelling across India.",
  keywords: [
    "AI Video Production Kerala",
    "AI TVC Production India",
    "AI Commercial Production",
    "AI Ad Film Production",
    "Cinematic AI Advertising",
    "AI Film Production Company India",
    "Best AI Video Production Company Kerala",
    "AI Filmmaking Studio Kochi",
    "AI Production House India"
  ],
  openGraph: {
    title: "Kerala’s AI Production Revolution | DP AI Studio",
    description: "Cinematic AI video production in Kerala and India. Transforming advertising through neural workflows.",
    url: "https://defineperspective.in/blog/ai-video-production-studio-kerala-india",
    images: [
      {
        url: "/images/blog/ai-video-production-kerala.webp",
        width: 1200,
        height: 630,
        alt: "Kerala’s AI Production Revolution"
      }
    ]
  }
};

export default function AIProductionRevolutionPage() {
  return <AIProductionRevolutionContent />;
}
