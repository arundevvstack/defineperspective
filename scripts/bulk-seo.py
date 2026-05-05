import os
import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Update alt tags in Image components
    # Matches <Image ... alt="..." ... /> or <Image ... alt={'...'} ... />
    updated_content = re.sub(
        r'alt=(["\'])(?:(?!\1).)*\1',
        r'alt="AI video production company in Kerala - DP AI Studio"',
        content
    )
    
    # Update title in Metadata
    updated_content = re.sub(
        r'title:\s*["\'](?:(?!["\']).)*["\']',
        'title: "Best AI Video Production Company in Kerala | DP AI Studio India"',
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
