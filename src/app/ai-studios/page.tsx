import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Cpu,
  Sparkles,
  Wand2,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "DP AI Studios | High-Velocity AI Media & CGI Production India",
  description:
    "The next generation of media production. DP AI Studios provides generative AI video, photorealistic avatars, and AI-CGI virtual production for global brands.",
  keywords: [
    "AI video production company India",
    "DP AI Studios",
    "generative AI media Kerala",
    "AI CGI virtual production India",
  ],
};
export default function AIStudiosPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Cinematic Backgrounds */}{" "}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-transparent border-2 border-primary-accent/10 blur-[200px] rounded-full pointer-events-none hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-transparent border-2 border-primary-accent/10 blur-[180px] rounded-full pointer-events-none hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 text-center flex flex-col items-center">
          {" "}
          <div className="h-16 w-16 rounded-2xl bg-transparent border-2 border-primary-accent flex items-center justify-center text-primary-accent-fg mb-12 shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
            {" "}
            <Cpu size={36} />{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-[9.6rem] font-black tracking-tighter uppercase mb-12 leading-[0.8] text-white">
            {" "}
            DP AI{" "}
            <span className="text-primary-accent italic">Studios_</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl leading-relaxed uppercase tracking-widest">
            {" "}
            "The future of media is neural. We build high-velocity AI-powered
            visual campaigns for brands that want to scale exponentially."{" "}
          </p>{" "}
        </header>{" "}
        {/* AI Service Pillars */}{" "}
        <div className="grid md:grid-cols-2 gap-12 mb-40">
          {" "}
          {[
            {
              title: "AI Media Production",
              href: "/services/ai-media-production",
              icon: Sparkles,
              color: "from-primary-accent to-primary-accent",
              desc: "Generative video, photorealistic avatars, and automated multilingual dubbing for global scale.",
            },
            {
              title: "AI CGI & Virtual Production",
              href: "/services/cgi-virtual-production",
              icon: Wand2,
              color: "from-primary-accent to-primary-accent",
              desc: "Physics-defying product visuals and virtual studio environments rendered with neural precision.",
            },
          ].map((pillar, pIdx) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group cursor-pointer relative p-12 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden/30 transition-all transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)] hover:text-primary-accent transition-all duration-300"
            >
              {" "}
              <div
                className={`mb-10 h-16 w-16 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
              >
                {" "}
                <pillar.icon size={32} />{" "}
              </div>{" "}
              <h3 className="text-4xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-primary-accent transition-colors">
                {pillar.title}
              </h3>{" "}
              <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10">
                {pillar.desc}
              </p>{" "}
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-zinc-600 group-hover:text-primary-accent transition-colors">
                {" "}
                Enter Node{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />{" "}
              </div>{" "}
              {/* Background Number */}{" "}
              <span className="absolute -right-8 -bottom-12 text-[12rem] font-black text-white/5 pointer-events-none italic">
                {" "}
                0{pIdx + 1}{" "}
              </span>{" "}
            </Link>
          ))}{" "}
        </div>{" "}
        {/* Why AI Studios Section */}{" "}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          {" "}
          <div className="space-y-12">
            {" "}
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">
              Why Choose <br />
              <span className="text-primary-accent italic">AI Velocity?</span>
            </h2>{" "}
            <ul className="space-y-10">
              {" "}
              {[
                {
                  t: "10x Production Speed",
                  d: "Production cycles reduced from months to days using proprietary neural pipelines.",
                },
                {
                  t: "Cost-Effective Scaling",
                  d: "Generate hundreds of visual variants for the cost of a single traditional project.",
                },
                {
                  t: "Global Reach (Multilingual)",
                  d: "Instantly translate and dub your video content into over 50 regional and global languages.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-8 group">
                  {" "}
                  <div className="h-4 w-4 rounded-full bg-transparent border-2 border-primary-accent/40 flex items-center justify-center shrink-0 mt-2 hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                    {" "}
                    <div className="h-1.5 w-1.5 rounded-full bg-transparent border-2 border-primary-accent hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-2">
                      {item.t}
                    </h4>{" "}
                    <p className="text-zinc-500 font-light leading-relaxed">
                      {item.d}
                    </p>{" "}
                  </div>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
              alt="AI Neural Processing Laboratory"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />{" "}
            <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/10 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        {/* High-Conversion CTA */}{" "}
        <div className="py-40 text-center border-t border-white/5 mt-40">
          {" "}
          <h2 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter mb-16 text-white leading-none">
            {" "}
            Future-proof <br />{" "}
            <span className="text-primary-accent italic">your brand.</span>{" "}
          </h2>{" "}
          <Link
            href="/contact?subject=AI Studio Project enquity"
            className="h-24 px-20 rounded-full bg-transparent border-2 border-primary-accent text-zinc-100 font-black uppercase tracking-widest text-lg hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
          >
            {" "}
            Initialize Strategy{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
