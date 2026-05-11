"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Target } from "lucide-react";

export const RadarScanner = () => (
  <div className="absolute top-4 right-4 z-50 w-24 h-24 flex items-center justify-center opacity-40">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#00ff41" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#00ff41" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="#00ff41" strokeWidth="0.5" opacity="0.4"/>
      <motion.line
        x1="50" y1="50" x2="50" y2="5"
        stroke="#00ff41" strokeWidth="1.5" opacity="0.8"
        style={{ transformOrigin: "50px 50px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
    </svg>
  </div>
);

export const TerminalLogs = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mockLogs = [
      "SEO_SIGNAL_LOCKED: KOCHI_NODE",
      "DECRYPTING_COMPETITOR_STRATEGY...",
      "AI_CRAWLER_BYPASS: SUCCESS",
      "SEMANTIC_DENSITY_THRESHOLD: REACHED",
      "REGIONAL_AUTHORITY_SYNC: 100%",
      "GOOGLE_INDEX_PROBE: ACTIVE",
      "LLM_VECTOR_MAPPING: COMPLETE",
      "ENTITY_RELATIONSHIP_LINK: ESTABLISHED",
    ];

    const interval = setInterval(() => {
      const randomLog = mockLogs[Math.floor(Math.random() * mockLogs.length)];
      setLogs(prev => [...prev.slice(-30), `> ${new Date().toLocaleTimeString()} :: ${randomLog}`]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="h-full flex flex-col bg-black/80 border border-[#00ff41]/20 rounded-2xl overflow-hidden font-mono text-[9px]">
      <div className="p-3 border-b border-[#00ff41]/20 flex items-center justify-between bg-[#00ff41]/5">
        <span className="text-[#00ff41] font-bold uppercase tracking-widest flex items-center gap-2">
          <Terminal size={12} /> SEC_ZONE_DELTA
        </span>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 text-[#00ff41]/70 overflow-y-auto scrollbar-hide space-y-1 h-48">
        {logs.map((log, i) => (
          <div key={i} className="hover:bg-[#00ff41]/10 transition-colors">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CyberGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(#00ff41_1px,transparent_1px),linear-gradient(90deg,#00ff41_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
  </div>
);

export const ScanLines = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] overflow-hidden">
    <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
  </div>
);
