"use client";

import { useState } from "react";
import { MessageCircle, Loader2 } from "lucide-react";

export default function ConceptGenerator() {
  const [brandName, setBrandName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [campaignMood, setCampaignMood] = useState("Neural Cinema");
  const [targetPlatform, setTargetPlatform] = useState("Instagram");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleGenerate = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!brandName || !productCategory) {
      setResultMessage("Please provide Brand Name and Category.");
      return;
    }
    
    setIsGenerating(true);
    setResultMessage("Initializing Neural Engine...");

    try {
      const res = await fetch("/api/generate-concept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brandName, productCategory, campaignMood, targetPlatform })
      });
      
      const data = await res.json();
      if (res.ok) {
        setResultMessage(data.message || "Concept generation successful! Proposal sent.");
      } else {
        setResultMessage(data.error || "An error occurred during generation.");
      }
    } catch (error) {
      setResultMessage("Connection to Neural Engine failed. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="section-pad bg-obsidian border-y border-white/5 relative overflow-hidden" id="concept-generator">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/10 blur-[150px] rounded-full" />
      </div>
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-10">
            <span className="label-mono">Interactive Node</span>
            <h2 className="heading-section">Generate Your AI <br /><span className="text-primary-accent">Commercial Concept_</span></h2>
            <p className="body-copy opacity-50 uppercase tracking-widest leading-relaxed">
              Input your brand parameters and our proprietary Neural Engine will draft a high-authority cinematic commercial concept instantly and deliver a strategic PDF proposal.
            </p>
            <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/5">
              <div className="h-12 w-12 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent" aria-hidden="true">
                <MessageCircle size={24} />
              </div>
              <span className="label-mono !text-[11px] !text-zinc-400">1,200+ Concepts Generated This Week</span>
            </div>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-black/60 backdrop-blur-3xl border border-white/10 shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="brand-name" className="label-mono !text-[9px] opacity-40">Brand Name</label>
                  <input id="brand-name" value={brandName} onChange={(e) => setBrandName(e.target.value)} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all text-white placeholder-zinc-600" placeholder="e.g. SHE Luxury" aria-label="Brand Name" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="product-category" className="label-mono !text-[9px] opacity-40">Product Category</label>
                  <input id="product-category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all text-white placeholder-zinc-600" placeholder="e.g. Fashion" aria-label="Product Category" />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="campaign-mood" className="label-mono !text-[9px] opacity-40">Campaign Mood</label>
                <select id="campaign-mood" value={campaignMood} onChange={(e) => setCampaignMood(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-mono focus:border-primary-accent outline-none transition-all appearance-none text-white">
                  <option>Neural Cinema</option>
                  <option>High-Velocity Performance</option>
                  <option>Luxury Minimalist</option>
                  <option>Cyberpunk Elegance</option>
                </select>
              </div>
              <div className="space-y-3">
                <span className="label-mono !text-[9px] opacity-40 block mb-3">Target Platform</span>
                <div className="flex gap-4">
                  {["Instagram", "YouTube", "Theater", "TVC"].map(p => (
                    <button 
                      key={p} 
                      type="button" 
                      onClick={() => setTargetPlatform(p)}
                      className={`flex-1 py-3 rounded-lg border text-[9px] font-mono transition-all ${targetPlatform === p ? 'bg-primary-accent text-black border-primary-accent' : 'bg-white/5 text-white border-white/5 hover:bg-white/10'}`} 
                      aria-label={`Select ${p} as target platform`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              
              {resultMessage && (
                <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 text-center animate-pulse">
                  {resultMessage}
                </div>
              )}

              <button 
                type="button" 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-6 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition-all shadow-xl shadow-primary-accent/20 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3" 
                aria-label="Generate AI Commercial Concept"
              >
                {isGenerating ? <><Loader2 className="animate-spin" size={16} /> Generating...</> : "Generate Concept_"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
