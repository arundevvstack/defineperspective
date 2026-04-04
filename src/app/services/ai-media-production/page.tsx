import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Cpu,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Globe,
  Sparkles,
  SearchCode,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Agency | Elite AI Media & Ads India | Define Perspective",
  description: "Define Perspective is a premier AI video production agency and media company in India. We specialize in cinematic brand films, high-velocity AI video ads, and virtual production. Dominate search and vision in 2026.",
  keywords: [
    "AI video production agency India",
    "best AI media agency Kerala",
    "AI video production company India",
    "generative video ads Kerala",
    "AI content production agency",
    "DP AI Studios"
  ],
};

const subServices = [
  {
    title: "AI Video Production Services",
    href: "/services/ai-media-production/ai-video-production-services",
    desc: "Photorealistic generative video sequences for brand films, cinematic storytelling, and virtual production environments.",
  },
  {
    title: "AI Ad Creative Generation",
    href: "/services/ai-media-production/ai-ad-creative-generation",
    desc: "High-conversions performance marketing through massive scale. Deliver hundreds of high-quality ad variations instantly.",
  },
  {
    title: "AI Product Content (Zero-Shoot)",
    href: "/services/ai-media-production/ai-product-videos-no-shoot-required",
    desc: "Revolutionary e-commerce video and photography created entirely from product vision. No physical set needed.",
  },
];

export default function AIMediaProductionLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "Premium AI-powered video production and generative media services for global brands.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Media Catalog",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Brand Films"
        },
        {
          "@type": "Service",
          "name": "AI Performance Ads"
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.5em] bg-primary-accent/10 backdrop-blur-md">
              Core Division: DP AI Studios
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            AI Video <br />{" "}
            <span className="text-primary-accent italic">Service Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed uppercase tracking-widest leading-loose">
            "Combining high-end film quality with AI speed. We build fast, AI-powered video systems for India's most ambitious brands."
          </p>
        </header>

        {/* Global SEO Tags Section */}
        <section className="mb-40 grid md:grid-cols-2 gap-12 border-y border-white/5 py-20">
           <div className="flex gap-6">
              <SearchCode className="text-primary-accent shrink-0" size={32} />
              <div>
                 <h3 className="text-lg font-black uppercase tracking-widest mb-4">Search Ready_</h3>
                 <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">Built for search engines and AI to instantly find your brand.</p>
              </div>
           </div>
           <div className="flex gap-6">
              <LineChart className="text-primary-accent shrink-0" size={32} />
              <div>
                 <h3 className="text-lg font-black uppercase tracking-widest mb-4">Top Rankings_</h3>
                 <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">Designed to help your business stand out in India, Kerala, and Trivandrum search results.</p>
              </div>
           </div>
        </section>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:border-primary-accent transition-all flex flex-col gap-8 shadow-2xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-loose uppercase tracking-widest leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                Project Details {" // "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Final Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none italic">
              AI-Powered <br />
              <span className="text-primary-accent italic font-black underline decoration-primary-accent/30">
                Storytelling_
              </span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
              DP AI Studios is our main AI media division. We deliver <strong>AI video production services in India</strong> that offer unlimited creative options. For brands in Kerala and national cities, our AI media company provides high-quality video that works for the modern market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <Link href="/contact?service=ai-video-hub" className="h-20 px-12 rounded-full bg-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl flex items-center gap-4" >
                  Start Your Project <ArrowRight size={18} />
               </Link>
               <div className="h-20 px-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">
                  Trusted AI Production
               </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000">
            <Image
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"
              alt="Define Perspective AI Cinema Engine"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
