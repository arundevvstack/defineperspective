import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Video,
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
    "Video Production Services India | Cinematic Brand Storytelling | Define Perspective",
  description:
    "Elite video production services in Kerala and India. From high-stakes TV commercials to cinematic brand films and corporate video production for global enterprises.",
  keywords: [
    "video production services India",
    "best videographer Kerala",
    "brand film production Kochi",
    "TVC production company India",
  ],
};

const subServices = [
  {
    title: "Ad Films & Commercials",
    href: "/services/video-production/ad-film-commercial-video-production",
    desc: "High-impact television and digital commercials designed for reach and brand recall.",
  },
  {
    title: "Corporate Video Production",
    href: "/services/video-production/corporate-video-production-company-in-kerala",
    desc: "Professional brand legacy films and corporate communication assets for enterprises.",
  },
  {
    title: "Brand Storytelling",
    href: "/services/video-production/brand-film-production",
    desc: "Cinematic narratives that capture the heart and soul of your brand journey.",
  },
];

export default function VideoProductionLandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Division: Elite Media Production
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Video <br />{" "}
            <span className="text-primary-accent italic">Production_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            "Cinematic precision meet strategic depth. We build the visual
            architecture for India's most ambitious brands."
          </p>
        </header>

        {/* Sub-Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {subServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group cursor-pointer p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary-accent/30 transition-all flex flex-col gap-8"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform">
                <Video size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-zinc-600 group-hover:text-white transition-colors">
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
              Crafted for <br />
              <span className="text-primary-accent italic font-black">
                Market Impact.
              </span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              We believe that every frame should serve a purpose. Our production
              process in Kerala and across India is built on the foundation of
              high-fidelity filmmaking integrated with performance analytics. We
              don't just 'make videos'; we engineer growth engines for your
              brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-6"> <Link href="/contact?service=video-production" className="inline-flex h-20 px-12 rounded-full bg-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl" > Get a Quote <ArrowRight size={18} /> </Link> <Link href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project." target="_blank" className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 [var(--glass-white)] text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 hover:border-primary-accent/50 transition-all flex items-center justify-center gap-3" > Chat on WhatsApp </Link> </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
              alt="Cinematic Video Production Scene"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-accent/10" />
          </div>
        </section>
      </div>
    </main>
  );
}
