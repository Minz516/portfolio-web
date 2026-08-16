# Tran Hoang Minh — Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a Software Engineering student at RMIT University.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Design system documented in [`DESIGN.md`](./DESIGN.md); build decisions and placeholder content documented in [`NOTES.md`](./NOTES.md).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Project structure

```
app/            # Next.js App Router: layout, page, global styles
components/     # UI sections and building blocks
data/           # Typed content (site info, skills, projects, honors)
DESIGN.md       # Design system: tokens, type scale, components, motion rules
TASTE.md        # Standing style profile for future design work
NOTES.md        # Build decisions and placeholder content to fill in
```

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js, no configuration needed. Click **Deploy**.
4. Once live, update `metadataBase` in `app/layout.tsx` to your production domain so Open Graph and Twitter card links resolve correctly.

Or, from the CLI:

```bash
npm install -g vercel
vercel
```
