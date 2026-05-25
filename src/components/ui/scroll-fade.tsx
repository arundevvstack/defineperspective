"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function ScrollFade({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 20,
  className = "",
}: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
