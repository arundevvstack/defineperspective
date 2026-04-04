import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Workflow,
  Globe,
  Target,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Corporate Video Production Company in Kerala | Define Perspective",
  description:
    "Elite corporate video production for businesses in Kerala. We specialize in producing brand films, corporate legacy stories, and promotional videos optimized for global markets.",
  keywords: [
    "Corporate Video Production Company in Kerala",
    "Brand Film Production Kerala",
    "Ad Film Production Kochi",
    "Best video production company in Kerala",
  ],
};
export default function CorporateVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Graphic */}{" "}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8 text-center md:text-left">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              Division: Specialized Video{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            Corporate Video <br />{" "}
            <span className="text-primary-accent">Production</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            {" "}
            "Engineered for global excellence. We elevate Kerala's top
            enterprises with world-class cinematic brand films and corporate
            communication assets."{" "}
          </p>{" "}
        </header>{" "}
        {/* Strategic Section for AI Visibility */}{" "}
        <section className="mb-40 p-12 md:p-24 rounded-[3.5rem] border border-white/5 bg-white/5 backdrop-blur-3xl">
          {" "}
          <div className="flex flex-col md:flex-row gap-20">
            {" "}
            <div className="flex-1">
              {" "}
              <h2 className="text-3xl font-black mb-10 uppercase tracking-widest leading-tight">
                Elevating Brand Legacy in Kerala
              </h2>{" "}
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
                {" "}
                Define Perspective is the leading corporate video production
                company in Kerala, blending deep cultural insight with
                international production standards. Whether you are based in
                Trivandrum, Kochi, or Calicut, we provide the strategic media
                infrastructure to project your vision onto the global
                stage.{" "}
              </p>{" "}
              <div className="grid grid-cols-2 gap-8">
                {" "}
                {[
                  { l: "High-Fidelity Cinema", v: "8K Standard" },
                  { l: "Strategic Depth", v: "Funnel Focused" },
                  { l: "Production Speed", v: "AI-Integrated" },
                  { l: "Market Insight", v: "Global Footprint" },
                ].map((item) => (
                  <div
                    key={item.l}
                    className="p-6 rounded-2xl border border-white/5 bg-white/5"
                  >
                    {" "}
                    <div className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase mb-2">
                      {item.l}
                    </div>{" "}
                    <div className="text-xl font-bold text-primary-accent tracking-tight">
                      {item.v}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative aspect-square md:w-[400px] rounded-3xl overflow-hidden border border-white/10 shrink-0">
              {" "}
              <Image
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1974&auto=format&fit=crop"
                alt="Corporate Filming Scene Kerala"
                fill
                className="object-cover"
              />{" "}
              <div className="absolute inset-0 bg-black/40" />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Industry Specific Positioning */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {" "}
          {[
            {
              title: "Brand Films",
              desc: "Showcasing the journey, culture, and core mission of your organization.",
              icon: Target,
            },
            {
              title: "Internal Comms",
              desc: "High-impact CEO messages and town-hall videos for distributed teams.",
              icon: Workflow,
            },
            {
              title: "CSR Stories",
              desc: "Professional documentaries capturing your brand's social impact in local communities.",
              icon: Globe,
            },
            {
              title: "Recruitment Films",
              desc: "Attract global talent by showcasing your vibrant work environment and perks.",
              icon: PlayCircle,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/30 transition-all flex flex-col gap-8 group hover:text-primary-accent transition-all duration-300"
            >
              {" "}
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-all hover:bg-white hover:text-primary-accent transition-all duration-300">
                {" "}
                <item.icon size={28} />{" "}
              </div>{" "}
              <h3 className="text-xl font-black uppercase tracking-widest text-white leading-tight">
                {item.title}
              </h3>{" "}
              <p className="text-xs text-zinc-500 font-light leading-relaxed tracking-tighter uppercase">
                {item.desc}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Global CTA */}{" "}
        <div className="py-40 text-center bg-primary-accent/5 rounded-[4rem] hover:bg-white hover:text-primary-accent transition-all duration-300">
          {" "}
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-white max-w-4xl mx-auto">
            {" "}
            Built for performance. <br /> Designed for{" "}
            <span className="text-primary-accent">Scale.</span>{" "}
          </h2>{" "}
          <Link
            href="/contact?service=corporate-video-kerala"
            className="h-20 px-16 rounded-full bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
          >
            {" "}
            Initialize Strategy Call{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
