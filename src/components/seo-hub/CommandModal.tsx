"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, AlertCircle, CheckCircle2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type?: "prompt" | "alert" | "confirm";
  placeholder?: string;
  defaultValue?: string;
  onConfirm: (value?: string) => void;
  confirmLabel?: string;
}

export default function CommandModal({
  isOpen,
  onClose,
  title,
  description,
  type = "prompt",
  placeholder,
  defaultValue = "",
  onConfirm,
  confirmLabel = "Execute Command"
}: CommandModalProps) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    if (isOpen) setInputValue(defaultValue);
  }, [isOpen, defaultValue]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onConfirm(type === "prompt" ? inputValue : undefined);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-obsidian border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Top Pattern */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-50" />
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    {type === "prompt" ? <Terminal size={16} /> : <Sparkles size={16} />}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">System Command_</span>
                </div>
                <button onClick={onClose} className="text-zinc-600 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 leading-tight">
                {title}
              </h3>
              
              {description && (
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-6 leading-relaxed">
                  {description}
                </p>
              )}

              {type === "prompt" ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input 
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-primary-accent/50 transition-all text-white placeholder:text-zinc-700"
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-primary-accent text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-accent/10"
                  >
                    {confirmLabel}
                  </button>
                </form>
              ) : (
                <div className="pt-2">
                  <button 
                    onClick={() => handleSubmit()}
                    className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                  >
                    {type === "confirm" ? confirmLabel : "Acknowledge"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
