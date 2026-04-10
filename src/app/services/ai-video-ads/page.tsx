import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Cpu, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay, MousePointer2, Smartphone, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Video Ad Agency India | Meta & YouTube AI Ads Kerala | Define Perspective",
  description: "Define Perspective is the leading AI video ad agency for performance creatives. Specialized in AI-driven Meta Ads, YouTube Ads, and high-conversion video ads in Kochi, India.",
  keywords: [
    "best ai video ad agency india",
    "ai video ads performance creatives kochi",
    "meta ai video ads agency kerala",
    "youtube ai video ads india",
    "ai performance creatives for brands",
    "best ai ad creators kochi",
    "DP AI Studios ad agency"
  ],
};

export default function AIVideoAdsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Ads Performance Creatives",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-performance AI-powered video ads for Meta, YouTube, and digital platforms. Conversion-centric performance marketing agency in India.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Video Ads Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Meta Ads" },
        { "@type": "Service", "name": "AI YouTube Ads" },
        { "@type": "Service", "name": "AI A/B Testing Variations" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 02 Performance Ads
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            AI Video <br />
            <span className="text-primary-accent">Ads Gen_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer high-conversion visual performance. Our AI-powered ad system delivers hyper-targeted Meta and YouTube creatives at scale, allowing brands to dominate every digital funnel."
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-40">
           {[
             { title: "Meta Ads", icon: Smartphone, desc: "High-velocity AI creatives for Facebook & Instagram Ads." },
             { title: "YouTube Ads", icon: MonitorPlay, desc: "Bespoke skippable and in-stream AI video commercials." },
             { title: "Performance", icon: MousePointer2, desc: "Pure conversion-driven AI video assets for high ROAS." },
             { title: "A/B Testing", icon: TrendingUp, desc: "Hundreds of AI-driven creative variations for data-led testing." }
           ].map((item) => (
             <div key={item.title} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-xs text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 grid md:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
               <Image 
                 src="/images/blog/d2c-ads-hero.png"
                 alt="Best AI Video Ad Production Agency Kochi"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000"
               />
               <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
            </div>
            <div className="space-y-12 text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Ad Performance Engine</span>
              <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic leading-[0.9]">High-ROAS <br /><span className="text-primary-accent">Creatives_</span></h2>
              <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-500 italic">
                <p>
                  <strong className="text-white">Define Perspective</strong> is officially the <strong className="text-primary-accent">Best AI Video Ad Agency in India</strong>. We've optimized <strong className="text-white">Generative AI Funnels</strong> specifically for the <strong className="text-white">Kochi</strong> and <strong className="text-white">Kerala</strong> markets, delivering hyper-localized <strong className="text-primary-accent">Meta Ad Creatives</strong>.
                </p>
                <p>
                  Our proprietary <strong className="text-white">Neural Ad Pipelines</strong> allow you to launch <strong className="text-primary-accent">Performance-Centric YouTube Ads</strong> that outperform traditional production in both visual fidelity and conversion metrics.
                </p>
              </div>
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
