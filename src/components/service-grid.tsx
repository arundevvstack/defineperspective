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
    items: [
      {
        id: "corp-video",
        title: "Corporate Video Production Company in Kerala",
        desc: "Professional brand stories and heritage films for global enterprises in Thrivandrum & Kochi.",
        icon: Workflow,
        color: "from-blue-400 to-indigo-600",
        href: "/services/video-production/corporate-video-production-company-in-kerala"
      },
      {
        id: "brand-film",
        title: "Brand Film Production",
        desc: "Premium cinematic films that define your company's visionary identity.",
        icon: Star,
        color: "from-amber-400 to-red-500",
        href: "/services/video-production/brand-film-production"
      },
      {
        id: "ad-film",
        title: "Ad Film / Commercial Video Production",
        desc: "High-impact television commercials (TVC) and premium digital video ads.",
        icon: Video,
        color: "from-red-400 to-rose-600",
        href: "/services/video-production/ad-film-commercial-video-production"
      },
      {
        id: "promo-video",
        title: "Promotional Video Production",
        desc: "High-energy videos designed to launch products and ignite growth.",
        icon: Zap,
        color: "from-orange-400 to-amber-600",
        href: "/services/video-production/promotional-video-production"
      }
    ]
  },
  {
    title: "AI Media Production",
    subtitle: "2026-Era Generative Video & Post-Production Labs India",
    icon: Cpu,
    items: [
      {
        id: "ai-video-services",
        title: "AI Video Production Services",
        desc: "Full-scale generative video production utilizing proprietary neural workflows.",
        icon: Sparkles,
        color: "from-cyan-400 to-blue-600",
        href: "/services/ai-media-production/ai-video-production-services"
      },
      {
        id: "ai-ad-gen",
        title: "AI Ad Creative Generation",
        desc: "High-velocity ad creative testing with AI-generated visual variants.",
        icon: Zap,
        color: "from-purple-400 to-indigo-600",
        href: "/services/ai-media-production/ai-ad-creative-generation"
      },
      {
        id: "ai-no-shoot",
        title: "AI Product Videos (No Shoot Required)",
        desc: "Render hyper-realistic product commercials entirely from static images/models.",
        icon: Image,
        color: "from-emerald-400 to-cyan-600",
        href: "/services/ai-media-production/ai-product-videos-no-shoot-required"
      },
      {
        id: "ai-avatars",
        title: "AI Avatar Videos & AI Presenters",
        desc: "Photorealistic AI characters for training, explainers, and brand ambassadors.",
        icon: Users,
        color: "from-pink-400 to-rose-600",
        href: "/services/ai-media-production/ai-avatar-videos-ai-presenters"
      }
    ]
  },
  {
    title: "Product & E-commerce Content",
    subtitle: "Billboard-Ready Visuals for Amazon, Flipkart & D2C Brands",
    icon: Package,
    items: [
      {
        id: "prod-video",
        title: "Product Video Production",
        desc: "Cinematic product close-ups and lifestyle films for premium retail.",
        icon: Camera,
        color: "from-yellow-400 to-amber-600",
        href: "/services/product-content/product-video-production"
      },
      {
        id: "ecomm-photo",
        title: "E-commerce Product Photography",
        desc: "High-precision studio photography for catalogs and digital storefronts.",
        icon: Image,
        color: "from-blue-400 to-cyan-600",
        href: "/services/product-content/e-commerce-product-photography"
      },
      {
        id: "marketplace-video",
        title: "Amazon / Flipkart Product Videos",
        desc: "Conversion-optimized product videos compliant with marketplace standards.",
        icon: Globe,
        color: "from-orange-400 to-red-600",
        href: "/services/product-content/amazon-flipkart-product-videos"
      },
      {
        id: "prod-demo",
        title: "Product Demo Videos",
        desc: "Clear, engaging walkthroughs showcasing your product's core utility.",
        icon: PlayCircle,
        color: "from-indigo-400 to-blue-600",
        href: "/services/product-content/product-demo-videos"
      }
    ]
  },
  {
    title: "Social Media Content Creation",
    subtitle: "High-Velocity Vertical Video Production Across India",
    icon: Share2,
    items: [
      {
        id: "social-video",
        title: "Social Media Video Production",
        desc: "Engaging vertical content tailored for viral platform algorithms.",
        icon: Video,
        color: "from-pink-400 to-purple-600",
        href: "/services/social-media/social-media-video-production"
      },
      {
        id: "insta-reels",
        title: "Instagram Reels Creation",
        desc: "Trend-first Reels engineered for maximum engagement and brand reach.",
        icon: Star,
        color: "from-rose-400 to-orange-500",
        href: "/services/social-media/instagram-reels-creation"
      },
      {
        id: "yt-shorts",
        title: "YouTube Shorts Production",
        desc: "Fast-paced Shorts to grow your channel and drive mobile traffic.",
        icon: PlayCircle,
        color: "from-red-500 to-red-800",
        href: "/services/social-media/youtube-shorts-production"
      },
      {
        id: "ugc-video",
        title: "UGC Video Production",
        desc: "Authentic, relatability-focused User Generated Content at professional scale.",
        icon: Users,
        color: "from-emerald-400 to-teal-600",
        href: "/services/social-media/ugc-video-production"
      }
    ]
  },
  {
    title: "Performance Marketing Ads",
    subtitle: "Conversion-Centric Ad Creatives for FB, IG & YouTube",
    icon: Target,
    items: [
      {
        id: "perf-ads",
        title: "Performance Marketing Video Ads",
        desc: "ROI-driven ad creatives designed to lower CPA and boost conversion.",
        icon: BarChart3,
        color: "from-green-400 to-emerald-600",
        href: "/services/performance-marketing/performance-marketing-video-ads"
      },
      {
        id: "fb-ig-ads",
        title: "Facebook & Instagram Ad Creatives",
        desc: "Thumb-stopping visuals specifically for Meta's high-stakes feed.",
        icon: Share2,
        color: "from-blue-500 to-indigo-700",
        href: "/services/performance-marketing/facebook-instagram-ad-creatives"
      },
      {
        id: "yt-ads",
        title: "YouTube Ads Production",
        desc: "High-retention skippable and unskippable ads for YouTube campaigns.",
        icon: Video,
        color: "from-red-600 to-black",
        href: "/services/performance-marketing/youtube-ads-production"
      },
      {
        id: "conv-ads",
        title: "Conversion-Focused Video Ads",
        desc: "Scientific ad structures built to guide viewers toward immediate action.",
        icon: Zap,
        color: "from-amber-400 to-orange-600",
        href: "/services/performance-marketing/conversion-focused-video-ads"
      }
    ]
  },
  {
    title: "CGI & Virtual Production",
    subtitle: "Premium 3D Visualization & Virtual Environments India",
    icon: Wand2,
    items: [
      {
        id: "cgi-product",
        title: "CGI Product Videos",
        desc: "Impossible product shots and surreal 3D environments for luxury brands.",
        icon: Sparkles,
        color: "from-cyan-400 to-blue-500",
        href: "/services/cgi-virtual-production/cgi-product-videos"
      },
      {
        id: "virtual-prod",
        title: "Virtual Production Services",
        desc: "Shoot against high-res digital backgrounds for global locations-on-demand.",
        icon: Globe,
        color: "from-indigo-400 to-purple-600",
        href: "/services/cgi-virtual-production/virtual-production-services"
      },
      {
        id: "3d-vis",
        title: "3D Product Visualization",
        desc: "Detailed, photorealistic 3D renders that eliminate the need for physical samples.",
        icon: Layers,
        color: "from-emerald-400 to-green-600",
        href: "/services/cgi-virtual-production/3d-product-visualization"
      },
      {
        id: "vfx-enhance",
        title: "VFX & Motion Enhancement",
        desc: "Elevating traditional footage with high-end digital visual effects.",
        icon: Zap,
        color: "from-rose-400 to-pink-600",
        href: "/services/cgi-virtual-production/vfx-motion-enhancement"
      }
    ]
  },
  {
    title: "Video Strategy & Consulting",
    subtitle: "Data-Driven Planning & Content Funnel Architecture",
    icon: BarChart3,
    items: [
      {
        id: "vid-strat",
        title: "Video Marketing Strategy",
        desc: "Multi-channel media roadmaps for sustainable brand growth.",
        icon: Target,
        color: "from-zinc-400 to-zinc-800",
        href: "/services/video-strategy/video-marketing-strategy"
      },
      {
        id: "cont-plan",
        title: "Content Strategy & Planning",
        desc: "Holistic content calendars engineered for maximum audience retention.",
        icon: Workflow,
        color: "from-blue-400 to-indigo-600",
        href: "/services/video-strategy/content-strategy-planning"
      },
      {
        id: "camp-exec",
        title: "Campaign Planning & Execution",
        desc: "End-to-end management of high-stakes visual marketing campaigns.",
        icon: Globe,
        color: "from-cyan-400 to-emerald-600",
        href: "/services/video-strategy/campaign-planning-execution"
      },
      {
        id: "vid-funnel",
        title: "Video Funnel Strategy",
        desc: "Architecting video sequences that move users from awareness to sale.",
        icon: Layers,
        color: "from-orange-400 to-red-600",
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
            Media <span className="text-primary-accent font-black italic shadow-glow">Production</span>
          </motion.h2>
          <p className="mt-16 text-xl text-zinc-500 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            Future-Proof Media. Specialized AI and Cinematic divisions delivering high-velocity production for brands in Kerala & India.
          </p>
        </div>

        <div className="space-y-40">
           {serviceSections.map((section, sIdx) => (
             <div key={section.title} className="relative">
                <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-accent/50 via-white/5 to-transparent hidden lg:block" />
                
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                   <div className="max-w-2xl">
                      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6 block">Division 0{sIdx + 1} {" // "} Strategic Node</span>
                      <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-widest group leading-none">
                         {section.title}
                      </h2>
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
