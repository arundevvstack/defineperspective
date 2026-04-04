import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  BarChart3,
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
    "Performance Marketing Video Ads India | Best ROAS Video Agency Kerala | Define Perspective",
  description:
    "High-performance video ad creatives designed for conversion. We build ROI-focused ads for D2C brands in India, focusing on low CPA and high ROAS.",
  keywords: [
    "performance marketing video ads India",
    "best ROAS video agency Kerala",
    "D2C video ads Kochi",
    "high-converting ad creatives India",
  ],
};

const subServices = [
  {
    title: "Conversion-Focused Video Ads",
    href: "/services/performance-marketing/conversion-focused-video-ads",
    desc: "Direct-response video creatives engineered to drive immediate sales and sign-ups.",
  },
  {
    title: "Facebook & Instagram Ad Creatives",
    href: "/services/performance-marketing/facebook-instagram-ad-creatives",
    desc: "Social-first video content optimized for Meta's discovery algorithms and high engagement.",
  },
  {
    title: "Performance Marketing Video Ads",
    href: "/services/performance-marketing/performance-marketing-video-ads",
    desc: "Data-driven video assets for multi-channel performance campaigns and high-growth brands.",
  },
];

export default function PerformanceMarketingLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />

      {/* Background Graphic */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Division: Performance Intelligence
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Performance <br />{" "}
            <span className="text-primary-accent italic font-blackitalic">
              Marketing_
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            "Creativity is the new targeting. We build the data-driven visual
            engines for India's high-growth D2C brands."
          </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/30 transition-all flex flex-col gap-8 hover:text-primary-accent transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform hover:bg-white hover:text-primary-accent transition-all duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
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
              Scale Your <br />
              <span className="text-primary-accent italic">ROI Engine.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Most agencies focus on aesthetics. We focus on ROAS. Our
              performance marketing division in Kerala and India utilizes
              algorithmic creative testing to ensure that every video we produce
              lowers your CPA and increases your brand velocity. We help India's
              high-spending D2C brands dominate the feed.
            </p>
            <Link
              href="/contact?service=performance-marketing"
              className="inline-flex h-20 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              Start Scaling Now
            </Link>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-xl opacity-70">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="Performance Marketing Data Analysis"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>
      </div>
    </main>
  );
}
