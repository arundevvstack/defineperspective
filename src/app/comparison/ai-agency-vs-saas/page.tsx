import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Video Agency vs AI SaaS Tools (Sora, Runway) | DP AI Studio",
  description: "Why enterprise brands hire an AI video production agency instead of relying on DIY AI SaaS tools like Sora, Runway, or Midjourney.",
};

export default function ComparisonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Video Agency vs AI SaaS Tools: What Enterprise Brands Need to Know",
    "description": "An in-depth comparison of hiring a professional AI video production agency versus using DIY AI SaaS tools like OpenAI Sora or Runway Gen-2.",
    "author": {
      "@type": "Organization",
      "name": "DP AI Studio"
    },
    "about": {
      "@type": "Thing",
      "name": "AI Video Production Workflows"
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
            AI Agency vs <br />
            <span className="text-primary-accent">SaaS Tools_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Sora and Runway are powerful tools, but tools don't build brands. Discover why global enterprises partner with a dedicated AI Production Studio.
          </p>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden">
             
             {/* DIY SaaS */}
             <div className="p-16 bg-obsidian space-y-8">
               <h3 className="text-3xl font-black uppercase text-white italic tracking-tighter">
                  DIY SaaS <br /><span className="text-zinc-500 text-lg font-mono tracking-widest">(Runway, Sora, Midjourney)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Prone to AI hallucinations and morphing",
                   "Inconsistent brand aesthetics across shots",
                   "No legal or copyright clearance strategy",
                   "Requires extensive prompt engineering",
                   "Limited to raw outputs (no VFX or grading)"
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
                  DP AI Studio <br /><span className="text-primary-accent/70 text-lg font-mono tracking-widest">(Enterprise Neural Pipeline)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Zero temporal flickering or AI morphing",
                   "100% brand consistency and character locking",
                   "Commercial licensing and copyright safety",
                   "Managed by expert Neural Cinematographers",
                   "Includes cinematic color grading, sound & VFX"
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
                 <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">The <span className="text-primary-accent">Prompt</span> Illusion_</h2>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm mb-6">
                    SaaS tools like Sora and Runway democratize generation, but they don't solve production. A prompt can generate a beautiful 4-second clip, but it cannot direct a cohesive 60-second narrative with precise character continuity, brand-accurate lighting, and timed audio sync.
                 </p>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm">
                    Agencies use these models as *raw material engines*, filtering outputs through specialized ComfyUI pipelines, custom trained LoRAs, and traditional VFX compositing to create enterprise-grade assets.
                 </p>
              </div>
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Cpu size={80} className="text-primary-accent/30 group-hover:text-primary-accent group-hover:scale-110 transition-all duration-500" />
                 <div className="absolute bottom-6 left-8">
                    <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">ComfyUI Node Architecture</span>
                 </div>
              </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group order-2 lg:order-1">
                 <div className="absolute inset-0 bg-primary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <CheckCircle2 size={80} className="text-primary-accent/30 group-hover:text-primary-accent group-hover:scale-110 transition-all duration-500" />
                 <div className="absolute bottom-6 left-8">
                    <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Legal & Copyright Cleared</span>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">Commercial <span className="text-primary-accent">Safety</span>_</h2>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm mb-6">
                    Direct outputs from public AI generators often contain unlicensed IP or morphing artifacts that fail broadcast QA standards. If your brand publishes an ad with uncleared data, the legal risk is massive.
                 </p>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm">
                    DP AI Studio ensures that all training data is commercially licensed, utilizing proprietary models and licensed stock libraries to guarantee that your brand's assets are 100% legally safe for global broadcast and digital ad spend.
                 </p>
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
