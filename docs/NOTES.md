# Build Notes

Implementation notes for the portfolio site, following `docs/prompt.md`, `docs/my_portfolio.pdf`, and `DESIGN.md`.

## Design decisions

- **Design system**: full spec lives in `DESIGN.md` (colors, type scale, spacing, components, motion) and `TASTE.md` (standing style profile). Both were produced with the `design-taste-frontend` skill before any code was written, reconciling the user-supplied reference screenshots (`/references`, extracted into `.claude/THEME.md`) with the AR/VR-flavored brief in `docs/prompt.md`.
- **Hero visual**: originally a "Tracking Frame" motif (rotated wireframe squares drifting with cursor parallax), later composited behind your portrait. Removed at your request as visual clutter over the photo; the hero now shows just the portrait with a soft teal ambient glow (`components/hero-portrait.tsx`, replacing the deleted `components/tracking-frame.tsx`). The wireframe idea lives on only as the corner-bracket hover effect on project cards (`components/project-visual.tsx`).
- **Tailwind v4**: used via `@tailwindcss/postcss`, tokens defined in `app/globals.css` under `@theme` rather than a `tailwind.config.ts`, matching Tailwind v4's CSS-first configuration.
- **Fonts**: Lexend (display), Inter (body), JetBrains Mono (labels), all loaded via `next/font/google`, self-hosted at build time (no external font CDN calls).
- **Content**: all copy in `/data` is sourced from `docs/prompt.md` and `docs/my_portfolio.pdf` (identical content in both). No facts were invented; the hero headline and about paragraphs are rewritten for tone, not pasted verbatim, per the brief.
- **Dynamic OG/favicon images were removed.** `app/icon.tsx` and `app/opengraph-image.tsx` (built on `next/og`'s `ImageResponse`) were tried first, but `@vercel/og`'s font-loading step throws `TypeError: Invalid URL` when the project path contains a space (`D:\Portfolio Web\portfolio-web`), a known Windows-specific issue in that dependency. Replaced with a static `public/favicon.svg` monogram and plain Open Graph title/description metadata (no OG image). If the project is later moved to a path without spaces, the dynamic versions can be restored for a nicer social card.

## Recent additions

- **EventX and FlowGuard now also link to their GitHub repos** as a secondary link alongside their existing demo video (`data/projects.ts`): EventX → `github.com/RMIT-Vietnam-Teaching/assignment-2-build-a-backend-sgs-tut02-group2`, FlowGuard → `github.com/KhanhQNguyn/flowguard`. **TicTacToang now also links to its live demo** (`tictactoang.vercel.app`) as a secondary link alongside its existing GitHub repo. All three use the `secondaryLink`/`secondaryLinkLabel` fields added for the Countdown project below.

- **Countdown project added** (`data/projects.ts`), 6th/newest card, layout `split-right` continuing the alternation. Role: Solo Fullstack Developer, 2026. Description compresses the three resume bullets (personal-need origin/tech stack, OAuth + RLS + Discord digest automation, collaborative Group Countdown mode) into one concise paragraph per your instruction, rather than listing all three verbatim. Screenshot supplied by you at `public/projects/countdown.png`.
- **`Project` type extended with an optional `secondaryLink`/`secondaryLinkLabel`** (`data/projects.ts`, rendered in `components/project-card.tsx`) since Countdown has both a live demo and a GitHub repo, unlike every prior project's single link. Live Demo (`https://chronocount.vercel.app/`) is the primary link, GitHub Repo (`https://github.com/Minz516/count-down`) secondary — both render side by side on the card. Existing projects are unaffected (the field is optional and unset for them).
- Projects section heading (`components/projects.tsx`) updated from "Five projects, five problem spaces." to "Six projects, six problem spaces."

## Placeholder content that needs your input

- **EventX and FlowGuard now link to their demo videos** (YouTube) instead of the earlier `#` GitHub placeholder; both changed `linkLabel` from "GitHub Repo" to "Video" to match. **Floppy Bird and TicTacToang link to their real GitHub repos.** Railway Management System is the only project still on a `#` placeholder ("Video" label) — its real video URL wasn't supplied.
- **Project imagery is real, user-supplied screenshots** (`public/projects/*.png`), grayscale at rest and full color on hover (scoped to mouse/trackpad devices via `@media (hover: hover)` in `app/globals.css`, so touch devices always show full color, see below).
- **Floppy Bird's role is inferred, not confirmed.** `role: "Solo Developer"` in `data/projects.ts` was not explicitly stated (assumed since no team was mentioned). Its date (2026) was confirmed via a clarifying question. Neither it nor TicTacToang has a `result` line (no score/placement was given for either) — the UI already handles a project without one.
- **New honors entry added: "RMIT Hackathon 2025 - Certificate of Participation."** You confirmed this via a clarifying question. Its description in `data/honors.ts` was adapted from the certificate's own printed text ("In recognition of your active participation and innovative solutions..."), not otherwise sourced from the resume. Double-check the wording matches how you'd want it described.
- **TicTacToang project added** (`data/projects.ts`, per `docs/add_tictactoang_prompt.md`): Fullstack Developer, 2026, real-time multiplayer Tic-Tac-Toe (React, Node.js, WebSocket), placed as the 5th/newest card using the real screenshot at `public/projects/tictactoang.png`. Description was lightly reworded from the brief to match the site's copy voice and to remove an em-dash (banned per this project's design system).
- **Two new Skills categories added** (`data/skills.ts`, per `docs/add_skills_prompt.md`): "Data Structures & Algorithms" (11 items, full-width bento cell) and "Game AI" (4 items), placed right after "Frameworks & Libraries." Existing categories and their items were left untouched.
- **Brand icons added to Skills chips** in Languages, Frameworks & Libraries, Databases, and Tools (`components/skills.tsx`, via the `react-icons` package). No single icon set covers every brand: Java, VS Code, and Excel/Word/PowerPoint have no official mark in Simple Icons for trademark reasons, so those fall back to Devicon (Java), Codicons (VS Code), and Font Awesome's generic file-type glyphs (Office apps) instead. Data Structures & Algorithms, Game AI, Backend & Deployment, and Soft Skills intentionally stay icon-free, as requested.
- **Real portraits wired in three places** (`data/site.ts` `avatar` field): the hero's Tracking Frame motif now has `minh_photo_transparent_v2.png` composited behind the wireframe squares (the frames literally lock onto you now), the About section leads with `IMG_5705.jpg` (swapped in from the earlier posed headshot, per your request), and the nav wordmark keeps its small circular avatar (`minh_photo_avatar_square.png`).
- **New "Certificates" section added** (`components/certificates.tsx`, `data/certificates.ts`) between Honors and Contact, with a nav link. Shows all 4 scans from `public/certificates/`: BIG-O Blue (Algorithms & Interview Patterns), RMIT Hackathon 2025 (moved out of Honors & Awards, per your request), Top 10 Most Outstanding Teams at RMIT Hack-A-Venture 2025, and Mastering Skills for University Success. Note the Hack-A-Venture certificate says "Top 10 Most Outstanding Teams," a different distinction than the "Champion" trophy that stays in Honors, both are genuine per the source images, described separately rather than conflated. Dates/issuers are transcribed directly from each certificate; the BIG-O date assumes DD/MM/YYYY (confirmed by the unambiguous 15/09/2022 format on another cert in the same batch).
- **No Open Graph banner image.** A 1200x630 image at `public/opengraph-image.png` (or a moved project path so the dynamic `next/og` route works, see above) would complete the SEO setup.
- **`metadataBase` URL is a placeholder** (`https://tranhoangminh.dev` in `app/layout.tsx`). Update it to the real deployed domain once you have one, so Open Graph/Twitter card URLs resolve correctly.

## Accessibility fix worth knowing about

The grayscale-to-color project image treatment (from `.claude/THEME.md`'s component spec) only applies under `@media (hover: hover) and (pointer: fine)` (see `.project-thumb` in `app/globals.css`). Touch devices (phones, tablets) never fire `:hover`, so without this guard they'd see permanently desaturated, dimmer project images with no way to reveal color. Touch devices now always render images in full color instead.

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
- Manually reviewed in Chrome at desktop width: hero load sequence, scroll reveals, nav smooth-scroll, skills bento grid, honors timeline, and contact/footer all render and animate as designed.
- Confirmed via DOM/network inspection (not screenshots) that all four project images load successfully (200 responses via `/_next/image`) with correct grayscale filters and layout, after the Chrome automation tool in this session became unreliable mid-review (screenshots came back solid black regardless of actual page state, reproducible even in fresh tabs, likely a stuck compositor/extension state rather than a site bug). Worth a quick manual look at the Projects section yourself to confirm it looks right.
