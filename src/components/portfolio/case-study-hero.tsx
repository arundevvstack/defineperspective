"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function CaseStudyHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-accent-rgb),0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-max relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
            <span className="label-mono !text-[10px] tracking-[0.2em] uppercase text-zinc-300">
              Cinematic AI Advertising | India
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Luxury AI <br />
            <span className="text-primary-accent italic">Jewellery TVC_</span>
          </h1>
          
          <p className="text-sm md:text-base text-zinc-400 font-mono uppercase tracking-[0.1em] max-w-2xl mx-auto leading-relaxed mt-6">
            A masterclass in generative filmmaking. Explore how DP AI Studios engineered a photorealistic jewellery commercial using advanced neural rendering.
          </p>
        </motion.div>

        {/* Video Embed Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-6xl mt-20 relative group"
        >
          {/* Glow effect behind video */}
          <div className="absolute -inset-4 bg-primary-accent/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 rounded-[3rem]" />
          
          <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ViVvFiF-kBQ?autoplay=0&rel=0&modestbranding=1"
              title="AI Jewellery Commercial - Cinematic AI Advertising"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between mt-8 px-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <span>Watch Full AI Commercial</span>
            <span className="flex items-center gap-2">Behind The Production <ArrowRight size={14} /></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
