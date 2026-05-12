"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const VideoLightbox = dynamic(() => import("@/components/ai-video-hub/VideoLightbox"), { ssr: false });

const SHOWREEL_ID = "qJwObz6fe-M";

export default function VideoHero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" aria-label="Cinematic Hero">
      {/* SEO H1 — screen reader only */}
      <h1 className="sr-only">Define Perspective | AI Video Production Company in Kerala</h1>

      {/* ── STATIC CINEMATIC BACKGROUND ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(235,30,44,0.10)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* 🔮 NEURAL AMBIENT GLOWS */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-primary-accent/5 blur-[250px] rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/5 blur-[200px] rounded-full opacity-20" />
      </div>

      {/* 🚀 HERO CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pt-20">
        <div className="container-max text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
               <div className="h-px w-6 md:w-10 bg-primary-accent/40" />
               <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.6em] text-primary-accent">Video Production Studio · Kerala &amp; India</span>
               <div className="h-px w-6 md:w-10 bg-primary-accent/40" />
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-[6.5rem] font-black text-white uppercase leading-[0.85] tracking-tighter max-w-6xl mx-auto">
               The Future of <br />
               <span className="text-primary-accent">Cinematic AI_</span>
            </h1>

            <p className="max-w-3xl mx-auto text-[11px] md:text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest opacity-80">
              TVCs · Brand Films · AI Commercials · Corporate Videos
              <br className="hidden md:block" />
              Premium video production for iconic brands across Kerala, India &amp; beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {/* Watch Showcase — opens VideoLightbox */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="group h-16 md:h-20 px-10 md:px-14 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:bg-primary-accent hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
            >
              Watch AI Video Showcase <Play size={18} fill="currentColor" />
            </button>
            <Link
              href="/contact"
              className="group h-16 md:h-20 px-10 md:px-14 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:border-primary-accent/50 hover:bg-white/10 transition-all duration-500 backdrop-blur-3xl shadow-2xl active:scale-95"
            >
              Start Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex flex-col items-center gap-10 z-30">
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="flex flex-col items-center gap-3 opacity-30"
           aria-hidden="true"
        >
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-white">Neural Engine Active_</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>

      {/* Lightbox — self-contained inside hero */}
      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        videoId={SHOWREEL_ID}
      />
    </section>
  );
}
