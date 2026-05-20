"use client";

import { motion } from "framer-motion";
import { BookOpen, Camera, Cpu, Zap } from "lucide-react";

export default function CaseStudyTranscript() {
  const sections = [
    {
      id: "narrative",
      title: "The Narrative",
      icon: BookOpen,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            The emotional core of this luxury AI jewellery commercial centers around elegance, timelessness, and modern heritage. The narrative follows a cinematic progression, revealing the intricate details of premium jewellery against dramatic, high-contrast environments.
          </p>
          <p>
            Instead of standard product showcases, we engineered a story that places the jewellery as the protagonist of a high-fashion editorial. The tone is deliberate, luxurious, and designed to evoke the same emotional resonance as traditional high-budget TVCs seen in Mumbai, Dubai, and Paris.
          </p>
        </div>
      )
    },
    {
      id: "visual-language",
      title: "Visual Language",
      icon: Camera,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            Our lighting philosophy for this piece mimics high-end studio setups. We utilized virtual anamorphic lenses with shallow depth of field (f/1.4 - f/2.8) to create buttery bokeh that isolates the jewellery.
          </p>
          <p>
            The luxury aesthetics are defined by deep obsidian blacks, warm golden hour accents, and pristine diamond reflections. The AI rendering logic was meticulously prompted to handle complex refractive indices, ensuring gemstones sparkle authentically and gold retains its exact physical properties.
          </p>
        </div>
      )
    },
    {
      id: "ai-pipeline",
      title: "AI Production Pipeline",
      icon: Cpu,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            DP AI Studios utilizes a proprietary generative filmmaking pipeline. The process began with advanced text-to-image (T2I) prompting to lock in the cinematic composition, set design, and character styling.
          </p>
          <p>
            Once the visual foundation was established, we transitioned to cutting-edge image-to-video (I2V) neural rendering to generate fluid, artifact-free motion. Post-production involved traditional cinematic color grading (DaVinci Resolve) and bespoke sound design to ground the AI-generated visuals in physical reality.
          </p>
        </div>
      )
    },
    {
      id: "why-ai",
      title: "Why AI TVC Production Changes Advertising",
      icon: Zap,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            Traditional luxury commercials often require massive crews, exotic locations, and weeks of post-production. Generative AI filmmaking compresses this timeline drastically while maintaining elite, broadcast-ready quality.
          </p>
          <p>
            This approach offers unprecedented scalability and cost efficiency for brands in India—from Kochi to Bangalore and Chennai. By leveraging AI, we empower brands to produce multiple high-end commercial variations for different markets, entirely bypassing the logistical nightmares of traditional shoots.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-black/50 border-y border-white/5 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-6">
            Case Study <span className="text-primary-accent">Context</span>
          </h2>
          <p className="text-zinc-400 font-mono uppercase tracking-widest text-sm max-w-2xl mx-auto">
            Deep-dive into the cinematic AI workflow behind this flagship jewellery commercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-primary-accent/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-primary-accent group-hover:scale-110 transition-transform">
                  <section.icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                  {section.title}
                </h3>
              </div>
              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
