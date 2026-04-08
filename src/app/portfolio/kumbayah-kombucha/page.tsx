import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, Camera, Sparkles, Globe, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kumbayah Kombucha Case Study | Luxury Product Photography | Define Perspective",
  description: "Explore the visual narrative behind the Kumbayah Kombucha campaign. Organic tropical aesthetics and cinematic product storytelling.",
  keywords: ["kombucha photography", "product case study India", "premium commercial photography Kerala", "beverage branding visuals"],
};

export default function KumbayahKombuchaCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 01 // Organic Beverage
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Kumbayah <br />
            <span className="text-primary-accent">Kombucha_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Synthesize the refreshing, organic essence of high-end kombucha with a cinematic tropical backdrop to drive mid-summer engagement."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Ad Photography</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">FMCG / Health</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Deliverable</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Cinema Grade Plates</p>
                </div>
             </div>
          </div>
        </header>

        {/* HERO IMAGE SECTION */}
        <section className="mb-40 relative group">
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="/images/clients/kumbayah-kombucha.png"
                alt="Kumbayah Kombucha Master Plate"
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
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Tropical Narrative_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Capturing condensation, sunlight refraction, and the natural fizz required precise timing and high-speed optics. By utilizing natural coastal lighting supplemented by high-CRI panels, we preserved the authentic colors of the fermented botanicals while emphasizing the premium glass bottle craft.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Zap className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Sun Sync</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Perfectly timed natural flare integration.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Sparkles className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Dew Logic</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Engineered condensation for ultra-fresh feel.</p>
                 </div>
              </div>
           </div>
           <div className="grid gap-8">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group">
                 <Image 
                   src="https://images.unsplash.com/photo-1621263764490-344432bd44f2?auto=format&fit=crop&q=80&w=1200"
                   alt="Organic Ingredients"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group">
                 <Image 
                    src="https://images.unsplash.com/photo-1596525649030-5bb5fbab21ec?auto=format&fit=crop&q=80&w=1200"
                    alt="Product Lineup"
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
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">125%</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Engagement Lift</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-primary-accent italic tracking-tighter mb-2">Zero</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Post-Renders Required</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">Prime</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Billboard Ready</p>
              </div>
              <div className="text-center md:text-left">
                 <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-2">4K</p>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Master Delivery</p>
              </div>
           </div>
        </section>

        {/* CTA FOOTER */}
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
                Ready for <br /><span className="text-primary-accent italic font-black">Impact?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <Link 
                   href="/contact?subject=Portfolio Inquiry: Kumbayah-style Shoot"
                   className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent transition-all duration-300"
                 >
                   Launch New Shoot <ArrowRight size={20} />
                 </Link>
                 <Link 
                   href="/portfolio"
                   className="h-20 px-16 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-4 transition-all duration-300"
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
