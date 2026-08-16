# TASTE.md — Tran Hoang Minh's Design Preferences

Personal style reference, distilled from the reference screenshots in `/references` and `.claude/THEME.md`. Keep this file in sync if taste evolves; treat it as the default starting point for future redesigns of this portfolio.

## Overall Aesthetic
- **High-Contrast Modern / "Tech-Forward Luxury."** True-black (`#0e0e0e`–`#131313`) foundation, not off-black-as-compromise — deep immersion is the point.
- Precision and restraint over decoration. "Blackspace" (generous dark negative space) is a feature, not empty space to fill.
- Reads like a systems/engineering blueprint: left-aligned, gridded, monospace metadata — not a warm/organic/editorial-serif portfolio.

## Color
- Single interactive accent: **teal** (`#53ebe8` / `#25cfcc`). Used for every clickable/active element, hover glows, focus rings. Never diluted with a second "also clickable" color.
- **Sand** (`#dbc49c`) as a secondary, non-interactive accent — chip text, timeline year labels, metadata only. Adds warmth without competing with teal.
- Amber/tertiary reserved for rare one-off highlight moments (e.g. a standout award), not a general-purpose third accent.
- Explicitly rejects: purple/violet AI-gradient palettes, warm cream+brass "premium artisan" palettes, pure `#000000`.

## Typography
- Three-family system, each with a distinct job: **Lexend** (display/headlines, geometric and tight-tracked), **Inter** (body copy, legibility-first), **JetBrains Mono** (labels/tags/metadata, uppercase, wide-tracked). Never one font doing everything.
- Headlines scale aggressively on desktop, tight `letter-spacing` (`-0.02em` to `-0.04em`) for a "locked-in" technical feel.
- Monospace is the tell for "this is technical/structured data" (tags, dates, scores) throughout.

## Layout
- Left-aligned text blocks throughout — consistent vertical axis, "architectural blueprint" feel. Avoids centered hero/copy.
- Large, deliberate section gaps (160px desktop rhythm) — sections should feel like distinct gallery rooms, not a continuous scroll of cramped content.
- 12/8/4-column responsive grid, 8px spacing unit.
- Favors asymmetric/split compositions over symmetric centered ones.

## Components & Depth
- Depth via tonal layering + thin 1px low-opacity borders, not drop shadows.
- Hover state = teal inner-stroke glow, not an external shadow or scale-pop.
- One corner-radius scale per project: soft-but-not-bubbly (4px interactive, 8px large containers, 0px on media/screenshots).
- Project cards: grayscale-at-rest imagery that goes full color on hover — a recurring signature worth reusing.
- Timeline/badge layout preferred for education, awards, and other chronological data over plain bullet lists.
- Glassmorphism used narrowly, just for the nav bar (frosted obsidian: 20px blur, 5% white tint) — not applied everywhere.

## Motion
- Motion should be purposeful and subtle: hover micro-interactions, scroll reveals, one hero load sequence. Not a showcase of animation for its own sake.
- Comfortable with a signature motif tied to the subject's domain (e.g. AR/VR wireframe/tracking-frame elements for [[design-tran-hoang-minh-portfolio]]) — used once, deliberately, echoed faintly elsewhere, never scattered across the page.

## Reference Anchor
- `.claude/THEME.md` is the canonical extracted token set for this brand and should be treated as ground truth ahead of generic design-skill defaults whenever the two disagree (this is the user's own chosen reference material, not a generic template).
- Reference screenshots (`/references/Screenshot 2026-08-16 *.png`) show a "PORTFOLIO_SYSTEM_V1" style dev-portfolio: sticky-top nav with pill CTA, split hero with wireframe geometric shapes, image+text about section, full-width alternating project cards, and a two-column timeline + certification-card education/awards section. This structural rhythm is a strong default to reuse for future portfolio-style builds for this user.

See [[design-tran-hoang-minh-portfolio]] for the concrete DESIGN.md this taste profile produced.
