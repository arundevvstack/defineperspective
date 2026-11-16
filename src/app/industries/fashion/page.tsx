import { Metadata } from "next";
import Link from "next/link";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { ArrowRight, Sparkles, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Video Production for Fashion & Jewellery | DP AI Studio",
  description:
    "Cinematic AI video production for luxury fashion houses, apparel labels, and fine jewellery brands. Explore our dedicated pipelines for fashion and gemstones.",
  alternates: {
    canonical: "https://defineperspective.in/industries/fashion",
  },
  openGraph: {
    title: "AI Video Production for Fashion & Jewellery | DP AI Studio",
    description:
      "Cinematic AI video production for luxury fashion houses, apparel labels, and fine jewellery brands. Explore our dedicated pipelines for fashion and gemstones.",
    url: "https://defineperspective.in/industries/fashion",
    siteName: "DP AI Studio",
    type: "website",
  },
};

export default function FashionJewelleryCategoryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Video Production for Fashion & Jewellery",
    "description":
      "Category hub connecting fashion houses and fine jewellery brands to dedicated generative AI commercial production pipelines.",
    "url": "https://defineperspective.in/industries/fashion",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "AI Fashion Commercials",
        "url": "https://defineperspective.in/ai-fashion-commercials",
        "description":
          "Virtual model casting, runway simulations, and apparel commercial production.",
      },
      {
        "@type": "WebPage",
        "name": "AI Jewellery Commercials",
        "url": "https://defineperspective.in/ai-jewellery-commercials",
        "description":
          "Macro gemstone refraction, caustic dispersion, and luxury timepiece commercial production.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GlassNavbar />

      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[800px] h-[800px] bg-blue-500/5 blur-[260px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header / Hero */}
        <header className="mb-24 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-8 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary-accent" />
            Industry Category Hub
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-blacker uppercase leading-[0.85] tracking-tighter mb-8 italic">
            AI Video Production for <br />
            <span className="text-primary-accent">Fashion & Jewellery_</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Bridging haute couture aesthetics and high-precision gemstone physics through dedicated generative commercial pipelines.
          </p>
        </header>

        {/* Dual Pillar Launchpad */}
        <section className="mb-28">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fashion Pillar Card */}
            <div className="p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary-accent/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary-accent bg-primary-accent/10 px-3 py-1 rounded-full border border-primary-accent/20">
                    Apparel & Haute Couture
                  </span>
                  <Layers className="w-5 h-5 text-zinc-500 group-hover:text-primary-accent transition-colors" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4 tracking-tight">
                  Fashion Commercials
                </h2>
                <p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                  Digital garment physics, neural lookbooks, and virtual runway simulations. Capture textile movement, drape, and brand aesthetics with photorealistic consistency without costly destination film crews.
                </p>
                <ul className="space-y-3 mb-10 text-sm text-zinc-300 font-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>Neural garment draping & realistic fabric movement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>Consistent virtual model casting across collections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>Rapid multi-market seasonal lookbook adaptations</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/ai-fashion-commercials"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-widest group-hover:bg-primary-accent group-hover:text-black group-hover:border-primary-accent transition-all duration-200"
              >
                <span>Explore Fashion Production Pipeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Jewellery Pillar Card */}
            <div className="p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary-accent/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary-accent bg-primary-accent/10 px-3 py-1 rounded-full border border-primary-accent/20">
                    Fine Jewellery & Luxury
                  </span>
                  <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-primary-accent transition-colors" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4 tracking-tight">
                  Jewellery Commercials
                </h2>
                <p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                  Ray-traced light refraction, caustic dispersion, and microscopic metal luster. Showcase diamond cuts, precious gold, and luxury horology with cinematic lighting precision that traditional camera rigs cannot easily achieve.
                </p>
                <ul className="space-y-3 mb-10 text-sm text-zinc-300 font-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>Accurate gemstone refractive index & caustic sparkle</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>Micro-detail ray tracing on gold, platinum & diamonds</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                    <span>High-end TVC cinematic camera movement & editorial pacing</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/ai-jewellery-commercials"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-widest group-hover:bg-primary-accent group-hover:text-black group-hover:border-primary-accent transition-all duration-200"
              >
                <span>Explore Jewellery Production Pipeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Capability Comparison Matrix */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 block mb-3">
              Technical Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Specialized Generative Workflows_
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold uppercase text-white mb-3 tracking-wide">
                Physics Simulation
              </h3>
              <div className="space-y-4 text-sm font-light text-zinc-400">
                <div>
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Fashion Pipeline
                  </span>
                  <p>Cloth deformation, tensile resistance, fluid textile drape, and natural motion aerodynamics.</p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Jewellery Pipeline
                  </span>
                  <p>Subsurface scattering, refractive index calculation, optical caustics, and specular reflection.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold uppercase text-white mb-3 tracking-wide">
                Lighting & Optics
              </h3>
              <div className="space-y-4 text-sm font-light text-zinc-400">
                <div>
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Fashion Pipeline
                  </span>
                  <p>Volumetric studio key lights, golden-hour outdoor simulations, and soft high-key editorial illumination.</p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Jewellery Pipeline
                  </span>
                  <p>Precision spot micro-lighting, directional diamond fire isolation, and high-contrast macro dark-field setups.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold uppercase text-white mb-3 tracking-wide">
                Campaign Formats
              </h3>
              <div className="space-y-4 text-sm font-light text-zinc-400">
                <div>
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Fashion Pipeline
                  </span>
                  <p>Multi-lookbook reels, vertical e-commerce video, digital runway shows, and social hero video campaigns.</p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs font-mono uppercase text-primary-accent block mb-1">
                    Jewellery Pipeline
                  </span>
                  <p>Broadcast TV commercials, festive festival campaigns, cinematic luxury brand films, and cinema display ads.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="mb-20">
          <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}

