"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* YouTube Background Video Overlay */}
      <div className="absolute inset-0 z-0 h-[100%] w-[100%] overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/sNp1a5I6WsI?autoplay=1&mute=1&loop=1&playlist=sNp1a5I6WsI&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1&vq=hd1080"
          className="absolute top-1/2 left-1/2 h-[120%] w-[120%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-125 object-cover opacity-60"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Container (Empty for clean cinematic view - disabled pointer events to prevent blocking buttons) */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center items-center px-6 md:px-12 pointer-events-none" />

      {/* Floating Action & Scroll Area */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex flex-col items-center gap-10 z-20">
        {/* Action Buttons (Top of stack) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link 
            href="https://youtu.be/sNp1a5I6WsI"
            target="_blank"
            className="group h-14 px-8 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-white hover:text-primary-accent transition-all duration-500 shadow-2xl shadow-primary-accent/20"
          >
            Watch Showreel <Play size={16} className="fill-current" />
          </Link>
          <Link 
            href="/contact"
            className="group h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:border-primary-accent hover:text-primary-accent transition-all duration-500 backdrop-blur-md"
          >
            Start Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll Indicator (Bottom of stack) */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 opacity-30"
        >
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-white">Explore Down_</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
