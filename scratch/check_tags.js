
const fs = require('fs');
const content = fs.readFileSync('d:\\Workstation DP-2\\DP Clients\\WEB DEVELOPMENT\\DP Live\\src\\components\\home-content.tsx', 'utf8');
const lines = content.split('\n');

let stack = [];
const tags = [
    'div', 'section', 'form', 'main', 'button', 'Link', 'h1', 'h2', 'h3', 'h4', 'p', 'span', 'ul', 'li', 
    'Suspense', 'VideoHero', 'GlassNavbar', 'WhatsAppChat', 'VideoLightbox', 'IndustriesSection', 'DynamicLeadMagnet',
    'motion.div', 'motion.section', 'motion.h2', 'motion.p', 'motion.span', 'motion.a'
];
const regex = new RegExp(`<((${tags.join('|').replace(/\./g, '\\.')})|\\/(${tags.join('|').replace(/\./g, '\\.')}))`, 'g');

lines.forEach((line, i) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
        const fullMatch = match[0];
        const isClosing = fullMatch.startsWith('</');
        const tagName = match[2] || match[3];

        if (!isClosing) {
            // Check for self-closing
            const restOfLine = line.substring(match.index);
            const tagEnd = restOfLine.indexOf('>');
            if (tagEnd !== -1) {
                const tagContent = restOfLine.substring(0, tagEnd + 1);
                if (tagContent.endsWith('/>')) {
                    continue;
                }
            }
            stack.push({ tag: tagName, line: i + 1 });
        } else {
            if (stack.length === 0) {
                console.log(`Extra closing tag </${tagName}> at line ${i + 1}`);
            } else {
                const last = stack.pop();
                if (last.tag !== tagName) {
                    console.log(`Mismatched tag at line ${i + 1}: expected </${last.tag}> (from line ${last.line}), got </${tagName}>`);
                }
            }
        }
    }
});

if (stack.length > 0) {
    console.log("Unclosed tags:");
    stack.forEach(s => console.log(`  <${s.tag}> at line ${s.line}`));
}
