"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const VideoLightbox = dynamic(() => import("@/components/ai-video-hub/VideoLightbox"), { ssr: false });

export default function ShowreelBlock() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section
        className="relative w-full h-screen min-h-[600px] overflow-hidden border-b border-white/5 cursor-pointer group"
        onClick={() => setActiveVideo("sNp1a5I6WsI")}
        aria-label="Watch DP AI Studio Official Showreel — Cinematic AI Production India"
      >
        {/* Full-bleed thumbnail */}
        <Image
          src="https://img.youtube.com/vi/sNp1a5I6WsI/maxresdefault.jpg"
          alt="Define Perspective Showreel — AI Video Production Company Kerala India"
          fill
          priority
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.04] transition-all duration-[2500ms]"
          sizes="100vw"
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(235,30,44,0.06)_0%,transparent_70%)]" />

        {/* ── CENTRE CONTENT ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-10">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary-accent/50" />
            <span className="label-mono !text-primary-accent">DP AI Studio — Official Showreel 2025</span>
            <div className="h-px w-8 bg-primary-accent/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.85] max-w-5xl"
          >
            Watch What <br />
            <span className="text-[#eb1e2c]">We Create_</span>
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Main Showcase Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 px-12 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] md:text-sm hover:bg-zinc-200 transition-all duration-500 shadow-2xl"
              onClick={() => setActiveVideo("sNp1a5I6WsI")}
              aria-label="Play Showreel"
            >
              <span className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Play size={18} fill="currentColor" className="ml-0.5" aria-hidden="true" />
              </span>
              View Cinematic Showcase
            </motion.button>

            {/* Secondary Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo("sNp1a5I6WsI");
                }}
                className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
                aria-label="View Our Works"
              >
                View Our Works <ArrowRight size={14} aria-hidden="true" />
              </button>
              <Link
                href="/contact"
                className="h-14 px-8 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-zinc-800 transition-all shadow-xl"
                aria-label="Start a Project"
              >
                Start a Project <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 z-10">
          <div className="flex flex-wrap gap-2">
            {["TVCs", "Brand Films", "AI Ads", "Corporate Videos"].map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[8px] font-mono text-zinc-400 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <VideoLightbox
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoId={activeVideo || ""}
      />
    </>
  );
}
