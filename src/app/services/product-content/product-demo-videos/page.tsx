import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { PlayCircle, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product Demo Video Production India | Define Perspective",
  description: "High-end product demo videos that simplify complex features and drive sales. Specialized demo production for SaaS, tech hardware, and consumer goods in India and Kerala.",
  keywords: ["product demo video production India", "tech product demo Kerala", "SaaS video production company", "best software demo videos India"],
};

export default function ProductDemoSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-red-400/50 text-[10px] font-mono font-black text-red-400 uppercase tracking-widest bg-red-400/10 backdrop-blur-md">
                 Node: Product Clarity Engine
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Product <br /> <span className="text-red-400">Demo Videos</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Simplify. Demonstrate. Convert. High-fidelity demo videos for India's leading tech and consumer brands."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Clarity is <span className="text-red-400 italic">Conversion.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                A great product shouldn't be hard to understand. Our product demo production focuses on breaking down complex features into simple, visually stunning narratives. Whether it's a SaaS platform or high-tech hardware, we ensure your audience understands the value of your product in seconds.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Product Demo enquiry'}
                className="h-16 px-10 rounded-2xl bg-red-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(248,113,113,0.3)]"
              >
                Simplify My Product
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                alt="High-end Technology Product Demonstration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-red-300">Demo Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best product demo video company in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in technical and product storytelling. We provide specialized demo video production for Indian tech startups and established global hardware brands, focusing on clarity, visual excellence, and measurable conversion growth.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
