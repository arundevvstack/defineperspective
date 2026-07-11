import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { CheckCircle2, XCircle, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Runway Gen-2 vs DP AI Studio | Enterprise Neural Production",
  description: "Why global brands move beyond Runway Gen-2 prompts and partner with DP AI Studio for complete cinematic neural video pipelines.",
};

export default function RunwayComparisonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Runway Gen-2 vs Professional AI Production Studio",
    "description": "An in-depth comparison of text-to-video SaaS tools versus a full-service AI neural production pipeline.",
    "author": {
      "@type": "Organization",
      "name": "DP AI Studio"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GlassNavbar />
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-32 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            Enterprise Decision Guide
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            Runway vs <br />
            <span className="text-primary-accent">The Pipeline_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Generating a 4-second clip is easy. Directing a 60-second broadcast commercial with perfect brand continuity requires an agency pipeline.
          </p>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden">
             
             {/* Runway / SaaS */}
             <div className="p-16 bg-obsidian space-y-8">
               <h3 className="text-3xl font-black uppercase text-white italic tracking-tighter">
                  Text-to-Video <br /><span className="text-zinc-500 text-lg font-mono tracking-widest">(Runway, Pika)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Prone to AI hallucinations and morphing",
                   "Cannot lock character continuity across shots",
                   "Outputs are unedited raw material",
                   "Requires extensive prompt engineering",
                   "No commercial color grading or VFX compositing"
                 ].map((t, i) => (
                   <li key={i} className="flex gap-4 items-start font-mono text-sm uppercase text-zinc-400">
                     <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" /> {t}
                   </li>
                 ))}
               </ul>
             </div>

             {/* DP AI Studio */}
             <div className="p-16 bg-primary-accent/5 space-y-8">
               <h3 className="text-3xl font-black uppercase text-primary-accent italic tracking-tighter">
                  DP AI Studio <br /><span className="text-primary-accent/70 text-lg font-mono tracking-widest">(Neural Pipeline)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Zero temporal flickering or AI morphing",
                   "100% character and product locking via LoRAs",
                   "Complete post-production editing & sound design",
                   "Managed by expert Neural Cinematographers",
                   "Broadcast-ready 4K deliverables"
                 ].map((t, i) => (
                   <li key={i} className="flex gap-4 items-start font-mono text-sm uppercase text-white font-bold tracking-widest">
                     <CheckCircle2 size={18} className="text-primary-accent shrink-0 mt-0.5" /> {t}
                   </li>
                 ))}
               </ul>
             </div>

          </div>
        </section>

        {/* Deep Dive Analysis */}
        <section className="mb-32 space-y-24">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">Character <span className="text-primary-accent">Continuity</span>_</h2>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm mb-6">
                    The biggest failure point of standalone text-to-video generators is character drift. A protagonist generated in scene one will look fundamentally different in scene two because the AI re-interprets the prompt on every generation.
                 </p>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm">
                    DP AI Studio solves this by training custom Low-Rank Adaptations (LoRAs) on your specific brand assets, actors, or products. This allows our ComfyUI pipeline to lock character and product geometry across hundreds of unique scenes.
                 </p>
              </div>
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Cpu size={80} className="text-primary-accent/30 group-hover:text-primary-accent group-hover:scale-110 transition-all duration-500" />
                 <div className="absolute bottom-6 left-8">
                    <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Neural Character Locking</span>
                 </div>
              </div>
           </div>
        </section>
        
        <section className="mb-32">
           <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}
