"use client";

import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

function ThemeController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isAiPath = 
    pathname.includes("/services/ai-") || 
    pathname.includes("/ai-studios") ||
    pathname === "/ai-services";
    
  useEffect(() => {
    // 1. Handle Divisional Themes (Red/Blue)
    const isBlue = isAiPath;
    const themeClass = isBlue ? "theme-blue" : "theme-red";
    document.documentElement.classList.remove("theme-red", "theme-blue");
    document.documentElement.classList.add(themeClass);
  }, [isAiPath, pathname]);

  return <>{children}</>;
}

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ThemeController>{children}</ThemeController>
    </Suspense>
  );
}
