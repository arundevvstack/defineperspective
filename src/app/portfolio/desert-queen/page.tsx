import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit, Cpu } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Desert Queen AI Film Case Study | Neural Fashion Cinema | Define Perspective",
  description: "Experience the future of fashion cinema. Our 'Desert Queen' AI film demonstrates the power of photorealistic generative video for luxury brands.",
  keywords: ["AI fashion film India", "generative video production Kerala", "neural cinema Kochi", "West Vogue AI series"],
};

export default function DesertQueenAICaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden theme-blue">
      <GlassNavbar />
      
      {/* Neural Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/10 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 06 // Neural Cinema
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Desert <br />
            <span className="text-primary-accent">Queen AI_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Creating a photorealistic fashion world entirely in the neural domain. Zero cameras, zero locations—total visual freedom."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Platform</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">AI Fashion Series</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Engine</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Neural Render v2</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Client</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">West Vogue</p>
                </div>
             </div>
          </div>
        </header>

        {/* CINE VIEW SECTION */}
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube 
                videoId="HtomLPOzkCU"
                title="Desert Queen AI Master"
                priority
              />
           </div>
        </section>

        {/* THE PROCESS SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <Cpu className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Neural Latents_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                For 'Desert Queen', we bypassed traditional location scouting and camera departments entirely. Every frame was generated using our proprietary neural workflows, allowing us to choreograph impossible cinematography and lighting within a hyper-realistic desert environment. This marks a new era for fashion film production in India—where imagination is the only limit.
              </p>
              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5 relative group">
                 <div className="flex items-center gap-6 mb-8 text-primary-accent">
                    <BrainCircuit size={28} />
                    <h4 className="text-xl font-black uppercase tracking-widest italic">Stable Vision Hub</h4>
                 </div>
                 <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                    Multi-node generation cluster used to maintain temporal consistency and high-fidelity texture across every cinematic frame.
                 </p>
              </div>
           </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center">
           <h2 className="text-4xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
             Ready for <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Neural Era?</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href="/contact?subject=Portfolio Inquiry: AI Fashion Film like Desert Queen"
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300"
              >
                Inquire for AI Studio <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </div>
    </main>
  );
}
