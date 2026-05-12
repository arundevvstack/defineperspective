
import re

def check_div_balance(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    stack = []
    for i, line in enumerate(lines):
        # Find all <div or </div
        # Note: this is a simple regex and might miss some edge cases (like divs in strings)
        tags = re.findall(r'<(div|/div|section|/section|form|/form)', line)
        for tag in tags:
            if tag.startswith('/'):
                if not stack:
                    print(f"Extra closing tag </{tag[1:]}> at line {i+1}")
                else:
                    last_tag = stack.pop()
                    if last_tag != tag[1:]:
                        print(f"Mismatched tag: expected </{last_tag}>, got </{tag[1:]}> at line {i+1}")
            else:
                # Check for self-closing
                if not line.strip().endswith('/>'):
                    stack.append(tag)
    
    if stack:
        print(f"Unclosed tags: {stack}")

check_div_balance(r'd:\Workstation DP-2\DP Clients\WEB DEVELOPMENT\DP Live\src\components\home-content.tsx')
