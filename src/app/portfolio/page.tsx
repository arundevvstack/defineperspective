import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio-content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Portfolio | Cinematic Video & AI Media Production Gallery",
  description: "Browse our elite portfolio of TVCs, Brand Films, and AI-augmented media. High-performance visual storytelling for premium brands in Kerala and India.",
  keywords: ["Video production portfolio Kerala", "AI video production examples", "commercial photography gallery India", "Define Perspective showcase", "brand film samples"],
  openGraph: {
    title: "Portfolio | Visions in Execution",
    description: "Archives of the future. Cinematic video and neural media production.",
    url: "https://defineperspective.in/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="h-1 w-24 bg-primary-accent animate-pulse rounded-full" /></div>}>
      <PortfolioContent />
    </Suspense>
  );
}
