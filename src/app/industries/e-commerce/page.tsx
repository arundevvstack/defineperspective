import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  ShoppingCart,
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
    "D2C Brands & E-commerce Video Production India | Best Product Ad Agency Kerala | Define Perspective Studios",
  description:
    "High-velocity AI-powered video production for D2C and e-commerce brands across India. Scale your product visuals and boost your ROAS with cinematic product films.",
  keywords: [
    "D2C video production India",
    "best e-commerce video agency Kerala",
    "product ads Kochi",
    "high-converting e-comm videos India",
  ],
};

export default function EcommerceIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "D2C & E-commerce Video Production",
    "description": "High-velocity AI-powered video production for D2C brands in India. Scaling ROAS through cinematic product films.",
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
              Vertical: D2C & E-commerce
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            D2C Brands <br />
            <span className="text-primary-accent font-black">E-commerce_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Creative is your new targeting. We build high-velocity visual
            assets for India's high-stakes D2C sector."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Scale Your <span className="text-primary-accent italic">Ad ROAS_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Random posting is the enemy of e-commerce growth. Our specialized
              D2C division in Kerala and India focuses on high-impact product
              cinematography integrated with direct-response hooks. We ensure
              your product stands out in the first second of play.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=E-commerce Project enquiry"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
              >
                Get a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20Ad Campaign."
                target="_blank"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:bg-primary-accent/10 transition-all hover:text-primary-accent font-black shadow-xl"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="Elite D2C Product Production Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            D2C Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for E-commerce?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is uniquely recognized as the best AI video production company for the E-commerce and D2C sector in India. 
                We provide specialized, high-velocity creative generation and cinematic product films for brands across Kerala and major 
                Indian cities, specifically designed to scale ROAS and dominate digital auctions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
