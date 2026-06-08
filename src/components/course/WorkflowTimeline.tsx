"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Brain, Search, PenTool, ClipboardList, Video, Bot, Scissors, Users, Send, Trophy, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "CLIENT BRIEF",
    icon: Target,
    features: ["Brand Goals", "Business Objectives", "Target Audience", "Campaign Requirements"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 2,
    title: "CREATIVE STRATEGY",
    icon: Brain,
    features: ["Concept Development", "Creative Direction", "Visual Identity", "Campaign Planning"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 3,
    title: "RESEARCH & MOODBOARD",
    icon: Search,
    features: ["Market Analysis", "References", "Fashion Trends", "AI Inspiration Boards"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 4,
    title: "SCRIPT & STORY DESIGN",
    icon: PenTool,
    features: ["Storytelling", "Shot Planning", "Storyboard Creation", "Content Architecture"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 5,
    title: "PRE-PRODUCTION",
    icon: ClipboardList,
    features: ["Scheduling", "Budgeting", "Location Planning", "Talent Coordination"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 6,
    title: "LIVE ACTION PRODUCTION",
    icon: Video,
    features: ["Camera Operation", "Lighting", "Sound", "Direction", "Production Management"],
    color: "from-zinc-500/20 to-zinc-900",
    glow: "shadow-white/5",
    theme: "traditional"
  },
  {
    id: 7,
    title: "AI CONTENT CREATION",
    icon: Bot,
    features: ["Prompt Engineering", "AI Photography", "AI Fashion Models", "AI Video Generation", "Virtual Production"],
    color: "from-blue-500/20 to-purple-900/40",
    glow: "shadow-blue-500/20",
    theme: "ai"
  },
  {
    id: 8,
    title: "POST PRODUCTION",
    icon: Scissors,
    features: ["Editing", "Color Grading", "Motion Graphics", "Sound Design", "Visual Effects"],
    color: "from-purple-500/20 to-pink-900/40",
    glow: "shadow-purple-500/20",
    theme: "ai"
  },
  {
    id: 9,
    title: "CLIENT REVIEW",
    icon: Users,
    features: ["Feedback", "Optimization", "Revision Management"],
    color: "from-pink-500/20 to-orange-900/40",
    glow: "shadow-pink-500/20",
    theme: "ai"
  },
  {
    id: 10,
    title: "DELIVERY & DISTRIBUTION",
    icon: Send,
    features: ["Social Media", "Advertising", "Web Publishing", "Campaign Launch"],
    color: "from-orange-500/20 to-amber-900/40",
    glow: "shadow-orange-500/20",
    theme: "ai"
  },
  {
    id: 11,
    title: "PORTFOLIO DEVELOPMENT",
    icon: Trophy,
    features: ["Showreel Creation", "Case Studies", "Personal Branding", "Career Preparation"],
    color: "from-green-500/30 to-emerald-900/50",
    glow: "shadow-green-500/30",
    theme: "final",
    highlighted: true
  }
];

export default function WorkflowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative py-12" ref={containerRef}>
      
      {/* Desktop Horizontal Scroll Container */}
      <div className="hidden lg:flex w-full overflow-x-auto pb-16 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent items-stretch px-6" style={{ scrollBehavior: 'smooth' }}>
        <div className="flex gap-8 relative items-center min-h-[500px] min-w-max">
          
          {/* Animated Connecting Line (Background) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 z-0 overflow-hidden rounded-full">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-zinc-500 via-blue-500 to-green-500 opacity-50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </div>

          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const isAI = step.theme === "ai";
            const isFinal = step.theme === "final";

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center relative z-10 w-[320px] flex flex-col justify-center shrink-0 group"
              >
                {/* Connector Nodes */}
                <div className="absolute top-1/2 -left-4 w-8 h-[2px] bg-white/10 -translate-y-1/2 -z-10 group-hover:bg-white/30 transition-colors" />
                
                <div className={`relative bg-zinc-950/80 backdrop-blur-xl border ${isFinal ? 'border-green-500/50' : isAI ? 'border-blue-500/30' : 'border-white/10'} rounded-3xl p-8 h-full min-h-[380px] flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${step.glow}`}>
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${isFinal ? 'bg-green-600 border-green-400 text-black' : isAI ? 'bg-blue-900 border-blue-500 text-white' : 'bg-zinc-800 border-zinc-600 text-white'}`}>
                    {step.id}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl ${isFinal ? 'bg-green-500/20 text-green-400' : isAI ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-zinc-300'}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`font-bold tracking-wider leading-tight ${isFinal ? 'text-green-400 text-xl' : isAI ? 'text-blue-300 text-lg' : 'text-white text-lg'}`}>
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-4">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          <ArrowRight className={`w-3 h-3 ${isFinal ? 'text-green-500' : isAI ? 'text-blue-500' : 'text-zinc-600'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gradient overlay for effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden px-4 py-8 relative">
        <div className="absolute left-10 top-12 bottom-12 w-1 bg-white/5 rounded-full" />
        
        <div className="space-y-8 relative">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const isAI = step.theme === "ai";
            const isFinal = step.theme === "final";

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 relative"
              >
                {/* Timeline Dot */}
                <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center relative z-10 border-4 border-black ${isFinal ? 'bg-green-500 text-black' : isAI ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-white'}`}>
                  <span className="font-bold text-sm">{step.id}</span>
                </div>

                <div className={`flex-1 bg-zinc-950/80 backdrop-blur-xl border ${isFinal ? 'border-green-500/50' : isAI ? 'border-blue-500/30' : 'border-white/10'} rounded-2xl p-6 ${step.glow} shadow-xl relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 pointer-events-none`} />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Icon className={`w-6 h-6 ${isFinal ? 'text-green-400' : isAI ? 'text-blue-400' : 'text-zinc-400'}`} />
                    <h3 className={`font-bold tracking-wide ${isFinal ? 'text-green-400' : isAI ? 'text-blue-300' : 'text-white'}`}>
                      {step.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                        <ArrowRight className={`w-3 h-3 ${isFinal ? 'text-green-500' : isAI ? 'text-blue-500' : 'text-zinc-600'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
