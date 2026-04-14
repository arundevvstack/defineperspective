import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Play, Zap, Target, Star, CheckCircle2, ArrowRight, Video, Sparkles, Globe, BrainCircuit } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BB Serum TVC Case Study | Cosmetics & Beauty Advertising | Define Perspective",
  description: "Visual engineering for high-stakes cosmetics advertising. Discover how we captured the essence of BB Serum through cinematic Macro-visuals.",
  keywords: ["cosmetic TVC India", "beauty product videographer Kerala", "skin care commercial Kochi", "BB Serum brand film"],
};

export default function BBSerumTVCCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 04 // Cosmetics & Beauty
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-blacker uppercase leading-[0.8] text-white italic">
            BB Serum <br />
            <span className="text-primary-accent">TV Commercial_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Deliver a photorealistic and 'clinical yet premium' TVC to launch BB Serum in the Indian luxury market."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Ad Film / TVC</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Cosmetics & Beauty</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Technical</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Macro Cine Optics</p>
                </div>
             </div>
          </div>
        </header>

        {/* BRIGHTNESS SECTION */}
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube 
                videoId="8TntXDekuE8"
                title="BB Serum TVC Master"
                priority
              />
           </div>
        </section>

        {/* THE CRAFT SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <Sparkles className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercaseer">Liquid Optics_</h2>
              </div>
              <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Beauty advertising is about trust. For BB Serum, we focused on high-magnification liquid photography—capturing the viscosity and light-refraction properties of the serum itself. By using clinical lighting setups and ultra-shallow depth of field, we emphasized the product's premium quality, making it stand out in the crowded Indian skincare landscape.
              </p>
              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5">
                 <div className="flex items-center gap-6 mb-8 text-primary-accent">
                    <BrainCircuit size={28} />
                    <h4 className="text-xl font-black uppercase tracking-widest italic">Neural Skin Care</h4>
                 </div>
                 <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-loose">
                    Retouching and skin-tonal preservation done via our AI-assisted post-production lab, reducing delivery times by 40% while maintaining absolute texture integrity.
                 </p>
              </div>
           </div>
           <div className="grid gap-12">
              <div className="p-12 rounded-3xl bg-primary-accent/10 border border-primary-accent/20 flex flex-col justify-between h-[300px]">
                 <Target className="text-primary-accent" size={32} />
                 <p className="text-3xl font-black uppercase tracking-tighter italic">92% ROI Shift</p>
                 <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Ad Impact Score</p>
              </div>
           </div>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center group">
           <h2 className="text-4xl md:text-7xl font-black uppercaseer text-white mb-16 leading-[0.8] italic">
             Ready for <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Pure Glow?</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href="/contact?subject=Portfolio Inquiry: BB Serum-style TVC"
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300"
              >
                Start Beauty Project <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </div>
    </main>
  );
}
