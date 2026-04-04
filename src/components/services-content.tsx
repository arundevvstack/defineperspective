"use client";

import { motion } from "framer-motion";
import { 
  Workflow, Sparkles, Wand2, ArrowRight,
  Cpu, PlayCircle, Image, Star
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { cn } from "@/lib/utils";
import Link from "next/link";

const serviceSections = [
  {
    title: "Video Production",
    subtitle: "Elite Ad Films & Corporate Brand Storytelling in Kerala",
    icon: PlayCircle,
    theme: "theme-red",
    items: [
      {
        id: "corp-video",
        title: "Corporate Video Production Company in Kerala",
        desc: "Professional brand stories and heritage films for global enterprises in Thrivandrum & Kochi.",
        icon: Workflow,
        href: "/services/video-production/corporate-video-production-company-in-kerala"
      },
      {
        id: "brand-film",
        title: "Brand Film Production",
        desc: "Premium cinematic films that define your company's visionary identity and legacy.",
        icon: Star,
        href: "/services/video-production/brand-film-production"
      },
      {
        id: "ad-film",
        title: "Ad Film / Commercial Video Production",
        desc: "High-impact television commercials (TVC) and premium digital video ads for national reach.",
        icon: PlayCircle,
        href: "/services/video-production/ad-film-commercial-video-production"
      },
      {
        id: "promo-video",
        title: "Promotional Video Production",
        desc: "High-energy videos designed to launch products and ignite rapid growth in Indian markets.",
        icon: Sparkles,
        href: "/services/video-production/promotional-video-production"
      }
    ]
  },
  {
    title: "AI Media Production",
    subtitle: "2026-Era Generative Video & Post-Production Labs India",
    icon: Cpu,
    theme: "theme-blue",
    items: [
      {
        id: "ai-video-services",
        title: "AI Video Production Services",
        desc: "Full-scale generative video production utilizing proprietary neural workflows and AI pipelines.",
        icon: Sparkles,
        href: "/services/ai-media-production/ai-video-production-services"
      },
      {
        id: "ai-ad-gen",
        title: "AI Ad Creative Generation",
        desc: "High-velocity ad creative testing with thousands of AI-generated visual variants in hours.",
        icon: Cpu,
        href: "/services/ai-media-production/ai-ad-creative-generation"
      },
      {
        id: "ai-no-shoot",
        title: "AI Product Videos (No Shoot Required)",
        desc: "Render hyper-realistic product commercials entirely from static images or CAD models.",
        icon: Image,
        href: "/services/ai-media-production/ai-product-videos-no-shoot-required"
      },
      {
        id: "ai-avatars",
        title: "AI Avatar Videos & AI Presenters",
        desc: "Photorealistic AI characters for multilingual training, explainers, and brand ambassadors.",
        icon: Star,
        href: "/services/ai-media-production/ai-avatar-videos-ai-presenters"
      }
    ]
  }
];

export default function ServicesContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white pb-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] bg-transparent border-2 border-primary-accent/10 blur-[150px] rounded-full animate-pulse hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-transparent border-2 border-primary-accent/10 blur-[180px] rounded-full animate-pulse hover:bg-transparent hover:text-primary-accent   transition-all duration-300" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10 pt-40">
        <header className="mb-40 text-center max-w-4xl mx-auto">
          <motion.h1 
            
className="text-6xl font-black md:text-[10rem] tracking-tighter uppercase mb-20 leading-[0.8]"
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
                  <h2 className="text-5xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white mb-8 group-hover:text-primary-accent transition-colors leading-[0.9]">
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

                     <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-8 leading-none min-h-[4rem] group-hover:text-primary-accent transition-colors">
                       {service.title}
                     </h3>
                     <p className="text-zinc-500 font-light leading-relaxed mb-16 uppercase tracking-tight text-[11px] max-w-sm">
                       {service.desc}
                     </p>

                     <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-12 group-hover:border-primary-accent /20 transition-colors">
                        <Link 
                          href={service.href}
                          className="text-[12px] font-mono tracking-widest text-zinc-400 group-hover:text-primary-accent uppercase transition-colors flex items-center gap-4"
                        >
                           Explore Interface <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link 
                          href={`/contact?subject=Service Intake: ${service.title}`}
                          className="h-14 px-8 rounded-2xl bg-transparent border border-white/20 text-[10px] font-black uppercase tracking-widest text-white  hover:text-primary-accent transition-all shadow-xl hover:bg-white hover:text-primary-accent transition-all duration-300"
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
