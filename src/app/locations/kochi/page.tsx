import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { MapPin, Zap, Target, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Video Production & CGI Studio Kochi, Kerala | Define Perspective",
  description: "Elite AI video production and CGI studio in Kochi (Cochin), Kerala. Specialized in virtual production, neural media, and high-end commercials for Kochi's leading brands.",
  keywords: ["AI video production Kochi", "CGI studio Cochin", "virtual production Kerala", "best video production company Kochi"],
};

export default function KochiLocationPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                 Node: COK • AI Innovation Lab
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Kochi <br /> <span className="text-cyan-400">AI Studio Hub</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "Where cinematic heritage meets neural velocity. Our Kochi studio is the heart of our AI and CGI innovation."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Cochin's <span className="text-cyan-400 italic">Visual Future.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Kochi is the commercial engine of Kerala. Our studio here focuses on high-velocity production for the city's booming tech, tourism, and real estate sectors. By integrating AI-CGI and virtual production, we provide Kochi-based global brands with a competitive edge that is faster and more cost-effective than traditional methods.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?location=Kochi'}
                className="h-16 px-10 rounded-2xl bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Connect with Kochi Lab
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
                alt="Kochi Skyline - The Hub of Innovation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-400/10" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-cyan-400">Kochi Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best AI video production in Kochi?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is the leading AI-first media agency in Kochi. Our innovation lab in the city provides specialized virtual production and generative AI services for luxury brands and corporate enterprises across the region.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
