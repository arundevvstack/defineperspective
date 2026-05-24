import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudyCTA({ slug }: { slug: string }) {
  return (
    <section className="container mx-auto px-6 md:px-12 my-20">
      <div className="p-8 md:p-16 rounded-[3rem] border border-white/5 bg-gradient-to-br from-primary-accent/10 to-transparent backdrop-blur-3xl text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-6 leading-tight">
            Dive deeper into the <span className="text-primary-accent">Production Process.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed mb-8">
            Explore the complete technical breakdown, generative workflows, and strategic narrative engineering behind this visual production in our dedicated case study.
          </p>
          <Link 
            href={`/case-studies/${slug}`} 
            className="h-14 px-8 rounded-full bg-primary-accent text-obsidian font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3"
          >
            View Full Case Study <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
