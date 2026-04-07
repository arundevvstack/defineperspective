"use client";

import React from "react";

export default function GlobalTacticalHUD() {
  return (
    <>
      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.03] scanlines" />
      
      {/* Global Corner Accents */}
      <div className="fixed inset-0 pointer-events-none z-[100] px-6 py-6 hidden md:block">
          {/* Top-Left */}
          <div className="absolute top-6 left-6 flex flex-col gap-1 border-t-2 border-l-2 border-primary-accent/20 p-2 w-16 h-16">
              <span className="text-[7px] text-zinc-700 font-mono">ID_A4</span>
          </div>
          {/* Top-Right */}
          <div className="absolute top-6 right-6 flex flex-col items-end gap-1 border-t-2 border-r-2 border-primary-accent/20 p-2 w-16 h-16">
              <span className="text-[7px] text-zinc-700 font-mono">SYS_2026</span>
          </div>
          {/* Bottom-Right (Opposite Metrics) */}
          <div className="absolute bottom-6 right-6 flex flex-col items-end justify-end gap-1 border-b-2 border-r-2 border-primary-accent/20 p-2 w-16 h-16">
              <span className="text-[7px] text-zinc-700 font-mono opacity-50 uppercase tracking-widest">ENCRYPTED_SSL</span>
          </div>
      </div>

      {/* Global Vertical HUD Strip */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary-accent/10 z-[100] border-r border-primary-accent/5 hidden lg:block" />
    </>
  );
}
