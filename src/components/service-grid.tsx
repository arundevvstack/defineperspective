"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Video, Target, Share2, Camera, Eye, Zap, Layers, BarChart3, 
  Database, Workflow, CheckCircle2, Package, Sparkles, Wand2, ArrowUpRight,
  Cpu, Users, Globe, PlayCircle, Image, Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceSections = [
  {
    title: "Cinematic Video Production",
    subtitle: "Premium Craftsmanship & Storytelling Across Kerala",
    icon: Star,
    items: [
      {
        id: "corp-video",
        title: "Corporate Video Production",
        desc: "Professional brand stories and heritage films for global enterprises in India.",
        icon: Workflow,
        color: "from-red-400 to-indigo-500",
        href: "/services/professional-video-production"
      },
      {
        id: "ad-film",
        title: "Ad Film Production India",
        desc: "High-impact television commercials (TVC) and digital video ads for premium brands.",
        icon: PlayCircle,
        color: "from-red-400 to-red-600",
        href: "/services/professional-video-production"
      },
      {
        id: "product-shoot",
        title: "Product Video Shoot Kerala",
        desc: "Dashing product visuals and billboard-ready photography for E-commerce & Retail.",
        icon: Camera,
        color: "from-amber-400 to-yellow-500",
        href: "/services/professional-advertisement-photography"
      },
      {
        id: "social-media",
        title: "Social Media Video Production",
        desc: "Viral-ready reels, shorts, and YouTube content production for startups.",
        icon: Share2,
        color: "from-rose-400 to-pink-500",
        href: "/services/professional-video-production"
      },
      {
         id: "drone-vid",
         title: "Drone Videography India",
         desc: "Cinematic aerial shots and 4K drone videography across Trivandrum & Kochi.",
         icon: Target,
         color: "from-purple-500 to-pink-500",
         href: "/services/professional-video-production"
      }
    ]
  },
  {
    title: "AI-Powered Media Solutions",
    subtitle: "2026-Era Speed, Scalability & AEO Optimized",
    icon: Cpu,
    items: [
      {
        id: "ai-video",
        title: "AI Video Production Kerala",
        desc: "Text-to-video commercials and generative AI dreamscapes for modern brands.",
        icon: Video,
        color: "from-cyan-400 to-red-600",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-content",
        title: "AI Content Creation India",
        desc: "Automated at-scale content generation optimized for AI search engines.",
        icon: Database,
        color: "from-green-400 to-emerald-500",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-reels",
        title: "AI Reels & Short-form Video",
        desc: "50+ optimized assets generated instantly from a single master project.",
        icon: Zap,
        color: "from-orange-400 to-red-500",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-explainer",
        title: "AI Explainer Videos",
        desc: "Complex concept visualization using bespoke AI animation and voice synthesis.",
        icon: Sparkles,
        color: "from-red-400 to-red-900",
        href: "/services/professional-video-production"
      }
    ]
  },
  {
    title: "Elite Hybrid & Virtual Production",
    subtitle: "Where Human Artistry Meets AI Acceleration",
    icon: Wand2,
    items: [
      {
        id: "ai-plus-cinematic",
        title: "AI + Cinematic Production",
        desc: "Our flagship hybrid model blending human craft with generative enhancements.",
        icon: Star,
        color: "from-cyan-400 to-red-900",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-assisted-film",
        title: "AI-Assisted Film Production",
        desc: "Script-to-master workflows using AI for virtual production and VFX.",
        icon: Target,
        color: "from-red-400 to-red-600",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-enhanced-edit",
        title: "AI-Enhanced Editing",
        desc: "Next-gen post-production with AI color grading and scene optimization.",
        icon: Layers,
        color: "from-purple-500 to-pink-500",
        href: "/services/professional-video-production"
      },
      {
        id: "ai-drone",
        title: "AI + Drone Video Production",
        desc: "Smart autonomous flight paths and AI-tracked aerial stabilization.",
        icon: Eye,
        color: "from-yellow-400 to-orange-500",
        href: "/services/professional-video-production"
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

export default function ServiceGrid() {
  return (
    <section id="services" className="py-40 px-6 md:px-12 bg-background relative">
      <div className="container mx-auto">
        <div className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-14 w-14 rounded-2xl bg-primary-accent flex items-center justify-center text-primary-accent-fg mb-10 shadow-[0_0_30px_var(--glow)]"
          >
             <Cpu size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black md:text-8xl text-foreground tracking-widest uppercase leading-[0.85]"
          >
            Digital Production <span className="text-primary-accent font-black italic shadow-glow">OS_</span>
          </motion.h2>
          <p className="mt-16 text-xl text-zinc-500 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            Elevate your brand with 2026-ready media. We have split our specialized capabilities into two high-performance divisions to better serve your specific trajectory.
          </p>
        </div>

        <div className="space-y-40">
           {serviceSections.map((section, sIdx) => (
             <div key={section.title} className="relative">
                <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-accent/50 via-white/5 to-transparent hidden lg:block" />
                
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                   <div className="max-w-2xl">
                      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6 block">Node {sIdx + 1} {" // "} Search Optimized</span>
                      <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-widest group">
                         {section.title}
                      </h3>
                      <p className="mt-6 text-lg text-zinc-500 font-light uppercase tracking-[0.2em]">
                         {section.subtitle}
                      </p>
                   </div>
                   
                   <div className="h-16 w-16 rounded-full border border-[var(--border-subtle)] bg-[var(--glass-white)] flex items-center justify-center text-zinc-600 hover:text-primary-accent transition cursor-help group">
                      <section.icon size={24} className="group-hover:scale-110 transition-all" />
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
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.8 }}
                        className="relative flex flex-col h-full rounded-3xl border border-[var(--border-subtle)] bg-[var(--glass-white)] p-10 transition-shadow hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.2)] duration-500 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-primary-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className={cn(
                          "mb-10 h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-tr transition-all group-hover:scale-110 shadow-2xl",
                          service.color
                        )}>
                          <service.icon size={28} className="text-black font-black" />
                        </div>

                        <h4 className="mb-6 text-xl font-bold text-foreground tracking-widest uppercase leading-tight min-h-[3.5rem]">
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
