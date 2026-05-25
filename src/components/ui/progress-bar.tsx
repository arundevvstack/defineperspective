"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number | string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ProgressBar({ percentage, delay = 0, duration = 1.5, className = "bg-primary-accent" }: ProgressBarProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: typeof percentage === 'number' ? `${percentage}%` : percentage }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "circOut" }}
      className={`h-full ${className}`}
    />
  );
}
