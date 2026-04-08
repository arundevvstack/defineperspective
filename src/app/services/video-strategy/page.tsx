import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  BarChart3,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Video Strategy & Consulting India | Best Video Marketing Kerala | Define Perspective",
  description:
    "Elite video strategy and marketing consulting for brands across India. We build high-performance visual roadmaps, content systems, and ROI-driven campaign plans.",
  keywords: [
    "video marketing strategy India",
    "best video consultant Kerala",
    "video content roadmap Kochi",
    "business video strategy India",
  ],
};

const subServices = [
  {
    title: "Video Marketing Strategy",
    href: "/services/video-strategy/video-marketing-strategy",
    desc: "End-to-end video roadmap development aligned with your business's core KPIs and growth goals.",
  },
  {
    title: "Content Strategy & Planning",
    href: "/services/video-strategy/content-strategy-planning",
    desc: "Architecting high-velocity content systems and multi-channel social media roadmaps.",
  },
  {
    title: "Video Funnel Strategy",
    href: "/services/video-strategy/video-funnel-strategy",
    desc: "Mapping the customer journey through strategic video assets, from awareness to conversion.",
  },
  {
    title: "Campaign Planning & Execution",
    href: "/services/video-strategy/campaign-planning-execution",
    desc: "Tactical management of high-stakes video launches, ensuring maximum reach and impact.",
  },
];

export default function VideoStrategyLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Video Strategy & Consulting",
    "description": "Elite video marketing strategy and consulting in India. ROI-driven roadmaps and content systems for ambitious brands.",
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
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Division: Lifecycle Strategy
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Video <br />
            <span className="text-primary-accent">Strategy_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Execution follows architecture. We build the data-driven blueprints
            for India's high-stakes digital brands."
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40 text-left">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-8 rounded-3xl border border-white/5 bg-white/5 transition-all flex flex-col gap-8 hover:bg-primary-accent/5 shadow-2xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-[11px] text-zinc-500 font-light leading-relaxed uppercase tracking-widest">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                View Node
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none italic">
              Architect Your <br />
              <span className="text-primary-accent font-black">Growth Hub.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Most brands produce content at random. We build specialized video
              marketing roadmaps in Kerala and across India that align your
              visual assets with your business goals. From multi-channel social
              media calendars to high-impact campaign launches, we ensure your
              execution is backed by architectural depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?service=video-strategy"
                className="inline-flex h-20 px-12 rounded-full border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
              >
                Get a Quote <ArrowRight size={18} className="ml-4" />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="inline-flex h-20 px-12 rounded-full border border-white/20 text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:bg-primary-accent/10 hover:text-primary-accent transition-all shadow-xl font-black"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl opacity-70">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Strategic Video Roadmap Charts"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Strategy Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for marketing strategy?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is uniquely positioned as the best AI video production company for marketing strategy in India. 
                We don't just create visuals; we architect AI-enhanced video roadmaps that integrate deep performance analytics 
                to ensure your brand films deliver measurable ROI across all digital channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
