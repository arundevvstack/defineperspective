"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  Save, 
  Globe, 
  Search,
  Eye,
  PenLine,
  Sparkles,
  Share2,
  Languages,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export default function NeuralEditorView({ setStatus }: { setStatus?: (s: string) => void }) {
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingSocial, setIsGeneratingSocial] = useState(false);
  const [socialPosts, setSocialPosts] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  async function generateSocialPosts() {
    if (!selectedPage) return;
    setIsGeneratingSocial(true);
    setStatus?.("GENERATING_SOCIAL: Drafting tailored campaigns for LinkedIn, IG, and X...");
    const res = await fetch('/api/seo/generate-social-posts', {
      method: 'POST',
      body: JSON.stringify({ 
        title: selectedPage.title, 
        content: selectedPage.content,
        url: `https://defineperspective.in/services/autonomous/${selectedPage.slug.split('/').pop()}`
      })
    });
    const data = await res.json();
    if (data.posts) {
      setSocialPosts(data.posts);
      setStatus?.("SOCIAL_READY: Strategic campaign drafted and copied to preview cards.");
    }
    setIsGeneratingSocial(false);
  }

  async function fetchPages() {
    setLoading(true);
    console.log("Fetching pages from content_pages...");
    const { data, error } = await supabase
      .from('content_pages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Supabase Fetch Error:", error);
      alert(`Connection Error: ${error.message}`);
    }
    
    if (data) {
      console.log(`Successfully fetched ${data.length} pages.`);
      setPages(data);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!selectedPage) return;
    setIsSaving(true);
    setStatus?.("Saving: Updating your content in the database...");
    
    try {
      const { error } = await supabase
        .from('content_pages')
        .update({
          title: selectedPage.title,
          content: selectedPage.content,
          meta_title: selectedPage.meta_title,
          meta_description: selectedPage.meta_description,
          status: selectedPage.status,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedPage.id);
      
      if (error) throw error;

      setStatus?.("Success: Changes saved and synchronized.");
      fetchPages(); // Refresh the list
    } catch (err: any) {
      console.error("Save Error:", err);
      setStatus?.(`Error: Could not save changes. ${err.message || ""}`);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!selectedPage) return;
    if (!confirm(`Are you sure you want to delete "${selectedPage.title}"? This cannot be undone.`)) return;
    
    setIsSaving(true);
    setStatus?.("Deleting: Removing content from database...");
    
    try {
      // 1. Clear associated media sync records first (Fix FK constraint)
      await supabase
        .from('youtube_sync')
        .delete()
        .eq('generated_article_id', selectedPage.id);

      // 2. Clear the actual article
      const { error } = await supabase
        .from('content_pages')
        .delete()
        .eq('id', selectedPage.id);
      
      if (error) throw error;

      setStatus?.("Success: Content and media link deleted.");
      // Instant UI update
      setPages(prev => prev.filter(p => p.id !== selectedPage.id));
      setSelectedPage(null);
    } catch (err: any) {
      console.error("Delete Error:", err);
      setStatus?.(`Error: Could not delete. ${err.message || ""}`);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Page List */}
      <div className="lg:col-span-4 space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black uppercase tracking-tighter">Content Queue</h3>
          <button onClick={fetchPages} className="text-zinc-500 hover:text-white transition-colors">
            <Clock size={16} />
          </button>
        </div>

        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <div className="py-20 text-center animate-pulse text-zinc-600 font-mono text-xs">HYDRATING QUEUE...</div>
          ) : pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPage(page)}
              className={cn(
                "w-full p-5 rounded-2xl border text-left transition-all group",
                selectedPage?.id === page.id 
                  ? "bg-primary-accent/10 border-primary-accent/30 shadow-[0_0_20px_rgba(235,30,44,0.1)]" 
                  : "bg-white/5 border-white/5 hover:border-white/10"
              )}
            >
              <div className="flex items-start justify-between mb-2">
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest",
                  page.status === 'published' ? "bg-green-500/20 text-green-500" : "bg-orange-500/20 text-orange-500"
                )}>
                  {page.status}
                </span>
                <span className="text-[8px] font-mono text-zinc-600">{new Date(page.created_at).toLocaleDateString()}</span>
              </div>
              <h4 className="font-bold uppercase tracking-widest text-[11px] truncate group-hover:text-primary-accent transition-colors">
                {page.title}
              </h4>
              <p className="text-[9px] text-zinc-500 font-mono mt-1 truncate">/{page.slug}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor Area */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          {selectedPage ? (
            <motion.div
              key={selectedPage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">AI Content Editor</h2>
                  <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Editing: {selectedPage.slug}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={async () => {
                      if (!selectedPage) return;
                      setIsSaving(true);
                      setStatus?.("Refining: Optimizing content for search...");
                      const res = await fetch('/api/seo/enhance-content', {
                        method: 'POST',
                        body: JSON.stringify({ title: selectedPage.title, content: selectedPage.content })
                      });
                      const data = await res.json();
                      if (data.enhancedContent) {
                        setSelectedPage({...selectedPage, content: data.enhancedContent});
                        setStatus?.("Success: Content optimized for brand voice.");
                      }
                      setIsSaving(false);
                    }}
                    disabled={isSaving}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-primary-accent hover:text-black transition-all group"
                  >
                    <Sparkles size={14} className="group-hover:scale-110 transition-transform" />
                    AI Refine
                  </button>
                  <button 
                    onClick={generateSocialPosts}
                    disabled={isGeneratingSocial}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all group"
                  >
                    {isGeneratingSocial ? <Clock size={14} className="animate-spin" /> : <Share2 size={14} className="group-hover:rotate-12 transition-transform" />}
                    Social Auto
                  </button>
                  <button 
                    onClick={async () => {
                      if (!selectedPage) return;
                      setIsSaving(true);
                      const targetLang = prompt("Select Language (ml for Malayalam, ar for Arabic):", "ml");
                      if (!targetLang) { setIsSaving(false); return; }
                      
                      setStatus?.(`Translating: Adapting content to ${targetLang === 'ml' ? 'Malayalam' : 'Arabic'}...`);
                      const res = await fetch('/api/seo/translate-page', {
                        method: 'POST',
                        body: JSON.stringify({ 
                          title: selectedPage.title, 
                          content: selectedPage.content,
                          targetLang 
                        })
                      });
                      const data = await res.json();
                      if (data.translatedContent) {
                        setSelectedPage({
                          ...selectedPage, 
                          title: data.translatedTitle,
                          content: data.translatedContent,
                          language: targetLang
                        });
                        setStatus?.(`Success: Page translated to ${targetLang.toUpperCase()}.`);
                      }
                      setIsSaving(false);
                    }}
                    disabled={isSaving}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all group"
                  >
                    <Languages size={14} className="group-hover:scale-110 transition-transform" />
                    Translate
                  </button>
                  <select 
                    value={selectedPage.status}
                    onChange={(e) => setSelectedPage({...selectedPage, status: e.target.value})}
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[9px] font-mono uppercase tracking-widest outline-none focus:border-primary-accent/50 cursor-pointer"
                  >
                    <option value="draft">Draft</option>
                    <option value="review">Review</option>
                    <option value="published">Published</option>
                  </select>
                   <button 
                    onClick={handleDelete}
                    disabled={isSaving}
                    className="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-red-500 hover:text-white transition-all group"
                  >
                    <Trash2 size={14} className="group-hover:scale-110 transition-transform" />
                    Delete
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-6 py-3 bg-primary-accent text-black rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-accent/20"
                  >
                    {isSaving ? <Clock size={14} className="animate-spin" /> : <Save size={14} />}
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Fields */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-zinc-600 font-black">Page Title</label>
                  <input 
                    type="text" 
                    value={selectedPage.title}
                    onChange={(e) => setSelectedPage({...selectedPage, title: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:border-primary-accent/50 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-600 font-black">Meta Title</label>
                    <input 
                      type="text" 
                      value={selectedPage.meta_title}
                      onChange={(e) => setSelectedPage({...selectedPage, meta_title: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-primary-accent/50 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-600 font-black">Meta Description</label>
                    <input 
                      type="text" 
                      value={selectedPage.meta_description}
                      onChange={(e) => setSelectedPage({...selectedPage, meta_description: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-primary-accent/50 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-zinc-600 font-black">Editorial Content (Markdown)</label>
                  <textarea 
                    rows={12}
                    value={selectedPage.content}
                    onChange={(e) => setSelectedPage({...selectedPage, content: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm leading-relaxed font-light focus:border-primary-accent/50 outline-none custom-scrollbar"
                  />
                </div>

                {/* AI Suggestions Panel */}
                <div className="p-6 rounded-2xl bg-primary-accent/5 border border-primary-accent/10 space-y-4">
                   <h4 className="text-[10px] font-mono uppercase font-black text-primary-accent flex items-center gap-2">
                      <Sparkles size={12} /> AI Optimization
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Market Momentum", value: "95% (Critical)", color: "text-green-500" },
                        { label: "Target Region", value: selectedPage.title.includes('Kerala') ? 'Kerala / Kochi' : 'National (India)', color: "text-white" },
                        { label: "Semantic Gap", value: "High Authority Capture", color: "text-blue-500" },
                        { label: "Recommended Density", value: "2.4% AI Keywords", color: "text-white" }
                      ].map((s, i) => (
                        <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5">
                           <span className="block text-[8px] font-mono text-zinc-500 uppercase mb-1">{s.label}</span>
                           <span className={cn("text-xs font-black uppercase tracking-widest", s.color)}>{s.value}</span>
                        </div>
                      ))}
                   </div>
                   <div className="pt-2">
                      <p className="text-[10px] text-zinc-400 italic">
                        "Strategy: Emphasize 'AI Pipelines' and 'Cinematic AI' to outperform regional competitors in ${selectedPage.title.includes('Kerala') ? 'Kerala' : 'India'}."
                      </p>
                   </div>
                </div>

                {/* Social Posts Panel */}
                <AnimatePresence>
                  {socialPosts && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-6 overflow-hidden pt-6 border-t border-white/5"
                    >
                       <h4 className="text-[10px] font-mono uppercase font-black text-blue-500 flex items-center gap-2">
                          <Share2 size={12} /> Social Media Campaign
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {Object.entries(socialPosts).map(([platform, text]: [string, any]) => (
                            <div key={platform} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
                               <div className="flex items-center justify-between">
                                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">{platform}</span>
                                  <button 
                                    onClick={() => {
                                      navigator.clipboard.writeText(text);
                                      alert(`${platform} post copied to clipboard!`);
                                    }}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-600 hover:text-white"
                                  >
                                     <Save size={14} />
                                  </button>
                               </div>
                               <p className="text-[10px] text-zinc-400 font-light leading-relaxed whitespace-pre-wrap max-h-[150px] overflow-y-auto custom-scrollbar">
                                  {text}
                                </p>
                            </div>
                          ))}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Preview Hint */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-blue-500">
                  <Globe size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Live Schema Active</span>
                </div>
                <button 
                  onClick={() => window.open(`/services/autonomous/${selectedPage.slug.split('/').pop()}`, '_blank')}
                  className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  Preview in Browser <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[3rem] text-center p-12">
               <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center text-zinc-700 mb-6">
                  <FileText size={40} />
               </div>
               <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Editor Standby</h3>
               <p className="text-zinc-500 text-sm max-w-xs mx-auto">Select a page from the queue to begin the AI optimization and review process.</p>
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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(235, 30, 44, 0.3);
        }
      `}</style>
    </div>
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
