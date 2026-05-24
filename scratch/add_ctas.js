const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'src', 'app', 'portfolio');
const dirs = fs.readdirSync(portfolioDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(slug => {
  const pagePath = path.join(portfolioDir, slug, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Only process if it doesn't already have the CTA
    if (!content.includes('CaseStudyCTA')) {
      // Add import
      const importStatement = `import CaseStudyCTA from "@/components/portfolio/case-study-cta";\n`;
      const importRegex = /(import [^\n]+\n)+/;
      content = content.replace(importRegex, match => match + importStatement);
      
      // Add component before CinematicFAQ or at the end of the content wrapper
      if (content.includes('<CinematicFAQ />')) {
        content = content.replace('<CinematicFAQ />', `<CaseStudyCTA slug="${slug}" />\n        <CinematicFAQ />`);
      } else {
        // Find closing tag of the div before </main>
        content = content.replace(/<\/div>\n\s*<\/main>/, `  <CaseStudyCTA slug="${slug}" />\n      </div>\n    </main>`);
      }
      
      fs.writeFileSync(pagePath, content, 'utf-8');
      console.log(`Updated ${slug}`);
    }
  }
});
console.log('Done');
