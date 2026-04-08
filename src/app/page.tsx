import type { Metadata } from "next";
import HomeContent from "@/components/home-content";

export const metadata: Metadata = {
  title: "Define Perspective | Best AI Video Production Company India & Kerala",
  description: "Define Perspective is India's leading AI video production company. We fuse cinematic filmmaking with proprietary AI pipelines to deliver high-fidelity TVCs, Brand Films, and Virtual Production.",
  keywords: ["AI video production company", "AI video agency India", "best AI video production company Kerala", "generative AI filmmaking", "AI commercial production"],
  openGraph: {
    title: "Define Perspective | Elite AI Video Production Company",
    description: "The future of vision. India's #1 AI video production company. Human craft meets AI velocity.",
    url: "https://defineperspective.in",
  },
};

export default function Home() {
  return <HomeContent />;
}
