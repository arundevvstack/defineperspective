import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Infrastructure Cybersecurity & Traffic Monitor | DP AI Studio",
  description: "Advanced cybersecurity monitoring and live traffic analysis for Define Perspective's AI video production labs. Tracking neural sync status and secure CDN delivery.",
  keywords: ["AI cybersecurity", "traffic monitor", "secure AI video production", "DP AI Studio network"],
};

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
