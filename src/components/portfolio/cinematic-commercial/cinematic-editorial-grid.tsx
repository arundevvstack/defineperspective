"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const editorialItems = [
  { id: 1, type: "text", title: "Generative Ideation", desc: "Advanced prompt engineering to establish the visceral, dark aesthetic, defining the emotional tone before any pixels are rendered." },
  { id: 2, type: "image", src: "/images/portfolio/cinematic/ai-filmmaking-cinematic-mask-scene.jpg", aspect: "aspect-[16/9]" },
  { id: 3, type: "image", src: "/images/portfolio/cinematic/premium-ai-brand-film-red-smoke.jpg", aspect: "aspect-[4/3]" },
  { id: 4, type: "text", title: "Cinematic Composition", desc: "Simulating complex physical environments—such as underwater physics and heavy atmospheric smoke—using generative AI pipelines." },
  { id: 5, type: "image", src: "/images/portfolio/cinematic/cinematic-ai-storytelling-underwater.jpg", aspect: "aspect-[16/9]" },
  { id: 6, type: "image", src: "/images/portfolio/cinematic/generative-ai-commercial-red-bath-scene.jpg", aspect: "aspect-[16/9]" },
  { id: 7, type: "text", title: "Editing Workflow", desc: "Crafting a seamless flow and rhythm that matches the intense audio score, ensuring every cut carries emotional weight." },
  { id: 8, type: "image", src: "/images/portfolio/cinematic/ai-video-production-floating-subject.jpg", aspect: "aspect-[16/9]" },
  { id: 9, type: "text", title: "Post-Production", desc: "Intensive color grading to a dense cinematic red palette, finalizing the high-fashion thriller aesthetic in DaVinci Resolve." },
];

export default function CinematicEditorialGrid() {
  return (
    <section className="relative py-32 px-6 border-t border-white/5 bg-[#080202]">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-8">
            The AI Production <span className="text-red-500 italic font-serif lowercase tracking-normal">pipeline</span>
          </h2>
          <p className="text-zinc-400 font-sans leading-relaxed text-lg max-w-2xl mx-auto">
            A visual breakdown of our generative filmmaking process. From pure text prompts to a masterfully graded final sequence.
          </p>
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {editorialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid relative"
            >
              {item.type === "image" ? (
                <div className={`relative w-full rounded-xl overflow-hidden group ${item.aspect} bg-zinc-900 border border-red-500/10`}>
                  <Image 
                    src={item.src!} 
                    alt={`AI Filmmaking Production Still ${item.id}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              ) : (
                <div className="p-8 md:p-12 bg-[#0c0303]/80 border border-red-500/10 rounded-xl flex flex-col justify-center min-h-[300px] backdrop-blur-md">
                  <div className="mb-4 text-red-500 font-black text-xs tracking-[0.2em] uppercase">Pipeline Phase</div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base font-sans text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
