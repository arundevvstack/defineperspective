"use client";

import { motion } from "framer-motion";
import { Clapperboard, Camera, Film, Mic2, MonitorCheck, Share2 } from "lucide-react";

export default function VideoProductionPipeline() {
  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container-max relative z-10">
        <div className="text-center mb-32 space-y-8">
          <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
            Creative Framework {" // "} Production_Delta
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
             The Production <br />
             <span className="text-primary-accent">Pipeline_</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto uppercase leading-relaxed">
            From creative concept to 4K broadcast delivery, we follow a high-fidelity workflow for world-class results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Clapperboard, title: "Creative Blueprint", desc: "Crafting a unique narrative strategy and storyboard tailored to your brand's specific identity." },
            { icon: Camera, title: "High-End Cinematography", desc: "Filming with professional 8K camera systems and lighting for a true cinematic experience." },
            { icon: Film, title: "Premium Post-Production", desc: "Expert editing, color grading, and VFX that transform raw footage into a broadcast masterpiece." },
            { icon: Mic2, title: "Sound Architecture", desc: "Professional sound design and voiceovers recorded in high-end studios for maximum impact." },
            { icon: MonitorCheck, title: "Broadcast QC", desc: "Rigorous quality control to ensure every frame meets global television and digital standards." },
            { icon: Share2, title: "Omnichannel Delivery", desc: "Optimizing content for cinema, television, and every major social media platform." }
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 rounded-[4rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary-accent/30 transition-all group"
            >
              <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary-accent mb-12 group-hover:scale-110 transition-transform shadow-2xl">
                <step.icon size={36} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-6 group-hover:text-primary-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-[11px] text-zinc-500 uppercase leading-relaxed font-light">
                {step.desc}
              </p>
              <div className="mt-12 flex items-center gap-4 opacity-10 group-hover:opacity-40 transition-opacity">
                 <div className="h-px flex-1 bg-white" />
                 <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                 <span className="text-[8px] font-mono text-white uppercase">STEP_0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
