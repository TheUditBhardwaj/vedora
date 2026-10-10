import os
import re

# Update HTML
html_file = 'rendered.html'
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace image paths
html = html.replace('src="/images/', 'src="https://lively-bunny-a1bd05.netlify.app/images/')

# Replace CSS link
html = re.sub(r'<link rel="stylesheet".*?href="/assets/.*?\.css">', '<link rel="stylesheet" href="style.css">', html)

# Remove JS script
html = re.sub(r'<script type="module".*?src="/assets/.*?\.js"></script>', '', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update CSS
css_file = 'original.css'
if os.path.exists(css_file):
    with open(css_file, 'r', encoding='utf-8') as f:
        css = f.read()
    
    # Replace background images if any
    css = css.replace('url(/images/', 'url(https://lively-bunny-a1bd05.netlify.app/images/')
    
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)

print("Build complete.")
