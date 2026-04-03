import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Define Perspective | 2026 AI Media Laboratory India",
  description: "Elite media solutions for a visionary market. We combine human cinematic craft with high-velocity AI pipelines to build autonomous visual environments in Kerala & India.",
  keywords: ["AI media agency Kerala", "future of video production India", "Define Perspective manifesto", "autonomous production pipelines", "Kerala creative studio"],
  openGraph: {
    title: "About Define Perspective | Defining the Future of Vision",
    description: "Human cinematic excellence meets high-velocity neural workflows.",
    url: "https://defineperspective.in/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
