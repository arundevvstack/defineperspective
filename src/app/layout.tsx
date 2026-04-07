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
import GlobalMetricsHUD from "@/components/global-metrics-hud";
import GlobalTacticalHUD from "@/components/global-tactical-hud";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
  title: "Define Perspective | Elite AI Media & Video Production India",
  description: "2026-era production studio fusion human cinematic filmmaking with proprietary AI pipelines. Specialized in TVCs, Brand Films, and Virtual Production in Kerala & India.",
  keywords: [
    "Professional video production Kerala", 
    "AI video agency India", 
    "Cinematic brand films", 
    "Virtual production Kerala", 
    "AI ad creatives",
    "Define Perspective Media"
  ],
  openGraph: {
    title: "Define Perspective | AI-Augmented Media Production",
    description: "The future of vision. Human craft meets AI velocity.",
    url: "https://defineperspective.in",
    siteName: "Define Perspective",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Define Perspective | AI Media Evolution",
    description: "Elite cinematic production for 2026 brands.",
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
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans theme-red`}
        suppressHydrationWarning
      >
        <ThemeWrapper>
          <MatrixRain />
          <GlobalTacticalHUD />
          <GlobalMetricsHUD />
          {children}
          <GlassFooter />
        </ThemeWrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Define Perspective",
              "url": "https://defineperspective.in",
              "logo": "https://defineperspective.in/logo.png",
              "description": "Elite media solutions for a visionary market. High-fidelity cinematic filmmaking fused with 2026 AI-augmented production pipelines.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
                "addressLocality": "Thrivandrum",
                "addressRegion": "Kerala",
                "postalCode": "695003",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-949-619-1684",
                "contactType": "customer service",
                "email": "mail@defineperspective.in"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Service Hub",
                "itemListElement": [
                  {
                    "@type": "Service",
                    "name": "Elite Video Production",
                    "description": "Premium Ad Films, Corporate Storytelling, and Brand Films."
                  },
                  {
                    "@type": "Service",
                    "name": "AI Media Production",
                    "description": "Generative Video, AI Ad Creatives, and Neural Workflows."
                  },
                  {
                    "@type": "Service",
                    "name": "Virtual Production",
                    "description": "AI-Generated Digital Environments and CGI Pipelines."
                  },
                  {
                    "@type": "Service",
                    "name": "Performance Video Ads",
                    "description": "Conversion-Optimized Ad Creatives for Digital Growth."
                  }
                ]
              },
              "sameAs": [
                "https://facebook.com/defineperspectiveofficial/",
                "https://instagram.com/defineperspective/",
                "https://youtube.com/@DefinePerspective",
                "https://linkedin.com/company/defineperspective"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
