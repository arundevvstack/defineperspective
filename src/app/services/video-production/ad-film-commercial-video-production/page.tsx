import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Video, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ad Film & Commercial Video Production India | Define Perspective",
  description: "High-impact television commercials (TVC) and premium digital video ads for brands across India. Cinematic filmmaking fused with performance marketing strategy.",
  keywords: ["ad film production India", "commercial video production Kerala", "digital ad creatives", "TVC production company Kochi"],
};

export default function AdFilmSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-red-400/50 text-[10px] font-mono font-black text-red-400 uppercase tracking-widest bg-red-400/10 backdrop-blur-md">
                 Node: Cinematic Ad Production
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Ad Film <br /> <span className="text-red-400">Commercials</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "High-stakes commercials that dominate screens. Premium filmmaking designed for ROI and brand scaling."
           </p>
        </header>

        {/* Section 1: Problem/Solution */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Visuals for <span className="text-red-400 italic">Market Dominance.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                In a crowded marketplace, average ads go unnoticed. We specialize in cinematic ad films that capture the soul of your brand while being engineered for high performance on digital and traditional channels across India and Kerala.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Ad Film enquiry'}
                className="h-16 px-10 rounded-2xl bg-red-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(248,113,113,0.3)]"
              >
                Start Ad Campaign
              </button>
           </div>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                alt="High-end Ad Film Production Studio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-red-400">Commercial Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best ad film production company in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in Kerala and India for cinematic commercial production. Our approach blends high-end filmmaking with performance analytics, ensuring that your ad doesn't just look good, but delivers measurable results for your brand.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
