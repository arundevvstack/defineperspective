"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ThemeInitializer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const isBlue = pathname.includes("/services/ai-") || 
                   pathname.includes("/ai-studios") || 
                   pathname === "/ai-services" || 
                   (pathname === "/portfolio" && searchParams.get("view") === "ai");
    
    document.documentElement.classList.remove('theme-red', 'theme-blue');
    document.documentElement.classList.add(isBlue ? 'theme-blue' : 'theme-red');
  }, [pathname, searchParams]);

  return null;
}
