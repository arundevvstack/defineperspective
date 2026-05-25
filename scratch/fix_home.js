const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/components/home-content.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the bottom of the file (Suspense and WhatsAppChat)
content = content.replace(
  /<Suspense fallback=\{null\}>\s*<WhatsAppChat \/>\s*<DynamicLeadMagnet \/>\s*\{\/\* Visible AI Knowledge Hub.*?\}\s*<AiKnowledgeHub \/>\s*<WhatsAppChat \/>\s*<\/main>\s*\);\s*\}/s,
  `<Suspense fallback={null}>\n        <WhatsAppChat />\n        <DynamicLeadMagnet />\n      </Suspense>\n\n      {/* Visible AI Knowledge Hub */}\n      <AiKnowledgeHub />\n\n    </main>\n  );\n}`
);

// 2. Replace all <motion.div ...> with <ScrollFade><div ...></div></ScrollFade>
// To be safe, we'll just replace the tags that are purely static or simple in home-content.tsx.
// Since regexing React props is hard, let's just strip 'motion.' from tags, and we don't care about animations on Server Components for now, 
// OR we can wrap them in ScrollFade. But wait, removing them is safer for RSC! The user said: "Replace simple fades/slides with: CSS animations".
// So let's just strip 'motion.', remove 'initial', 'whileInView', 'transition', 'viewport', 'animate'.
content = content.replace(/<motion\.([a-zA-Z]+)/g, '<$1');
content = content.replace(/<\/motion\.([a-zA-Z]+)>/g, '</$1>');
// Remove animation props
content = content.replace(/\s+(initial|whileInView|viewport|animate|transition|whileHover|whileTap)=\{.*?\}\}/g, '');
content = content.replace(/\s+(initial|whileInView|viewport|animate|transition|whileHover|whileTap)=\{\[.*?\]\}/g, '');
content = content.replace(/\s+(initial|whileInView|viewport|animate|transition|whileHover|whileTap)=\{.*?\}(?=\s|>)/g, ''); // simplified

fs.writeFileSync(file, content);
console.log('Fixed home-content.tsx');
