import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit, Cpu } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SHE Luxury Body Lotion Case Study | AI TV Commercial | Define Perspective",
  description: "Explore the AI-driven TV commercial for SHE Luxury Body Lotion. Photorealistic generative video for premium skincare brands.",
  keywords: ["AI skincare ad", "generative commercial production Kerala", "SHE luxury body lotion film"],
};

export default function SHEBodyLotionCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden theme-blue">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4 justify-center">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 07 // AI Commercial
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            SHE Luxury <br />
            <span className="text-primary-accent">Body Lotion_</span>
          </h1>
        </header>
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube videoId="5kOnWP-dZZY" title="SHE Body Lotion AI TVC" priority />
           </div>
        </section>
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl">
           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16 italic">Ready for <br /><span className="text-primary-accent">Next-Gen?</span></h2>
           <Link href="/contact" className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300">Launch AI Agency <ArrowRight size={20} /></Link>
        </section>
      </div>
    </main>
  );
}
