import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "AI Ad Creative Generation India | Best Performance Video Agency Kerala | Define Perspective",
  description:
    "High-velocity AI-powered ad creative generation. We build high-performing video ads across India using generative AI to scale CTR and ROAS for D2C brands.",
  keywords: [
    "AI ad creative generation India",
    "best performance video agency Kerala",
    "AI video ad creatives Kochi",
    "high-ROAS AI video ads India",
  ],
};
export default function AIAdCreativeSubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Ad Creative Generation",
    "description": "High-velocity AI-powered ad creative generation for D2C brands in India, optimizing CTR and ROAS through neural variants.",
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
        <header className="mb-32 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              DP AI STUDIOS: Performance Node
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white italic">
            AI Ad <br />
            <span className="text-primary-accent font-black">Creatives_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Dynamic visual testing at neural speeds. We build high-velocity ad
            creatives for brands in India that want to win the auction."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Scale Your <span className="text-primary-accent italic">Winning Ad.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Most agencies struggle to keep up with the need for fresh ad
              creatives. Our AI Ad Creative Generation wing uses neural variants
              to test multiple backgrounds, hooks, and messaging in hours,
              ensuring that your India-based D2C brand always has a fresh
              creative to boost ROAS and lower CPA on Meta/Instagram/YouTube.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=AI Ad Creative enquiry"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
              >
                Get a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:bg-primary-accent/10 hover:text-primary-accent transition-all shadow-xl font-black"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="AI Ad Creative Performance Metrics"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            AI Performance FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video ad agency for D2C brands in India?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the best AI video ad agency for D2C brands in India. 
                We combine neural ad generation with algorithmic media buying strategies to scale performance 
                across Facebook, Instagram, and Google, ensuring our Kerala and India-based clients dominate their sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
