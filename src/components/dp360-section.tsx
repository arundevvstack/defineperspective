"use client";

import { motion } from "framer-motion";
import { 
  Workflow, Users, BarChart3, Target, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2, Globe, Megaphone 
} from "lucide-react";

const inclusions = [
  {
    title: "Creative Campaign Design",
    desc: "We plan and design creative campaigns that help your brand stand out and get noticed.",
    icon: Target,
  },
  {
    title: "Strategic Video Production",
    desc: "We create videos, Reels, and social media content that are built to get more views and sales.",
    icon: Workflow,
  },
  {
    title: "Influencer Marketing",
    desc: "We connect your brand with the right influencers to help you reach more people effectively.",
    icon: Megaphone,
  },
  {
    title: "Digital Marketing & Ads",
    desc: "We help you run your ads on social media to make sure your content reaches the right customers.",
    icon: BarChart3,
  },
];

export default function DP360Section() {
  return (
    <section id="dp360" className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-cyan-400/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto">
        <header className="mb-32 flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto gap-12">
           <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                 <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                    Flagship Engine
                 </div>
                 <div className="h-[1px] w-24 bg-cyan-400/20" />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]"
              >
                DP 360°: <br /> <span className="text-cyan-400">All-in-One Content Service</span>
              </motion.h2>
              <p className="mt-12 text-2xl text-zinc-500 font-light max-w-2xl leading-relaxed">
                Elevate your brand with our full-service plan that covers everything from video strategy to social media ads.
              </p>
           </div>
           
           <button 
             onClick={() => window.location.href = '/contact?subject=Production Capacity Request: DP 360° Service'}
             className="h-20 px-12 rounded-3xl bg-cyan-400 text-black font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(240,68,71,0.4)] transition-all"
           >
             Request a Quote
           </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
           {inclusions.map((item, idx) => (
             <motion.div 
               key={item.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden group hover:bg-white/10 transition-all"
             >
                <div className="mb-10 h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 shadow-2xl transition-all">
                   <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-6 leading-tight min-h-[4rem]">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-10">
                   {item.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-700 uppercase group-hover:text-cyan-400">
                   Explore Module <ArrowRight size={14} />
                </div>
             </motion.div>
           ))}
        </div>
        
        {/* Core Value Statement */}
        <div className="p-16 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/5 to-cyan-400/5 text-center flex flex-col items-center">
           <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase mb-8">Integrated Ecosystem v.2026</span>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight max-w-4xl">
             We Don’t Just Create Ads; <br /> We Build <span className="text-cyan-400">Brand Movements.</span>
           </h3>
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "200px" }}
             className="h-1 bg-cyan-400 mt-12 rounded-full"
           />
        </div>
      </div>
    </section>
  );
}
