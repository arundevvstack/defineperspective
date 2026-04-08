import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, Camera, Sparkles, Globe, BrainCircuit, Scissors } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fashion Editorial Case Study | High-End Catalog Photography | Define Perspective",
  description: "Explore the visual engineering behind our High-End Fashion Editorial campaign. Specialized fashion photography and creative catalog production in Kochi, Kerala.",
  keywords: ["fashion photography Kerala", "apparel catalog shoots Kochi", "premium editorial photography India", "clothing brand visuals"],
};

export default function FashionEditorialCaseStudy() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node 02 // Fashion Editorial
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Fashion <br />
            <span className="text-primary-accent">Editorial_</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "Deliver a photorealistic fashion editorial that balances commercial appeal with high-art aesthetics for a growing D2C apparel brand."
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Editorial Photography</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Apparel & Textiles</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Deliverable</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">Multi-Channel Kit</p>
                </div>
             </div>
          </div>
        </header>

        {/* HERO IMAGE SECTION */}
        <section className="mb-40 relative group">
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
                alt="High-End Fashion Editorial Master Plate"
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
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Vogue Standard_</h2>
              </div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                We engineered a high-velocity production workflow that prioritized skin-tone accuracy and textile texture. Utilizing a combination of natural light diffusion and high-end studio strobes, we achieved a look that feels both effortless and luxury. Our retouching pipeline focused on preserving natural skin texture while elevating the overall color grading to a global 'Vogue' standard.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Scissors className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Textile Node</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Preserving fabric weave at 100% crop.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <Sparkles className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Chroma Sync</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Perfect color matching for global SKUs.</p>
                 </div>
              </div>
           </div>
           <div className="grid gap-8">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group">
                 <Image 
                   src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                   alt="Fashion Model Close Up"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
           </div>
        </section>

        {/* CTA FOOTER */}
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
                Ready for <br /><span className="text-primary-accent italic font-blackitalic font-black italic">Vogue Look?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <Link 
                   href="/contact?subject=Portfolio Inquiry: Fashion Editorial-style Shoot"
                   className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent    transition-all duration-300"
                 >
                   Launch New Shoot <ArrowRight size={20} />
                 </Link>
                 <Link 
                   href="/portfolio"
                   className="h-20 px-16 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm  transition-all flex items-center justify-center gap-4  transition-all duration-300"
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
