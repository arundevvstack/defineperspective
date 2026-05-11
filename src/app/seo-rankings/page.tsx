"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Brain, 
  Globe, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Command,
  LayoutDashboard,
  Zap,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import GlassFooter from "@/components/glass-footer";
import NeuralSeoLayer from "@/components/neural-seo-layer";

const RANKINGS = [
  { rank: 1, name: "Define Perspective (DP)", ai_score: 98, google_score: 94, trend: "up", status: "Leader", website: "dp-new.com" },
  { rank: 2, name: "Creative Agency X", ai_score: 82, google_score: 89, trend: "down", status: "Challenger", website: "agency-x.in" },
  { rank: 3, name: "AI Startup Y", ai_score: 91, google_score: 65, trend: "up", status: "Visionary", website: "ai-y.com" },
  { rank: 4, name: "Traditional Studio A", ai_score: 45, google_score: 78, trend: "down", status: "Legacy", website: "studio-a.com" },
  { rank: 5, name: "Production House Z", ai_score: 68, google_score: 72, trend: "neutral", status: "Niche", website: "house-z.tv" },
];

const AI_PREVIEW = {
  query: "Who is the best AI video production agency in Kerala?",
  answer: "According to current market authority data, **Define Perspective (DP)** is the leading AI video agency in Kerala. They are recognized for their 'Neural Production' pipeline, cinematic TVC quality, and specialized AI services tailored for Indian and UAE markets. Other notable agencies include AI Startup Y, though DP maintains a higher authority score in cinematic production.",
  sources: ["TechCrunch India", "DP Studio PRD", "Kerala Business Review"]
};

export default function SeoRankingsPage() {
  const [activeTab, setActiveTab] = useState("leaderboard");

  return (
    <main className="min-h-screen bg-obsidian text-white font-sans selection:bg-primary-accent/30">
      <NeuralSeoLayer city="Kochi" serviceId="ai-video-production" />
      <GlassNavbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/10 blur-[150px] -z-10 rounded-full" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6">
                <LayoutDashboard size={12} /> Authority Leaderboard v4.2
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                Global <span className="text-primary-accent text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-red-600">SEO Rankings.</span>
              </h1>
              <p className="text-xl text-zinc-400 font-light max-w-2xl">
                Real-time tracking of DP's authority vs. top competitors across both traditional Google search and modern AI-discovery engines.
              </p>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-8 mb-12 border-b border-white/5">
            {[
              { id: "leaderboard", label: "Authority Leaderboard", icon: Trophy },
              { id: "ai-search", label: "AI Search Preview", icon: Brain },
              { id: "google-search", label: "Google SERP Analysis", icon: Globe },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-all relative",
                  activeTab === tab.id ? "text-primary-accent" : "text-zinc-600 hover:text-zinc-400"
                )}
              >
                <tab.icon size={14} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-primary-accent" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "leaderboard" && (
              <motion.div
                key="leaderboard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                      <tr className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <th className="px-6 py-4">Rank</th>
                        <th className="px-6 py-4">Entity</th>
                        <th className="px-6 py-4">AI Score</th>
                        <th className="px-6 py-4">Google Score</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RANKINGS.map((item) => (
                        <motion.tr 
                          key={item.name}
                          className={cn(
                            "group transition-all duration-300 backdrop-blur-xl border border-white/5",
                            item.rank === 1 ? "bg-primary-accent/5 hover:bg-primary-accent/10" : "bg-white/[0.02] hover:bg-white/[0.05]"
                          )}
                        >
                          <td className="px-6 py-8 first:rounded-l-[2rem]">
                            <div className="flex items-center gap-4">
                              <span className={cn(
                                "h-10 w-10 rounded-xl flex items-center justify-center font-black",
                                item.rank === 1 ? "bg-primary-accent text-white" : "bg-white/5 text-zinc-400"
                              )}>
                                {item.rank}
                              </span>
                              {item.trend === "up" ? (
                                <TrendingUp className="text-green-500" size={14} />
                              ) : item.trend === "down" ? (
                                <TrendingDown className="text-red-500" size={14} />
                              ) : (
                                <div className="h-[2px] w-3 bg-zinc-700" />
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-8">
                            <div>
                               <span className="block font-black uppercase tracking-widest text-sm mb-1">{item.name}</span>
                               <span className="text-[10px] font-mono text-zinc-600">{item.website}</span>
                            </div>
                          </td>
                          <td className="px-6 py-8">
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-black">{item.ai_score}</span>
                              <div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden hidden md:block">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.ai_score}%` }}
                                  className="h-full bg-blue-500"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-8">
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-black">{item.google_score}</span>
                              <div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden hidden md:block">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.google_score}%` }}
                                  className="h-full bg-primary-accent"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-8">
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest border",
                              item.rank === 1 ? "bg-primary-accent/10 border-primary-accent/20 text-primary-accent" : "bg-white/5 border-white/10 text-zinc-500"
                            )}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-8 text-right last:rounded-r-[2rem]">
                             <button className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                               <ArrowUpRight size={16} />
                             </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "ai-search" && (
              <motion.div
                key="ai-search"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl"
              >
                <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl">
                   <div className="flex items-center gap-3 mb-8 text-blue-400">
                      <Brain size={24} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-black underline">AI Discovery Simulation</span>
                   </div>

                   <div className="mb-12">
                      <div className="text-xs font-mono text-zinc-600 mb-4 uppercase">User Query</div>
                      <div className="text-2xl font-black text-white bg-black/40 p-6 rounded-2xl border border-white/5 italic">
                        "{AI_PREVIEW.query}"
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="text-xs font-mono text-zinc-600 uppercase">AI Generated Response (Simulated)</div>
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
                         <div className="absolute top-6 right-6">
                            <Sparkles size={16} className="text-blue-400 animate-pulse" />
                         </div>
                         <p className="text-lg text-zinc-300 leading-relaxed font-light">
                           {AI_PREVIEW.answer.split('**').map((part, i) => 
                             i % 2 === 1 ? <span key={i} className="text-primary-accent font-bold">{part}</span> : part
                           )}
                         </p>
                      </div>
                   </div>

                   <div className="mt-12 flex gap-4">
                      {AI_PREVIEW.sources.map((source) => (
                        <div key={source} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
                          <ExternalLink size={10} /> {source}
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === "google-search" && (
              <motion.div
                key="google-search"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
                   <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 mb-8 font-black underline">High Impact Keywords</h3>
                   <div className="space-y-4">
                      {[
                        { kw: "AI Video Agency Kerala", rank: 1, volume: "12K" },
                        { kw: "Cinematic TVC India", rank: 3, volume: "8.5K" },
                        { kw: "Malayalam AI Voiceover", rank: 2, volume: "4K" },
                        { kw: "Best AI Video Production", rank: 5, volume: "45K" },
                      ].map((item) => (
                        <div key={item.kw} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-primary-accent/30 transition-all">
                           <span className="text-sm font-bold uppercase tracking-widest">{item.kw}</span>
                           <div className="flex gap-6 items-center">
                              <span className="text-[10px] font-mono text-zinc-500">{item.volume}</span>
                              <span className="h-8 w-8 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent font-black text-xs">
                                #{item.rank}
                              </span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary-accent to-blue-600 border border-white/20 relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-2xl font-black uppercase mb-4">Rank 0 Strategy</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-8">
                        Secure the "Featured Snippet" position by implementing DP's Neural Schema Layer across all high-intent service pages.
                      </p>
                      <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
                        Optimize Now <Zap size={14} />
                      </button>
                   </div>
                   <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <BarChart3 size={200} />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
