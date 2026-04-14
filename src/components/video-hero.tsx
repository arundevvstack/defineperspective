"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const LazyYouTubeBackground = ({ videoId, onLoaded }: { videoId: string, onLoaded: () => void }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Load after component mounts and initial animation completes
    const timer = setTimeout(() => {
      setLoad(true);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  if (!load) return null;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1&vq=hd1080`}
      className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none yt-bg-iframe"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title="Define Perspective Showreel Background Video"
      onLoad={onLoaded}
    />
  );
};

export default function VideoHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" aria-label="Cinematic Video Hero">
      {/* Visual Primary SEO Heading - Accessible to search engines */}
      <h1 className="sr-only">Define Perspective | AI Video Production Company in Kerala</h1>
      
      {/* YouTube Background Video Overlay - Defer for Performance */}
      <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden pointer-events-none">
        {/* Poster / Fallback Video: Fades out when YouTube is ready */}
        <motion.div
           initial={{ opacity: 0.6 }}
           animate={{ opacity: videoLoaded ? 0 : 0.6 }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0 z-[2]"
        >
          <video
             className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
             autoPlay
             muted
             loop
             playsInline
             poster="https://img.youtube.com/vi/sNp1a5I6WsI/maxresdefault.jpg"
          />
        </motion.div>

        {/* The Actual Video Layer */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}>
          <LazyYouTubeBackground videoId="sNp1a5I6WsI" onLoaded={() => setVideoLoaded(true)} />
        </div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent opacity-80 z-[3]" />
      </div>

      <style jsx global>{`
        .yt-bg-iframe {
          opacity: 1;
        }
      `}</style>

      {/* Floating Action & Scroll Area */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex flex-col items-center gap-10 z-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="flex flex-wrap gap-4 justify-center"
        >
          <Link 
            href="https://youtu.be/sNp1a5I6WsI"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:border-primary-accent hover:text-primary-accent transition-all duration-500 backdrop-blur-md"
            aria-label="Watch our showreel on YouTube"
          >
            Watch Showreel <Play size={16} className="fill-current" aria-hidden="true" />
          </Link>
          <a 
            href="tel:+917012941696"
            className="group h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:border-primary-accent hover:text-primary-accent transition-all duration-500 backdrop-blur-md"
            aria-label="Call us for inquiries"
          >
            Speak with us <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </a>
          <a 
            href="https://wa.me/917012941696"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:border-[#25D366]/50 hover:text-primary-accent transition-all duration-500 backdrop-blur-md"
            aria-label="Chat with us on WhatsApp"
          >
            WhatsApp Now <MessageCircle size={16} className="text-[#25D366] group-hover:scale-110 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="flex flex-col items-center gap-3 opacity-30"
           aria-hidden="true"
        >
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-white">Explore Down_</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
