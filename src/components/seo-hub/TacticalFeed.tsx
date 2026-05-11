"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Activity, ShieldAlert, Zap, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export default function TacticalFeed() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetchLogs();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('tactical_logs')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'seo_audit_logs' }, (payload) => {
        setLogs(prev => [payload.new, ...prev].slice(0, 10));
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchLogs() {
    const { data } = await supabase
      .from('seo_audit_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (data) setLogs(data);
  }

  return (
    <div className="mt-8 p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
         <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
               <Terminal size={14} /> Tactical Operations Feed
            </h3>
         </div>
         <span className="text-[8px] font-mono text-zinc-600 uppercase">Real-time AI System Sync Active</span>
      </div>

      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {logs.length > 0 ? logs.map((log) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-4">
                 <div className={cn(
                   "p-2 rounded-lg",
                   log.severity === 'high' ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                 )}>
                    {log.severity === 'high' ? <ShieldAlert size={12} /> : <Zap size={12} />}
                 </div>
                 <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest mb-1">{log.event.replace(/_/g, ' ')}</span>
                    <p className="text-[10px] text-zinc-500 font-mono italic">{log.details}</p>
                 </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                 <span className="text-[8px] font-mono text-zinc-600 uppercase flex items-center gap-1">
                    <Clock size={8} /> {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                 </span>
                 <span className="text-[7px] font-black uppercase text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity">Acknowledged_</span>
              </div>
            </motion.div>
          )) : (
            <div className="py-10 text-center">
               <p className="text-zinc-600 font-mono text-[10px] uppercase animate-pulse">Scanning for tactical events...</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
