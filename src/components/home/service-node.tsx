"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceNode({ node, title, icon, services, accentColor, className }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-4deg", "4deg"]);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (event.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseXRelative);
    y.set(mouseYRelative);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative p-8 md:p-14 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 space-y-16 transition-all duration-500 hover:border-white/10 hover:bg-zinc-900/60 overflow-hidden",
        className
      )}
    >
      {/* Dynamic Glow Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]: any) => `radial-gradient(800px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, ${accentColor}15, transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.6em]" style={{ color: accentColor }}>{node}</span>
          <h3 className="text-4xl md:text-5xl font-black uppercase text-white leading-none tracking-tighter">{title}</h3>
        </div>
        <div
          className="h-16 w-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          {icon}
        </div>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 gap-x-12 gap-y-6">
        {services.map((s: string, idx: number) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center gap-4 py-3 border-b border-white/5 hover:border-white/20 transition-colors group/item"
          >
            <CheckCircle2 size={16} style={{ color: accentColor }} className="opacity-40 group-hover/item:opacity-100 transition-opacity" />
            <span className="label-mono !text-[14px] !text-zinc-400 group-hover/item:!text-white transition-colors leading-tight">{s}</span>
          </motion.div>
        ))}
      </div>

      {/* Interactive Bottom Accent */}
      <div
        className="absolute bottom-0 left-0 w-0 h-1.5 transition-all duration-700 group-hover:w-full"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
