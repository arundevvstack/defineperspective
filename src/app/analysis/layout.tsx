import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Security Console | DP AI Studio Authority",
  description: "Advanced system security monitoring, neural node integrity, and real-time performance metrics for the Define Perspective ecosystem.",
  keywords: ["System Security Console", "DP AI Studio Security", "Neural Node Integrity", "Cybersecurity Monitoring"],
};

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
