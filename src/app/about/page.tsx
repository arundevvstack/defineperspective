import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Define Perspective | AI Video Production Company India",
  description: "Elite media solutions for visionary brands. We combine human cinematic craft with modern AI technology to create high-impact video content across Kerala & India.",
  keywords: ["AI video production agency Kerala", "future of filmmaking India", "Define Perspective mission", "AI video content company", "Kerala creative studio"],
  openGraph: {
    title: "About Define Perspective | Defining the Future of Vision",
    description: "Human cinematic excellence meets advanced AI technology.",
    url: "https://defineperspective.in/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
