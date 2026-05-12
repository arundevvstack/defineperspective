"use client";

import { motion } from "framer-motion";
import { Play, Star, Zap, TrendingUp, Globe, Award, Sparkles } from "lucide-react";
import { useState } from "react";
import VideoLightbox from "./VideoLightbox";

const CASE_STUDIES = [
  {
    id: "vGijXeVUS74",
    title: "Lacrispo Snacks AI Theatre Ad",
    category: "Commercial // Theater",
    thumbnail: "https://img.youtube.com/vi/vGijXeVUS74/maxresdefault.jpg",
    span: "md:col-span-2 md:row-span-2",
    metric: "1.2M+ Reach",
    icon: Star
  },
  {
    id: "BisAbe9s4N8",
    title: "Jeep Wrangler AI Commercial",
    category: "Automotive // Cinematic",
    thumbnail: "https://img.youtube.com/vi/BisAbe9s4N8/maxresdefault.jpg",
    span: "md:col-span-1 md:row-span-1",
    metric: "High-Fidelity",
    icon: Zap
  },
  {
    id: "ZKsTHF772K0", 
    title: "SHE Diamond Luxury Jewelry",
    category: "Luxury // Fashion",
    thumbnail: "https://img.youtube.com/vi/ZKsTHF772K0/maxresdefault.jpg",
    span: "md:col-span-1 md:row-span-1",
    metric: "300% ROI",
    icon: TrendingUp
  },
  {
    id: "ic0skwrzA5M",
    title: "Banaras Silk Heritage Film",
    category: "Heritage // Culture",
    thumbnail: "https://img.youtube.com/vi/ic0skwrzA5M/maxresdefault.jpg",
    span: "md:col-span-1 md:row-span-1",
    metric: "Neural VFX",
    icon: Sparkles
  },
  {
    id: "HtomLPOzkCU",
    title: "Desert Queen Fashion Film",
    category: "Fashion // Cinematic",
    thumbnail: "https://img.youtube.com/vi/HtomLPOzkCU/maxresdefault.jpg",
    span: "md:col-span-1 md:row-span-1",
    metric: "Award Winning",
    icon: Award
  },
  {
    id: "qJwObz6fe-M",
    title: "Neural Studio Alpha Promo",
    category: "Studio // Vision",
    thumbnail: "https://img.youtube.com/vi/qJwObz6fe-M/maxresdefault.jpg",
    span: "md:col-span-1 md:row-span-1",
    metric: "4K Neural",
    icon: Globe
  }
];

export default function CaseStudyBento() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section-pad bg-black">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
             <span className="label-mono">Our Work {" // "} AI Portfolio</span>
             <h2 className="heading-section">
                Video <br />
                <span className="text-primary-accent">Portfolio_</span>
             </h2>
          </div>
          <p className="body-copy max-w-sm text-right">
             Browse our collection of high-quality AI videos created for leading brands and artists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(study.id)}
              className={`relative rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-zinc-900 ${study.span}`}
            >
              {/* Background Thumbnail */}
              <div className="absolute inset-0">
                <img 
                  src={study.thumbnail} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Hover Play System */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                 <div className="relative flex items-center justify-center">
                    <div className="absolute h-20 w-20 rounded-full bg-primary-accent/20 animate-ping" />
                    <div className="absolute h-16 w-16 rounded-full bg-primary-accent/40 animate-pulse" />
                    <div className="relative h-14 w-14 rounded-full bg-primary-accent text-black flex items-center justify-center shadow-2xl">
                       <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                 </div>
              </div>

              {/* Meta Data Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end gap-4">
                   <div className="space-y-2">
                      <span className="label-mono !text-zinc-500">{study.category}</span>
                      <h3 className="heading-card !text-base">{study.title}</h3>
                   </div>
                   <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <study.icon size={12} className="text-primary-accent" />
                      <span className="text-[9px] font-black uppercase text-white">{study.metric}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoLightbox 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoId={selectedVideo || ""} 
      />
    </section>
  );
}
