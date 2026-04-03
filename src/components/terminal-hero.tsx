"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TerminalHero() {
  const [displayText, setDisplayText] = useState("");
  const targetText = "AI-Powered Video Production Company in Kerala for Brands That Want to Scale.";
  const speed = 40;

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Fluid Motion (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-primary-accent/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-accent/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl rounded-3xl border border-[var(--border-subtle)] bg-[var(--glass-white)] backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          {/* Terminal Toolbar */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-6 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-primary-accent/60" />
              <div className="h-3 w-3 rounded-full bg-primary-accent/60" />
              <div className="h-3 w-3 rounded-full bg-primary-accent/60" />
            </div>
            <div className="flex-1 text-center text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase opacity-60">
              defineperspective.in — AI Media & CGI Studio — Trivandrum · Kochi · India
            </div>
          </div>

          <div className="p-6 md:p-16">
            <div className="flex items-start gap-4 md:gap-6 font-mono text-xl leading-tight md:text-4xl lg:text-5xl">
              <span className="mt-1 md:mt-2 text-primary-accent shrink-0">
                <Terminal size={24} className="md:w-8 md:h-8" />
              </span>
              <div className="flex-1">
                <span className="text-white drop-shadow-[0_0_15px_var(--glow)]">
                  {displayText}
                </span>
                <span className="terminal-cursor inline-block h-[24px] w-[8px] md:h-[48px] md:w-[16px] translate-y-1 md:translate-y-2" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="mt-12 flex flex-col gap-10"
            >
              <div className="text-xl text-zinc-400 md:text-2xl lg:max-w-4xl font-light leading-relaxed">
                <p className="mb-4 font-mono text-primary-accent opacity-60 text-sm tracking-widest">{"> "}Initializing High-Converting Video Growth Engine_</p>
                <div className="space-y-8">
                  <p className="text-2xl md:text-4xl text-white font-medium leading-tight">
                    We combine <span className="text-primary-accent">AI Media Production</span> with <span className="text-primary-accent">Performance Marketing</span> to scale high-impact brands in India.
                  </p>
                  
                  <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {[
                      { title: "AI Content Creation", text: "Generative AI workflows for high-speed video production across Kerala and India." },
                      { title: "CGI & Virtual Prod", text: "Premium CGI product videos and virtual sets tailored for Trivandrum & Kochi." },
                      { title: "Performance Ads", text: "Conversion-focused video ads optimized for maximum visibility on AI search agents." }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative">
                        <div className="h-0.5 w-8 bg-primary-accent mb-4 transition-all group-hover:w-full" />
                        <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-3">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                <button 
                  onClick={() => {
                    window.location.href = '/contact?subject=AI Video Ad Strategy Session';
                  }}
                  className="h-14 rounded-full bg-primary-accent px-10 text-sm font-black tracking-widest text-zinc-200 transition hover:scale-110 hover:text-white focus:ring-2 focus:ring-zinc-400 focus:outline-none shadow-[0_0_20px_var(--glow)] uppercase"
                >
                  Get High-Converting Video Ads
                </button>
                <button 
                  onClick={() => window.location.href = '/portfolio'}
                  className="h-14 rounded-full border border-white/10 bg-white/5 px-10 text-sm font-bold tracking-widest text-white backdrop-blur-sm transition hover:bg-white/10 uppercase"
                >
                  Get AI Video Demo
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
