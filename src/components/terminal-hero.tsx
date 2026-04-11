"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Sparkles, ArrowRight, Activity, Shield, Zap, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TerminalHero() {
  const [displayText, setDisplayText] = useState("");
  const targetText = "AI-Powered Production Studio_ Scale your brand in Kerala & beyond with proprietary AI cinematic workflows";
  const speed = 30;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(targetText.slice(0, i + 1));
      i++;
      if (i >= targetText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32 bg-black">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-primary-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-zinc-950/50 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden relative group"
        >
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <motion.div 
               animate={{ y: ["0%", "100%", "0%"] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-accent/30 to-transparent opacity-50"
            />
          </div>

          {/* Terminal Toolbar */}
          <div className="flex items-center gap-4 border-b border-white/5 bg-white/2 px-8 py-5">
            <div className="flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="flex-1 text-center font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em] opacity-40">
              System.Process.Initialize("Video_Scale_Engine")
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-primary-accent/60">
               <Activity size={12} className="animate-pulse" /> Live_
            </div>
          </div>

          <div className="p-8 md:p-20">
            {/* Main Terminal Output */}
            <div className="flex items-start gap-4 md:gap-8 font-mono">
              <div className="mt-2 text-primary-accent opacity-50 shrink-0">
                <span className="text-xl md:text-2xl">{">"}</span>
              </div>
              <div className="flex-1 min-h-[160px] md:min-h-[200px]">
                <h3 className="text-3xl md:text-6xl lg:text-[4.5rem] font-black text-white uppercase tracking-tighter leading-[1.1]">
                   {displayText}
                   <span className="inline-block h-[1em] w-[4px] md:w-[8px] bg-primary-accent ml-2 animate-pulse align-middle" />
                </h3>
              </div>
            </div>

            {/* Analysis Data */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               viewport={{ once: true }}
               className="mt-12 space-y-16"
            >
              <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                <div className="space-y-6 max-w-2xl">
                   <p className="font-mono text-primary-accent/80 text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                      <Zap size={14} /> Optimization Protocol Active
                   </p>
                   <p className="text-xl md:text-3xl text-zinc-300 font-light leading-tight">
                      Deploying <span className="text-white font-bold">Neural Cinematic Systems</span> to accelerate brand growth by reducing production cycles.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                   <div className="p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-md">
                      <div className="text-primary-accent font-black text-2xl mb-1">10X</div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Velocity</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-md">
                      <div className="text-primary-accent font-black text-2xl mb-1">4K+</div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Mastering</div>
                   </div>
                </div>
              </div>

              {/* Action Zone */}
              <div className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-12">
                <a 
                  href="tel:+917012941696"
                  className="h-16 px-12 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white hover:text-primary-accent transition-all duration-500 group shadow-2xl shadow-primary-accent/20"
                >
                  Speak with us <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <a 
                  href="https://wa.me/917012941696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 px-12 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all duration-500 group shadow-2xl"
                >
                  WhatsApp Now <MessageCircle size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                </a>

                <button 
                  onClick={() => window.location.href = '/portfolio'}
                  className="h-16 px-12 rounded-2xl bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-white/5 transition-all duration-500"
                >
                  View Infrastructure <Terminal size={18} className="opacity-50" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

