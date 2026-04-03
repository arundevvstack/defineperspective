import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Workflow, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Content Strategy & Media Planning India | Best Content Strategist Kerala | Define Perspective",
  description: "Elite visual content strategy and planning for brands across India. We build high-velocity media roadmaps, content calendars, and social schedules designed to scale engagement and ROI.",
  keywords: ["content strategy India", "best content planner Kerala", "video content calendar Kochi", "social media strategy India"],
};

export default function ContentStrategySubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-400/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-blue-400/50 text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-400/10 backdrop-blur-md">
                 Division: Lifecycle Strategy
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Content <br /> <span className="text-blue-400 font-black italic shadow-glow">Strategy_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
             "Velocity meets Precision. We build the content roadmaps that convert India's social audiences into lifelong brand advocates."
           </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Scale Your <span className="text-blue-400 italic">Visual Hub.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Random posting is the enemy of brand growth. Our content strategy and planning division in Kerala and across India focuses on architectural media layouts — from long-term social schedules to high-impact campaign sequences. We ensure your brand's voice is consistent, data-driven, and designed for maximum audience retention in the Indian digital ecosystem.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Content Strategy enquiry'}
                className="h-16 px-10 rounded-2xl bg-blue-400 text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              >
                Initalize content plan
              </button>
           </div>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Content Planning and Strategy Hub"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-blue-400/10" />
           </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-blue-400">Content Logic FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Best video content strategy company in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-velocity content planning. We provide specialized media scheduling and strategic roadmap services for national and international brands in Kerala and across India, focusing on long-term audience growth and measurable ROI.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
