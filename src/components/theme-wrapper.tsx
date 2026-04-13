"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ThemeController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const isAiPath = 
    pathname.includes("/services/ai-") || 
    pathname.includes("/ai-studios") ||
    pathname === "/ai-services";
    
  const isAiTabOnPortfolio = pathname === "/portfolio" && searchParams.get("view") === "ai";

  useEffect(() => {
    // 1. Handle Divisional Themes (Red/Blue)
    const isBlue = isAiPath || isAiTabOnPortfolio;
    const themeClass = isBlue ? "theme-blue" : "theme-red";
    document.documentElement.classList.remove("theme-red", "theme-blue");
    document.documentElement.classList.add(themeClass);
  }, [isAiPath, isAiTabOnPortfolio, pathname]);

  return <>{children}</>;
}

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ThemeController>{children}</ThemeController>
    </Suspense>
  );
}
