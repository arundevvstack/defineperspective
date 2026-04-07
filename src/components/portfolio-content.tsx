"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Video, 
  Camera, 
  MoveRight,
  Cpu,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import LiteYouTube from "@/components/lite-youtube";

const videoData = [
  {
    category: "Corporate & Brand Films",
    description: "Premium brand storytelling and corporate video production in Kerala, designed to build trust and authority.",
    projects: [
      { id: "corp1", title: "To U Commercial", videoId: "NEqjeiDThcY", service: "TVC", industry: "Fashion/ Apparal" },
      { id: "corp2", title: "BB Serum TVC", videoId: "8TntXDekuE8", service: "TVC", industry: "Cosmetics & Beauty" },
      { id: "corp3", title: "Dotspace Commercial", videoId: "HuX40LSwF7M", service: "TVC", industry: "Co-working Space" },
    ]
  },
  {
    category: "Social Media & Ads",
    description: "High-impact reels, ads, and short-form videos for brands across India, optimized for algorithmic growth.",
    projects: [
      { id: "social1", title: "Elite Fashion Social", videoId: "dQw4w9WgXcQ" },
      { id: "social2", title: "Product Launch Reel", videoId: "dQw4w9WgXcQ" },
    ]
  }
];

const aiData = [
  {
    category: "AI Video Production",
    description: "Photorealistic generative video and motion for brands. Visual velocity refined.",
    projects: [
      { id: "ai1", title: "Desert Queen | West Vogue Series", videoId: "HtomLPOzkCU", service: "AI Fashion Film", industry: "Fashion & Lifestyle", client: "West Vogue" },
      { id: "ai2", title: "SHE Luxury Body Lotion", videoId: "5kOnWP-dZZY", service: "AI TV Commercial", industry: "Fashion & Lifestyle", client: "She" },
      { id: "ai3", title: "Banaras Silk | Fabrics of India", videoId: "ic0skwrzA5M", service: "AI Documentary", industry: "Fashion & Lifestyle", client: "WestVogue" },
      { id: "ai4", title: "Swarna Kosa | Heritage Silk Sarees", videoId: "-CYvl4ytIFY", service: "AI TVC", industry: "Fashion & Lifestyle", client: "WestVogue" },
      { id: "ai5", title: "SHE Diamond | Cinematic AI Luxury Jewelry Advertisement", videoId: "ZKsTHF772K0", service: "AI TVC", industry: "Fashion & Lifestyle", client: "SHE" },
    ]
  },
  {
    category: "AI Vertical Ads",
    description: "High-conversion, AI-generated short-form vertical assets calibrated for algorithmic delivery.",
    projects: [
      { 
        id: "ai-vert1", 
        title: "Leelama Restaurant | Next-Gen AI Food AI Shortfom AD", 
        videoId: "doApkqt7zDU", 
        service: "AI Shortfom AD", 
        industry: "Food & Beverages", 
        client: "Leelamma Since 1980 Restaurant Chain" 
      }
    ]
  }
];

const photoData = [
  {
    category: "Commercial Photography",
    description: "High-impact advertisement photography for billboards, luxury catalogs, and product advertising in India.",
    projects: [
      { id: "photo1", title: "Luxury Timepiece", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200" },
      { id: "photo2", title: "Fashion Editorial", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
    ]
  }
];

export default function PortfolioContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("view") || "video";

  const tabs = [
    { id: "video", label: "Production", icon: Video },
    { id: "ai", label: "AI Studios", icon: Cpu },
    { id: "photo", label: "Clients", icon: Camera },
  ];

  const handleNavigate = (pathOrId: string) => {
    if (pathOrId.startsWith("/")) {
      router.push(pathOrId);
    } else {
      router.push(`/portfolio?view=${pathOrId}`, { scroll: false });
    }
  };

  const currentData = activeTab === "video" ? videoData : activeTab === "ai" ? aiData : photoData;

  return (
    <main className="min-h-screen bg-obsidian text-white pt-20 pb-40 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[800px] w-[800px] bg-primary-accent/10 blur-[150px] rounded-full animate-pulse hover:bg-white hover:text-primary-accent transition-all duration-300" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <section className="py-16 text-center max-w-5xl mx-auto">
          <motion.div
          >
            <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-accent mb-8 block">Global Portfolio {" // "} AI Video Production & Brand Films</span>
            <h1 className="text-4xl md:text-9xl font-black tracking-[0.02em] uppercase mb-10 leading-[0.85]">
              Cinematic Production <br /><span className="text-primary-accent italic">& AI Studio.</span>
            </h1>
            <p className="sr-only">Explore Define Perspective's best cinematic TV commercials, AI short-form vertical ads, and premium corporate brand films produced globally and in India.</p>
            
            <div className="mt-20 flex justify-center w-full">
              <div className="flex p-2 rounded-full bg-transparent border border-white/20 backdrop-blur-3xl overflow-hidden">
                 <div className="flex">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleNavigate(tab.id)}
                        className={cn(
                          "relative px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 outline-none",
                          activeTab === tab.id ? "text-white" : "text-zinc-600 hover:text-primary-accent"
                        )}
                      >
                        {activeTab === tab.id && (
                          <motion.div 
                            layoutId="activePortfolioTab"
                            className="absolute inset-0 bg-primary-accent rounded-full shadow-lg hover:bg-white hover:text-primary-accent transition-all duration-300"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <tab.icon size={16} className="relative z-10" />
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="space-y-48">
          {currentData.map((section, sectionIdx) => (
            <motion.section 
              key={activeTab + section.category}
transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 border-b border-white/5 pb-16 group">
                <div className="max-w-4xl">
                  <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 block">Capability node {" // "} {activeTab}</span>
                  <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-primary-accent transition-colors leading-none">
                    {section.category}
                  </h2>
                  <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {section.projects.map((project: any, projectIdx) => (
                  <motion.div 
                    key={project.id}
                    
whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: projectIdx * 0.1 }}
                    className="group"
                  >
                    <div 
                      className={cn(
                        "relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-black/60 shadow-xl mb-10 transition-all duration-700",
                        section.category === "AI Vertical Ads" ? "aspect-[9/16] w-full" : "aspect-video",
                        activeTab === "photo" || activeTab === "clients" ? "group-hover:border-primary-accent/50 cursor-pointer" : "cursor-default"
                      )}
                    >
                       {!project.videoId ? (
                         <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
                           <Image 
                             src={project.img || ""} 
                             alt={project.title} 
                             fill
                             className="object-cover"
                             priority={sectionIdx === 0 && projectIdx < 3}
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           />
                         </div>
                       ) : (
                         <LiteYouTube 
                           videoId={project.videoId}
                           title={project.title}
                           aspectRatio={section.category === "AI Vertical Ads" ? "vertical" : "video"}
                           className="grayscale hover:grayscale-0 transition-all duration-1000"
                           priority={sectionIdx === 0 && projectIdx < 3}
                         />
                       )}
                    </div>
                    <div className="px-4">
                      <h4 className="text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-primary-accent transition-colors">{project.title}</h4>
                      <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-loose">
                         {project.service ? (
                           <>
                             {project.client && <>Client: {project.client} <br /></>}
                             Service: {project.service} <br />
                             Industry: {project.industry}
                           </>
                         ) : (
                           <>
                             Pipeline: {activeTab === "ai" ? "Neural Render" : "Optic Sensors"} <br />
                             Status: Release v2.0
                           </>
                         )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <section className="mt-80 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-[9rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8]">
              Ready for <br /><span className="text-primary-accent italic">Impact?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Start New Project <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => window.location.href = 'https://wa.me/919496191684'}
                className="h-20 px-16 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-4 hover:text-primary-accent transition-all duration-300"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}
