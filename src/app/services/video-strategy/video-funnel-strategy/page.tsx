import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Layers,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description:
    "Elite video funnel strategy and architectural media planning for brands in India. Move your customers from awareness to sale through high-performance visual storytelling systems.",
  keywords: [
    "video funnel strategy India",
    "best video consultant Kerala",
    "video content roadmap Kochi",
    "multi-channel video strategy India",
  ],
};
export default function VideoFunnelSubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video Funnel Strategy & Architecture",
    "description": "Elite video funnel strategy and architectural media planning for brands in India, optimizing the customer journey from awareness to conversion.",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Division: Funnel Architecture
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-blacker uppercase leading-[0.85] text-white italic">
            Video Funnel <br />
            <span className="text-primary-accent font-black">Strategy_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Content without a funnel is just expense. We build visual
            architecture that drives measurable growth across India."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight italic">
              Architect Your <span className="text-primary-accent italic">Growth Hub.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
              Most agencies focus on making a single video. We focus on building
              a multi-channel video ecosystem. Our video funnel strategy in
              Kerala and India aligns your visual content with every stage of
              the customer journey — from high-impact top-of-funnel awareness to
              high-converting bottom-of-funnel direct-response. We help Indian
              brands build profitable long-term media roadmaps.
            </p>
            <Link
              href="/contact?subject=Video Funnel Strategy enquiry"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Draft My Funnel roadmap
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="AI video production company in Kerala - DP AI Studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase mb-10 text-primary-accent">
            Strategy Hub FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for funnel strategy?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is uniquely recognized as the best AI video production company for funnel strategy in India. 
                We combine neural content generation with data-backed media architecture to ensure your video assets 
                capture attention, build desire, and drive action across the national digital ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
