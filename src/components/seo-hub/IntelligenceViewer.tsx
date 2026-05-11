"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, Share2, Sparkles, Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntelligenceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  guide: any;
}

export default function IntelligenceViewer({ isOpen, onClose, guide }: IntelligenceViewerProps) {
  if (!guide) return null;

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([`
DP STUDIO - PRIVATE INTELLIGENCE REPORT
TITLE: ${guide.title}
CATEGORY: ${guide.category}
SYNOPSIS: ${guide.summary}

--- REPORT CONTENT ---
${guide.content}

--- METADATA ---
Generated At: ${new Date(guide.created_at).toLocaleString()}
Status: Executive Verified
    `], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${guide.title.replace(/\s+/g, '_')}_REPORT.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 lg:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-obsidian border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-10 flex items-center justify-between border-b border-white/5 bg-black/20 shrink-0">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent border border-primary-accent/20">
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter leading-tight">{guide.title}</h2>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{guide.category || "AI Strategy"}</span>
                    <div className="h-1 w-1 rounded-full bg-zinc-800" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ID: {guide.id.slice(0,8)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={downloadText}
                  className="h-14 px-8 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                >
                  <Download size={18} /> Export
                </button>
                <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar bg-black/10">
              <div className="max-w-3xl mx-auto space-y-12">
                
                {/* Synopsis Card */}
                <div className="p-10 rounded-[2.5rem] bg-primary-accent/5 border border-primary-accent/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Sparkles size={40} className="text-primary-accent" />
                   </div>
                   <h4 className="text-[10px] font-mono uppercase text-primary-accent tracking-widest font-black mb-4">Executive Synopsis_</h4>
                   <p className="text-xl text-zinc-300 italic leading-relaxed">
                     "{guide.summary}"
                   </p>
                </div>

                {/* Main Content (Formatted for readability) */}
                <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-loose prose-p:text-lg prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl prose-h2:font-black prose-h3:text-xl prose-h3:font-bold">
                   <div className="whitespace-pre-wrap font-sans text-zinc-400 text-lg leading-relaxed">
                      {guide.content}
                   </div>
                </div>

                {/* Technical Footnote */}
                <div className="pt-20 border-t border-white/5 flex flex-wrap gap-8">
                   <div className="flex items-center gap-3">
                      <Globe size={16} className="text-zinc-700" />
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Target Market: International_Node</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Clock size={16} className="text-zinc-700" />
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Generated: {new Date(guide.created_at).toLocaleDateString()}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Share2 size={16} className="text-zinc-700" />
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Public Access: Disabled</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
