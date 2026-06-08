"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, Video, Star, Globe } from "lucide-react";
import LiteYouTube from "@/components/lite-youtube";
import ScrollFade from "@/components/ui/scroll-fade";

const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
        hidden: {}
      }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const searchQueries = [
  "Looking for the best AI content creation course in India?",
  "Looking for filmmaking training in Kerala?",
  "Looking for video production courses in Kochi?",
  "Looking for AI filmmaking training in Dubai?",
  "Looking for fashion film production training?"
];

const floatingCategories = [
  "Commercial Production", "AI Filmmaking", "Fashion Campaigns", 
  "Documentary Production", "Video Editing", "Creative Direction", "Brand Storytelling"
];

export default function EpicHeroSection() {
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueryIndex((prev) => (prev + 1) % searchQueries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-black overflow-hidden pt-24 pb-16">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep, premium cinematic black background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Elegant, subtle cinematic top spotlight */}
        <div className="absolute top-[-30%] left-[50%] translate-x-[-50%] w-[100%] h-[80%] bg-zinc-700/10 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Very subtle studio noise/texture overlay for a filmic feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Smooth vignette to draw focus to the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Scene 1: Opening */}
        <div className="text-center max-w-5xl mx-auto mb-24 relative">
          
          {/* AEO Rotating Text */}
          <div className="h-8 mb-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={queryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-sm md:text-base text-zinc-400 font-mono tracking-wide"
              >
                {searchQueries[queryIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.2]">
              <TypewriterText text="Learn AI Content Creation," delay={0.2} /> <br className="hidden md:block" />
              <TypewriterText text="Filmmaking & Video Production" delay={1.2} /> <br className="hidden lg:block" />
              <TypewriterText 
                text="From Real Industry Projects" 
                delay={2.3} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 block mt-2" 
              />
            </h1>
          </div>

          <ScrollFade delay={0.2} yOffset={20}>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              Master AI-powered content creation, commercial filmmaking, fashion production, documentary storytelling, editing, creative direction, and business workflows through India's most future-focused professional training program.
            </p>
          </ScrollFade>

          {/* Trust Statement */}
          <ScrollFade delay={0.3} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 text-sm md:text-base font-medium text-zinc-300">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> Real Client Projects</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> AI Film Production Training</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> Fashion Film & Magazine Production</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> Portfolio Development</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> Industry Certification</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-500" /> India & UAE Students</div>
          </ScrollFade>

          {/* Dual High-Converting CTAs */}
          <ScrollFade delay={0.4} className="flex flex-col items-center justify-center gap-6 print:hidden">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link 
                href="https://wa.me/917012941696?text=Hello%20Define%20Perspective,%20I%20am%20interested%20in%20the%20AI%20Integrated%20Content%20Creation%20%26%20Video%20Production%20Professional%20Program.%20Please%20share%20course%20details,%20fees,%20upcoming%20batch%20dates,%20and%20admission%20process." 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-500 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(37,99,235,0.4)] relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                🚀 Apply for Admission
              </Link>
              
              <button 
                onClick={() => window.open('/ebrochure?print=true', '_blank')}
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                📘 Download eBrochure (PDF)
              </button>
              
              <Link 
                href="https://wa.me/917012941696?text=Hello%20Define%20Perspective,%20I%20would%20like%20to%20receive%20the%20AI%20Integrated%20Content%20Creation%20%26%20Video%20Production%20Program%20eBrochure." 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-900/80 border border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                💬 Get eBrochure on WhatsApp
              </Link>
            </div>
            
            <p className="text-xs md:text-sm text-blue-300 font-medium tracking-wide">
              Limited Seats Per Batch • Portfolio-Based Learning • Industry Mentorship
            </p>
          </ScrollFade>
        </div>

        {/* Scene 2: Scroll Transition / Floating Categories */}
        <ScrollFade delay={0.5} className="mb-32 overflow-hidden py-4 -mx-6 px-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {floatingCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-zinc-300 font-medium text-sm md:text-base shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:scale-105 transition-all cursor-default"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </ScrollFade>

        {/* Scene 3: Authority Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32 max-w-6xl mx-auto">
          {[
            { stat: "50 Days", label: "Professional Training Program" },
            { stat: "5 Core Modules", label: "Industry Curriculum" },
            { stat: "10+ Projects", label: "Portfolio Development" },
            { stat: "AI + Live Action", label: "Future-Ready Workflow" }
          ].map((item, i) => (
            <ScrollFade key={i} delay={i * 0.1} className="relative group p-1 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="bg-black/60 backdrop-blur-md p-8 h-full rounded-xl border border-white/5 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                  {item.stat}
                </div>
                <div className="text-sm text-zinc-400 font-medium uppercase tracking-widest">{item.label}</div>
              </div>
            </ScrollFade>
          ))}
        </div>

        {/* Video Wall Section (Showcase) */}
        <div id="showcase" className="max-w-7xl mx-auto pb-16">
          <ScrollFade className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Actual Student Learning Experience</h2>
            <p className="text-xl text-zinc-400">Our YouTube Portfolio & Real Productions</p>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <ScrollFade delay={0.1} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="sNp1a5I6WsI" title="Commercial Production 1" /></ScrollFade>
              <ScrollFade delay={0.2} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="vGijXeVUS74" title="AI Film Production 1" /></ScrollFade>
              <ScrollFade delay={0.3} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="HtomLPOzkCU" title="Fashion Production 1" /></ScrollFade>
            </div>
            <div className="space-y-6 md:-mt-12">
              <ScrollFade delay={0.2} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="INpn97C16yM" title="Commercial Production 2" /></ScrollFade>
              <ScrollFade delay={0.3} className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="5kOnWP-dZZY" title="AI Advertising 1" aspectRatio="vertical" /></ScrollFade>
              <ScrollFade delay={0.4} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="-CYvl4ytIFY" title="Fashion Production 2" /></ScrollFade>
            </div>
            <div className="space-y-6 md:mt-12">
              <ScrollFade delay={0.3} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="NEqjeiDThcY" title="Commercial Production 3" /></ScrollFade>
              <ScrollFade delay={0.4} className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="ViVvFiF-kBQ" title="AI Advertising 2" /></ScrollFade>
              <ScrollFade delay={0.5} className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"><LiteYouTube videoId="ic0skwrzA5M" title="Fashion Production 3" aspectRatio="vertical" /></ScrollFade>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
