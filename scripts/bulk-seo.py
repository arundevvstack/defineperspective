import os
import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Update alt tags in Image components - more targeted
    # Only replace generic or empty alts, or specific placeholders
    # For now, let's just make it NOT replace everything if it looks like a UI element (e.g. avatar)
    def alt_replacer(match):
        full_match = match.group(0)
        alt_text = match.group(2)
        # If it's a small UI element or already specific, leave it
        if len(alt_text) < 10 or "avatar" in alt_text.lower() or "icon" in alt_text.lower():
            return full_match
        return f'alt="AI video production company in Kerala - DP AI Studio"'

    updated_content = re.sub(
        r'alt=(["\'])(.*?)\1',
        alt_replacer,
        content
    )
    
    # Update title in Metadata - ONLY inside the metadata export
    # This uses a state machine or more specific multi-line regex
    metadata_pattern = re.compile(r'(export const metadata: Metadata = \{[\s\S]*?title:\s*["\'])(?:(?!["\']).)*(["\'])')
    updated_content = metadata_pattern.sub(
        r'\1Best AI Video Production Company in Kerala | DP AI Studio India\2',
        updated_content
    )

    if content != updated_content:
        with open(filepath, 'w') as f:
            f.write(updated_content)
        return True
    return False

root_dir = 'src/app'
count = 0
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.tsx'):
            if update_file(os.path.join(root, file)):
                count += 1

print(f"Updated {count} files.")
