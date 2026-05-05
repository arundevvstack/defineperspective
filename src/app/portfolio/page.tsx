import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio-content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Explore the work of a leading AI ad film production company in Kochi. We deliver cinematic AI video production for brands in Kerala and across India. Recognized as the Best AI Video Production Agency India.",
  keywords: [
    "AI ad film production company Kochi",
    "AI video production for brands in Kerala",
    "who is the best ai video production company",
    "top ai video creators for brands",
    "Best AI Video Production Agency India",
    "Video production portfolio Kerala",
    "AI video production company India"
  ],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "Cinematic AI video production for brands in Kerala. Top AI video creators in India.",
    url: "https://defineperspective.in/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="h-1 w-24 bg-transparent border-2 border-primary-accent animate-pulse rounded-full hover:bg-transparent    transition-all duration-300" /></div>}>
      <PortfolioContent />
    </Suspense>
  );
}
