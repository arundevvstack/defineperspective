import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dotspace Commercial Case Study | Architecture & Lifestyle TVC | Define Perspective",
  description: "Explore the visual engineering behind the 'Dotspace' co-working property commercial. A cinematic lifestyle commercial produced in Kochi for modern innovators.",
  keywords: ["architecture videography Kerala", "luxury real estate video Kochi", "cinematic commercial production India", "Dotspace property film"],
};

export default function DotspaceCommercialCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 05 // Architecture & Lifestyle
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Dotspace <br />
            <span className="text-primary-accent">Commercial_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Capture the architectural essence and premium lifestyle of Dotspace co-working facilities for national real-estate campaigns."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Ad Film / TVC</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Architecture & Real Estate</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Deliverable</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">4K Master Copy</p>
                </div>
             </div>
          </div>
        </header>

        {/* BRIGHTNESS SECTION */}
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube 
                videoId="HuX40LSwF7M"
                title="Dotspace Commercial Master"
                priority
              />
           </div>
        </section>

        {/* THE CRAFT SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <Globe className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Space Narrative_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Architecture video production requires a balance of wide-angle precision and intimate lifestyle storytelling. For Dotspace, we utilized cinematic gimbal movements and high-dynamic-range sensors to capture the interplay of natural light and modern industrial design within their Kerala locations. The goal was to make the workspace feel aspirational—a hub for innovation and visionary growth.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Target className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Z-Axis Motion</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Fluid gimbal paths across the facility.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Zap className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Lux Arc</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">High-fidelity lighting for interior shoots.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center group">
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
             Ready to <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Claim Space?</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href="/contact?subject=Portfolio Inquiry: Dotspace-style TVC"
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300"
              >
                Inquire now <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </div>
    </main>
  );
}
