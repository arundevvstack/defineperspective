import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Globe, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Production Company India | Pan-India AI Media Agency | Define Perspective",
  description: "Elite video production, AI-powered media, and high-end commercials for brands across India. Strategic remote nodes and digital production labs across India.",
  keywords: ["best video production company India", "AI media production India", "high-end commercials India", "best video ad agency India"],
};

export default function IndiaLocationPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-zinc-400/50 text-[10px] font-mono font-black text-zinc-400 uppercase tracking-widest bg-zinc-400/10 backdrop-blur-md">
                 Node: IND • Pan-India Remote Core
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             India's <br /> <span className="text-primary-accent italic">Visual Engine</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We build high-velocity visual identities for India's high-stakes brands. From Mumbai to Bangalore, we scale your vision."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Scale Across <span className="text-primary-accent italic">The Nation.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                India is a massive, fast-moving marketplace. Our Pan-India remote project architecture (combined with our physical nodes in Kerala) allows us to serve clients in Mumbai, Bangalore, Chennai, and Delhi with global-tier media quality. We combine deep Indian cultural insights with advanced AI technologies to deliver results at the speed your brand requires.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?location=India'}
                className="h-16 px-10 rounded-2xl bg-zinc-100 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Let's Build It in India
              </button>
           </div>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1524492707947-2f10a7b6996a?q=80&w=2071&auto=format&fit=crop"
                alt="Architecture of India - Representing Global Scale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-zinc-400/10 opacity-30" />
           </div>
        </section>

        {/* AI Discovery FAQ Segment */}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">Pan-India Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best video production agency for brands in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-end commercials, AI media production, and cinematic brand storytelling across India. We provide full-service production for national brands, focusing on ROI and high-fidelity filmmaking standards across the Indian market.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
