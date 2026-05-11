"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, Terminal, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-redirect if already logged in
  useEffect(() => {
    const auth = localStorage.getItem("dp_studio_auth");
    if (auth === "authorized") {
      router.push("/seo-hub");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Strategic Credential Verification
    setTimeout(() => {
      if (username === "dp admin" && password === "NewTarget@2026") {
        setIsSuccess(true);
        localStorage.setItem("dp_studio_auth", "authorized");
        setTimeout(() => router.push("/seo-hub"), 1500);
      } else {
        setError("AUTHENTICATION_FAILED: ACCESS_DENIED");
        setIsSubmitting(false);
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(235,30,44,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-20" />
      
      <div className="relative z-10 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] border border-white/10 rounded-[3rem] backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(235,30,44,0.05)]"
        >
          {/* Header */}
          <div className="p-10 border-b border-white/5 flex flex-col items-center text-center">
            <motion.div 
              animate={isSuccess ? { scale: [1, 1.2, 1], rotate: [0, 360, 0] } : {}}
              className="h-16 w-16 rounded-2xl bg-primary-accent flex items-center justify-center text-black mb-6 shadow-lg shadow-primary-accent/20"
            >
              <Lock size={28} />
            </motion.div>
            <h1 className="text-3xl font-blacker uppercase italic tracking-tighter leading-none mb-2">
              DP STUDIO_
            </h1>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-black">
              Executive Access Terminal
            </p>
          </div>

          {/* Form */}
          <div className="p-10">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-10 text-center"
                >
                  <div className="flex items-center justify-center gap-3 text-primary-accent mb-4">
                    <ShieldCheck size={24} className="animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest font-black">ACCESS_GRANTED</span>
                  </div>
                  <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Initializing Neural Interface...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-zinc-600 uppercase font-black ml-4">Terminal User</label>
                    <div className="relative">
                      <input 
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-primary-accent/50 transition-all text-white placeholder:text-zinc-800"
                        placeholder="ENTER USERNAME"
                      />
                      <Terminal className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800" size={16} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-zinc-600 uppercase font-black ml-4">Access Key</label>
                    <div className="relative">
                      <input 
                        required
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-primary-accent/50 transition-all text-white placeholder:text-zinc-800"
                        placeholder="ENTER ENCRYPTION KEY"
                      />
                      <Sparkles className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800" size={16} />
                    </div>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 text-red-500 bg-red-500/5 p-4 rounded-xl border border-red-500/20"
                    >
                      <ShieldAlert size={16} />
                      <span className="text-[9px] font-mono uppercase tracking-widest font-black">{error}</span>
                    </motion.div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary-accent text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-accent/10 mt-8 group"
                  >
                    {isSubmitting ? "VERIFYING..." : "Establish Secure Link"}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 bg-white/[0.01] border-t border-white/5 flex justify-center gap-8 text-[8px] font-mono text-zinc-800 uppercase tracking-widest">
            <span>ENCRYPTION: AES-256</span>
            <span>NODE: SECURE_ALPHA</span>
            <span>OS: DP_NEURAL_v4.2</span>
          </div>
        </motion.div>

        <p className="text-center mt-10 text-zinc-700 text-[8px] font-mono uppercase tracking-widest">
          Unauthorized access attempts are logged and reported to DP Security Command.
        </p>
      </div>
    </main>
  );
}
