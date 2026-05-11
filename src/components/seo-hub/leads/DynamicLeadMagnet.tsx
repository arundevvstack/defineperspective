"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Sparkles, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import LeadCaptureModal from "./LeadCaptureModal";

interface DynamicLeadMagnetProps {
  context?: string; // keywords or slug
  className?: string;
}

export default function DynamicLeadMagnet({ context, className }: DynamicLeadMagnetProps) {
  const [guide, setGuide] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelevantGuide();
  }, [context]);

  async function fetchRelevantGuide() {
    setLoading(true);
    // Find guide matching context or just get latest premium one
    let query = supabase.from('lead_magnets').select('*');
    
    if (context) {
      query = query.ilike('title', `%${context}%`);
    }
    
    const { data } = await query.order('created_at', { ascending: false }).limit(1);
    
    if (data && data.length > 0) {
      setGuide(data[0]);
    } else {
      // Fallback to most popular
      const { data: popular } = await supabase.from('lead_magnets').select('*').order('download_count', { ascending: false }).limit(1);
      if (popular) setGuide(popular[0]);
    }
    setLoading(false);
  }

  if (loading || !guide) return null;

  return (
    <>
      <section className={cn("relative p-10 rounded-[3.5rem] bg-black border border-white/10 overflow-hidden group", className)}>
        {/* Cinematic Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-accent/10 via-transparent to-transparent opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-primary-accent text-black text-[9px] font-black uppercase tracking-[0.2em]">Free Intelligence Report</span>
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-blacker uppercase italic tracking-tighter leading-none">
              {guide.title}
            </h3>
            
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              {guide.summary || "Unlock exclusive AI production frameworks and market insights tailored for industry leaders."}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
               <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-primary-accent" /> Expert Verified
               </div>
               <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <Globe size={14} className="text-blue-500" /> Global Trends
               </div>
               <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <Sparkles size={14} className="text-orange-500" /> AI Synthesis
               </div>
            </div>
          </div>

          <div className="shrink-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-primary-accent hover:scale-[1.05] transition-all shadow-2xl shadow-white/10 group/btn"
            >
              Download Full Report
              <div className="h-8 w-8 rounded-full bg-black/10 flex items-center justify-center group-hover/btn:bg-black/20 transition-colors">
                <Download size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Floating Accents */}
        <div className="absolute top-10 right-10 flex items-center gap-2 opacity-20">
           <div className="h-1 w-1 bg-white rounded-full" />
           <div className="h-1 w-1 bg-white rounded-full" />
           <div className="h-1 w-1 bg-white rounded-full" />
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        guideTitle={guide.title}
        guideId={guide.id}
      />
    </>
  );
}
