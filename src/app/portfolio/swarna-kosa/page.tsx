import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit, Cpu } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Swarna Kosa Case Study | AI TV Commercial | Define Perspective",
  description: "Experience the luxury of heritage silk through AI-driven TVC production. Explore the 'Swarna Kosa' commercial by Define Perspective.",
  keywords: ["AI TVC Kerala", "heritage silk ad India", "swarna kosa AI film"],
};

export default function SwarnaKosaAICaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden theme-blue">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4 justify-center">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 09 // AI TVC
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-blacker uppercase leading-[0.8] text-white italic">
            Swarna <br />
            <span className="text-primary-accent">Kosa AI_</span>
          </h1>
        </header>
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube videoId="-CYvl4ytIFY" title="Swarna Kosa AI TVC" priority />
           </div>
        </section>
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl">
           <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16 italic">Ready for <br /><span className="text-primary-accent">Neural Heritage?</span></h4>
           <Link href="/contact" className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300">Launch AI TVC <ArrowRight size={20} /></Link>
        </section>
      </div>
    </main>
  );
}
