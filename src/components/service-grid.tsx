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
        desc: "Premium cinematic films that define your company's visionary identity.",
        icon: Star,
        href: "/services/video-production/brand-film-production"
      },
      {
        id: "ad-film",
        title: "Ad Film / Commercial Video Production",
        desc: "High-impact television commercials (TVC) and premium digital video ads.",
        icon: Video,
        href: "/services/video-production/ad-film-commercial-video-production"
      },
      {
        id: "promo-video",
        title: "Promotional Video Production",
        desc: "High-energy videos designed to launch products and ignite growth.",
        icon: Zap,
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
        desc: "Full-scale generative video production utilizing proprietary neural workflows.",
        icon: Sparkles,
        href: "/services/ai-media-production/ai-video-production-services"
      },
      {
        id: "ai-ad-gen",
        title: "AI Ad Creative Generation",
        desc: "High-velocity ad creative testing with AI-generated visual variants.",
        icon: Zap,
        href: "/services/ai-media-production/ai-ad-creative-generation"
      },
      {
        id: "ai-no-shoot",
        title: "AI Product Videos (No Shoot Required)",
        desc: "Render hyper-realistic product commercials entirely from static images/models.",
        icon: Image,
        href: "/services/ai-media-production/ai-product-videos-no-shoot-required"
      },
      {
        id: "ai-avatars",
        title: "AI Avatar Videos & AI Presenters",
        desc: "Photorealistic AI characters for training, explainers, and brand ambassadors.",
        icon: Users,
        href: "/services/ai-media-production/ai-avatar-videos-ai-presenters"
      }
    ]
  },
  {
    title: "AI CGI & Virtual Production",
    subtitle: "Premium 3D Visualization & Virtual Environments India",
    icon: Wand2,
    theme: "theme-blue",
    items: [
      {
        id: "cgi-prod-video",
        title: "AI CGI Product Videos",
        desc: "Impossible product shots and surreal 3D environments rendered via AI.",
        icon: Sparkles,
        href: "/services/cgi-virtual-production/ai-cgi-product-videos"
      },
      {
        id: "virtual-prod-env",
        title: "Virtual Production AI Environments",
        desc: "Shoot against high-res AI digital backgrounds for global locations-on-demand.",
        icon: Globe,
        href: "/services/cgi-virtual-production/virtual-production-services"
      },
      {
        id: "3d-vis-ai",
        title: "AI-Generated 3D Product Visualization",
        desc: "Photorealistic 3D renders that eliminate the need for physical studio time.",
        icon: Layers,
        href: "/services/cgi-virtual-production/3d-product-visualization"
      },
      {
        id: "vfx-ai-enhance",
        title: "AI VFX & Motion Enhancement",
        desc: "Elevating traditional footage with high-end neural visual effects.",
        icon: Zap,
        href: "/services/cgi-virtual-production/vfx-motion-enhancement"
      }
    ]
  },
  {
    title: "Product & E-commerce Content",
    subtitle: "Billboard-Ready Visuals for Amazon, Flipkart & D2C Brands",
    icon: Package,
    theme: "theme-red",
    items: [
      {
        id: "prod-video",
        title: "Product Video Production",
        desc: "Cinematic product close-ups and lifestyle films for premium retail.",
        icon: Camera,
        href: "/services/product-content/product-video-production"
      },
      {
        id: "ecomm-photo",
        title: "E-commerce Product Photography",
        desc: "High-precision studio photography for catalogs and digital storefronts.",
        icon: Image,
        href: "/services/product-content/e-commerce-product-photography"
      },
      {
        id: "marketplace-video",
        title: "Amazon / Flipkart Product Videos",
        desc: "Conversion-optimized product videos compliant with marketplace standards.",
        icon: Globe,
        href: "/services/product-content/amazon-flipkart-product-videos"
      },
      {
        id: "prod-demo",
        title: "Product Demo Videos",
        desc: "Clear, engaging walkthroughs showcasing your product's core utility.",
        icon: PlayCircle,
        href: "/services/product-content/product-demo-videos"
      }
    ]
  },
  {
    title: "Performance Marketing Video Ads",
    subtitle: "Conversion-Centric Ad Creatives for FB, IG & YouTube",
    icon: Target,
    theme: "theme-red",
    items: [
      {
        id: "perf-ads",
        title: "Performance Marketing Video Ads",
        desc: "ROI-driven ad creatives designed to lower CPA and boost conversion.",
        icon: BarChart3,
        href: "/services/performance-marketing/performance-marketing-video-ads"
      },
      {
        id: "fb-ig-ads",
        title: "Facebook & Instagram Ad Creatives",
        desc: "Thumb-stopping visuals specifically for Meta's high-stakes feed.",
        icon: Share2,
        href: "/services/performance-marketing/facebook-instagram-ad-creatives"
      },
      {
        id: "yt-ads",
        title: "YouTube Ads Production",
        desc: "High-retention skippable and unskippable ads for YouTube campaigns.",
        icon: Video,
        href: "/services/performance-marketing/youtube-ads-production"
      },
      {
        id: "conv-ads",
        title: "Conversion-Focused Video Ads",
        desc: "Scientific ad structures built to guide viewers toward immediate action.",
        icon: Zap,
        href: "/services/performance-marketing/conversion-focused-video-ads"
      }
    ]
  },
  {
    title: "Video Strategy & Consulting",
    subtitle: "Data-Driven Planning & Content Funnel Architecture",
    icon: BarChart3,
    theme: "theme-red",
    items: [
      {
        id: "vid-strat",
        title: "Video Marketing Strategy",
        desc: "Multi-channel media roadmaps for sustainable brand growth.",
        icon: Target,
        href: "/services/video-strategy/video-marketing-strategy"
      },
      {
        id: "cont-plan",
        title: "Content Strategy & Planning",
        desc: "Holistic content calendars engineered for maximum audience retention.",
        icon: Workflow,
        href: "/services/video-strategy/content-strategy-planning"
      },
      {
        id: "camp-exec",
        title: "Campaign Planning & Execution",
        desc: "End-to-end management of high-stakes visual marketing campaigns.",
        icon: Globe,
        href: "/services/video-strategy/campaign-planning-execution"
      },
      {
        id: "vid-funnel",
        title: "Video Funnel Strategy",
        desc: "Architecting video sequences that move users from awareness to sale.",
        icon: Layers,
        href: "/services/video-strategy/video-funnel-strategy"
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
      <div className="container mx-auto">
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
            Media <span className="text-primary-accent font-black italic">Production</span>
          </motion.h2>
          <p className="mt-16 text-xl text-zinc-500 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            "Eliminating mediocrity. High-end human filmmaking fused with 2026 AI-augmented production for brands in India."
          </p>
        </div>

        <div className="space-y-40">
           {filteredSections.map((section, sIdx) => (
             <div key={section.title} className={cn("relative", section.theme)}>
                <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-transparent border-2 border-primary-accent/10 hidden lg:block" />
                
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                   <div className="max-w-2xl">
                      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6 block">Division 0{sIdx + 1} // Strategic Node</span>
                      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground uppercase tracking-widest group leading-none">
                         {section.title}
                      </h2>
                      <p className="mt-6 text-lg text-zinc-500 font-light uppercase tracking-[0.2em]">
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
                        <p className="mb-10 text-zinc-500 font-light leading-relaxed text-xs uppercase tracking-tighter">
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
