"use client";

import { motion } from "framer-motion";
import { Workflow, ArrowLeft, CheckCircle2, Target, Megaphone, BarChart3, Globe } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";

const inclusions = [
  {
    title: "Creative Campaign Design",
    desc: "Strategic thinking meets innovative design to craft campaigns that amplify your message.",
    icon: Target,
  },
  {
    title: "Strategic Media Production",
    desc: "Every micro-video, reel, and poster is engineered for your specific funnel stage.",
    icon: Workflow,
  },
  {
    title: "Influencer Marketing",
    desc: "Connecting your brand with voices that matter through AI-vetted collaborations.",
    icon: Megaphone,
  },
  {
    title: "Performance Digital Marketing",
    desc: "Implementation of effective strategies to ensure your content actually reaches the right eyes.",
    icon: BarChart3,
  },
];

export default function DP360Page() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 mb-12 transition group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" /> Back to Nodes
        </button>

        <header className="mb-32">
           <div className="flex items-center gap-4 mb-8">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10">
                 DP 360° Framework
              </div>
           </div>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl font-black md:text-9xl tracking-tighter uppercase mb-12 leading-[0.85]"
           >
             Comprehensive <br /> <span className="text-cyan-400">Digital Production</span>
           </motion.h1>
           <p className="text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl">
             "Elevate your brand with our powerful, cohesive ecosystem that combines strategy, creation, and distribution. We bridge the gap between cinematic storytelling and machine-speed efficiency."
           </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
           {inclusions.map((item, idx) => (
             <motion.div 
               key={item.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="p-12 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col gap-8 group hover:bg-white/10 transition-all"
             >
                <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-all">
                   <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-widest leading-tight">{item.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-lg">
                   {item.desc}
                </p>
             </motion.div>
           ))}
        </div>

        <section className="py-32 border-t border-white/5 text-center flex flex-col items-center">
           <h3 className="text-4xl font-black uppercase tracking-widest mb-12 text-white max-w-2xl leading-tight">
             Ready to Scale Your Brand with the 360° Node?
           </h3>
           <div className="flex flex-wrap justify-center gap-8">
               <button 
                 onClick={() => window.location.href = '/portfolio'}
                 className="h-20 px-16 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:scale-110 hover:bg-white/5 active:scale-95 transition-all shadow-xl"
               >
                 View Related Portfolio
               </button>
               <button 
                 onClick={() => window.location.href = '/contact?subject=Portfolio Inquiry: DP 360 Framework'}
                 className="h-20 px-16 rounded-full bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
               >
                 Initialize Full Spectrum Analysis
               </button>
           </div>
        </section>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}
