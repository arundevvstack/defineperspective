"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Exception Caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-obsidian text-white p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-accent-rgb),0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-xl w-full text-center space-y-8 p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md">
        <div className="h-20 w-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-400">
          <AlertTriangle size={36} />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-widest text-white">System Anomaly</h2>
          <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
            The neural rendering engine encountered an unexpected fault. Our safeguards have prevented a critical failure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            <RefreshCw size={16} /> Reinitialize
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary-accent text-black hover:scale-105 transition-transform text-xs font-black uppercase tracking-widest"
          >
            Return to Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
