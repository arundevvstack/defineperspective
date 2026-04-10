"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Camera, 
  Focus, 
  Sun, 
  MoveRight,
  Maximize2
} from "lucide-react";
import Image from "next/image";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

import { use } from "react";

const projects = {
  "photo1": {
    title: "The Hourglass Legacy",
    client: "Eon Luxury",
    cat: "Commercial / Product",
    hero: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=2400",
    description: "Capturing the intricate mechanical soul of high-end horology. Our goal was to manipulate light to define every micro-texture of the brushed steel and sapphire crystal.",
    gallery: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1200",
    ],
    technical: [
      { id: "optics", label: "Optics", value: "Macro 100mm f/2.8", icon: Focus },
      { id: "light", label: "Lighting", value: "Triple Diffusion Scrims", icon: Sun },
      { id: "cam", label: "Capturing", value: "Phase One IQ4", icon: Camera },
    ]
  }
};

export default function PhotoCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects[id as keyof typeof projects] || projects["photo1"];

  return (
    <main className="min-h-screen bg-obsidian text-white relative">
      <GlassNavbar />
      
      {/* 1. Full-Bleed Hero Image */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <motion.div
          
transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image 
            src={project.hero} 
            alt={project.title}
            fill
            priority
            quality={95}
            className="object-cover scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        
        <div className="absolute bottom-20 left-6 md:left-24 max-w-4xl">
           <motion.div
             
transition={{ delay: 0.5 }}
           >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-6 block">Case Study {" // "} Photography</span>
              <h1 className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                {project.title}
              </h1>
              <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-zinc-400">
                 <div>Client: <span className="text-white">{project.client}</span></div>
                 <div>Year: <span className="text-white">2026</span></div>
              </div>
           </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-24 py-40">
         {/* 2. Project Vision & Technical */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
            <div className="lg:col-span-12">
               <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-600 mb-12">The Manifest Perspective</h2>
            </div>
            <div className="lg:col-span-7">
               <p className="text-3xl md:text-5xl font-light leading-snug text-zinc-300">
                  {project.description}
               </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-12">
               {project.technical.map(t => (
                 <div key={t.id} className="flex items-center gap-6 p-8 rounded-3xl bg-transparent border border-white/20 group  transition-all  transition-all duration-300">
                    <div className="h-14 w-14 rounded-2xl bg-transparent border-2 border-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform hover:bg-transparent    transition-all duration-300">
                       <t.icon size={24} />
                    </div>
                    <div>
                       <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">{t.label}</span>
                       <span className="text-lg font-bold">{t.value}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* 3. High-Impact Gallery Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
             <div className="md:col-span-2 aspect-[21/9] rounded-[3rem] overflow-hidden group relative">
                <Image src={project.gallery[0]} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" alt="Detail 1" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 className="text-white" size={40} />
                </div>
             </div>
             <div className="aspect-square rounded-[3rem] overflow-hidden group relative">
                <Image src={project.gallery[1]} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Detail 2" loading="lazy" />
             </div>
             <div className="aspect-square rounded-[3rem] overflow-hidden group relative">
                <Image src={project.gallery[2]} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Detail 3" loading="lazy" />
             </div>
             <div className="md:col-span-2 aspect-[16/10] rounded-[3rem] overflow-hidden group relative">
                <Image src={project.gallery[3]} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" alt="Detail 4" loading="lazy" />
             </div>
         </div>

         {/* 4. Final Conversion CTA */}
         <section className="p-16 md:p-32 rounded-[4rem] border border-white/5 bg-white/5 text-center relative overflow-hidden group">
           <div className="relative z-10">
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-12 leading-[0.9]">
               Ready for your <br /><span className="text-primary-accent">Exclusive Shoot?</span>
             </h2>
             <p className="text-2xl text-zinc-500 font-light max-w-2xl mx-auto mb-20 leading-relaxed">
               Elevate your brand with the best photography production in Kerala and India.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button 
                 onClick={() => window.location.href = '/contact'}
                 className="h-20 px-16 rounded-3xl bg-transparent border-2 border-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl hover:bg-transparent    transition-all duration-300"
               >
                 Inquire Now
               </button>
               <button 
                 onClick={() => window.location.href = '/portfolio?view=photo'}
                 className="h-20 px-16 rounded-3xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm  hover:text-black transition-all flex items-center gap-4  transition-all duration-300"
               >
                 Back to Portfolio <ArrowLeft size={18} />
               </button>
             </div>
           </div>
         </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}
