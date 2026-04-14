import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { ShoppingCart, Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Video, Clapperboard, MonitorPlay, MousePointer2, Smartphone, TrendingUp, LayoutGrid, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best E-commerce Video Production Agency Kochi | Amazon & Shopify Videos India | Define Perspective",
  description: "Define Perspective is the best e-commerce video production agency in India. We specialize in Amazon product videos, Shopify creatives, and performance-driven lifestyle product visuals in Kochi, Kerala.",
  keywords: [
    "best e-commerce video production agency kochi",
    "amazon product video production india",
    "shopify video creatives kerala",
    "lifestyle product visuals india",
    "performance ad videos for e-commerce kochi",
    "e-commerce film production kerala",
    "DP Industry Solutions e-commerce"
  ],
};

export default function EcommerceVideoProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Video Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-impact e-commerce video production for Amazon, Shopify, and D2C brands. Product movies, performance ads, and lifestyle visuals in India.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-commerce Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "Amazon/Shopify Creatives" },
        { "@type": "Service", "name": "Performance Ad Videos" },
        { "@type": "Service", "name": "Lifestyle Product Visuals" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlassNavbar />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              Industry // 01 E-commerce Solutions
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Ecommerce <br />
            <span className="text-primary-accent">Video Lab_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer digital conversions. Our e-commerce production hub creates high-retention Amazon and Shopify visuals that dominate the global marketplace funnel."
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-40">
           {[
             { title: "Product Videos", icon: Package, desc: "Cinematic product movies showcasing every detail with surgical precision." },
             { title: "Amazon/Shopify", icon: LayoutGrid, desc: "Marketplace-compliant creatives that boost click-through and sales." },
             { title: "Ad Performance", icon: TrendingUp, desc: "High-conversion video ads engineered for Meta, Google, and Amazon." },
             { title: "Lifestyle Visuals", icon: Star, desc: "Aspirational product narratives that connect emotionally with your audience." }
           ].map((item) => (
             <div key={item.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 grid md:grid-cols-2 gap-24 items-center text-left">
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
               <Image 
                 src="/images/blog/d2c-ads-hero.png"
                 alt="Best E-commerce Video Production Agency Kochi India"
                 fill
                 className="object-cover transition-transform group-hover:scale-105 duration-1000"
               />
               <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
            </div>
            <div className="space-y-12">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">Marketplace Intelligence</span>
               <h2 className="text-4xl md:text-6xl font-black uppercaseer mb-12 italic text-white leading-[0.9]">Sell More <br /><span className="text-primary-accent italic font-black">Through Motion_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-400 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best E-commerce Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Performance-Optimized Pipelines</strong> to provide <strong className="text-white">Tier-1 Visual Results</strong> for global D2C brands.
                 </p>
                 <p>
                    By deploying <strong className="text-white">E-commerce Specific Storytelling</strong>, we enable brands to launch <strong className="text-primary-accent">Amazon Listing Videos</strong> and <strong className="text-white">Shopify Product Movies</strong> that maintain world-class fidelity while driving measurable ROI metrics.
                 </p>
               </div>
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}

// Minimalist local icon fallback
function Package({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
