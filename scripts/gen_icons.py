import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(sys.argv[1])
pub = root / 'public'
PAPER = (252, 253, 251)
MIST = (238, 245, 243)
DEEP = (18, 78, 75)
MUTED = (64, 89, 81)
LINE = (203, 220, 214)

icon = Image.open(root / 'logos/04_icone_colorido.png').convert('RGBA')
icon = icon.crop(icon.getbbox())


def square(size, pad, bg=None):
    canvas = Image.new('RGBA', (size, size), bg or (0, 0, 0, 0))
    inner = size - 2 * pad
    mark = icon.copy()
    mark.thumbnail((inner, inner), Image.LANCZOS)
    canvas.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    return canvas


# Favicon: margem mínima, o traço fino do dente precisa de todo pixel em 16px.
big = square(256, 6)
big.save(pub / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
# Android e iOS aplicam máscara própria; fundo opaco com respiro evita ícone cortado ou preto.
for size, name in ((192, 'icon-192.png'), (512, 'icon-512.png')):
    square(size, round(size * 0.16), PAPER + (255,)).convert('RGB').save(pub / name, optimize=True)
square(180, 24, PAPER + (255,)).convert('RGB').save(pub / 'apple-touch-icon.png', optimize=True)

# Preview de compartilhamento 1200x630.
W, H = 1200, 630
og = Image.new('RGB', (W, H), MIST)

photo = Image.open(pub / 'images/janaina-hero-1365.webp').convert('RGB')
pw, ph = 470, H
crop_h = int(photo.height * 0.6)
crop_w = int(crop_h * pw / ph)
cx = int(photo.width * 0.56)
left = max(0, min(photo.width - crop_w, cx - crop_w // 2))
top = int(photo.height * 0.04)
photo = photo.crop((left, top, left + crop_w, top + crop_h)).resize((pw, ph), Image.LANCZOS)
mask = Image.new('L', (pw, ph), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, pw + 200, ph + 200), radius=140, fill=255)
og.paste(photo, (W - pw, 0), mask)

logo = Image.open(root / 'logos/01_logo_original_colorida.png').convert('RGBA')
logo = logo.crop(logo.getbbox())
logo.thumbnail((470, 400), Image.LANCZOS)
x0 = 96
og.paste(logo, (x0 + (560 - logo.width) // 2 - 40, 92), logo)

draw = ImageDraw.Draw(og)
sora = ImageFont.truetype(str(pub / 'fonts/sora.woff2'), 34)
sora.set_variation_by_name('SemiBold')
sans = ImageFont.truetype(str(pub / 'fonts/source-sans-3.woff2'), 25)
sans.set_variation_by_name('Regular')
y = 92 + logo.height + 46
draw.line((x0, y, x0 + 520, y), fill=LINE, width=2)
draw.text((x0, y + 30), 'Dentista em Itajubá, MG', font=sora, fill=DEEP)
draw.text((x0, y + 84), 'Clínica geral · DTM · Bruxismo · Dor orofacial', font=sans, fill=MUTED)

og.save(pub / 'images/preview-link.jpg', quality=86, optimize=True, progressive=True)
print('ok', (pub / 'images/preview-link.jpg').stat().st_size // 1024, 'KB')
