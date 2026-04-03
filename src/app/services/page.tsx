import type { Metadata } from "next";
import ServicesContent from "@/components/services-content";

export const metadata: Metadata = {
  title: "Media Production Services India | Video & AI Production Hub",
  description: "Explore our 6-pillar service matrix. From elite cinematic video production to AI-augmented media labs in Kerala & India. High-impact TVCs, Brand Films, and CGI.",
  keywords: ["Video production services Kerala", "AI media studio India", "CGI product videos", "corporate brand films Kerala", "advertising production India"],
  openGraph: {
    title: "Define Perspective | Capability Matrix",
    description: "Eliminating mediocrity. High-end human filmmaking fused with 2026 AI production.",
    url: "https://defineperspective.in/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
