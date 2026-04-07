import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "To U Commercial Case Study | Cinematic Fashion TVC | Define Perspective",
  description: "Explore the visual engineering behind the 'To U' TV commercial. A masterclass in cinematic fashion storytelling produced in Kerala for the global market.",
  keywords: ["fashion TVC Kerala", "apparel brand film India", "cinematic commercial production Kochi", "To U brand film"],
};

export default function ToUCommercialCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 03 // Cinematic TVC
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            To U <br />
            <span className="text-primary-accent italic">Commercial_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Redefining fashion film aesthetics in South India. A high-energy, cinematic TVC for 'To U' that captures the pulse of modern apparel."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">TVC Production</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Fashion & Retail</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Platform</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Broadcast & Digital</p>
                </div>
             </div>
          </div>
        </header>

        {/* VIDEO SECTION */}
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube 
                videoId="NEqjeiDThcY"
                title="To U Commercial Master"
                priority
              />
           </div>
        </section>

        {/* THE STRATEGY SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-center p-12 md:p-32 rounded-[5rem] bg-white/5 border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-4">
                 <Zap className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Kinetic Flow_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                For 'To U', we opted for a high-velocity editing style paired with shallow depth-of-field cinematography. The goal was to evoke sensory luxury—making the fabric feel almost tactile through the screen. Shot on high-speed sensors to allow for fluid time-ramping, the commercial balances intensity with elegance to resonate with a young, fashion-conscious audience in India.
              </p>
              <div className="flex gap-12">
                 <div>
                    <p className="text-2xl font-black text-white mb-1 italic">60 FPS</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Capture Node</p>
                 </div>
                 <div>
                    <p className="text-2xl font-black text-primary-accent mb-1 italic">Neural</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Grade Engine</p>
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-transparent z-10 pointer-events-none" />
              <div className="flex items-center justify-center h-full text-zinc-800 uppercase font-black tracking-tighter text-9xl italic opacity-10">
                 TO U
              </div>
           </div>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center">
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
             Ready to <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Move Markets?</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href="/contact?subject=Portfolio Inquiry: To U-style TVC"
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Inquire for TVC <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </div>
    </main>
  );
}
