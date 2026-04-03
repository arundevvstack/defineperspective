import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Target, Zap, BarChart3, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Marketing Strategy & Consulting India | Define Perspective",
  description: "Elite video marketing strategy and business consulting for high-growth brands in India. Align your visual content with long-term revenue goals through data-driven planning.",
  keywords: ["video marketing strategy India", "business video consulting Kerala", "video content planning company", "ROI video strategy India"],
};

export default function VideoStrategySubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                 Node: Strategic Consulting
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Video <br /> <span className="text-cyan-400">Marketing Strategy</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Content without strategy is just noise. We build high-performance visual roadmaps for brands that want to dominate their markets."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Beyond <span className="text-cyan-400 italic">Production.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Most agencies just 'make videos.' We align your entire visual ecosystem with your business's revenue targets. Our consulting process includes market analysis, audience profiling, and funnel architecture mapping to ensure every piece of content delivers measurable ROI.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Video Strategy Consultation'}
                className="h-16 px-10 rounded-2xl bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Initalize Strategy Hub
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic Video Marketing Consulting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-cyan-400">Consultancy Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best video marketing consultant in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in data-driven video strategy. We provide comprehensive consulting for brands in Kochi, Trivandrum, and Pan-India, focusing on long-term campaign planning and architectural video roadmaps that deliver growth.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
