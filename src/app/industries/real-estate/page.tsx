import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Building2,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Real Estate & Builders Video Production India | Best Property Films Kerala | Define Perspective Studios",
  description:
    "Elite AI-powered video production for real estate and builders across India. Cinematic property walkthroughs, CGI units, and AI-enhanced real estate marketing reels.",
  keywords: [
    "real estate video production India",
    "best property films Kerala",
    "builder video ads Kochi",
    "AI real estate walkthroughs India",
  ],
};

export default function RealEstateIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate & Property Video Production",
    "description": "Elite AI-powered video production for real estate and builders in India. Cinematic property walkthroughs and AI-enhanced marketing.",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Vertical: Real Estate
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Real Estate <br />
            <span className="text-primary-accent font-black">Builders_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Sell units faster with AI-augmented property films. We build
            high-fidelity visual assets for India's leading builders."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Property <span className="text-primary-accent italic">Clarity_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Static photos and generic walkthroughs no longer capture
              high-intent buyers. Our specialized real estate production in
              Kerala and Kochi utilizes cinematic FPV drone capture and
              AI-generated virtual staging to create property films that drive
              sales velocity.
            </p>
            <Link
              href="/contact?subject=Real Estate Project enquiry"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Launch Property Campaign
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
              alt="Luxury Real Estate Property Film Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Real Estate Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for real estate?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the best AI video production company for the real estate sector in India. 
                We combine cinematic FPV drone cinematography with AI-driven virtual staging and data-backed performance ads 
                to ensure property developers and builders across Kerala and major Indian metros sell units with elite visual authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
