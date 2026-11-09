# Aviorafly

A Next.js catalog for FPV drones, RC aircraft, model kits, and workshop tools.
The homepage cards link to statically generated product pages with complete
specifications and an email enquiry action. The catalog has no checkout.

**This is a fully static, code-only site.** There's no CMS or admin
dashboard — every product, price, and piece of text lives directly in the
code. To change anything, edit the relevant file and redeploy.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Needs internet access once, for fonts
(Google Fonts, loaded via `next/font/google`) — no other external services
are used. There's no database, no API keys, nothing to configure.

To create a production build:

```bash
npm run build
npm run start
```

## How to edit things

- **Products** (add, remove, or edit any Rocket, Airplane, or Tool) —
  `data/products.ts`. Each item is a plain object; copy an existing one as
  a template.
- **Product photos** — put the image file in `public/tools/` (or wherever
  you like under `public/`) and reference it from `data/products.ts` as
  `image: "/tools/your-file.jpg"`. Leave `image` unset entirely and the
  card shows a plain "soon" placeholder instead.
- **Contact info, headlines, section text** — all in one place at the top
  of `app/page.tsx`, in the `content` object.
- **Site name** — "NovaWing Aerospace". Search that string in
  `components/Navbar.tsx`, `components/Footer.tsx`, and `app/layout.tsx`
  to rename it.

## Project structure

```
app/                Root layout, global styles, homepage, product pages,
                    sitemap.xml, and robots.txt
components/         Navbar, Hero, Stats, ProductsSection, ProductCard,
                    About, Parallax, Contact, Footer, Preloader,
                    BlueprintRocket (the animated hero SVG)
data/products.ts     Every product on the site — rockets, airplanes, tools
public/tools/        Real product photos for the Tools category
lib/site.ts          Production URL, search metadata, and product summaries
```

## Search visibility

See [SEO setup](docs/seo-setup.md) for Google Search Console setup and the
checks to perform after deployment. Product URLs and the sitemap update
automatically from `data/products.ts` during each production build.

## Design notes

- Dark "engineering blueprint" theme: grid-paper backgrounds, hairline
  borders, a monospace font used specifically for spec numbers, two accent
  colors (blue for rockets/tools, amber for aircraft).
- Animations: a launch-countdown preload sequence, a self-drawing rocket
  schematic in the hero, scroll-triggered stat counters, a parallax photo
  banner, hover/expand interactions on product cards. All motion respects
  `prefers-reduced-motion`.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS,
  Framer Motion, lucide-react icons. No database, no CMS, no external
  runtime dependencies.
