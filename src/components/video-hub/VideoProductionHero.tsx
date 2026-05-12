"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import VideoLightbox from "../ai-video-hub/VideoLightbox";

export default function VideoProductionHero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-obsidian">
      {/* Background Cinematic Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary-accent/10 blur-[150px] rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center gap-4 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl mb-12 hover:border-primary-accent/40 hover:bg-white/10 transition-all cursor-default shadow-2xl shadow-primary-accent/5"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
            </div>
            <span className="label-mono !text-zinc-400 group-hover:!text-white transition-colors">
              India's Best <span className="text-primary-accent">TVC & Video Production Company_</span>
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6 mb-16 max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-hero"
            >
              Cinematic <br />
              <span className="text-primary-accent">Video Production_</span> <br />
              Services in India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="body-copy !text-lg md:!text-xl max-w-5xl mx-auto"
            >
              We create <span className="text-white font-bold">TV commercials, brand films, and social media videos</span> for brands across India. Great quality. On time. Every time.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl justify-center mb-24"
          >
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="btn-primary group"
            >
              Watch Our Showreel
              <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Play size={20} fill="currentColor" />
              </div>
            </button>
            <Link
              href="https://www.youtube.com/@DefinePerspective"
              target="_blank"
              className="btn-accent group"
            >
              See All Our Videos
              <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Play size={20} fill="currentColor" />
              </div>
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-7xl pt-12 border-t border-white/5"
          >
            {[
              "TV Commercials",
              "Cinema Ad Films",
              "Social Media Videos",
              "Corporate Videos",
              "Luxury Brand Films",
              "4K & 8K Production"
            ].map((text) => (
              <div key={text} className="flex items-center justify-center gap-3">
                 <CheckCircle2 size={12} className="text-primary-accent" />
                  <span className="label-mono !text-zinc-400 whitespace-nowrap">
                   {text}
                 </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
         <Image 
           src="/images/kochi-neural-skyline.png" 
           alt="Premium Cinematic Background — Define Perspective AI Studio Kochi India" 
           fill 
           className="object-cover grayscale brightness-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>

      <VideoLightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
        videoId="sNp1a5I6WsI" 
      />
    </section>
  );
}
