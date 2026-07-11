import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { CheckCircle2, XCircle, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Synthesia Alternative for Enterprise Brands | DP AI Studio",
  description: "Why global brands graduate from basic AI avatar tools like Synthesia to cinematic neural rendering pipelines at DP AI Studio.",
};

export default function SynthesiaAlternativePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Enterprise Synthesia Alternative: Moving Beyond Basic AI Avatars",
    "description": "An in-depth comparison of basic AI avatar tools vs professional neural rendering pipelines for corporate video.",
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
            Enterprise Comparison Guide
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            Beyond Basic <br />
            <span className="text-primary-accent">Avatars_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Synthesia is great for internal training. DP AI Studio is built for global broadcast and high-converting performance marketing.
          </p>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden">
             
             {/* Synthesia / SaaS */}
             <div className="p-16 bg-obsidian space-y-8">
               <h3 className="text-3xl font-black uppercase text-white italic tracking-tighter">
                  Basic Avatars <br /><span className="text-zinc-500 text-lg font-mono tracking-widest">(Synthesia, HeyGen)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Robotic micro-expressions and stiff body language",
                   "Limited to simple frontal talking-head formats",
                   "Stock avatars used by thousands of other brands",
                   "No cinematic camera movement or depth of field",
                   "Best suited for low-budget internal training"
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
                  DP AI Studio <br /><span className="text-primary-accent/70 text-lg font-mono tracking-widest">(Cinematic Pipeline)</span>
               </h3>
               <ul className="space-y-6">
                 {[
                   "Photorealistic emotion and dynamic micro-expressions",
                   "Full 3D camera movement and cinematic lighting",
                   "Exclusive, brand-owned neural actors (Zero reuse)",
                   "Integration with real-world VFX and compositing",
                   "Built for global TVCs and high-end digital ads"
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
                 <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">The <span className="text-primary-accent">Uncanny</span> Valley_</h2>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm mb-6">
                    Off-the-shelf avatar tools rely on basic lip-sync models overlaid on static footage. This creates the infamous "uncanny valley" effect—where the human eye instantly recognizes the performance as synthetic, destroying brand trust in high-stakes commercial environments.
                 </p>
                 <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-sm">
                    At DP AI Studio, we utilize advanced latent space editing and custom facial rig tracking to map genuine human micro-expressions onto synthetic characters, achieving 100% photorealistic commercial fidelity.
                 </p>
              </div>
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Cpu size={80} className="text-primary-accent/30 group-hover:text-primary-accent group-hover:scale-110 transition-all duration-500" />
                 <div className="absolute bottom-6 left-8">
                    <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Advanced Expression Mapping</span>
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
