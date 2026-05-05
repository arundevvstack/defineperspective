import os
import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    updated_content = re.sub(
        r'alt=(["\'])(?:(?!\1).)*\1',
        r'alt="AI video production company in Kerala - DP AI Studio"',
        content
    )

    if content != updated_content:
        with open(filepath, 'w') as f:
            f.write(updated_content)
        return True
    return False

root_dir = 'src/components'
count = 0
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.tsx'):
            if update_file(os.path.join(root, file)):
                count += 1

print(f"Updated {count} files in components.")
