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
import GlobalTacticalHUD from "@/components/global-tactical-hud";
import MatrixRain from "@/components/matrix-rain";
import ThemeInitializer from "@/components/theme-initializer";
import SemanticSeoLayer from "@/components/semantic-seo-layer";
import { Suspense } from "react";

export const metadata: Metadata = {
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
    "Define Perspective"
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
          <MatrixRain />
          <GlobalTacticalHUD />
          <SemanticSeoLayer />
          {children}
          <GlassFooter />
        </ThemeWrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "DP AI Studio",
                "description": "AI-powered video production company in Kerala, India specializing in cinematic ads and social media content",
                "areaServed": [
                  "Kerala",
                  "South India",
                  "India",
                  "Trivandrum",
                  "Kochi",
                  "Ernakulam"
                ],
                "serviceType": "AI Video Production",
                "keywords": [
                  "Best AI video production company in Kerala",
                  "AI video production Trivandrum",
                  "AI video production Kochi",
                  "AI ad production India"
                ],
                "url": "https://defineperspective.in",
                "image": "https://defineperspective.in/images/main-logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695003",
                  "addressCountry": "IN"
                },
                "telephone": "+91-7012941696"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Define Perspective",
                "url": "https://defineperspective.in",
                "logo": "https://defineperspective.in/logo.png",
                "description": "Elite media solutions combining cinematic filmmaking with advanced AI video production in Kerala and India.",
                "sameAs": [
                  "https://facebook.com/defineperspectiveofficial/",
                  "https://instagram.com/defineperspective/",
                  "https://youtube.com/@DefinePerspective",
                  "https://linkedin.com/company/defineperspective"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoProductionService",
                "serviceType": "AI Video Production Service",
                "provider": {
                  "@type": "Organization",
                  "name": "DP AI Studio"
                },
                "areaServed": ["Kerala", "South India", "India"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "AI Video & Content Catalog",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI TV Commercial Production"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cinematic AI Brand Storytelling"
                      }
                    }
                  ]
                }
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}
