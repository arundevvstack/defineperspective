"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize  = 13;
    const chars     = "01";

    // Number of columns
    let cols = Math.floor(canvas.width / fontSize);
    // y-position (in characters) for each column's "head"
    let drops: number[] = Array(cols).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      // Semi-transparent black → creates the trail fade effect
      ctx.fillStyle = "rgba(8, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y    = drops[i] * fontSize;

        // Bright head character
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#ffaaaa"; // near-white red for head flash
        } else {
          ctx.fillStyle = "#ff2020"; // main matrix red
        }

        ctx.font      = `bold ${fontSize}px "Courier New", monospace`;
        ctx.fillText(char, i * fontSize, y);

        // Reset column after it passes the bottom, with random delay
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5; // variable speed
      }
    };

    const interval = setInterval(draw, 40); // ~25fps

    // Rebuild column array on resize
    const handleResize = () => {
      cols  = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1).map(() => Math.random() * -100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.10 }}
      aria-hidden="true"
    />
  );
}
