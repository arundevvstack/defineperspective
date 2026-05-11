"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Download, 
  TrendingUp, 
  Brain, 
  Sparkles, 
  Trash2, 
  Clock, 
  FileText,
  Mail,
  Briefcase,
  DollarSign,
  ChevronRight,
  Filter,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

import CommandModal from "./CommandModal";
import IntelligenceViewer from "./IntelligenceViewer";

export default function LeadMagnetHubView({ setStatus, activeNode }: { setStatus?: (s: string) => void, activeNode?: string }) {
  const [activeSubTab, setActiveSubTab] = useState("guides"); // guides | leads
  const [guides, setGuides] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [promptTitle, setPromptTitle] = useState("Create New Guide");
  const [promptDesc, setPromptDesc] = useState("Enter the target topic for AI synthesis (e.g., Luxury Real Estate, AI in Fashion).");

  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeSubTab]);

  async function fetchData() {
    setIsLoading(true);
    try {
      if (activeSubTab === "guides") {
        const { data } = await supabase.from('lead_magnets').select('*').order('created_at', { ascending: false });
        setGuides(data || []);
      } else {
        const { data } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
        setLeads(data || []);
      }
    } catch (err) {
      console.error("Data Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDownload = (guide: any) => {
    const element = document.createElement("a");
    const file = new Blob([`
DP STUDIO - PRIVATE INTELLIGENCE REPORT
TITLE: ${guide.title}
CATEGORY: ${guide.category}
SYNOPSIS: ${guide.summary}

--- REPORT CONTENT ---
${guide.content}

--- METADATA ---
Generated At: ${new Date(guide.created_at).toLocaleString()}
Status: Executive Verified
    `], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${guide.title.replace(/\s+/g, '_')}_REPORT.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const generateGuide = async (topic?: string) => {
    if (!topic) return;

    setIsGenerating(true);
    setStatus?.(`AI is searching for trends in ${activeNode} for "${topic}"...`);
    
    try {
      const res = await fetch('/api/seo/generate-lead-magnet', {
        method: 'POST',
        body: JSON.stringify({ topic, node: activeNode })
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setStatus?.(`Success: "${topic}" guide created.`);
        fetchData();
      } else {
        throw new Error(data.details || data.error || "Failed to create guide.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus?.(`Error: ${err.message}`);
      setPromptTitle("System Error");
      setPromptDesc(err.message);
      setIsPromptOpen(true);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8 h-full flex flex-col">
      <CommandModal 
        isOpen={isPromptOpen}
        onClose={() => setIsPromptOpen(false)}
        type={promptTitle === "System Error" ? "alert" : "prompt"}
        title={promptTitle}
        description={promptDesc}
        placeholder="ENTER GUIDE TOPIC..."
        defaultValue="AI Commercial Production Guide 2026"
        confirmLabel="Generate Guide"
        onConfirm={(val) => generateGuide(val)}
      />

      <IntelligenceViewer 
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        guide={selectedGuide}
      />

      {/* Lead Details Modal */}
      <AnimatePresence>
        {isLeadModalOpen && selectedLead && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-obsidian border border-white/10 rounded-[3rem] p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 blur-[80px] -z-0" />
              
              <div className="flex items-center gap-6 mb-12">
                 <div className="h-20 w-20 rounded-3xl bg-primary-accent flex items-center justify-center text-black text-3xl font-black">
                   {selectedLead.name?.charAt(0) || "?"}
                 </div>
                 <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">{selectedLead.name}</h2>
                    <p className="text-primary-accent font-mono text-xs uppercase tracking-widest">{selectedLead.company}</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="space-y-1">
                    <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Industry</span>
                    <p className="text-sm font-black uppercase text-white">{selectedLead.industry}</p>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Region</span>
                    <p className="text-sm font-black uppercase text-white">{selectedLead.region || "Global"}</p>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Budget Range</span>
                    <p className="text-sm font-black uppercase text-green-500">{selectedLead.budget || "N/A"}</p>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Email</span>
                    <p className="text-sm font-mono text-white">{selectedLead.email}</p>
                 </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/5 mb-10">
                 <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest block mb-4">Detected Intent Cluster</span>
                 <p className="text-xs text-zinc-300 font-light italic uppercase tracking-widest">
                   "{selectedLead.interest_cluster || "Inquired about general AI production services and market intelligence."}"
                 </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                 <div className="flex items-center gap-4">
                    <div className={cn(
                      "px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest",
                      selectedLead.score > 80 ? "bg-green-500/10 text-green-500" : "bg-orange-500/10 text-orange-500"
                    )}>
                      Lead Score: {selectedLead.score || 50}
                    </div>
                 </div>
                 <button 
                   onClick={() => setIsLeadModalOpen(false)}
                   className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[10px]"
                 >
                   Acknowledge
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sub Tabs */}
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div className="flex items-center gap-4 bg-black/40 p-1.5 rounded-2xl border border-white/5">
          <button 
            onClick={() => setActiveSubTab("guides")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeSubTab === "guides" ? "bg-primary-accent text-black" : "text-zinc-500 hover:text-white"
            )}
          >
            <BookOpen size={14} />
            Guides
          </button>
          <button 
            onClick={() => setActiveSubTab("leads")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeSubTab === "leads" ? "bg-primary-accent text-black" : "text-zinc-500 hover:text-white"
            )}
          >
            <Users size={14} />
            Leads
          </button>
        </div>

        {activeSubTab === "guides" && (
          <button 
            onClick={() => {
              setPromptTitle("Create New Guide");
              setPromptDesc("Enter the target topic for AI synthesis (e.g., Luxury Real Estate, AI in Fashion).");
              setIsPromptOpen(true);
            }}
            disabled={isGenerating}
            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-primary-accent hover:text-black transition-all group"
          >
            {isGenerating ? <Clock size={16} className="animate-spin" /> : <Sparkles size={16} className="text-primary-accent group-hover:text-black" />}
            Create New Guide
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="py-40 text-center animate-pulse text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              Synchronizing AI Data Pipeline...
            </div>
          ) : activeSubTab === "guides" ? (
            <motion.div 
              key="guides"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {guides.map((guide) => (
                <div key={guide.id} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-primary-accent/30 transition-all">
                  <div 
                    onClick={() => handleDownload(guide)}
                    className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Download size={24} className="text-primary-accent" />
                  </div>
                  <div className="mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary-accent/10 text-primary-accent text-[8px] font-mono uppercase tracking-widest">
                      {guide.category || "AI Strategy"}
                    </span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tighter mb-3 leading-tight">
                    {guide.title}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-6 line-clamp-2">
                    {guide.summary || "No summary available."}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={12} className="text-green-500" />
                      <span className="text-[9px] font-mono text-zinc-600">{guide.download_count || 0} DOWNLOADS</span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedGuide(guide);
                        setIsViewerOpen(true);
                      }}
                      className="text-[9px] font-black uppercase tracking-widest text-primary-accent flex items-center gap-1 hover:underline"
                    >
                      Review Guide <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
              {guides.length === 0 && (
                <div className="col-span-full py-40 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase">No guides synthesized. Start a new mission.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="leads"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-12 gap-4 px-8 mb-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                <div className="col-span-4">Prospect / Company</div>
                <div className="col-span-3">Industry / Intent</div>
                <div className="col-span-2">Region</div>
                <div className="col-span-2">Est. Budget</div>
                <div className="col-span-1 text-right">Score</div>
              </div>
              {leads.map((lead) => (
                <div 
                  key={lead.id} 
                  onClick={() => {
                    setSelectedLead(lead);
                    setIsLeadModalOpen(true);
                  }}
                  className="grid grid-cols-12 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all items-center group cursor-pointer"
                >
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center font-black text-xs text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-colors">
                      {lead.name?.charAt(0) || "?"}
                    </div>
                    <div>
                      <h5 className="font-black text-sm uppercase tracking-widest">{lead.name}</h5>
                      <p className="text-[10px] text-zinc-500 font-mono truncate">{lead.company}</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white uppercase">{lead.industry}</span>
                      <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter truncate">{lead.interest_cluster || "General Interest"}</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] font-mono text-zinc-400">{lead.region || "Global"}</span>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1 text-green-500">
                      <DollarSign size={10} />
                      <span className="text-[10px] font-black">{lead.budget || "N/A"}</span>
                    </div>
                  </div>
                  <div className="col-span-1 text-right">
                    <div className={cn(
                      "inline-flex px-2 py-1 rounded-lg font-black text-[10px]",
                      lead.score > 80 ? "bg-green-500/10 text-green-500" : "bg-orange-500/10 text-orange-500"
                    )}>
                      {lead.score || 50}
                    </div>
                  </div>
                </div>
              ))}
              {leads.length === 0 && (
                <div className="py-40 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase">Pipeline empty. Acquire new leads through guides.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
