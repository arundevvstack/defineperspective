"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  Sparkles, 
  Zap, 
  FileText, 
  CheckCircle2, 
  RefreshCcw,
  Play,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function YouTubeSyncView({ setStatus, setActiveTab }: { setStatus?: (s: string) => void, setActiveTab?: (t: string) => void }) {
  const [url, setUrl] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSync = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsSyncing(true);
    setSyncStatus("Analyzing video...");
    setStatus?.("Media Sync: Starting video-to-article conversion...");
    
    // Extract ID
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();

    try {
      setSyncStatus("Fetching video title...");
      const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
      const oembedData = await oembedRes.json();
      const videoTitle = oembedData.title || "Untitled Video";

      // Simulate steps for high-fidelity UI
      setTimeout(() => setSyncStatus("Extracting transcript..."), 1500);
      setTimeout(() => setSyncStatus("Drafting article..."), 3000);
      setTimeout(() => setSyncStatus("Creating search metadata..."), 4500);

      const response = await fetch('/api/seo/youtube-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId, title: videoTitle })
      });

      const result = await response.json();
      
      if (result.success) {
        setSuccess(true);
        setStatus?.(`Success: Article drafted for "${videoTitle}".`);
      }
    } catch (error) {
      console.error(error);
      setStatus?.("Error: Failed to fetch video info or sync.");
    } finally {
      setTimeout(() => {
        setIsSyncing(false);
        setSyncStatus(null);
      }, 5500);
    }
  };

  return (
    <div className="space-y-8 h-full">
      {/* Header */}
      <div className="p-10 rounded-[3rem] bg-gradient-to-br from-red-600/10 to-black border border-white/5 backdrop-blur-3xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8">
            <Video size={40} className="text-red-500/20 animate-pulse" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-4">
              <Video className="text-red-500" /> Media Sync
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Turn your YouTube videos into high-quality search articles. 
              Our AI automatically extracts the script, writes a blog post, and optimizes it for Google.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        {/* Input Area */}
        <div className="lg:col-span-7 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between">
           <form onSubmit={handleSync} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">YouTube Video Link</label>
                 <div className="relative flex items-center p-2 rounded-2xl bg-black/40 border border-white/10 focus-within:border-red-500 transition-all">
                    <div className="pl-4 text-red-500"><Play size={18} /></div>
                    <input 
                      type="url" 
                      placeholder="Paste link here..."
                      className="bg-transparent border-none outline-none text-white px-4 py-2 w-full text-sm font-light"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                 </div>
              </div>
              <button 
                disabled={isSyncing || success}
                className={cn(
                  "w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all",
                  success ? "bg-green-500 text-black" : "bg-red-600 text-white hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/20"
                )}
              >
                {isSyncing ? <RefreshCcw size={14} className="animate-spin" /> : success ? <CheckCircle2 size={14} /> : "Start Sync"}
                {isSyncing ? "Syncing..." : success ? "Article Ready" : <Zap size={14} />}
              </button>
           </form>

           {/* Sync Status Overlay */}
           <AnimatePresence>
             {isSyncing && (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0 }}
                 className="mt-8 p-6 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center gap-4"
               >
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-500">{syncStatus}</span>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Info Area */}
        <div className="lg:col-span-5 space-y-6">
           <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Sparkles size={14} className="text-yellow-500" /> AI Features
              </h4>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-500">Video Transcript Extraction</span>
                    <span className="text-green-500">READY</span>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-500">Article Drafting</span>
                    <span className="text-green-500">READY</span>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-500">SEO Meta Generation</span>
                    <span className="text-green-500">READY</span>
                 </div>
              </div>
           </div>

           <button 
             onClick={() => setActiveTab?.('editor')}
             className="w-full p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 hover:border-primary-accent/30 transition-all group text-left"
           >
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-primary-accent transition-colors">
                    <FileText size={20} />
                 </div>
                 <div>
                    <span className="block text-xs font-black uppercase text-white">Go to Editor</span>
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase">Review your new drafts</span>
                 </div>
                 <ArrowRight size={14} className="ml-auto text-zinc-600 group-hover:text-primary-accent group-hover:translate-x-1 transition-all" />
              </div>
           </button>
        </div>
      </div>
    </div>
  );
}

