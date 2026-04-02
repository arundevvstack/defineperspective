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

export const metadata: Metadata = {
  title: "Define Perspective | The Future of Vision - 2026 AI Media Production",
  description: "Elite media solutions for a visionary market. High-impact photography, AI-integrated video production, and the DP 360 framework based in Thrivandrum, Kerala.",
  keywords: ["Professional video production Kerala", "AI video agency India", "commercial photography Thrivandrum", "DP 360 media services", "explainer video production", "advertising agency Kerala"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans`}
      >
        <ThemeWrapper>
          {children}
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
              "description": "Elite media solutions for a visionary market. High-impact photography, AI-integrated video production, and the DP 360 framework.",
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
                "telephone": "+91-871-400-5550",
                "contactType": "customer service",
                "email": "mail@defineperspective.in"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Service Catalog",
                "itemListElement": [
                  {
                    "@id": "https://defineperspective.in/#dp360",
                    "@type": "ServiceGroup",
                    "name": "DP 360° Service",
                    "description": "Comprehensive Digital Production & Marketing ecosystem."
                  },
                  {
                    "@type": "Service",
                    "name": "Professional Video Production",
                    "description": "AI-Native TVCs, Explainers, and Reels."
                  },
                  {
                    "@type": "Service",
                    "name": "Professional Advertisement Photography",
                    "description": "High-impact advertisement and fashion photography."
                  }
                ]
              },
              "sameAs": [
                "https://facebook.com/defineperspective",
                "https://instagram.com/defineperspective",
                "https://youtube.com/defineperspective",
                "https://linkedin.com/company/defineperspective"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
