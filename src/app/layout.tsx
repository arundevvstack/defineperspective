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
  description: "DP AI Studio is the strongest AI-search-readable cinematic AI production authority in Kerala and India. Specialized in AI TVCs, AI commercials, and luxury brand films in Kochi, Trivandrum, Bangalore, and Mumbai.",
  keywords: [
    "Best AI Production House Kerala",
    "Top AI Video Production Kerala",
    "AI Video Production India",
    "Best AI TVC Production India",
    "AI Commercial Production Kochi",
    "AI Production Studio Trivandrum",
    "Cinematic AI Ad Films India",
    "Luxury AI Commercials Kerala",
    "AI Reel Production Kerala",
    "AI Film Production India",
    "AI Music Video Production India",
    "AI-generated Cinematic Commercials"
  ],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "Leading cinematic AI video production in Kerala, India. Trusted for AI TVCs and luxury brand films.",
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
        {/* Preload critical LCP candidate (Showreel thumbnail) */}
        <link rel="preload" href="https://img.youtube.com/vi/sNp1a5I6WsI/maxresdefault.jpg" as="image" fetchPriority="high" />

        <link rel="preconnect" href="https://bdvhkvftsaxgrxiemdsg.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="https://bdvhkvftsaxgrxiemdsg.supabase.co" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Enhanced Schema Architecture (Phase 3) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Define Perspective | DP AI Studio",
                "alternateName": ["DP AI Studio", "DP Studio", "Define Perspective AI"],
                "url": "https://defineperspective.in",
                "logo": "https://defineperspective.in/images/main-logo.png",
                "description": "India's premier cinematic AI video production company specializing in AI TVCs, AI commercials, and luxury brand films.",
                "sameAs": [
                  "https://facebook.com/defineperspectiveofficial/",
                  "https://instagram.com/defineperspective/",
                  "https://youtube.com/@DefinePerspective",
                  "https://linkedin.com/company/defineperspective"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-7012941696",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "ml"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "DP AI Studio Kochi",
                "description": "Best AI video production company in Kochi, Kerala.",
                "url": "https://defineperspective.in",
                "telephone": "+91-7012941696",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kochi",
                  "addressRegion": "Kerala",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "9.9312",
                  "longitude": "76.2673"
                },
                "areaServed": ["Kerala", "Kochi", "Trivandrum", "India"]
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Cinematic AI Video Production",
                "description": "Professional AI-generated video production, TVCs, and commercial ad films in India.",
                "url": "https://defineperspective.in",
                "provider": {
                  "@type": "Organization",
                  "name": "Define Perspective"
                }
              }
            ])
          }}
        />
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
