import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

import ThemeWrapper from "@/components/theme-wrapper";
import GlassFooter from "@/components/glass-footer";
import GlobalTacticalHUD from "@/components/global-tactical-hud";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
  title: "AI Video Production Company in Kerala | Media Production Studio India",
  description: "Premium video production company in Kerala offering cinematic brand films, TV commercials, corporate videos, and AI-powered video production services. Based in Kochi & Trivandrum, we deliver high-performance content built for scale, engagement, and growth.",
  keywords: [
    "video production company Kerala",
    "AI video production India",
    "media production services Kerala",
    "cinematic video production",
    "brand film production India",
    "corporate video production Kerala",
    "TV commercial production India",
    "AI content creation studio",
    "generative AI video production",
    "Kochi video production company",
    "Trivandrum media production",
    "commercial video production services",
    "AI product video creation",
    "social media video production Kerala"
  ],
  openGraph: {
    title: "AI Video Production Company in Kerala | Media Production Studio India",
    description: "Premium video production company in Kerala offering cinematic brand films, TV commercials, and AI video production. Serving Kochi, Trivandrum, and all of India.",
    url: "https://defineperspective.in",
    siteName: "Define Perspective",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Define Perspective | AI & Media Production India",
    description: "High-performance cinematic & AI video production based in Kerala.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://s.ytimg.com" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans theme-red overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeWrapper>
          <MatrixRain />
          <GlobalTacticalHUD />
          {children}
          <GlassFooter />
        </ThemeWrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
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
                "@type": "LocalBusiness",
                "name": "Define Perspective Kochi",
                "image": "https://defineperspective.in/images/main-logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695003",
                  "addressCountry": "IN"
                },
                "telephone": "+91-7012941696",
                "url": "https://defineperspective.in",
                "priceRange": "$$$"
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoProductionService",
                "serviceType": "Video Production",
                "provider": {
                  "@type": "Organization",
                  "name": "Define Perspective"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Video & AI Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "TV Commercial Production"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Video Production"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Brand Films"
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
