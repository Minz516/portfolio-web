# Build Notes

Implementation notes for the portfolio site, following `docs/prompt.md`, `docs/my_portfolio.pdf`, and `DESIGN.md`.

## Design decisions

- **Design system**: full spec lives in `DESIGN.md` (colors, type scale, spacing, components, motion) and `TASTE.md` (standing style profile). Both were produced with the `design-taste-frontend` skill before any code was written, reconciling the user-supplied reference screenshots (`/references`, extracted into `.claude/THEME.md`) with the AR/VR-flavored brief in `docs/prompt.md`.
- **Signature motif**: "Tracking Frame", a cluster of rotated wireframe squares in the hero that drift with cursor parallax (`components/tracking-frame.tsx`), echoed as a corner-bracket hover effect on project cards (`components/project-visual.tsx`). Ties the AR/VR theme to the visual language without scattering the motif across the page.
- **Tailwind v4**: used via `@tailwindcss/postcss`, tokens defined in `app/globals.css` under `@theme` rather than a `tailwind.config.ts`, matching Tailwind v4's CSS-first configuration.
- **Fonts**: Lexend (display), Inter (body), JetBrains Mono (labels), all loaded via `next/font/google`, self-hosted at build time (no external font CDN calls).
- **Content**: all copy in `/data` is sourced from `docs/prompt.md` and `docs/my_portfolio.pdf` (identical content in both). No facts were invented; the hero headline and about paragraphs are rewritten for tone, not pasted verbatim, per the brief.
- **Dynamic OG/favicon images were removed.** `app/icon.tsx` and `app/opengraph-image.tsx` (built on `next/og`'s `ImageResponse`) were tried first, but `@vercel/og`'s font-loading step throws `TypeError: Invalid URL` when the project path contains a space (`D:\Portfolio Web\portfolio-web`), a known Windows-specific issue in that dependency. Replaced with a static `public/favicon.svg` monogram and plain Open Graph title/description metadata (no OG image). If the project is later moved to a path without spaces, the dynamic versions can be restored for a nicer social card.

## Placeholder content that needs your input

- **Project links are all `#` placeholders.** The brief and resume don't include real URLs for any of the three projects (EventX, Railway Management System, FlowGuard). Replace `link: "#"` in `data/projects.ts` with the real GitHub repo / video URLs when available.
- **Project imagery is abstract placeholder art, not real screenshots.** No product screenshots exist and no image-generation tool was available in this environment, so each project card uses an abstract dot-grid panel with a domain icon (ticket / train / waves) instead of a fake UI mockup. Swap `components/project-visual.tsx` for real `next/image` screenshots per project when you have them; the grayscale-to-color hover treatment described in `.claude/THEME.md` will look better with real photography.
- **No Open Graph banner image.** See the note above. A 1200x630 image at `public/opengraph-image.png` (or a moved project path so the dynamic route works) would complete the SEO setup.
- **`metadataBase` URL is a placeholder** (`https://tranhoangminh.dev` in `app/layout.tsx`). Update it to the real deployed domain once you have one, so Open Graph/Twitter card URLs resolve correctly.

## Suggested next steps

1. Add real project screenshots and links (see above).
2. Deploy to Vercel and update `metadataBase` to the live domain.
3. Consider adding a downloadable resume PDF (link it from the Contact section or nav).
4. If desired, wire up a real contact form with a backend (Resend, Formspree, or a Next.js Route Handler) in place of the current `mailto:` link, currently sufficient per the brief.
5. Run a Lighthouse pass post-deploy to confirm Core Web Vitals in production (dev-mode numbers are not representative).
6. Mobile viewport was verified through code review (all layouts use explicit Tailwind responsive breakpoints with single-column fallbacks) rather than an automated screenshot, because the browser automation tool available in this environment could not resize its viewport independently of the host display. Worth a manual check on a real device before shipping.

## Verified

- `npm run build` completes with no errors or type issues.
- `npx next lint` reports no warnings or errors.
- Manually reviewed in Chrome at desktop width: hero load sequence, scroll reveals, nav smooth-scroll, skills bento grid, project card hover states, honors timeline, and contact/footer all render and animate as designed.
