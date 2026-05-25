"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ThemeInitializer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const isAI = pathname.includes("/services/ai-") || 
                   pathname.includes("/ai-studios") || 
                   pathname === "/ai-services" || 
                   (pathname === "/portfolio" && searchParams.get("view") === "ai") ||
                   pathname.includes("/analysis") ||
                   pathname.includes("/seo-") ||
                   pathname.includes("/copilot") ||
                   pathname.includes("/cybersecurity") ||
                   pathname.includes("/admin/") ||
                   pathname.includes("/competitor-map");
    
    document.documentElement.classList.remove('theme-red', 'theme-blue');
    document.documentElement.classList.add(isAI ? 'theme-blue' : 'theme-red');
  }, [pathname, searchParams]);

  return null;
}
