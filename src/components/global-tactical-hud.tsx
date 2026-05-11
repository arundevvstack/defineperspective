"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function GlobalTacticalHUD() {
  const pathname = usePathname();
  
  if (pathname !== "/cybersecurity") return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .scanlines {
          position: relative;
          overflow: hidden;
        }
        .scanlines::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.1) 50%
          );
          background-size: 100% 4px;
          z-index: 10;
          pointer-events: none;
        }
      `}} />
      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.03] scanlines" />
      
      {/* Global Corner Accents */}
      <div className="fixed inset-0 pointer-events-none z-[100] px-6 py-6 hidden md:block">
          {/* Top-Left - Reduced size and moved to avoid header overlap */}
          <div className="absolute top-4 left-4 flex flex-col gap-1 border-t border-l border-primary-accent/10 p-1 w-12 h-12">
              <span className="text-[5px] text-zinc-800 font-mono">NODE_01</span>
          </div>
          {/* Top-Right */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1 border-t border-r border-primary-accent/10 p-1 w-12 h-12">
              <span className="text-[5px] text-zinc-800 font-mono">SYS_2026</span>
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
