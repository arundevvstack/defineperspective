import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "AI Video Production for Finance & Banking | DP AI Studio",
  description: "Secure, commercially cleared AI video production for banks, fintech, and insurance companies. Build trust without sacrificing speed.",
};

export default function FinanceIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Video Production for Finance & Banking",
    "description": "Secure, copyright-cleared AI video workflows for the financial sector.",
    "about": {
      "@type": "Industry",
      "name": "Finance & Banking"
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
            Enterprise Industry Solution
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            Finance & <br />
            <span className="text-primary-accent">Fintech_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            The banking sector demands absolute copyright safety and security. Our proprietary neural pipelines deliver cinematic commercials with zero legal risk.
          </p>
        </header>

        <section className="mb-32">
           <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}
