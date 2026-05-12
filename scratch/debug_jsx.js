
const fs = require('fs');
const content = fs.readFileSync('d:\\Workstation DP-2\\DP Clients\\WEB DEVELOPMENT\\DP Live\\src\\components\\home-content.tsx', 'utf8');

let braceStack = [];
let tagStack = [];

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check braces
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') braceStack.push({ line: i + 1, char: j + 1 });
        if (line[j] === '}') {
            if (braceStack.length === 0) {
                console.log(`Extra closing brace at line ${i + 1}, char ${j + 1}`);
            } else {
                braceStack.pop();
            }
        }
    }

    // Check tags (simple regex)
    const tagMatches = line.matchAll(/<([a-zA-Z0-9\.]+)|<\/([a-zA-Z0-9\.]+)/g);
    for (const match of tagMatches) {
        const tagName = match[1] || match[2];
        const isClosing = !!match[2];
        
        // Skip self-closing tags (very basic check)
        const tagContent = line.substring(match.index);
        const closingIndex = tagContent.indexOf('>');
        if (closingIndex !== -1 && tagContent[closingIndex - 1] === '/') {
            continue;
        }

        if (isClosing) {
            if (tagStack.length === 0) {
                console.log(`Extra closing tag </${tagName}> at line ${i + 1}`);
            } else {
                const last = tagStack.pop();
                if (last.tag !== tagName) {
                    console.log(`Mismatched tag at line ${i + 1}: expected </${last.tag}> (from line ${last.line}), got </${tagName}>`);
                }
            }
        } else {
            tagStack.push({ tag: tagName, line: i + 1 });
        }
    }
}

if (braceStack.length > 0) {
    console.log("Unclosed braces:");
    braceStack.forEach(b => console.log(`  { at line ${b.line}, char ${b.char}`));
}

if (tagStack.length > 0) {
    console.log("Unclosed tags:");
    tagStack.forEach(t => console.log(`  <${t.tag}> at line ${t.line}`));
}
