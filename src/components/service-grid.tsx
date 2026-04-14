"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Video, Target, Share2, Camera, Eye, Zap, Layers, BarChart3, 
  Database, Workflow, CheckCircle2, Package, Sparkles, Wand2, ArrowUpRight,
  Cpu, Users, Globe, PlayCircle, Image, Star, Smartphone, Film, MessageSquare, Building2, Briefcase, Scissors
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceSections = [
  {
    title: "AI Performance & Strategy",
    subtitle: "High-ROAS Video Ads & Social Velocity",
    icon: Target,
    theme: "theme-blue",
    items: [
      {
        id: "ai-video-ads",
        title: "AI Video Ads (Performance)",
        desc: "Neural Meta & YouTube ad creatives engineered for conversion.",
        icon: Zap,
        href: "/services/ai-video-ads"
      },
      {
        id: "ai-social-videos",
        title: "AI Social Media Video Production",
        desc: "Reels, Shorts, and TikTok sequences at neural speed.",
        icon: Smartphone,
        href: "/services/ai-social-media-videos"
      },
      {
        id: "ai-video-marketing",
        title: "AI Video Marketing & Strategy",
        desc: "Data-driven visual funnels and distribution roadmaps.",
        icon: BarChart3,
        href: "/services/ai-video-marketing"
      }
    ]
  },
  {
    title: "AI Production Mastery",
    subtitle: "Cinematic Excellence & Narrative Synthesis",
    icon: Sparkles,
    theme: "theme-blue",
    items: [
      {
        id: "ai-video-prod",
        title: "AI Video Production Services",
        desc: "Bespoke AI brand films and photorealistic commercial production.",
        icon: Video,
        href: "/services/ai-video-production"
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
        desc: "Neural short films and cinematic narrative content.",
        icon: Film,
        href: "/services/ai-film-production"
      },
      {
        id: "ai-editing",
        title: "AI Video Editing & Post Production",
        desc: "Neural VFX and automated high-end color grading.",
        icon: Scissors,
        href: "/services/ai-video-editing"
      }
    ]
  },
  {
    title: "Enterprise AI Solutions",
    subtitle: "Scalable Visual Systems for Global Brands",
    icon: Building2,
    theme: "theme-blue",
    items: [
      {
        id: "ai-product-videos",
        title: "AI Product Video Production",
        desc: "Zero-shoot neural product movies for global e-commerce.",
        icon: Package,
        href: "/services/ai-product-videos"
      },
      {
        id: "ai-explainer",
        title: "AI Explainer Video Production",
        desc: "SaaS walkthroughs featuring neural AI avatar presenters.",
        icon: MessageSquare,
        href: "/services/ai-explainer-videos"
      },
      {
        id: "ai-corporate",
        title: "AI Corporate Video Production",
        desc: "Company profiles and employer branding through AI systems.",
        icon: Briefcase,
        href: "/services/ai-corporate-videos"
      }
    ]
  }
];

function TiltCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative transition-all duration-200",
        className
      )}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function ServiceGrid({ mode }: { mode: string }) {
  const filteredSections = serviceSections.filter(section => {
    if (mode === "ai-studio") {
      return section.theme === "theme-blue" || section.title === "Video Strategy & Consulting";
    } else {
      return section.theme === "theme-red" || section.title === "Video Strategy & Consulting";
    }
  });

  return (
    <section id="services" className="py-40 px-6 md:px-12 bg-background relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-14 w-14 rounded-2xl bg-transparent border-2 border-primary-accent flex items-center justify-center text-primary-accent-fg mb-10 shadow-lg"
          >
             <Sparkles size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-black md:text-8xl text-foreground tracking-widest uppercase leading-[0.85]"
          >
            Media <span className="text-primary-accent font-black italic">Production Matrix</span>
          </motion.h2>
          <p className="mt-16 text-xl text-zinc-400 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            "Eliminating mediocrity. High-end human filmmaking fused with 2026 AI-augmented production for brands in India."
          </p>
        </div>

        <div className="space-y-40">
           {filteredSections.map((section, sIdx) => (
             <div key={section.title} className={cn("relative", section.theme)}>
                <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-transparent border-2 border-primary-accent/10 hidden lg:block" />
                
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                   <div className="max-w-2xl">
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-600 mb-6 block">Division 0{sIdx + 1} // Strategic Node</span>
                      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground uppercase group leading-none">
                         {section.title}
                      </h2>
                      <p className="mt-6 text-lg text-zinc-400 font-light uppercase tracking-[0.2em]">
                         {section.subtitle}
                      </p>
                   </div>
                   
                   <div className="h-16 w-16 rounded-full border border-[var(--border-subtle)] bg-[var(--glass-white)] flex items-center justify-center text-zinc-600 transition group">
                      <section.icon size={24} className="group-hover:scale-110 transition-all text-primary-accent" />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((service, idx) => (
                    <TiltCard 
                      key={service.id} 
                      onClick={() => window.location.href = service.href}
                      className="group cursor-pointer"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.8 }}
                        className="relative flex flex-col h-full rounded-[2.5rem] border border-[var(--border-subtle)] bg-[var(--glass-white)] p-10 transition-shadow hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.2)] duration-500 overflow-hidden"
                      >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        <div className="mb-10 h-16 w-16 flex items-center justify-center rounded-2xl bg-transparent border-2 border-primary-accent/10 transition-all group-hover:scale-110 shadow-xl">
                          <service.icon size={30} className="text-primary-accent" />
                        </div>

                        <h4 className="mb-6 text-xl font-bold text-foreground tracking-widest uppercase leading-tight min-h-[3.5rem] group-hover:text-primary-accent transition-colors">
                          {service.title}
                        </h4>
                        <p className="mb-10 text-zinc-400 font-light leading-relaxed text-xs uppercase tracking-tighter">
                          {service.desc}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-[var(--border-subtle)] pt-8 group-hover:border-primary-accent/30">
                          <span className="text-[10px] font-mono tracking-widest text-zinc-600 group-hover:text-primary-accent uppercase transition-colors">
                             Explore Node
                          </span>
                          <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-primary-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </motion.div>
                    </TiltCard>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
