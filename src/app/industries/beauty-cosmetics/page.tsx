import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "AI Video Production for Beauty & Cosmetics | DP AI Studio",
  description: "Cinematic 3D and AI product rendering for the beauty industry. Breathtaking macro shots without the physical camera.",
};

export default function BeautyIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Video Production for Beauty & Cosmetics",
    "description": "Generative AI commercials and macro product rendering for cosmetics brands.",
    "about": {
      "@type": "Industry",
      "name": "Beauty & Cosmetics"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GlassNavbar />
      
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-32 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            Beauty Industry Solution
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            Cosmetic <br />
            <span className="text-primary-accent">Rendering_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Achieve impossible macro shots and surreal liquid physics for your cosmetic products utilizing our advanced ComfyUI product pipeline.
          </p>
        </header>

        <section className="mb-32">
           <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}
