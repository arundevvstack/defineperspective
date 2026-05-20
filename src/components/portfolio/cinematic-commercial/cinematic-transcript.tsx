"use client";

import { motion } from "framer-motion";
import { BookOpen, Camera, Cpu, Zap } from "lucide-react";

export default function CinematicTranscript() {
  const sections = [
    {
      id: "narrative",
      title: "The Narrative",
      icon: BookOpen,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            The emotional arc of this AI brand film is designed to be visceral and gripping. It moves away from safe, well-lit commercial tropes into the realm of a high-tension cinematic thriller. The visual tone is dark, mysterious, and relentlessly intense.
          </p>
          <p>
            This storytelling approach positions the brand not just as a product, but as an experience. We engineered a narrative flow that uses tension, underwater isolation, and dramatic reveals to captivate the audience, proving that AI filmmaking can evoke profound human emotion.
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
            Our lighting philosophy is anchored in heavy atmospheric constraints. We utilized dense volumetric smoke, deep water physics, and an aggressive, monochromatic red lighting palette. This creates a claustrophobic yet premium luxury aesthetic.
          </p>
          <p>
            The motion language is deliberately slow and fluid—reminiscent of high-speed phantom cameras—allowing the AI-generated realism to shine. Every frame is textured, bringing an organic, filmic grit to the digital generation.
          </p>
        </div>
      )
    },
    {
      id: "ai-pipeline",
      title: "AI Filmmaking Pipeline",
      icon: Cpu,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            The generative workflows behind this project required extreme precision. Cinematic prompting was used to command the AI models to understand non-standard environments, like realistic fluid dynamics and mask-wearing subjects, without structural morphing.
          </p>
          <p>
            Through rigorous rendering refinement and iteration, we achieved temporal consistency. The post-production methodology involved heavy sound design—vital for a thriller—and a rigorous color grading process to unify the deep reds and obsidian blacks.
          </p>
        </div>
      )
    },
    {
      id: "why-ai",
      title: "Why AI Commercial Production Is Transforming Advertising",
      icon: Zap,
      content: (
        <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            To shoot a commercial of this cinematic quality traditionally would require underwater RED camera housings, massive soundstages, and an extensive post-production VFX team. AI commercial production eliminates these friction points.
          </p>
          <p>
            This grants brands unprecedented scalability, speed, and cost efficiency. The ability to iterate on complex cinematic visuals in hours rather than weeks means agencies and brands can now take bold, creative risks without risking multi-million dollar production budgets.
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
            Case Study <span className="text-red-500">Context</span>
          </h2>
          <p className="text-zinc-400 font-mono uppercase tracking-widest text-sm max-w-2xl mx-auto">
            Deep-dive into the cinematic AI workflow behind this flagship commercial.
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
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-red-500 group-hover:scale-110 transition-transform">
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
