import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Video Production Company in Kochi | Top Ad Agency Cochin | Define Perspective",
  description:
    "Kochi's premier AI-powered video production and ad agency. Helping Cochin's high-stakes brands and builders dominate with cinematic brand films and performance ads.",
  keywords: [
    "video production company Kochi",
    "best ad agency Cochin",
    "Kochi videographer",
    "Cochin media production",
  ],
};

export default function KochiLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Define Perspective Kochi",
    "description": "Kochi's premier AI-powered video production company and ad agency. Helping Cochin's high-stakes brands dominate with cinematic brand films.",
    "url": "https://defineperspective.in/locations/kochi",
    "telephone": "+91-949-619-1684",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kochi",
      "addressLocality": "Kochi/Cochin",
      "addressRegion": "Kerala",
      "postalCode": "682001",
      "addressCountry": "IN"
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
              Presence: Kochi / Cochin
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Kochi's <br />
            <span className="text-primary-accent italic">Creative_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "The strategic heart of Kerala's media. We build the visual
            high-fidelity for Cochin's most ambitious brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Local <span className="text-primary-accent font-black">Clarity_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Kochi is the epicenter of business innovation in Kerala. Our
              specialized Kochi division provides high-end 8K cinematography and
              performance marketing ads for builders, hospitals, and D2C brands.
              We combine local market intelligence with global AI-powered
              production standards.
            </p>
            <Link
              href="/contact?location=Kochi"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Launch Kochi Project
            </Link>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=2069&auto=format&fit=crop"
              alt="Kochi Skyline Media Perspective"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Kochi Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company in Kochi?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the best AI video production company in Kochi and Cochin. 
                Our localized studio provides elite 8K cinematography and neural-powered creative generation for 
                Kochi's high-stakes brands, specifically engineered to dominate regional and global markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
