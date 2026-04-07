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
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />

      {/* Background Graphic */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Division: Lifecycle Strategy
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Video <br />{" "}
            <span className="text-primary-accent italic">Strategy_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            "Execution follows architecture. We build the data-driven blueprints
            for India's high-stakes digital brands."
          </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/30 transition-all flex flex-col gap-8 hover:text-primary-accent transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform hover:bg-white hover:text-primary-accent transition-all duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                View Node{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Strategic Section */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">
              Architect Your <br />
              <span className="text-primary-accent italic font-blackitalic underline decoration-primary-accent/30">
                Growth Hub.
              </span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Most brands produce content at random. We build specialized video
              marketing roadmaps in Kerala and across India that align your
              visual assets with your business goals. From multi-channel social
              media calendars to high-impact campaign launches, we ensure your
              execution is backed by architectural depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6"> <Link href="/contact?service=video-strategy" className="inline-flex h-20 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl shadow-primary-accent/20 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" > Get a Quote <ArrowRight size={18} /> </Link> <Link href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project." target="_blank" className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 [var(--glass-white)] text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-3 hover:text-primary-accent transition-all duration-300" > Chat on WhatsApp </Link> </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl opacity-70">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Strategic Video Roadmap Charts"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>
      </div>
    </main>
  );
}
