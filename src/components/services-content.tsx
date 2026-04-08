"use client";

import { motion } from "framer-motion";
import { 
  Workflow, Sparkles, Wand2, ArrowRight,
  Cpu, PlayCircle, Image, Star,
  Zap, Smartphone, BarChart3, Video, ShoppingCart, Camera, Film, MessageSquare, Building2, Scissors, LayoutList, MonitorPlay, Activity
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { cn } from "@/lib/utils";
import Link from "next/link";

const serviceSections = [
  {
    title: "AI Video Strategy & Performance",
    subtitle: "2026-Era Performance Marketing & Visual Velocity",
    icon: Cpu,
    theme: "theme-blue",
    items: [
      {
        id: "ai-video-ads",
        title: "AI Video Ads (Performance)",
        desc: "High-ROAS Meta & YouTube ad creatives with neural variation testing.",
        icon: Zap,
        href: "/services/ai-video-ads"
      },
      {
        id: "ai-social-videos",
        title: "AI Social Media Video Production",
        desc: "Neural Reels, Shorts, and TikTok sequences for daily social dominance.",
        icon: Smartphone,
        href: "/services/ai-social-media-videos"
      },
      {
        id: "ai-video-marketing",
        title: "AI Video Marketing & Strategy",
        desc: "Data-driven visual funnel design and campaign distribution planning.",
        icon: BarChart3,
        href: "/services/ai-video-marketing"
      }
    ]
  },
  {
    title: "AI Production & Narrative Studio",
    subtitle: "Cinematic Excellence Powered by Neural Synthesis",
    icon: Sparkles,
    theme: "theme-red",
    items: [
      {
        id: "ai-video-prod",
        title: "AI Video Production Services",
        desc: "Bespoke AI brand films and commercial video production at high-fidelity.",
        icon: Video,
        href: "/services/ai-video-production"
      },
      {
        id: "ai-product-videos",
        title: "AI Product Video Production",
        desc: "Zero-shoot neural product movies for Amazon, Shopify, and E-comm.",
        icon: ShoppingCart,
        href: "/services/ai-product-videos"
      },
      {
        id: "ai-cinematic",
        title: "Cinematic AI Video Production",
        desc: "High-end luxury storytelling and premium neural brand films.",
        icon: Camera,
        href: "/services/ai-cinematic-production"
      },
      {
        id: "ai-film-prod",
        title: "AI Film & Narrative Production",
        desc: "Neural short films, music videos, and cinematic narrative content.",
        icon: Film,
        href: "/services/ai-film-production"
      },
      {
        id: "ai-explainer",
        title: "AI Explainer Video Production",
        desc: "SaaS walkthroughs and educational content with AI avatar presenters.",
        icon: MessageSquare,
        href: "/services/ai-explainer-videos"
      },
      {
        id: "ai-corporate",
        title: "AI Corporate Video Production",
        desc: "Company profiles and employer branding through AI-powered systems.",
        icon: Building2,
        href: "/services/ai-corporate-videos"
      },
      {
        id: "ai-editing",
        title: "AI Video Editing & Post Production",
        desc: "Neural VFX, automated color grading, and video enhancement.",
        icon: Scissors,
        href: "/services/ai-video-editing"
      }
    ]
  },
  {
    title: "Industry Specific Solutions",
    subtitle: "Domain Mastery for High-Impact Sectors",
    icon: LayoutList,
    theme: "theme-red",
    items: [
      {
        id: "ecommerce-solutions",
        title: "E-commerce Video Production",
        desc: "High-conversion product videos and lifestyle visuals for global marketplaces.",
        icon: ShoppingCart,
        href: "/services/ecommerce-video-production"
      },
      {
        id: "real-estate-solutions",
        title: "Real Estate Video Production",
        desc: "Cinematic property films and architectural walkthroughs for elite developers.",
        icon: Building2,
        href: "/services/real-estate-video"
      },
      {
        id: "saas-solutions",
        title: "SaaS & Tech Video Production",
        desc: "Software explainers, product demos, and feature launch narratives for tech giants.",
        icon: MonitorPlay,
        href: "/services/saas-explainer-video"
      },
      {
        id: "healthcare-solutions",
        title: "Healthcare Video Production",
        desc: "Hospital branding and trust-centric medical narratives for elite healthcare.",
        icon: Activity,
        href: "/services/healthcare-video"
      }
    ]
  }
];

export default function ServicesContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white pb-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] bg-primary-accent/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-primary-accent/10 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10 pt-40">
        <header className="mb-40 text-center max-w-4xl mx-auto">
          <motion.h1 
            
className="text-5xl font-black md:text-[8rem] tracking-tighter uppercase mb-20 leading-[0.8]"
          >
            Capabilities <br />
            <span className="text-primary-accent italic font-black underline decoration-white/5">Matrix_</span>
          </motion.h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            "Eliminating mediocrity. High-end human filmmaking fused with 2026 AI-augmented production for brands in India."
          </p>
        </header>

        <div className="space-y-48">
          {serviceSections.map((section, sIdx) => (
            <div key={section.title} className={cn("relative", section.theme)}>
              <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-20 group">
                <div className="max-w-3xl">
                  <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8 block">Division 0{sIdx + 1} // Capability Node</span>
                  <h2 className="text-4xl md:text-[6rem] font-black uppercase tracking-tighter text-white mb-8 group-hover:text-primary-accent transition-colors leading-[0.9]">
                    {section.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-light tracking-widest text-zinc-500 uppercase leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>
                <div className="h-24 w-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-600 mt-12 md:mt-0 hover:rotate-12 transition-transform shadow-xl hover:text-primary-accent transition-all duration-300">
                   <section.icon size={42} className="text-primary-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {section.items.map((service, idx) => (
                  <motion.div 
                    key={service.id}
                    
whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="group relative h-full flex flex-col p-12 rounded-[3.5rem] border border-white/5 bg-white/5 backdrop-blur-3xl hover:bg-white/30 transition-all duration-700 shadow-xl hover:text-primary-accent transition-all duration-300"
                  >
                     <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />
                     
                     <div className="mb-12 h-20 w-20 rounded-[1.5rem] bg-transparent border-2 border-primary-accent/10 transition-all group-hover:scale-110 shadow-xl flex items-center justify-center hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                        <service.icon size={36} className="text-primary-accent" />
                     </div>

                     <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-8 leading-none min-h-[4rem] group-hover:text-primary-accent transition-colors">
                       {service.title}
                     </h3>
                     <p className="text-zinc-500 font-light leading-relaxed mb-16 uppercase tracking-tight text-[11px] max-w-sm">
                       {service.desc}
                     </p>

                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-12 group-hover:border-primary-accent/20 transition-colors">
                        <Link 
                          href={service.href}
                          className="text-[12px] font-mono tracking-widest text-zinc-400 group-hover:text-primary-accent uppercase transition-colors flex items-center gap-4 py-2"
                        >
                           Explore Interface <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link 
                          href={`/contact?subject=Service Intake: ${service.title}`}
                          className="h-14 px-8 rounded-2xl border border-white/20 text-[10px] font-black uppercase tracking-widest text-white hover:bg-primary-accent/10 hover:border-primary-accent/30 hover:text-primary-accent transition-all shadow-xl flex items-center justify-center hover:scale-105 active:scale-95"
                        >
                           Get a Quote
                        </Link>
                      </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <WhatsAppChat />
    </main>
  );
}
