# Sawsanism Blog

> *Where creativity meets intention.*

A modern, elegant personal website and blog for **Sawsan Abu Khudair** — combining a creative design portfolio with an academic research archive.

🌐 **Live site:** [sawsankhdair-ctrl.github.io/sawsanism](https://sawsankhdair-ctrl.github.io/sawsanism/)

---

## Overview

Sawsanism Blog is a fully responsive, single-page website built with Next.js. It features smooth animations, dark/light mode, a horizontal portfolio gallery with lightbox, expandable research paper cards, and a contact form with real social media links.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with animated title, subtitle, and scroll indicator |
| **Research Papers** | 4 expandable cards with full Arabic/English academic content |
| **Portfolio** | Horizontal scrolling gallery of 13 design works with lightbox modal |
| **Contact** | Contact form + links to Instagram, LinkedIn, and Behance |
| **Footer** | Copyright and tagline |

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.7 | Framework + static export |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling |
| Framer Motion | ^12 | Animations |

---

## Project Structure

```
sawsanism/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, SEO metadata, dark mode init
│   │   ├── page.tsx          # Main page — assembles all sections
│   │   └── globals.css       # CSS variables, color palette, dark mode, scrollbar
│   └── components/
│       ├── Navbar.tsx        # Sticky nav, smooth scroll, dark mode toggle, mobile menu
│       ├── Hero.tsx          # Full-screen hero with animations
│       ├── ResearchPapers.tsx # Paper cards with expandable full content
│       ├── Portfolio.tsx     # Horizontal gallery carousel + lightbox
│       ├── Contact.tsx       # Contact form + social icons
│       └── Footer.tsx        # Footer with tagline
├── public/
│   ├── images/               # All portfolio images (PNG + converted HEIC→JPG)
│   └── .nojekyll             # Prevents GitHub Pages Jekyll processing
├── IMAGES/                   # Original source images (raw, unprocessed)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions — auto-deploy to GitHub Pages on push
├── next.config.ts            # Static export config + basePath for GitHub Pages
└── socials.txt               # Social media links reference file
```

---

## Running Locally

**Requirements:** Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory. The build is configured for GitHub Pages — all asset paths are prefixed with `/sawsanism/`.

> **Note:** Do not run `npm start` — this project uses `output: "export"` (static HTML) and does not support a Node.js server.

---

## Deployment

The site deploys automatically to **GitHub Pages** on every push to `main`.

**How it works:**
1. Push any change to the `main` branch
2. GitHub Actions runs `.github/workflows/deploy.yml`
3. The workflow installs dependencies, builds the static site, and deploys to GitHub Pages
4. Changes are live within ~1 minute

**Manual redeploy** (without a code change):
```bash
gh workflow run deploy.yml
```

---

## Adding New Research Papers

Open `src/components/ResearchPapers.tsx` and add a new object to the `papers` array:

```tsx
{
  id: "unique-id",
  title: "English Title",
  titleAr: "العنوان بالعربي",       // optional
  date: "2025",
  category: "Category Name",
  description: "Short summary shown on the card.",
  content: `Full text of the paper goes here.
  Can be multi-line. Arabic content uses dir="auto".`,
},
```

---

## Adding Portfolio Images

1. Place your image in `/public/images/` (PNG or JPG — no spaces in filename)
2. Open `src/components/Portfolio.tsx` and add to the `images` array:

```tsx
{ src: `${BASE}/images/your-image.png`, alt: "Description" },
```

> HEIC files must be converted to JPG first:
> ```bash
> sips -s format jpeg your-image.HEIC --out public/images/your-image.jpg
> ```

---

## Dark Mode

Dark mode is toggled via the sun/moon icon in the navbar. The preference is saved to `localStorage` and applied immediately on page load (no flash). CSS variables control the entire color palette:

| Variable | Light | Dark |
|---|---|---|
| `--background` | `#FAF7F2` (warm cream) | `#1A1612` |
| `--foreground` | `#3D3229` (dark brown) | `#E8E0D6` |
| `--accent` | `#B8A590` (muted tan) | `#B8A590` |
| `--card-bg` | `#FFFFFF` | `#241F1A` |

---

## Social Links

| Platform | URL |
|---|---|
| Instagram | [instagram.com/sawsanism](https://www.instagram.com/sawsanism) |
| LinkedIn | [linkedin.com/sawsan-abu-khudair](https://www.linkedin.com/sawsan-abu-khudair) |
| Behance | [behance.net/sawsanism](https://www.behance.net/sawsanism) |

To update links, edit the socials array in `src/components/Contact.tsx`.

---

## License

© 2026 Sawsanism Blog. All rights reserved.
