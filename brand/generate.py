"""Generate the Knord / Nityavali brand pack and the website's link-preview image."""
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))  # expects Geist fonts under ./fonts (npm install geist)
FONTS = os.path.join(HERE, 'fonts', 'node_modules', 'geist', 'dist', 'fonts')
SANS_BOLD = os.path.join(FONTS, 'geist-sans', 'Geist-Bold.ttf')
SANS_MED = os.path.join(FONTS, 'geist-sans', 'Geist-Medium.ttf')
MONO_MED = os.path.join(FONTS, 'geist-mono', 'GeistMono-Medium.ttf')
OUT = r'C:\Users\kavya\Desktop\Knord\Knord-LandingPage\brand'
PUBLIC = r'C:\Users\kavya\Desktop\Knord\Knord-LandingPage\public'

INK, INK_SOFT, CANVAS = '#1C1917', '#2A2522', '#FAF9F6'
WHITE, ORANGE, TEAL_ARROW, TEAL, MUTED, MUTED_DARK = '#FAF9F6', '#E8771A', '#1FA391', '#0F7B6F', '#78716C', '#A8A29E'

# ---- marks on a 64-unit grid: (kind, points/rect, stroke width, colour) ----
KNORD = [
    ('rect', (17, 14, 7, 36), None, WHITE),
    ('line', [(25, 34), (44, 50)], 7, WHITE),
    ('line', [(25, 31), (44, 14)], 7, ORANGE),
    ('line', [(33, 13.5), (44.5, 13.5), (44.5, 25)], 5, ORANGE),
]
NITYAVALI = [
    ('line', [(17, 50), (17, 14), (39, 46)], 7, WHITE),
    ('line', [(39, 46), (39, 30), (47, 14)], 7, TEAL_ARROW),
    ('line', [(37.5, 14), (47.5, 14), (47.5, 24)], 5, TEAL_ARROW),
]


def hex2rgba(h, a=255):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4)) + (a,)


def mark_svg_body(strokes, square=INK, ox=0, oy=0, s=1.0):
    parts = [f'<rect x="{ox}" y="{oy}" width="{64 * s}" height="{64 * s}" rx="{16 * s}" fill="{square}"/>']
    g = []
    for kind, data, w, col in strokes:
        if kind == 'rect':
            x, y, ww, hh = data
            g.append(f'<rect x="{x}" y="{y}" width="{ww}" height="{hh}" rx="{ww / 2}" fill="{col}"/>')
        else:
            d = 'M' + ' L'.join(f'{x} {y}' for x, y in data)
            g.append(f'<path d="{d}" fill="none" stroke="{col}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>')
    parts.append(f'<g transform="translate({ox} {oy}) scale({s})">' + ''.join(g) + '</g>')
    return ''.join(parts)


def draw_mark(img, strokes, x0, y0, size, square=INK):
    """Draw a mark onto a PIL image (supersampled by the caller)."""
    d = ImageDraw.Draw(img)
    k = size / 64
    d.rounded_rectangle([x0, y0, x0 + size - 1, y0 + size - 1], radius=int(16 * k), fill=hex2rgba(square))
    for kind, data, w, col in strokes:
        c = hex2rgba(col)
        if kind == 'rect':
            x, y, ww, hh = data
            d.rounded_rectangle([x0 + x * k, y0 + y * k, x0 + (x + ww) * k, y0 + (y + hh) * k], radius=ww * k / 2, fill=c)
            continue
        pts = [(x0 + x * k, y0 + y * k) for x, y in data]
        r = w * k / 2
        for a, b in zip(pts, pts[1:]):
            d.line([a, b], fill=c, width=max(1, int(round(w * k))))
        for x, y in pts:
            d.ellipse([x - r, y - r, x + r, y + r], fill=c)


def mark_png(strokes, size, path, square=INK):
    ss = 4
    img = Image.new('RGBA', (size * ss, size * ss), (0, 0, 0, 0))
    draw_mark(img, strokes, 0, 0, size * ss, square)
    img.resize((size, size), Image.LANCZOS).save(path)


# ---- text → SVG outlines (identical on every computer) ----
def text_path(font_path, text, size, x, y, tracking=0.0):
    font = TTFont(font_path)
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font['head'].unitsPerEm
    out, cx = [], x
    for ch in text:
        gname = cmap.get(ord(ch))
        if gname is None:
            continue
        pen = SVGPathPen(gs)
        gs[gname].draw(TransformPen(pen, (scale, 0, 0, -scale, cx, y)))
        if pen.getCommands():
            out.append(pen.getCommands())
        cx += gs[gname].width * scale + tracking
    return ' '.join(out), cx - tracking - x


def lockup_svg(strokes, name, sub, dark=False):
    fg = WHITE if dark else INK
    subc = MUTED_DARK if dark else MUTED
    square = INK_SOFT if dark else INK
    name_d, name_w = text_path(SANS_BOLD, name, 40, 84, 44, tracking=-1.4)
    sub_d, sub_w = text_path(MONO_MED, sub, 11.5, 85, 64, tracking=1.2)
    w = int(max(84 + name_w, 85 + sub_w) + 6)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} 72" width="{w}" height="72" fill="none">'
            + mark_svg_body(strokes, square, 4, 4, 1.0)
            + f'<path d="{name_d}" fill="{fg}"/><path d="{sub_d}" fill="{subc}"/></svg>')


def lockup_png(strokes, name, sub, path, dark=False, height=72, bg=None):
    ss = 4
    s = height / 72 * ss
    fg, subc = (WHITE, MUTED_DARK) if dark else (INK, MUTED)
    f_name = ImageFont.truetype(SANS_BOLD, int(40 * s))
    f_sub = ImageFont.truetype(MONO_MED, int(11.5 * s))
    tmp = ImageDraw.Draw(Image.new('RGBA', (1, 1)))
    name_w = tmp.textlength(name, font=f_name) - 1.4 * s * (len(name) - 1)
    sub_w = tmp.textlength(sub, font=f_sub) + 1.2 * s * (len(sub) - 1)
    W = int(max(84 * s + name_w, 85 * s + sub_w) + 8 * s)
    H = int(72 * s)
    img = Image.new('RGBA', (W, H), hex2rgba(bg) if bg else (0, 0, 0, 0))
    draw_mark(img, strokes, int(4 * s), int(4 * s), int(64 * s), INK_SOFT if dark else INK)
    d = ImageDraw.Draw(img)
    cx = 84 * s
    for ch in name:  # manual tracking
        d.text((cx, 44 * s), ch, font=f_name, fill=hex2rgba(fg), anchor='ls')
        cx += tmp.textlength(ch, font=f_name) - 1.4 * s
    cx = 85 * s
    for ch in sub:
        d.text((cx, 64 * s), ch, font=f_sub, fill=hex2rgba(subc), anchor='ls')
        cx += tmp.textlength(ch, font=f_sub) + 1.2 * s
    img.resize((W // ss, H // ss), Image.LANCZOS).save(path)


def avatar(strokes, path, size=800):
    ss = 2
    img = Image.new('RGBA', (size * ss, size * ss), hex2rgba(CANVAS))
    m = int(size * ss * 0.62)
    o = (size * ss - m) // 2
    draw_mark(img, strokes, o, o, m)
    img.resize((size, size), Image.LANCZOS).convert('RGB').save(path)


def og_image(path):
    """1200×630 link preview for the website (WhatsApp, LinkedIn, X…)."""
    W, H, ss = 1200, 630, 2
    img = Image.new('RGBA', (W * ss, H * ss), hex2rgba(CANVAS))
    d = ImageDraw.Draw(img)
    # soft glows
    glow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for cx, cy, r, col in [(1050, 80, 420, (30, 148, 132, 34)), (120, 600, 380, (29, 95, 184, 22))]:
        for i in range(30):
            rr = r * ss * (1 - i / 30)
            a = int(col[3] * (i / 30))
            gd.ellipse([cx * ss - rr, cy * ss - rr, cx * ss + rr, cy * ss + rr], fill=col[:3] + (a,))
    img = Image.alpha_composite(img, glow)
    d = ImageDraw.Draw(img)
    S = lambda v: int(v * ss)
    # lockup: Knord / Nityavali
    draw_mark(img, KNORD, S(72), S(64), S(52))
    f_brand = ImageFont.truetype(SANS_BOLD, S(26))
    d.text((S(136), S(98)), 'Knord', font=f_brand, fill=hex2rgba(INK), anchor='ls')
    d.text((S(222), S(98)), '/', font=f_brand, fill=hex2rgba('#D6D3D1'), anchor='ls')
    draw_mark(img, NITYAVALI, S(248), S(68), S(44))
    d.text((S(304), S(98)), 'Nityavali', font=f_brand, fill=hex2rgba(INK), anchor='ls')
    # headline
    f_h = ImageFont.truetype(SANS_BOLD, S(66))
    lines = [('Run the whole business,', INK), ('from first enquiry', INK)]
    y = 250
    for text, col in lines:
        d.text((S(72), S(y)), text, font=f_h, fill=hex2rgba(col), anchor='ls')
        y += 76
    w_to = d.textlength('to ', font=f_h)
    d.text((S(72), S(y)), 'to ', font=f_h, fill=hex2rgba(INK), anchor='ls')
    d.text((S(72) + w_to, S(y)), 'renewal.', font=f_h, fill=hex2rgba(TEAL), anchor='ls')
    f_sub = ImageFont.truetype(SANS_MED, S(24))
    d.text((S(72), S(y + 62)), 'Leads, clients, projects, people, support and AMC renewals in one workspace.',
           font=f_sub, fill=hex2rgba(MUTED), anchor='ls')
    # colour chips, one per product area
    f_chip = ImageFont.truetype(SANS_BOLD, S(18))
    chips = [('New lead', '#E6F0FB', '#1D5FB8'), ('Project on track', '#EFEAFB', '#6941C6'),
             ('Ticket resolved', '#FDE8E3', '#C4402F'), ('Renewal in 30 days', '#E4F3F0', '#0F7B6F')]
    x = 72
    for text, bg, fg in chips:
        tw = d.textlength(text, font=f_chip) / ss
        d.rounded_rectangle([S(x), S(538), S(x + tw + 32), S(578)], radius=S(20), fill=hex2rgba(bg))
        d.text((S(x + 16), S(564)), text, font=f_chip, fill=hex2rgba(fg), anchor='ls')
        x += tw + 44
    img.resize((W, H), Image.LANCZOS).convert('RGB').save(path, quality=92)


def main():
    for sub in ('svg', 'png', 'social', 'email'):
        os.makedirs(os.path.join(OUT, sub), exist_ok=True)
    for name, strokes in (('knord', KNORD), ('nityavali', NITYAVALI)):
        with open(os.path.join(OUT, 'svg', f'{name}-mark.svg'), 'w', encoding='utf-8') as f:
            f.write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">{mark_svg_body(strokes)}</svg>\n')
        for s in (16, 32, 48, 64, 128, 180, 192, 256, 512, 1024):
            mark_png(strokes, s, os.path.join(OUT, 'png', f'{name}-mark-{s}.png'))
        avatar(strokes, os.path.join(OUT, 'social', f'{name}-avatar-800.png'))
    for dark in (False, True):
        sfx = '-dark' if dark else ''
        with open(os.path.join(OUT, 'svg', f'knord-lockup{sfx}.svg'), 'w', encoding='utf-8') as f:
            f.write(lockup_svg(KNORD, 'Knord', 'TECHNOLOGIES', dark) + '\n')
        with open(os.path.join(OUT, 'svg', f'nityavali-lockup{sfx}.svg'), 'w', encoding='utf-8') as f:
            f.write(lockup_svg(NITYAVALI, 'Nityavali', 'by Knord Technologies', dark) + '\n')
        lockup_png(KNORD, 'Knord', 'TECHNOLOGIES', os.path.join(OUT, 'png', f'knord-lockup{sfx}@2x.png'), dark, 144)
        lockup_png(NITYAVALI, 'Nityavali', 'by Knord Technologies', os.path.join(OUT, 'png', f'nityavali-lockup{sfx}@2x.png'), dark, 144)
    # email signatures: white background (most mail clients), ~240px wide shown at half size
    lockup_png(KNORD, 'Knord', 'TECHNOLOGIES', os.path.join(OUT, 'email', 'knord-email-signature.png'), False, 96, bg='#FFFFFF')
    lockup_png(NITYAVALI, 'Nityavali', 'by Knord Technologies', os.path.join(OUT, 'email', 'nityavali-email-signature.png'), False, 96, bg='#FFFFFF')
    og_image(os.path.join(PUBLIC, 'og-image.png'))
    print('ok')


if __name__ == '__main__':
    main()
