import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Cpu, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI CGI & Virtual Production | DP AI Studios Kochi | Cinematic Visuals",
  description:
    "Next-gen AI CGI and virtual production services in India. We create photorealistic 3D environments, virtual product films, and AI-enhanced VFX for global brands in Kerala.",
  keywords: [
    "AI CGI production India",
    "virtual production Kerala",
    "best CGI studio Kochi",
    "AI 3D visualization India",
  ],
};

const subServices = [
  {
    title: "AI CGI Product Videos",
    href: "/services/cgi-virtual-production/ai-cgi-product-videos",
    desc: "Luxury-spec product cinematography created entirely in virtual environments.",
  },
  {
    title: "3D Product Visualization",
    href: "/services/cgi-virtual-production/3d-product-visualization",
    desc: "Photorealistic 3D renders and animations that highlight product precision and engineering.",
  },
  {
    title: "VFX & Motion Enhancement",
    href: "/services/cgi-virtual-production/vfx-motion-enhancement",
    desc: "AI-powered visual effects and motion tracking that elevate traditional footage to cinematic standards.",
  },
];

export default function CGIVirtualProductionLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />

      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none   transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md   transition-all duration-300">
              Division: DP AI Studios
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            AI CGI <br />
            <span className="text-primary-accent italic">Virtual_Prod_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            "Impossible environments made real. We build the virtual
            architecture for the world's most luxurious brands."
          </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 /30 transition-all flex flex-col gap-8  transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform   transition-all duration-300">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group- transition-colors">
                View Node
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
              Photorealistic <br />
              <span className="text-primary-accent italic font-black">
                Virtual World.
              </span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Our AI CGI division in Kochi and India specializes in
              photorealistic virtual production. By integrating neural rendering
              with traditional 3D pipelines, we create visuals that are
              indistinguishable from reality at high-velocity turnaround times.
              Perfect for high-end automotive, luxury fashion, and tech
              commercials.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col sm:flex-row gap-6"> <Link href="/contact?service=cgi-production" className="inline-flex h-20 px-12 rounded-full bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-xl hover:bg-transparent    transition-all duration-300" > Get a Quote <ArrowRight size={18} /> </Link> <Link href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project." target="_blank" className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 [var(--glass-white)] text-white font-black uppercase tracking-widest text-sm /50 transition-all flex items-center justify-center gap-3  transition-all duration-300" > Chat on WhatsApp </Link> </div>
              <Link
                href="/portfolio?view=ai"
                className="inline-flex h-20 px-12 rounded-full border border-white/10 text-white font-black items-center justify-center uppercase tracking-widest text-[10px]  hover:text-black transition-all  transition-all duration-300"
              >
                View AI Demo Reel
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury 3D Cinematic Visual"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-accent/10   transition-all duration-300" />
          </div>
        </section>
      </div>
    </main>
  );
}
