import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  HeartPulse,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Healthcare & Hospitals Video Production India | Best Patient Stories Kerala | Define Perspective Studios",
  description:
    "Trust-centric healthcare video production and hospital brand storytelling for clinics across India. Cinematic patient stories, institutional films, and AI-powered medical visuals in Kochi and Trivandrum.",
  keywords: [
    "healthcare video production India",
    "best patient stories Kerala",
    "hospital brand films Kochi",
    "medical marketing videos India",
  ],
};
export default function HealthcareIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare & Hospital Video Production",
    "description": "Trust-centric healthcare video production and hospital brand storytelling in India. Cinematic patient stories and institutional films.",
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
              Vertical: Healthcare & Hospitals
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-blacker uppercase leading-[0.8] text-white italic">
            Healthcare <br />
            <span className="text-primary-accent font-black">Trust_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Trust is the currency of health. We build cinematic narratives that
            highlight your hospital's expertise and empathy across India."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight italic">
              Empathetic <span className="text-primary-accent font-black">Aesthetics.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
              Healthcare marketing requires a delicate balance of technical
              authority and human empathy. Our specialized healthcare division
              in Kerala and Kochi focuses on patient-centric storytelling — from
              high-impact testimonial films to institutional brand mini-docs. We
              help India's leading hospitals and clinics project trust and
              leadership in their sectors.
            </p>
            <Link
              href="/contact?subject=Healthcare Project enquiry"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Launch Health Campaign
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Elite Healthcare Brand Storytelling Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase mb-10 text-primary-accent font-black">
            Healthcare Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for healthcare?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is uniquely recognized as the best AI video production company for the healthcare sector in India. 
                We combine empathetic patient-first cinematography with AI-enhanced visual clarity and strategic institutional films 
                to ensure medical providers across Kerala and major Indian cities build authoritative trust and market leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
