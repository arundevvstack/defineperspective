"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GlobalMetricsHUD() {
  const pathname = usePathname();
  const [metrics, setMetrics] = useState({
    ping: 12,
    load: "1.42",
    status: "SECURE"
  });

  // Only show on cybersecurity page
  if (pathname !== "/cybersecurity") return null;

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        ping: Math.floor(Math.random() * 20) + 5,
        load: (Math.random() * 5).toFixed(2),
        status: Math.random() > 0.05 ? "SECURE" : "THREAT_DET"
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none hidden md:flex flex-col gap-3 font-mono">
      <div className="flex flex-col border-l-2 border-primary-accent pr-4 pl-3 bg-black/40 backdrop-blur-md p-2">
        <div className="flex items-center gap-2 mb-1">
            <Activity size={10} className="text-primary-accent" />
            <span className="text-[8px] text-zinc-400 uppercase tracking-[0.2em]">CORE_LATENCY</span>
        </div>
        <span className="text-[12px] text-white font-black italic">{metrics.ping} MS</span>
      </div>

      <div className="flex flex-col border-l-2 border-primary-accent pr-4 pl-3 bg-black/40 backdrop-blur-md p-2">
        <div className="flex items-center gap-2 mb-1">
            <Shield size={10} className={metrics.status === "SECURE" ? "text-primary-accent" : "text-red-500 animate-pulse"} />
            <span className="text-[8px] text-zinc-400 uppercase tracking-[0.2em]">NODE_STATUS</span>
        </div>
        <span className={metrics.status === "SECURE" ? "text-primary-accent text-[12px] font-black italic" : "text-red-500 text-[12px] font-black italic"}>
            {metrics.status}
        </span>
      </div>

      <div className="flex flex-col border-l-2 border-primary-accent pr-4 pl-3 bg-black/40 backdrop-blur-md p-2">
        <div className="flex items-center gap-2 mb-1">
            <Zap size={10} className="text-primary-accent" />
            <span className="text-[8px] text-zinc-400 uppercase tracking-[0.2em]">PACKET_THROUGHPUT</span>
        </div>
        <span className="text-[12px] text-white font-black italic">{metrics.load} GB/s</span>
      </div>
      
      <div className="mt-2 text-[7px] text-zinc-700 uppercase tracking-widest pl-3">
          DP_GLOBAL_INT_A1
      </div>
    </div>
  );
}
