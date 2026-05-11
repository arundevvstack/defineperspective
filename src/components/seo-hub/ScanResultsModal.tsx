"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, X, ArrowUpRight, Target, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import CommandModal from "./CommandModal";

interface ScanResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: any[];
  isScanning: boolean;
}

export default function ScanResultsModal({ isOpen, onClose, results, isScanning }: ScanResultsModalProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
          <CommandModal 
            isOpen={showSuccessModal}
            onClose={() => {
              setShowSuccessModal(false);
              onClose();
            }}
            type="alert"
            title="AI Content Created"
            description="All identified gaps have been moved to the Review queue. You can now optimize them in the AI Content Editor."
            onConfirm={() => {}}
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-obsidian border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-10 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent border border-primary-accent/20">
                  <Brain size={24} className={cn(isScanning && "animate-pulse")} />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter">AI Scan Results</h2>
                  <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Semantic Gap Analysis v6.4</p>
                </div>
              </div>
              <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Results Grid */}
            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
              <div className="space-y-4">
                <div className="p-6 rounded-[2rem] bg-primary-accent/5 border border-primary-accent/10 mb-8">
                  <div className="flex items-center gap-3 text-primary-accent text-[9px] font-mono uppercase tracking-widest mb-4 font-black">
                     <Target size={14} /> Strategic Recommendation
                  </div>
                  <p className="text-zinc-300 italic text-sm leading-relaxed">
                    "High-momentum gaps detected in regional AI Video clusters. Immediate deployment of localized landing pages is advised for maximum authority capture."
                  </p>
                </div>

                {results.map((trend, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-white/10 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-1">{trend.keyword}</h4>
                        <div className="flex items-center gap-2">
                           <span className="text-[9px] font-mono text-zinc-600 uppercase">{trend.region} | {trend.status.replace('_', ' ')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Momentum</span>
                       <div className="flex items-center gap-2">
                          <span className="text-xl font-black text-primary-accent">{trend.momentum}%</span>
                          <ArrowUpRight size={16} className="text-zinc-700" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-8 border-t border-white/5 flex items-center justify-between bg-black/20 shrink-0">
                <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">{results.length} Strategic Gaps Identified</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={async () => {
                      for (const trend of results) {
                        await fetch('/api/seo/save-draft', {
                          method: 'POST',
                          body: JSON.stringify({ keyword: trend.keyword, region: trend.region })
                        });
                      }
                      setShowSuccessModal(true);
                    }}
                    className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
                  >
                    Draft All Gaps
                  </button>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-primary-accent text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-primary-accent/80 transition-all"
                  >
                    Acknowledge
                  </button>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
