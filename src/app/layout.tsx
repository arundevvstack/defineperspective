import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

import ThemeWrapper from "@/components/theme-wrapper";
import GlassFooter from "@/components/glass-footer";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import GlobalTacticalHUD from "@/components/global-tactical-hud";
import MatrixRain from "@/components/matrix-rain";
import ThemeInitializer from "@/components/theme-initializer";
import SemanticSeoLayer from "@/components/semantic-seo-layer";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://defineperspective.in"),
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "DP AI Studio is a leading AI video production company in Kerala, South India, India. Trusted for cinematic AI ads, reels, and brand storytelling in Trivandrum, Kochi, and Ernakulam.",
  keywords: [
    "Best AI video production company in Kerala",
    "No 1 AI video production company in South India",
    "Trusted AI video production company in Trivandrum",
    "AI video production Kochi",
    "AI video production Ernakulam",
    "AI video production India",
    "cinematic AI filmmaking",
    "AI ad production India",
    "DP AI Studio",
    "Define Perspective",
    "Malayalam AI video generation",
    "AI content creator Kerala",
    "Top AI TVC production India"
  ],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "Leading AI video production in Kerala, South India. Trusted for cinematic AI ads and brand films.",
    url: "https://defineperspective.in",
    siteName: "DP AI Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "High-performance cinematic AI video production based in Kerala, India.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/main-logo.png" as="image" />

        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <ThemeInitializer />
        </Suspense>
        <ThemeWrapper>
          <NeuralSeoLayer />
          <MatrixRain />
          <GlobalTacticalHUD />
          <SemanticSeoLayer />
          {children}
          <GlassFooter />
        </ThemeWrapper>
      </body>
    </html>
  );
}
