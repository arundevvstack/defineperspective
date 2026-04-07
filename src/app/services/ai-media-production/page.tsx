import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Cpu,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Globe,
  Sparkles,
  SearchCode,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "AI Video Production Agency | Elite AI Media & Ads India | Define Perspective",
  description: "Define Perspective is a premier AI video production agency and media company in India. We specialize in cinematic brand films, high-velocity AI video ads, and virtual production. Dominate search and vision in 2026.",
  keywords: [
    "AI video production agency India",
    "best AI media agency Kerala",
    "AI video production company India",
    "generative video ads Kerala",
    "AI content production agency",
    "DP AI Studios"
  ],
};

const subServices = [
  {
    title: "AI Video Production Services",
    href: "/services/ai-media-production/ai-video-production-services",
    desc: "Photorealistic generative video sequences for brand films, cinematic storytelling, and virtual production environments.",
  },
  {
    title: "AI Ad Creative Generation",
    href: "/services/ai-media-production/ai-ad-creative-generation",
    desc: "High-conversions performance marketing through massive scale. Deliver hundreds of high-quality ad variations instantly.",
  },
  {
    title: "AI Product Content (Zero-Shoot)",
    href: "/services/ai-media-production/ai-product-videos-no-shoot-required",
    desc: "Revolutionary e-commerce video and photography created entirely from product vision. No physical set needed.",
  },
];

export default function AIMediaProductionLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "Premium AI-powered video production and generative media services for global brands.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Media Catalog",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Brand Films"
        },
        {
          "@type": "Service",
          "name": "AI Performance Ads"
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Core Division: DP AI Studios
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[8rem] font-black tracking-tighter uppercase mb-12 leading-[0.8] text-white">
            AI Video <br />
            <span className="text-primary-accent italic">Service Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed uppercase tracking-widest leading-loose">
            "Combining high-end film quality with AI speed. We build fast, AI-powered video systems for India's most ambitious brands."
          </p>
        </header>

        {/* Global SEO Tags Section */}
        <section className="mb-40 grid md:grid-cols-2 gap-12 border-y border-white/5 py-20">
           <div className="flex gap-6">
              <SearchCode className="text-primary-accent shrink-0" size={32} />
              <div>
                 <h3 className="text-lg font-black uppercase tracking-widest mb-4">Search Ready_</h3>
                 <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">Built for search engines and AI to instantly find your brand.</p>
              </div>
           </div>
           <div className="flex gap-6">
              <LineChart className="text-primary-accent shrink-0" size={32} />
              <div>
                 <h3 className="text-lg font-black uppercase tracking-widest mb-4">Top Rankings_</h3>
                 <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">Designed to help your business stand out in India, Kerala, and Trivandrum search results.</p>
              </div>
           </div>
        </section>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-primary-accent/5 hover:border-primary-accent/20 transition-all flex flex-col gap-8 shadow-2xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-loose uppercase tracking-widest leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                Project Details
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
