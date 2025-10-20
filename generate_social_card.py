from PIL import Image, ImageDraw, ImageFont
import os

# Create image with same dimensions as original (1200x630 is standard OG image size)
width = 1200
height = 630
image = Image.new('RGB', (width, height), color='#2e3440')

draw = ImageDraw.Draw(image)

# Add pink/purple gradient bar at top
for i in range(12):
    color = f'#{int(232 - i*2):02x}{int(166 - i*2):02x}{int(212 - i*2):02x}'
    draw.rectangle([(0, i), (width, i+1)], fill=color)

# Add blue gradient bar at bottom
for i in range(20):
    y = height - 20 + i
    color = f'#{int(124 + i*2):02x}{int(155 + i*2):02x}{int(217 - i):02x}'
    draw.rectangle([(0, y), (width, y+1)], fill=color)

# Try to use system fonts, fall back to default if not available
try:
    # Try to find Inter or similar modern font
    font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 100)
    font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 42)
except:
    # Fallback to default
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Draw text
name = "Marlana Creed"
subtitle = "Full-Stack Developer • Educator • MS Economics"
tagline = "Building Tools That Actually Help People Learn"
url = "marlanacreed.com"

# Calculate positions for centered text
name_bbox = draw.textbbox((0, 0), name, font=font_large)
name_width = name_bbox[2] - name_bbox[0]
name_x = (width - name_width) // 2

subtitle_bbox = draw.textbbox((0, 0), subtitle, font=font_medium)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2

tagline_bbox = draw.textbbox((0, 0), tagline, font=font_small)
tagline_width = tagline_bbox[2] - tagline_bbox[0]
tagline_x = (width - tagline_width) // 2

url_bbox = draw.textbbox((0, 0), url, font=font_small)
url_width = url_bbox[2] - url_bbox[0]
url_x = (width - url_width) // 2

# Draw text elements
draw.text((name_x, 180), name, fill='#ffffff', font=font_large)
draw.text((subtitle_x, 300), subtitle, fill='#d8dee9', font=font_medium)
draw.text((tagline_x, 380), tagline, fill='#a8d5f5', font=font_small)
draw.text((url_x, 500), url, fill='#7c9bd9', font=font_small)

# Save image
output_path = '/Users/marlanacreed/Downloads/Projects/Portfolio-website/images/social-card.png'
image.save(output_path, 'PNG')
print(f"Social card generated successfully at {output_path}")
