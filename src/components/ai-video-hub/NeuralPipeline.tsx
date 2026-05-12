"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Film, Sparkles, Wand2, Mic2, MonitorCheck, Settings2, Share2 } from "lucide-react";

const steps = [
  {
    icon: BrainCircuit,
    title: "AI Concept Development",
    desc: "We turn your brand goals into creative video concepts made to get views.",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering & Design",
    desc: "We use advanced AI tools to design high-quality visuals for your brand.",
  },
  {
    icon: Film,
    title: "Motion AI Pipeline",
    desc: "We create smooth, cinematic motion in every video using AI.",
  },
  {
    icon: Wand2,
    title: "Neural VFX & Compositing",
    desc: "We mix real-world footage with AI art to tell unique stories.",
  },
  {
    icon: Mic2,
    title: "AI Voice & Sound Architecture",
    desc: "We add realistic voices and great sound to make your brand stand out.",
  },
  {
    icon: MonitorCheck,
    title: "Platform Optimization",
    desc: "We make sure your video looks perfect on TV, phones, and cinema screens.",
  },
];

export default function NeuralPipeline() {
  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-32 space-y-8">
          <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
            Technical Architecture {" // "} Pipeline_Alpha
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
            Our Neural <br />
            <span className="text-primary-accent">Pipeline_</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto uppercase leading-relaxed">
            The intersection of cinematic craftsmanship and high-velocity generative intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
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
                 <span className="text-[8px] font-mono text-white uppercase">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
