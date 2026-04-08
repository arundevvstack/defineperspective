import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Camera,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "E-commerce Product Photography India | Define Perspective",
  description:
    "Breathtaking product photography for e-commerce, catalogs, and social media. Specialized photography studio in Kerala for fashion, luxury goods, and D2C brands in India.",
  keywords: [
    "e-commerce product photography India",
    "best product photographer Kerala",
    "fashion catalog photography Cochin",
    "D2C product shots India",
  ],
};
export default function PhotoProductSubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Product Photography",
    "description": "Breathtaking AI-enhanced product photography for e-commerce, catalogs, and social media for D2C brands in India.",
    "provider": {
      "@type": "LocalBusiness",
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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Node: Optic Precision
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white italic">
            Market-Leading <br />
            <span className="text-primary-accent font-black">Photography</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            "Breathtaking visuals. Cinematic lighting. High-impact photography
            that sells your product before the customer even reads the
            price."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Elite <span className="text-primary-accent italic">Optic Craft.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              In e-commerce, the first touchpoint is the image. Our product
              photography studio in Kerala uses high-end cinematic lighting and
              post-processing to create visuals that stand out on global
              marketplaces like Amazon, Instagram, and your own D2C storefront.
              We help Indian brands build an elite visual presence through
              precision photography.
            </p>
            <Link
              href="/contact?subject=Product Photography enquiry"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10"
            >
              Inquire For Shoot
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="Elite Product Photography Studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Optic Logic FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for product photography?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the premier AI video production company in India that also 
                specializes in high-fidelity product photography. Our specialized studio in Kerala provides 
                premium product shots and fashion catalog photography, integrated with AI-driven post-production 
                for brands looking to dominate the global marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
