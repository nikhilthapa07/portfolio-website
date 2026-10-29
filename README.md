# Nikhil Thapa — Portfolio

A single-page portfolio for Nikhil Thapa, a full-stack and generative AI developer based in Dubai. Built with Next.js 16, React 19, and hand-written CSS — no animation libraries.

## What's inside

- **Pixel-art animated backdrop** — a canvas dot grid with random pixel blinks and falling pixel glyphs (`components/PixelBackground.tsx`), disabled under `prefers-reduced-motion`.
- **Hero** — animated selection frame, handwritten notes, and floating pixel cursors.
- **Sticky project stack** — four projects (three live Nissan launches plus an enterprise RAG platform) that stack as you scroll, each with a CSS/SVG mockup instead of a screenshot.
- **Version-history timeline** — expandable roles and education.
- **Draggable toolkit** — skill stickers you can drag around the board, with a “Tidy up” reset.
- **Contact composer** — validates the form, then opens a prefilled `mailto:` (no backend), plus a copy-email fallback with toast feedback.
- **Resume download** — `public/Nikhil-Thapa-Resume.pdf`.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Plain CSS in `app/globals.css` with `next/font` (Instrument Sans, Pixelify Sans, Shantell Sans)

## Project structure

```
app/
  layout.tsx        fonts, metadata, viewport
  page.tsx          section composition
  globals.css       design system, animations, responsive rules
components/
  sections/         Header, Hero, About, Work, Journey, Toolkit, Contact
  ProjectPreview.tsx   framed project image previews
  ProjectStack.tsx     sticky-card height equalisation
  StickerBoard.tsx     draggable toolkit stickers
  ContactThread.tsx    mailto composer + validation
  PixelBackground.tsx  animated canvas backdrop
data/portfolio.ts   all resume content and project data
public/             resume PDF and project imagery
```

## Image credits

- Nissan Magnite, Patrol Nismo, and Patrol hero imagery comes from the live project sites.
- The RAG diagram is by [Turtlecrown](https://commons.wikimedia.org/wiki/User:Turtlecrown) via Wikimedia Commons, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev     # start the dev server
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```

## Editing content

Most copy lives in `data/portfolio.ts` — profile, projects, experience, skills, and social links. Update that file rather than the components to change content. The resume PDF lives at `public/Nikhil-Thapa-Resume.pdf`; replace it to update the download.

## Deploy

Deploy on [Vercel](https://vercel.com/new) or any host that supports Next.js. Set the production domain in `metadataBase` inside `app/layout.tsx` if it differs from `https://nikhilthapa.vercel.app`.
