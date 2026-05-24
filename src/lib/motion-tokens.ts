// src/lib/motion-tokens.ts

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DP AI STUDIOS - CINEMATIC MOTION TOKENS (PHASE 6)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const easing = {
  // Ultra-smooth, film-like ease out. Starts fast, slows down drastically.
  cinematic: [0.16, 1, 0.3, 1] as const,
  // Elegant fade curve
  fade: [0.25, 0.1, 0.25, 1] as const,
  // Slightly bouncy but restrained, for interactive HUD elements
  springRestrained: { type: "spring", stiffness: 100, damping: 20 },
};

export const durations = {
  fast: 0.3,
  base: 0.6,
  slow: 1.2,
  epic: 2.4, // For major route transitions or hero reveals
};

export const staggers = {
  fast: 0.05,
  base: 0.1,
  slow: 0.2,
};

// Common animation variants
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.base, ease: easing.cinematic } 
  }
};

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.base,
      delayChildren: 0.1,
    }
  }
};

export const heroImageScale = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easing.cinematic }
  }
};
