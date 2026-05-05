import type { Metadata } from "next";
import HomeContent from "@/components/home-content";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is India's leading AI video production company. We fuse cinematic filmmaking with proprietary AI pipelines to deliver high-fidelity TVCs, Brand Films, and Virtual Production.",
  keywords: ["AI video production company", "AI video agency India", "best AI video production company Kerala", "generative AI filmmaking", "AI commercial production"],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "The future of vision. India's #1 AI video production company. Human craft meets AI velocity.",
    url: "https://defineperspective.in",
  },
};

export default function Home() {
  return <HomeContent />;
}
