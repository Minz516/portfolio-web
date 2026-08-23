# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Tran Hoang Minh's personal portfolio: a single-page Next.js 14 (App Router) site with one route (`app/page.tsx`) that stacks section components (`Nav`, `Hero`, `About`, `Skills`, `Projects`, `Honors`, `Certificates`, `Contact`). No backend, no CMS, no database — all content is hardcoded in typed data files.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build — also the type-check gate (no separate tsc script)
npm run start   # serve the production build
npm run lint    # next lint (ESLint, extends next/core-web-vitals)
```

There is no test suite. Verification for changes is: `npm run build` succeeds, `npm run lint` is clean, and a manual look in the browser (this is a visual, motion-heavy site — diffs should be eyeballed, not just type-checked).

## Architecture

- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`) — import as `@/components/...`, `@/data/...`, not relative paths.
- **Content/presentation split**: every section component (`components/*.tsx`) reads from a matching typed data file in `data/` (`data/site.ts`, `data/projects.ts`, `data/skills.ts`, `data/honors.ts`, `data/certificates.ts`). To change copy, dates, links, or add a project/skill/honor/certificate, edit the data file — don't hardcode content into a component. `data/site.ts` also holds `navLinks`, which drives both the nav and the section anchors (`#about`, `#skills`, etc.) — the two are kept in sync.
- **No `tailwind.config.ts`**: this project uses Tailwind v4's CSS-first config. All design tokens (colors, fonts, radii) are defined as CSS custom properties in `app/globals.css` under `@theme`, then referenced as ordinary Tailwind utility classes (e.g. `--color-primary` → `text-primary`, `bg-primary`). Add new tokens there, not in a config file.
- **Fonts** are loaded once in `app/layout.tsx` via `next/font/google` (Lexend, Inter, JetBrains Mono) and exposed as CSS variables (`--font-lexend`, etc.) consumed by the `--font-display` / `--font-sans` / `--font-mono` theme tokens in `globals.css`.
- **`components/reveal.tsx`** (`Reveal`) is the shared scroll-animation wrapper (Framer Motion `whileInView` fade+rise) used across sections for consistent scroll-reveal behavior; it degrades to an instant, static state under `useReducedMotion()`. Reuse it instead of writing new `whileInView` variants per section.
- **`components/project-visual.tsx`** implements the site's signature project-card treatment: grayscale-at-rest imagery that turns full color on hover with a teal corner-bracket ("tracking frame") accent — this only fires under `@media (hover: hover) and (pointer: fine)` in `globals.css` so touch devices always render in full color (see the accessibility note in `docs/NOTES.md`). Preserve that media guard if touching this treatment.
- **Images**: all photos/screenshots live under `public/` (`public/projects/`, `public/avatar/`, `public/certificates/`) and are rendered via `next/image` with explicit `fill`/`sizes` for no-CLS loading — follow that pattern for new imagery rather than a plain `<img>`.
- No dynamic OG image route (`app/opengraph-image.tsx`/`app/icon.tsx` via `next/og`) — it was tried and removed because `@vercel/og`'s font loader throws on a Windows path containing a space (this repo's path has one: `D:\Portfolio Web\portfolio-web`). OG/favicon are a static `public/favicon.svg` plus plain metadata in `app/layout.tsx` instead. Only reintroduce the dynamic route if the project is moved to a space-free path.

## Design system

This project has a locked design system — read before making any visual change:

- **`.claude/DESIGN.md`** — the full spec: color tokens, type scale, spacing/grid, motion rules, component specs, and the "Tracking Frame" AR/VR-inspired signature motif (used exactly twice: hero and project-card hover — do not add a third usage).
- **`.claude/TASTE.md`** — the standing style profile (high-contrast true-black + single teal accent, three-font system, left-aligned "blueprint" layout, no drop shadows) to default to for any future redesign work on this site.
- **`.claude/THEME.md`** — the raw extracted token set (from the user's reference screenshots in `/references`); source of truth for exact color/type/spacing values whenever it and a generic default disagree.
- Hard rules worth knowing without re-reading the docs: **one accent color** (teal, `#53ebe8`) on every interactive element — sand (`#dbc49c`) is label/metadata-only and never appears on anything clickable; **one radius scale** (4px controls, 8px large containers, 0px media); no drop shadows, only tonal layering + teal inner-stroke glow on hover; zero em-dashes in copy.

## Content accuracy

`data/*.ts` content is sourced from `docs/prompt.md` and `docs/my_portfolio.pdf` (the user's resume/brief) — treat those as the source of truth for facts (dates, results, tech stacks, roles). `docs/NOTES.md` tracks build decisions, placeholder content still needing the user's input (e.g. the Railway Management System project still links to `#`), and inferred-vs-confirmed facts. Check `docs/NOTES.md` before assuming a data field is finalized, and don't invent or embellish resume facts when editing `data/`.
