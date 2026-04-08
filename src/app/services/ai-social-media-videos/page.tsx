import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { ArrowRight, BrainCircuit, Sparkles, Smartphone, TrendingUp } from "lucide-react";
import Link from "next/link";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Reels & Shorts Production Agency Kochi | Social Media AI Videos India | Define Perspective",
  description: "Define Perspective is the best AI social media video production agency in India. We create high-engagement AI Reels, YouTube Shorts, and TikTok-style daily content in Kochi, Kerala.",
  keywords: [
    "best ai reels production agency kochi",
    "ai shorts production kochi",
    "best ai social media video production india",
    "ai tiktok video production kerala",
    "daily ai content creation kochi",
    "trend-based ai videos kerala",
    "DP AI Studios social media"
  ],
};

export default function AISocialMediaVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Social Media Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-engagement AI-powered reels, shorts, and social media videos production in India and Kochi.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Social Media Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Reels & Shorts" },
        { "@type": "Service", "name": "AI Daily Content Production" },
        { "@type": "Service", "name": "Trend-Based AI Videos" }
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
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 03 Social Media Hub
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] italic">
            Short-Form <br />
            <span className="text-primary-accent">AI Content_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer instant relevance. Our AI-powered social media production hub delivers high-engagement Reels, Shorts, and viral TikTok sequences with surgical precision."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Reels & Shorts", icon: Smartphone, desc: "Ultra-fast AI production for high-fidelity Reels & YouTube Shorts." },
             { title: "Daily Content", icon: TrendingUp, desc: "Continuous AI-driven episodic and daily visual brand content." },
             { title: "Viral Trends", icon: Sparkles, desc: "Synthesizing viral trends into AI video narratives instantly." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-24 rounded-[3.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl text-left shadow-2xl overflow-hidden relative">
            <div className="max-w-4xl relative z-10">
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-8 block font-black">Social Media Velocity</span>
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 italic leading-[0.9] text-white">Dominate <br /><span className="text-primary-accent italic">Vertical Content_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-500 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best AI Reels Production Agency in India</strong>. Our <strong className="text-white">Kochi</strong> HQ utilizes <strong className="text-primary-accent">Generative Vertical Engines</strong> to produce high-conversions <strong className="text-white">AI Shorts</strong> for the <strong className="text-white">Kerala</strong> digital elite.
                 </p>
                 <p>
                    By deploying <strong className="text-white">Neural Trend Analysis</strong>, we enable brands to launch <strong className="text-primary-accent">AI-Driven Social Content</strong> that captures attention and scales influence with <strong className="text-white">Zero Production Deadlines</strong>.
                 </p>
               </div>
            </div>
            <div className="absolute -right-20 top-20 opacity-10 hidden lg:block">
               <Smartphone size={320} className="text-primary-accent" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}
