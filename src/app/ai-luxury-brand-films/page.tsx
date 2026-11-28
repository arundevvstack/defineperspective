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
    q: "Can AI-assisted brand films capture fine jewellery, gold, and couture fabrics realistically?",
    a: "Yes. We direct every shot like a physical commercial shoot—controlling camera framing, lighting reflections, fabric movement, and final color grading in DaVinci Resolve. Projects such as SHE Diamond and Red Chamber show how gemstones, metals, and textiles can look tactile and natural rather than synthetic."
  },
  {
    q: "How do you protect confidential brand collections and unreleased products?",
    a: "All luxury brand film commissions can be handled under strict NDA in isolated project workspaces. Your product references and creative assets are never shared or used to train public models."
  },
  {
    q: "How long does it take to produce a luxury brand film from concept to delivery?",
    a: "Most luxury brand films move from creative treatment to final mastered delivery within 7 to 14 days, depending on visual complexity, feedback rounds, and the aspect ratios required (16:9 widescreen, 9:16 vertical, or 4:5 editorial)."
  },
  {
    q: "What types of luxury and premium brands do you work with?",
    a: "DP AI Studio works with fine jewellery houses, fashion labels, beauty and skincare brands, hospitality venues, and premium consumer product companies across India—including Kerala, Kochi, Trivandrum, Mumbai, Bengaluru, and Delhi—as well as the UAE."
  }
];

export default function LuxuryPage() {
  return (
    <AuthorityPageTemplate
      title="Luxury Authority"
      headline={data.headline}
      subheadline="We create cinematic brand films, fashion campaigns and luxury product visuals that bring a brand's identity to life. From fine jewellery and beauty to fashion and premium products, every frame is designed around the story, lighting, detail and feeling of the brand."
      aiSummary="Define Perspective (DP AI Studio) is a creative commercial filmmaking and AI video production studio in India creating luxury brand films, jewellery commercials, AI fashion films, and cinematic product films for brands in India and the UAE."
      industry="Luxury Brands"
      contentTitle="Our Approach to Luxury Storytelling"
      contentBody="Luxury advertising succeeds on restraint, atmosphere, and attention to detail. As a filmmaker-led studio, we combine creative direction, storytelling, and AI-assisted production to craft <strong>AI luxury brand films</strong>, <strong>jewellery commercials</strong>, <strong>AI fashion films</strong>, and beauty campaigns that reflect your brand's craft—from concept development and look-building through to sound design and color finishing."
      schema={schema}
      theme="theme-blue"
      videoId="ZKsTHF772K0"
      faqs={luxuryFaqs}
      enrichmentSlot={
        <section className="section-pad bg-obsidian border-t border-white/5 relative">
          <div className="container-max space-y-20">
            {/* Studio Overview */}
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-primary-accent/20 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary-accent font-bold">
                About DP AI Studio
              </span>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                <strong>Define Perspective (DP AI Studio)</strong> is a commercial filmmaking studio in India creating luxury brand films, jewellery commercials, AI fashion films, and cinematic product films. Working with brands across India—including Kerala, Kochi, and Trivandrum—as well as the UAE, our team pairs director-led storytelling with AI-assisted production and traditional color finishing.
              </p>
            </div>

            {/* Realistic Materials, Lighting & Detail Section */}
            <div className="space-y-10">
              <div className="max-w-3xl space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                  Craft &amp; Production Quality
                </span>
                <h2 className="heading-section">
                  Realistic Materials, Lighting &amp; <span className="text-primary-accent">Detail_</span>
                </h2>
                <p className="body-copy text-zinc-400">
                  Discerning audiences notice when visuals feel artificial. From concept to final film, we focus on motivated lighting, natural textures, and disciplined editorial pacing so every commercial feels grounded and filmic.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Gem,
                    title: "Jewellery & Gemstone Detail",
                    desc: "Balanced highlights, crisp facet reflections, and natural warm gold tones crafted for fine jewellery advertising and watch films."
                  },
                  {
                    icon: Layers,
                    title: "Fashion & Texture Continuity",
                    desc: "Consistent silk drape, embroidery detail, and garment movement across cuts for luxury fashion campaigns and beauty commercials."
                  },
                  {
                    icon: Sparkles,
                    title: "From Concept to Final Film",
                    desc: "Creative direction, storyboarding, look development, sound design, and cinema color grading managed end to end by filmmakers."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Brand Confidentiality",
                    desc: "Dedicated, NDA-protected project workflows ensuring unreleased collections and proprietary product designs stay private."
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

            {/* Our Work */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary-accent">
                    Portfolio &amp; Case Studies
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight mt-2">
                    Our Work_
                  </h2>
                </div>
                <Link href="/ai-jewellery-commercials" className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-primary-accent inline-flex items-center gap-2">
                  Explore Jewellery Commercials <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/case-studies/red-chamber-ai-music-video-production" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Case Study</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    Red Chamber
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    A cinematic AI narrative film shaped around moody practical lighting, camera movement, and theatrical pacing.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white pt-2">
                    Read Case Study <ArrowRight size={14} />
                  </span>
                </Link>

                <Link href="/portfolio/she-diamond" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Jewellery Commercial</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    SHE Diamond AI
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    A luxury jewellery commercial focused on close-up diamond clarity, natural skin tones, and poised editorial framing.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-white pt-2">
                    View Project <ArrowRight size={14} />
                  </span>
                </Link>

                <Link href="/case-studies/urban-fashion-02" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary-accent/40 transition-all space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-accent">Fashion Campaign</span>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-primary-accent transition-colors">
                    Urban Fashion 02
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    An editorial AI fashion film built around garment detail, styling continuity, and contemporary visual rhythm.
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
