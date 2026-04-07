"use client";

import { motion } from "framer-motion";
import { Plus, Users, Globe, BarChart3, Star, Building2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    icon: Plus,
    value: "9",
    label: "Years of Experience",
  },
  {
    icon: BarChart3,
    value: "1100+",
    label: "Minutes of Film Produced",
  },
  {
    icon: Globe,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: Users,
    value: "99%",
    label: "Satisfied Clients",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Review Score",
  },
  {
    icon: Building2,
    value: "55+",
    label: "Industries Served",
  },
];

export default function MetricsSection() {
  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold md:text-6xl text-white tracking-widest uppercase flex flex-col md:flex-row items-center gap-4">
              WHY BRANDS <span className="text-primary-accent italic">CHOOSE US_</span>
            </h2>
            <div className="mt-8 h-1 w-24 rounded-full bg-transparent border-2 border-primary-accent/30 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              
whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white hover:text-primary-accent transition-all duration-300"
            >
              <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 transition-transform hover:text-primary-accent transition-all duration-300">
                <metric.icon size={24} className="text-zinc-500 group-hover:text-primary-accent transition-colors" />
              </div>
              <h3 className="text-4xl font-black text-white tracking-tighter mb-2">
                {metric.value}{metric.label === "Years of Experience" || metric.label === "Countries Worked In" || metric.label === "Industries Served" ? "+" : ""}
              </h3>
              <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase text-center leading-tight">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
