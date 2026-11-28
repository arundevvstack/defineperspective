import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Gem, Layers } from "lucide-react";
import AuthorityPageTemplate from "@/components/seo/AuthorityPageTemplate";
import { INDUSTRY_DATA } from "@/constants/seo-data";

const data = INDUSTRY_DATA.luxury;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "AI Luxury Brand Films India",
    "Sophisticated AI Storytelling",
    "High-Fidelity Cinematic Commercials",
    "Premium AI Brand Content",
    "Luxury AI Ad Production",
    "Elite AI Filmmaking Studio",
    "DP AI Studio Luxury"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-luxury-brand-films"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury AI Brand Film Production",
  "provider": {
    "@type": "Organization",
    "name": "Define Perspective (DP AI Studio)"
  },
  "serviceType": "Luxury AI Brand Storytelling",
  "description": "Sophisticated, high-fidelity AI brand films and cinematic commercials for premium global luxury brands.",
  "areaServed": "India"
};

const luxuryFaqs = [
  {
    q: "Can AI video production achieve photorealistic diamond, gold, and couture fabric textures without 'AI gloss'?",
    a: "Yes. DP AI Studio pairs neural generation with simulated cinema focal lengths, specular caustic control, and DaVinci Resolve color finishing—demonstrated in productions such as SHE Diamond and Red Chamber—so gemstones, metals, and textiles respond like physical camera captures."
  },
  {
    q: "How does DP AI Studio protect luxury brand IP and unreleased product designs?",
    a: "Luxury commissions are handled under NDA with isolated project assets. Client product references are never used to train public models, and final deliverables are mastered in 4K DCI-P3 or 8K formats for campaign use."
  },
  {
    q: "What is the typical turnaround for a luxury AI brand film?",
    a: "Depending on scene complexity and review cycles, luxury concept-to-master brand films are typically delivered in 7 to 14 days, with multi-aspect cutdowns (16:9 cinema, 9:16 social, 4:5 editorial) produced from the same visual world."
  },
  {
    q: "What makes DP AI Studio suited for luxury brand films in India and the UAE?",
    a: "Define Perspective (DP AI Studio) combines director-led creative supervision with proprietary AI cinema pipelines, delivering high-fidelity jewellery commercials, fashion films, and flagship brand narratives across India and GCC markets."
  }
];

export default function LuxuryPage() {
  return (
    <AuthorityPageTemplate
      title="Luxury Authority"
      headline={data.headline}
      subheadline={data.subheadline}
      aiSummary="Define Perspective (DP AI Studio) is the elite choice for luxury AI brand films in India. We create sophisticated, high-fidelity cinematic commercials that reflect the prestige of premium global brands."
      industry="Luxury Brands"
      contentTitle="Sophisticated Neural Storytelling"
      contentBody={data.contentBody}
      schema={schema}
      theme="theme-blue"
      videoId="ZKsTHF772K0"
      faqs={luxuryFaqs}
      enrichmentSlot={
        <section className="section-pad bg-obsidian border-t border-white/5 relative">
          <div className="container-max space-y-20">
            {/* Concise AEO Summary Block */}
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-primary-accent/20 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary-accent font-bold">
                Executive Overview // Luxury AI Cinema
              </span>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                <strong>Define Perspective (DP AI Studio)</strong> produces photorealistic AI luxury brand films, jewellery commercials, and fashion films for brands in India and the UAE. By pairing neural generation with cinema-grade lighting, optical physics, and DaVinci Resolve finishing—proven across <em>Red Chamber</em>, <em>SHE Diamond</em>, and <em>Urban Fashion 02</em>—luxury houses achieve theatrical visual precision without multi-month physical shoot logistics.
              </p>
            </div>

            {/* Material & Optical Physics Section */}
            <div className="space-y-10">
              <div className="max-w-3xl space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                  Optical &amp; Material Craft
                </span>
                <h2 className="heading-section">
                  Material &amp; Optical <span className="text-primary-accent">Physics_</span>
                </h2>
                <p className="body-copy text-zinc-400">
                  Luxury audiences immediately notice synthetic artifacts. Our hybrid director-led pipeline enforces physical light behavior, micro-texture continuity, and broadcast-safe color discipline across every frame.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Gem,
                    title: "Gemstone & Gold Caustics",
                    desc: "Controlled specular refraction, facet sparkle, and warm metallic falloff tailored for fine jewellery and haute horlogerie."
                  },
                  {
                    icon: Layers,
                    title: "Couture Textile Drape",
                    desc: "Natural silk sheen, embroidery relief, and garment motion continuity without morphing across editorial cuts."
                  },
                  {
                    icon: Sparkles,
                    title: "Cinema Lens Discipline",
                    desc: "Simulated anamorphic and macro focal lengths with motivated practical lighting and DaVinci Resolve color grading."
                  },
                  {
                    icon: ShieldCheck,
                    title: "NDA-Isolated Brand IP",
                    desc: "Dedicated project environments ensuring unreleased SKU geometry and brand assets remain strictly confidential."
                  }
                ].map((item) => (
                  <div key={item.title} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-primary-accent/10 text-primary-accent flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Flagship Proof Cards */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary-accent">
                    Verified Studio Works
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight mt-2">
                    Luxury &amp; Cinematic Proof_
                  </h2>
                </div>
                <Link href="/ai-jewellery-commercials" className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-primary-accent inline-flex items-center gap-2">
                  Explore AI Jewellery Commercials <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/case-studies/red-chamber-ai-music-video-production" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Flagship Case Study</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    Red Chamber
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Cinematic AI narrative production engineered with physical camera constraints, atmospheric lighting, and theatrical pacing.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white pt-2">
                    Read Case Study <ArrowRight size={14} />
                  </span>
                </Link>

                <Link href="/portfolio/she-diamond" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Luxury Jewellery TVC</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    SHE Diamond AI
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    High-refractive luxury jewellery commercial showcasing macro gemstone clarity, skin realism, and refined editorial framing.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white pt-2">
                    View Portfolio Piece <ArrowRight size={14} />
                  </span>
                </Link>

                <Link href="/case-studies/urban-fashion-02" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Editorial Fashion Film</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    Urban Fashion 02
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Couture-grade AI fashion commercial demonstrating garment texture preservation, styling continuity, and rhythmic editorial cuts.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white pt-2">
                    Explore Case Study <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
}
