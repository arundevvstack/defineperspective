import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tactical SEO Console | Global Search Authority Monitor",
  description: "Advanced SEO tracking, competitor intercept, and live SERP authority monitoring interface.",
};

export default function SEOConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}
