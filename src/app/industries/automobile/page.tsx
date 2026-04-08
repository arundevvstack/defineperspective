import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  CarFront,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Automobile & Dealerships Video Production India | Best Vehicle Cinematography Kerala | Define Perspective Studios",
  description:
    "Elite automobile video production and dealership marketing for luxury car brands across India. Cinematic vehicle walkthroughs, performance ads, and high-spec automotive visuals in Kochi and Trivandrum.",
  keywords: [
    "automobile video production India",
    "best car videographer Kerala",
    "dealership marketing Kochi",
    "luxury vehicle films India",
  ],
};
export default function AutomobileIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automobile & Vehicle Video Production",
    "description": "Elite automobile and dealership video production in India, specializing in cinematic vehicle walkthroughs and performance ads.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Define Perspective",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi/Trivandrum",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-400/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full border border-zinc-400/50 text-[10px] font-mono font-black text-zinc-400 uppercase tracking-widest bg-zinc-400/10 backdrop-blur-md">
              Vertical: Automobile & Dealerships
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Automobile <br />
            <span className="text-zinc-500 font-black">Motor_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Precision Meets Power. We build high-spec automotive visuals for
            India's high-stakes vehicle brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Cinematic <span className="text-zinc-400 font-black">Velocity.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Most vehicle videos look like static catalog shots. We specialize
              in dynamic car-to-car cinematography, precision FPV drone
              tracking, and studio-grade interior lighting. Our Indian and
              Kerala based automotive teams provide luxury dealerships and
              manufacturers with high-impact video ads that stop the scroll and
              drive test-drive bookings across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Automobile Project enquiry"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10"
              >
                Get a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20Vehicle Shoot."
                target="_blank"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:bg-primary-accent/10 transition-all hover:text-primary-accent font-black"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
              alt="Elite Automobile Cinematography Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-zinc-400/10 pointer-events-none" />
          </div>
        </section>
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-zinc-400 font-black">
            Automotive Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for automobiles?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the best AI video production company for the automotive sector.
                We combine high-end car-to-car cinematography and FPV tracking with AI-driven post-production to create 
                cinematic vehicle walkthroughs and performance ads for luxury dealerships and brands across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
