import fs from 'fs';
import path from 'path';

/**
 * Safely discovers all statically defined Next.js routes within a specific directory.
 * Includes fallbacks for serverless environments where `fs` might not have access to `src/app`.
 */
export function discoverAppRoutes(baseRoute: string): string[] {
  try {
    const appDir = path.join(process.cwd(), 'src', 'app', baseRoute);
    
    if (!fs.existsSync(appDir)) {
      console.warn(`[Route Discovery] Directory not found: ${appDir}`);
      return [];
    }

    const routes: string[] = [];
    
    // Recursive read function
    function scanDirectory(dir: string, currentPath: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        // Skip private folders, dynamic routes, and route groups
        if (
          entry.name.startsWith('_') || 
          entry.name.startsWith('[') || 
          entry.name.startsWith('(')
        ) {
          continue;
        }

        const fullPath = path.join(dir, entry.name);
        const routePath = `${currentPath}/${entry.name}`;

        if (entry.isDirectory()) {
          // If there is a page.tsx inside this directory, it's a route
          if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.jsx'))) {
            routes.push(`/${baseRoute}${routePath}`);
          }
          // Continue scanning subdirectories
          scanDirectory(fullPath, routePath);
        }
      }
    }

    scanDirectory(appDir, '');
    return routes;

  } catch (error) {
    console.error('[Route Discovery] Failed to scan routes:', error);
    return [];
  }
}
