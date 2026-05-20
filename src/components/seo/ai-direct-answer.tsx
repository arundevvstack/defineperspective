"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AIDirectAnswerProps {
  question: string;
  directAnswer: string;
  elaboration: string;
  citationText?: string;
  citationUrl?: string;
}

export default function AIDirectAnswer({
  question,
  directAnswer,
  elaboration,
  citationText,
  citationUrl
}: AIDirectAnswerProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-900 to-transparent opacity-50" />
      
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white m-0 leading-tight">
            {question}
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
            <strong className="text-red-400 font-bold">Direct Answer:</strong> {directAnswer}
          </p>
          
          <div className="h-px w-full bg-white/5" />
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            {elaboration}
          </p>
        </div>

        {citationText && citationUrl && (
          <div className="mt-8 pt-6 border-t border-white/5">
            <Link 
              href={citationUrl}
              className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-widest"
            >
              Learn More: {citationText} <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
}
