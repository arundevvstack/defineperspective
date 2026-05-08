import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live AI Video Production Analysis Dashboard | DP AI Studio",
  description: "Real-time performance metrics, SEO health tracking, and market index monitoring for Define Perspective's AI video production ecosystem.",
  keywords: ["AI video production metrics", "SEO dashboard", "DP AI Studio analysis", "neural compute monitoring"],
};

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
