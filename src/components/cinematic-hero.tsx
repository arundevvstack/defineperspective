"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Cpu, Shield, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CinematicHero({ mode }: { mode: string }) {
  const isAI = mode === "ai-studio";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-accent/5 rounded-full blur-[160px] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0.8),transparent)]" />
      </div>

      <div className="w-full relative z-10 mx-auto max-w-[1700px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            key={mode + "-badge"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-12 hover:border-primary-accent/40 hover:bg-white/10 transition-all cursor-default shadow-2xl shadow-primary-accent/5"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-accent shadow-[0_0_10px_rgba(var(--primary-accent-rgb),0.8)]"></span>
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">
              {isAI ? "Best AI Production " : "Best Video Production "} 
              <span className="text-primary-accent font-bold ml-1">{isAI ? "Studio in India" : "Company in Kerala"}</span>
            </span>
          </motion.div>

          {/* Headline Group */}
          <div className="space-y-6 mb-16">
            <motion.h1
              key={mode + "-title"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-[8.5vw] font-black tracking-tighter uppercase leading-[0.8] text-white"
            >
              {isAI ? "AI-Powered" : "Elite Cinematic Excellence"} <br />
              <span className="text-primary-accent italic">{isAI ? "Production Studio" : "Master Brand Storytelling"}</span>
            </motion.h1>

            <motion.p
              key={mode + "-p"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto uppercase tracking-widest leading-relaxed"
            >
              {isAI 
                ? "Scale your brand in Kerala & beyond with proprietary AI cinematic workflows"
                : "High-fidelity film production Kerala and broadcast filmmaking excellence."}
            </motion.p>
          </div>

          {/* Core Description */}
          <motion.div
            key={mode + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20 px-8 py-10 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed uppercase tracking-[0.2em]">
              {isAI 
                ? <>Deploying <span className="text-white font-bold tracking-normal">neural cinematic systems</span> to accelerate brand growth by reducing production cycles and maximizing visual impact.</>
                : <>Orchestrating <span className="text-white font-bold tracking-normal">elite cinematic video production</span> through meticulous lighting, sound engineering, and sophisticated narrative structure.</>}
            </p>
          </motion.div>

          {/* Metric Blocks */}
          {(isAI ? [
            { label: "Velocity", value: "10X", desc: "Faster production cycles using AI pipelines", icon: Zap },
            { label: "Mastering", value: "4K+", desc: "Ultra-HD cinematic output optimized for all platforms", icon: Target }
          ] : []).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-full max-w-4xl">
              {(isAI ? [
                { label: "Velocity", value: "10X", desc: "Faster production cycles using AI pipelines", icon: Zap },
                { label: "Mastering", value: "4K+", desc: "Ultra-HD cinematic output optimized for all platforms", icon: Target }
              ] : []).map((metric: any, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={mode + idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-8 rounded-3xl border border-white/5 bg-white/[0.03] hover:border-primary-accent/30 transition-all duration-500 text-left relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                      <Icon size={48} className="text-primary-accent" />
                    </div>
                    <div className="text-4xl md:text-6xl font-black text-white mb-2 leading-none">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] mb-4">
                      {metric.label}
                    </div>
                    <p className="text-xs text-zinc-500 font-light uppercase tracking-widest leading-relaxed">
                      {metric.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Action Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-xl justify-center"
          >
            <a
              href="tel:+917012941696"
              className="group h-20 px-8 md:px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-primary-accent hover:text-white transition-all duration-500 shadow-2xl"
            >
              Speak with us
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="https://wa.me/917012941696"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-20 px-8 md:px-12 rounded-2xl bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 hover:bg-white/5 transition-all duration-500"
            >
              WhatsApp Now
              <MessageCircle size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Decorative Schema-ready text (hidden but present for SEO/AI parsing) */}
      <div className="sr-only">
        <section>
          <h2>{isAI ? "AI Video Production Kerala & India" : "Video Production Company Kerala"}</h2>
          <p>{isAI ? "Define Perspective is a premium video production company in Kochi specializing in cinematic AI workflows." : "Define Perspective delivers elite cinematic brand films and corporate video production services in Kerala."}</p>
        </section>
      </div>
    </section>
  );
}
