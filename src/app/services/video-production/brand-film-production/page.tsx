import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Star, Zap, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Film Production India | Best Cinematic Storytelling Kerala | Define Perspective",
  description: "Elite brand film production for visionary companies across India. We create cinematic storytelling that captures your brand's unique mission and heritage in the Indian marketplace.",
  keywords: ["brand film production India", "best cinematic storytelling Kerala", "brand legacy films Kochi", "visionary brand videos India"],
};

export default function BrandFilmSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-red-400/50 text-[10px] font-mono font-black text-red-400 uppercase tracking-widest bg-red-400/10 backdrop-blur-md">
                 Division: Visionary Media
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
             Brand <br /> <span className="text-red-400 font-black italic shadow-glow">Storytelling_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
             "Legacy is built through cinematic vision. We craft the definitive brand films for India's most ambitious organizations."
           </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Define Your <span className="text-red-400 italic">Visual Legacy.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                A great brand film does more than sell — it inspires. Our cinematography teams in Kerala and India focus on the profound narrative heart of your organization. We combine 8K cinematic capture with deep strategic insight to ensure that your brand film resonates with global standards while honoring its local roots.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Brand Film Project enquiry'}
                className="h-16 px-10 rounded-2xl bg-red-400 text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                Initalize Brand Film
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                alt="Cinematic Brand Film Production Scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-red-400/10" />
           </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-red-300 font-black">Brand Story Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Best brand film production company in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in cinematic storytelling. We provide specialized brand film services for visionary companies in Kerala and across India, focusing on premium narrative depth, global-spec production quality, and high-impact brand resonance.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
