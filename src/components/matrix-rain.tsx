"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MatrixRain() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on target route and when canvas is present
    if (pathname !== "/cybersecurity") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user accessibility settings for reduced motion
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionMediaQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 26 : 13; // Double font size on mobile halves columns/particles
    const chars = "01";

    let cols = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(cols).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      // Semi-transparent black → creates the trail fade effect
      ctx.fillStyle = "rgba(8, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        // Bright head character
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#ffaaaa"; // near-white red for head flash
        } else {
          ctx.fillStyle = "#ff2020"; // main matrix red
        }

        ctx.font = `bold ${fontSize}px "Courier New", monospace`;
        ctx.fillText(char, i * fontSize, y);

        // Reset column after it passes the bottom, with random delay
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5; // variable speed
      }
    };

    // Use requestAnimationFrame throttled to ~25fps (40ms)
    // Automatically pauses when tab is backgrounded, eliminating idle CPU/GPU drain
    let animationFrameId: number;
    let lastTimestamp = 0;
    const frameInterval = 40; // ~25fps preserves exact visual aesthetic

    const renderLoop = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (delta >= frameInterval) {
        if (!document.hidden) {
          draw();
        }
        lastTimestamp = timestamp - (delta % frameInterval);
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // Rebuild column array on resize
    const handleResize = () => {
      cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1).map(() => Math.random() * -100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  if (pathname !== "/cybersecurity") return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.1 }}
      aria-hidden="true"
    />
  );
}
