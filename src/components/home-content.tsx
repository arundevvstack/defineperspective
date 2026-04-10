"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  BarChart3, Zap, Star, ArrowRight, Calendar, MessageCircle, Activity
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import VideoHero from "@/components/video-hero";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Dynamic imports for performance optimization
const IndustriesSection = dynamic(() => import("@/components/industries-section"));
const MetricsSection = dynamic(() => import("@/components/metrics-section"));
const PortfolioSection = dynamic(() => import("@/components/portfolio-section"));
const TestimonialSection = dynamic(() => import("@/components/testimonial-section"));
const FAQSection = dynamic(() => import("@/components/faq-section"));
const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), { ssr: false });
const ServicesSwitcher = dynamic(() => import("@/components/services-switcher"), { ssr: false });
const CinematicHero = dynamic(() => import("@/components/cinematic-hero"));
const ServiceGrid = dynamic(() => import("@/components/service-grid"));
const AICharacter = dynamic(() => import("@/components/ai-character"), { ssr: false });

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState("media-production");

  return (
    <main className={cn(
      "min-h-screen bg-obsidian text-white transition-colors duration-500 overflow-x-hidden relative",
      activeTab === "ai-studio" ? "theme-blue" : "theme-red"
    )}>
      {/* Visual Grain Texture */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <GlassNavbar isAiModeOverride={activeTab === "ai-studio"} />
      
      {/* Section 0: Hero Section */}
      <VideoHero />

      {/* Section 0.1: AI & Media Switcher */}
      <Suspense fallback={<div className="h-96 bg-black" />}>
        <ServicesSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-black" />}>
        <CinematicHero mode={activeTab} />
      </Suspense>

      {/* Strategic Positioning Authority: Moved Higher for UX Flow */}
      <section className="relative py-32 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none hidden lg:block">
          <span className="text-[20rem] font-black leading-none uppercase tracking-tighter">
            Authority
          </span>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent">Market Directive v1.0</span>
              <div className="h-[1px] w-12 bg-primary-accent" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-whiteer leading-[0.85] uppercase mb-12">
              Best AI <br />
              <span className="text-primary-accent">Production</span> <br />
              Studio in India
            </h2>
            <div className="p-10 lg:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative group hover:bg-white/[0.04] transition-all duration-500 max-w-3xl">
              <div className="space-y-10 relative z-10">
                <p className="text-xl md:text-2xl font-light text-white leading-tight uppercase tracking-tight">
                  Based in <span className="text-primary-accent font-bold">Kochi & Trivandrum</span>, we orchestrate the most advanced AI video pipelines in India.
                </p>
                <div className="space-y-6">
                  <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed uppercase tracking-widest">
                    We are the <span className="text-white font-bold">architects of visual velocity</span>. 
                    Everything we build is strictly performance-optimized for the 2026 search landscape.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/10">
                    {[
                      { v: "10X", l: "Velocity" },
                      { v: "ROI", l: "Growth" },
                      { v: "4K+", l: "Mastering" }
                    ].map((m, mi) => (
                      <div key={mi} className="flex flex-col">
                        <span className="text-2xl font-black text-white leading-none">{m.v}</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Services Matrix */}
      <section id="services" className="relative z-10">
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <ServiceGrid mode={activeTab} />
        </Suspense>
      </section>

      {/* Section 2: WHY BRANDS CHOOSE US (New Split-Metric Layout) */}
      <section className="py-40 px-6 md:px-12 bg-black relative border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Left: Metric & Heading */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-primary-accent" />
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent">The Studio Advantage</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-whiteer uppercase leading-[0.85]">
                  Why Brands <br />
                  <span className="text-primary-accent italic">Choose Us_</span>
                </h2>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-primary-accent/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-8 py-10 border-y border-white/10">
                  <span className="text-8xl md:text-[9rem] font-black text-white tracking-tighter transition-transform group-hover:scale-110 duration-500">55+</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary-accent uppercase tracking-[0.3em] mb-2">Specialized</span>
                    <span className="text-xl md:text-2xl font-light text-zinc-400 uppercase tracking-widest leading-none">Industries <br />Served</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-500 font-light leading-relaxed uppercase text-[11px] tracking-[0.2em] max-w-md">
                "We don't just produce videos; we build high-converting visual ecosystems for market leaders across the Indian subcontinent."
              </p>
            </div>

            {/* Right: Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               {(activeTab === "ai-studio" ? [
                 { title: "Rapid AI Systems", text: "Production cycles reduced from weeks to hours with high-speed autonomous AI pipelines.", icon: Zap },
                 { title: "Virtual Art Direction", text: "Hyper-realistic environments and world-building that eliminates the need for travel.", icon: Star },
                 { title: "AI Cost Efficiency", text: "Superior visual quality at a fraction of traditional production budgets.", icon: BarChart3 },
                 { title: "Performance Nodes", text: "Strictly ROI-focused visual assets built for high-retention performance.", icon: Activity }
               ] : [
                 { title: "Elite Cinematographers", text: "World-class camera crews and meticulous lighting for a true broadcast look.", icon: Zap },
                 { title: "Premium Set Mastery", text: "Full on-location production management in Kerala with elite equipment.", icon: Star },
                 { title: "Maximum Brand ROI", text: "Scientific ad structures built to deliver high-retention cinematic authority.", icon: BarChart3 },
                 { title: "Broadcast Systems", text: "End-to-end post-production workflows for national television networks.", icon: Activity }
               ]).map((benefit, bIdx) => (
                 <motion.div 
                   key={bIdx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: bIdx * 0.1 }}
                   className={cn(
                     "p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex flex-col items-start group transition-all shadow-xl hover:bg-primary-accent/[0.03] hover:border-primary-accent/20",
                     bIdx % 2 === 1 && "md:mt-12" // Staggered Effect
                   )}
                 >
                   <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 text-primary-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.2)]">
                      <benefit.icon size={28} />
                   </div>
                   <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4 leading-tight text-left group-hover:text-primary-accent transition-colors">{benefit.title}</h3>
                   <p className="text-zinc-500 font-light leading-relaxed uppercase text-[9px] tracking-[0.2em] text-left">{benefit.text}</p>
                 </motion.div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Strategic Verticals (Industries) */}
      <Suspense fallback={<div className="h-96 bg-black" />}>
        <IndustriesSection />
      </Suspense>

      {/* Section 4: Results & Metrics */}
      <Suspense fallback={<div className="h-80 bg-black" />}>
        <MetricsSection />
      </Suspense>

      {/* Section 6: Our Work (Portfolio) */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <PortfolioSection mode={activeTab} />
      </Suspense>

      {/* Section 7: Conversion Hub (Call to Action) - Refined UI Aligned Center */}
      <section className="py-48 px-6 md:px-12 bg-black relative">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent">Project Inquiry // Start Today</span>
              <div className="h-[1px] w-12 bg-primary-accent" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-whiteer uppercase leading-[0.85]">
              Ready for <br /><span className="text-primary-accent italic">Impact?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
             <motion.div 
               className="p-10 md:p-14 rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl flex flex-col gap-10 transition-all group shadow-2xl hover:bg-primary-accent/[0.04] hover:border-primary-accent/30"
             >
                <div className="h-16 w-16 rounded-3xl bg-transparent border-2 border-primary-accent text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.3)]">
                   <Calendar size={32} />
                 </div>
                <div>
                   <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">Business <br />Consultation</h3>
                   <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-[0.2em]">
                     Plan your high-impact visual strategy with our lead creative directors.
                   </p>
                </div>
                <div className="flex flex-col gap-5 mt-auto">
                  <Link
                    href="/contact?subject=Priority Strategy Session Request"
                    className="group relative h-20 w-full rounded-2xl bg-primary-accent text-black font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <span className="relative z-10 transition-colors duration-300">Free Consultation</span> 
                    <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                  <Link 
                    href="https://wa.me/917012941696?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20a%20Consultation."
                    target="_blank"
                    className="group h-20 w-full rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                  >
                    WhatsApp Now <MessageCircle size={22} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
             </motion.div>

             <motion.div 
               className="p-10 md:p-14 rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl flex flex-col gap-10 transition-all group shadow-2xl hover:bg-primary-accent/[0.04] hover:border-primary-accent/30"
             >
                <div className="h-16 w-16 rounded-3xl bg-transparent border-2 border-primary-accent text-primary-accent flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.3)]">
                   <Zap size={32} />
                </div>
                <div>
                   <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">AI Product <br />Production</h3>
                   <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-[0.2em]">
                     Scale your brand identity with photorealistic AI videos and assets.
                   </p>
                </div>
                <div className="flex flex-col gap-5 mt-auto">
                  <Link 
                    href="/contact?subject=AI Content Production Inquiry"
                    className="h-20 w-full rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-primary-accent hover:text-white transition-all flex items-center justify-center gap-4"
                  >
                    Request AI Demo <ArrowRight size={22} />
                  </Link>
                  <Link 
                    href="https://wa.me/917012941696?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20AI%20Content%20Production."
                    target="_blank"
                    className="group relative h-20 w-full rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl hover:scale-[1.02] active:scale-95 transition-all hover:bg-primary-accent/10"
                  >
                    <span className="relative z-10">WhatsApp Now</span> 
                    <MessageCircle size={22} className="relative z-10 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <TestimonialSection />

      {/* Intelligent FAQ */}
      <FAQSection />

      {/* Floating AI Agent */}
      <WhatsAppChat />

      {/* Persistent AI Mascot */}
      <AICharacter />
    </main>
  );
}
