import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, Camera, Sparkles, Globe, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Timepiece Case Study | Premium Product Photography | Define Perspective",
  description: "Explore the visual engineering behind our Luxury Timepiece campaign. Cinematic lighting and precision photography for high-end horology brands.",
  keywords: ["luxury watch photography", "product case study India", "premium commercial photography Kerala", "watch branding visuals"],
};

export default function LuxuryTimepieceCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 01 // Luxury Product
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Luxury <br />
            <span className="text-primary-accent">Timepiece_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Capture the engineering precision and heritage of a premium timepiece for international billboards and luxury catalogs."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Ad Photography</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Luxury Goods</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Deliverable</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">8K Master Plates</p>
                </div>
             </div>
          </div>
        </header>

        {/* HERO IMAGE SECTION */}
        <section className="mb-40 relative group">
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
                alt="Luxury Timepiece Master Plate"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-primary-accent/5 pointer-events-none" />
           </div>
        </section>

        {/* THE PROCESS SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <Camera className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Optic Precision_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Every dial, every screw, and every reflection was engineered in-studio. We utilized specialized macro lenses and a custom lighting rig to eliminate unwanted glares while highlighting the hand-brushed steel texture. This approach creates a sense of high-fidelity realism that standard photography cannot achieve.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Zap className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Macro Rig</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Extreme detail capture at 8K resolution.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Sparkles className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Glow Logic</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Custom light diffusion for luxury feel.</p>
                 </div>
              </div>
           </div>
           <div className="grid gap-8">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group">
                 <Image 
                   src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop"
                   alt="Watch Gear Detail"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group">
                 <Image 
                    src="https://images.unsplash.com/photo-1508685096489-7aac2914b268?q=80&w=2102&auto=format&fit=crop"
                    alt="Luxury Watch Aesthetics"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
           </div>
        </section>

        {/* METRICS & RESULT */}
        <section className="mb-40 py-24 border-y border-white/5">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">98%</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Detail Integrity</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-primary-accent italic tracking-tighter mb-2">8K</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Master Output</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">12+</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Lighting Nodes</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">Zero</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Unwanted Glares</p>
              </div>
           </div>
        </section>

        {/* CTA FOOTER */}
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
                Ready for <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Precision?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <Link 
                   href="/contact?subject=Portfolio Inquiry: Luxury Timepiece-style Shoot"
                   className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
                 >
                   Launch New Shoot <ArrowRight size={20} />
                 </Link>
                 <Link 
                   href="/portfolio"
                   className="h-20 px-16 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-4 hover:text-primary-accent transition-all duration-300"
                 >
                   Return to Portfolio
                 </Link>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
