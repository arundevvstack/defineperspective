"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const overviewData = [
  { label: "Client Category", value: "Luxury Jewellery" },
  { label: "Production Type", value: "Generative AI Filmmaking" },
  { label: "Creative Focus", value: "Cinematic AI Advertising" },
  { label: "Target Markets", value: "India (Kerala, Mumbai) & Dubai" },
];

const technologies = [
  "Neural Rendering",
  "Midjourney v6",
  "Runway Gen-3",
  "Topaz Video AI",
  "DaVinci Resolve Studio",
];

export default function ProjectOverview() {
  return (
    <section className="relative py-24 px-6 border-t border-white/5">
      <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Narrative Overview */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              The AI Commercial <span className="text-primary-accent italic">Overview_</span>
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-sans leading-relaxed">
              <p>
                As the leading <strong>AI video production company in India</strong>, DP AI Studios was tasked with engineering a photorealistic, luxury jewellery commercial that rivals traditional high-end production houses in Mumbai and Dubai.
              </p>
              <p>
                The objective was clear: utilize advanced <strong>generative filmmaking</strong> techniques to create a cinematic AI advertisement that exudes luxury, elegance, and premium branding. By bypassing traditional location scouting, massive crews, and expensive lighting setups, our team in Kerala delivered a masterclass in <em>cinematic AI storytelling</em> at a fraction of the cost and time.
              </p>
              <p>
                From intricate close-ups of diamond reflections to sweeping, stylized cinematic shots, this AI TVC production showcases the future of ad film production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Project Data */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">
              Production Details
            </h3>
            <ul className="space-y-4">
              {overviewData.map((item, i) => (
                <li key={i} className="flex flex-col space-y-1">
                  <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">{item.label}</span>
                  <span className="text-sm text-zinc-200 font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">
              AI Tech Stack
            </h3>
            <ul className="space-y-3">
              {technologies.map((tech, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-primary-accent" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
