# DESIGN.md — Tran Hoang Minh Portfolio

## 0. Design Read

Reading this as: **developer portfolio for recruiters and technical evaluators**, with a **high-contrast dark-tech / systems-engineer** language, leaning toward **Next.js + Tailwind + Framer Motion**, typography and color tokens sourced directly from the user's own reference screenshots (`.claude/THEME.md`), with one deliberate AR/VR-flavored signature motif layered on top per the build brief (`docs/prompt.md`).

**Dials**

| Dial | Value | Reasoning |
|---|---|---|
| `DESIGN_VARIANCE` | 7 | Developer portfolio baseline is 6, +1 because the brief explicitly demands avoiding generic AI-template layouts (centered hero + gradient blob, symmetric 3-card grids) |
| `MOTION_INTENSITY` | 6 | References show real hover glow, grayscale-to-color image transitions, timeline reveals; brief asks for scroll reveals, hero load sequence, hover micro-interactions |
| `VISUAL_DENSITY` | 3 | THEME.md explicitly calls for "blackspace," gallery-like breathing room, `section-gap-lg: 160px` |

## 1. Source Reconciliation

Two source documents exist and are reconciled as follows:

- **`.claude/THEME.md`** (extracted from the 5 reference screenshots in `/references`) is the **source of truth for tokens**: color palette, type families, radii, spacing scale, component surface treatment. These come from the user's own chosen references, which outrank generic skill defaults (e.g. the skill's general "avoid Inter" guidance is overridden here because Inter is only the *body* face, paired deliberately with Lexend display and JetBrains Mono labels — a considered three-family system, not a lazy single-font default).
- **`docs/prompt.md`** (the build brief) is the **source of truth for content, IA, and stack** (Next.js 14 App Router, TypeScript, Framer Motion, `next/font`), and additionally asks for one signature visual motif tied to AR/VR/immersive tech, explicitly to avoid a generic AI-template feel.
- **Icon library**: `lucide-react` is used per the explicit stack requirement in `docs/prompt.md`. This is a named exception to the skill's general lucide-discouragement (the override condition — "user explicitly asks for it" — is met).
- Where the two sources are silent, THEME.md's existing high-contrast tech-forward vocabulary governs.

## 2. Color Tokens

True-black anchored palette, teal as the single interactive accent, sand as a restrained secondary (labels/chips only), never mixed into CTAs (Color Consistency Lock).

| Token | Value | Usage |
|---|---|---|
| `surface-container-lowest` | `#0e0e0e` | True background |
| `surface` / `background` | `#131313` | Base page surface |
| `surface-container-low` | `#1c1b1b` | Section alternation (same theme family, no hard flips) |
| `surface-container` | `#20201f` | Card fill |
| `surface-container-high` | `#2a2a2a` | Elevated card / hover fill |
| `surface-container-highest` | `#353535` | Active / pressed state |
| `surface-bright` | `#393939` | Rare high-key surface (badges) |
| `on-surface` | `#e5e2e1` | Primary text |
| `on-surface-variant` | `#bac9c8` | Secondary / muted text |
| `outline` | `#859493` | Default borders (10% white-equivalent visual weight) |
| `outline-variant` | `#3c4949` | Divider hairlines, used sparingly |
| **`primary` (Teal)** | `#53ebe8` | Links, CTA fill, active nav state, glow, focus ring |
| `on-primary` | `#003736` | Text on solid teal buttons |
| `primary-container` | `#25cfcc` | Secondary teal fill (hover states) |
| **`secondary` (Sand)** | `#dbc49c` | Tag/chip text only, timeline year labels |
| `on-secondary-container` | `#c8b28c` | Sand at rest on dark chip fill |
| `tertiary` (Amber) | `#ffcda3` | Reserved, used once for the "1st place" award highlight only — not a general accent |
| `error` | `#ffb4ab` | Form error states only |

**Rule:** every interactive element (buttons, links, active nav, focus rings, hover glows) uses teal. Sand never appears on a clickable element — it is strictly a label/metadata color. This keeps the Color Consistency Lock intact across all six sections.

## 3. Typography

Three-family system already defined in THEME.md, loaded via `next/font/google`.

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / Hero H1 | Lexend | 700 | `next/font/google`, tight tracking (`-0.02em` to `-0.04em`) |
| Section Headlines (H2) | Lexend | 600 | |
| Subheads (H3) | Lexend | 500 | |
| Body copy | Inter | 400 | `max-w-[65ch]`, `leading-[1.6]`–`[1.7]` |
| Technical labels / tags / metadata | JetBrains Mono | 500 | Uppercase, `tracking-[0.1em]`, small size (11–12px) |

**Scale (desktop → mobile)**

| Token | Desktop | Mobile | Line-height |
|---|---|---|---|
| `display-lg` | 72px (not 80px — see hero discipline below) | 40px | 1.1 |
| `headline-md` | 40px | 28px | 1.3 |
| `headline-sm` | 24px | 20px | 1.4 |
| `body-lg` | 18px | 16px | 1.7 |
| `body-md` | 16px | 15px | 1.6 |
| `label-caps` | 12px | 11px | 1.0, `tracking-[0.1em]`, uppercase |

Hero headline is capped at **2 lines** and scaled down from THEME.md's literal 80px to 72px desktop so a two-line headline (e.g. "Software Engineering Student, RMIT University" is NOT the headline — see Section 8) never wraps to 3+ lines. Actual hero copy is short by design (Section 8).

**Italic use:** none planned. If emphasis is needed inside a headline, use Lexend 700 vs 500 weight contrast within the same family, never a mixed serif/sans injection.

## 4. Spacing & Grid

- 8px base unit (THEME.md).
- Container: `max-w-[1280px] mx-auto`, gutter 32px desktop / 16px mobile.
- Grid: 12-col desktop, 8-col tablet, 4-col mobile (`grid-cols-4 md:grid-cols-8 lg:grid-cols-12`).
- Section vertical rhythm: `py-40` (`section-gap-lg`, 160px) desktop between major sections, `py-20` (`section-gap-sm`, 80px) mobile.
- Text alignment: left-aligned throughout (THEME.md explicit preference) — reinforces the "blueprint" feel, also satisfies Anti-Center-Bias at `VARIANCE 7`.

## 5. Shape & Elevation

- One radius scale, locked: `0.25rem` (4px) default for buttons/inputs/chips, `0.5rem` (8px) for large project-card containers, `0px` sharp for embedded media/screenshots. No other radii used anywhere (Shape Consistency Lock).
- No drop shadows. Depth via tonal layering (surface-container steps) and 1px `outline` borders at low opacity.
- Hover elevation = teal inner-stroke glow (`box-shadow: inset 0 0 0 1px rgba(83,235,232,0.4), 0 0 24px rgba(83,235,232,0.12)`), never an external black shadow.
- Nav: glassmorphism — `backdrop-blur-xl` + 5% white tint + 1px bottom hairline, with a solid-fill fallback under `prefers-reduced-transparency`.

## 6. Signature Motif — "Tracking Frame"

One motif, used deliberately, tied directly to AR/VR (the brief's explicit ask) and directly inspired by the reference hero (rotated overlapping square outlines already present in the screenshots).

**Concept:** a cluster of 2–3 thin rotated square/rectangle wireframes (like AR spatial-anchor / object-tracking markers), rendered in low-opacity teal (`stroke-white/10` base, one frame at `stroke-primary/30`), positioned right-of-center in the hero. On pointer move, the frames drift a few px in opposite directions at different depths (`useTransform` on `useMotionValue` mouse position — no `useState`), producing a subtle parallax "depth-layer" read consistent with AR tracking UI. On load, frames scale-and-fade in staggered (0.6s, spring) after the headline settles.

**Where it appears (once, deliberately, not scattered):**
1. **Hero** — full expression: 3-frame parallax cluster, pointer-reactive.
2. **Project cards** — a restrained echo: on hover, a single thin teal corner-bracket frame (`⌐ ... ⌐`-style, four corner ticks, not a full box) fades in around the image, referencing "object detected" AR-scan feedback, alongside the grayscale-to-color image transition already specified in THEME.md.

No third usage. No scan-line sweep, no full-page grid overlay — that would scatter the motif and violate "use it once, well."

**Reduced motion:** parallax drift and hover-bracket both collapse to a static, fully-opaque final-state frame under `prefers-reduced-motion: reduce`.

## 7. Components

- **Nav** — fixed top, ≤ 72px height, glassmorphism per Section 5. Logo/name left (JetBrains Mono, e.g. `TRAN_HOANG_MINH`), section links center-right, single "Contact" CTA button far right (solid teal, `on-primary` text). One line at desktop; collapses to a slide-in sheet below `md`.
- **Buttons** — Primary: solid teal fill, `on-primary` (`#003736`) text, 4px radius, 200ms transition, `-translate-y-[1px]` on `:active`. Secondary: ghost with 1px teal outline + teal text. Max one primary + one secondary per view; CTA intents are locked — "View Projects" (portfolio intent) and "Contact Me" (contact intent) are each used exactly once across the whole page (hero + nav + footer reuse the same two labels, never synonyms).
- **Chips/Tags** — JetBrains Mono, uppercase, sand text on `#1A1A1A`-family fill, 4px radius, used for tech-stack tags on project cards and skills grid.
- **Project cards** — full-width alternating with half-width pairs (not a rigid 3-equal-card grid — see Section 8 layout families). Image grayscale at rest, full color + Tracking Frame corner-brackets on hover. Role / date / result as JetBrains Mono metadata line. One eyebrow-style label max per card ("HD 81/100" style result badge, sand text).
- **Skills grid** — grouped bento (not a bullet list, not 3 equal cards): 6 category clusters sized by content volume (Languages and Frameworks get larger cells, Soft Skills gets a wide low cell), each cluster header in Lexend 500, chips below in mono. Satisfies Bento Cell Count Rule (6 items → 6 cells, no filler).
- **Honors & Awards** — vertical timeline (per reference screenshot 5), teal dot markers on a thin outline-variant line, year in sand mono, title in Lexend, description in Inter. Chronological, newest first.
- **Contact / Footer** — left: name + short line + mailto/tel as real links (not a form — brief confirms no backend needed). Right: social icons (lucide-react: Github, Linkedin, Mail) in a row, teal on hover. Bottom hairline, copyright line in mono, small.

## 8. Section Layout Plan (Section-Repetition + Eyebrow Budget)

6 sections total (Hero counts as 1 for eyebrow budget) → **max 2 eyebrows allowed** across the page. Spent on: Projects ("Selected Work" — actually see below, dropped) — budget is used sparingly, see per-section notes.

| # | Section | Layout family | Eyebrow? |
|---|---|---|---|
| 1 | Hero | Asymmetric split (left: eyebrow + headline + subtext + 2 CTAs + social row; right: Tracking Frame motif) | Yes — role label "Software Engineering Student, RMIT University" acts as the single hero eyebrow (1 of 2 budget) |
| 2 | About | Split-screen, NOT text/image (no portrait photo available) — left: headline + body copy stacked (not split-header pattern), right: education fact-card + languages/location mono metadata block | No |
| 3 | Skills | Asymmetric bento grid (6 clusters) | No |
| 4 | Projects | Vertical stack of 3 full-width cards, alternating image-left/image-right (max 2 in a row before break — 3rd card breaks orientation or uses a centered/full-bleed treatment to respect Zigzag Cap) | Yes — "Selected Work" (2 of 2 budget), only because Projects is the highest-stakes section for a recruiter and benefits from a clear signpost |
| 5 | Honors & Awards | Vertical timeline (distinct family from all above) | No |
| 6 | Contact / Footer | Two-column footer band, full-width, distinct from all above | No |

This gives 5 distinct layout families across 6 sections (About and Contact both use a form of 2-column split but with materially different content shapes — fact card vs. link list — so they don't repeat "text+image split" verbatim, and neither is adjacent to the Hero's split, avoiding 3-in-a-row zigzag).

**Hero copy discipline:** eyebrow = "Software Engineering Student · RMIT University" (max 1 middle-dot). Headline ≤ 2 lines, e.g. "Turning the impossible into interfaces." Subtext ≤ 20 words distilling the AR/VR long-term-vision line. CTAs: "View Projects" (primary, scrolls to Projects) + "Contact Me" (secondary, scrolls to Contact). Social row (GitHub/LinkedIn/Email icons) sits below CTAs as the single small secondary element — no additional trust strip, no version label, no scroll cue.

## 9. Motion Rules

- **Load sequence (hero only):** headline/subtext/CTAs fade+rise in a 0.08s stagger; Tracking Frame cluster scales in 200ms after, once text has settled — motion has a clear hierarchy purpose (draw eye to message first, motif second).
- **Scroll reveals:** `whileInView` fade+rise (`y: 24 → 0`, spring, `once: true`) per Section 5.C of the skill, applied to section headers and card groups, staggered `0.06s` per item. Justification: reveals content in reading order, matching how a recruiter scans top-to-bottom.
- **Hover micro-interactions:** buttons (`-translate-y-[1px]` + teal glow), project cards (grayscale→color 400ms + Tracking Frame corner-brackets fade-in 200ms), nav links (underline teal draw-in).
- **Reduced motion:** every animation above degrades to instant/static via `useReducedMotion()`; parallax and load-stagger collapse entirely.
- No GSAP/scroll-hijack — this is a single-page scroll site, not a scrollytelling piece. Framer Motion only (`whileInView`, `useMotionValue`/`useTransform` for the parallax motif), per the brief's explicit stack choice.

## 10. Accessibility & Performance

- Visible focus states: 2px teal outline ring, offset 2px, on every interactive element (nav links, buttons, chips-as-links, social icons).
- Contrast: `on-surface` (#e5e2e1) on `#131313` and `on-primary` (#003736) on teal both clear WCAG AA comfortably.
- `next/image` for all project imagery with explicit dimensions (no CLS); hero Tracking Frame is inline SVG/CSS, not an image (zero LCP cost).
- Dark mode only, by design (this is a true-black brand identity, not a light/dark toggle site) — locked per Section 4.11 exception (deliberate single-theme brand).
- Semantic landmarks: `<nav>`, `<main>`, one `<h1>` (hero), `<h2>` per section, `<h3>` for cards/timeline entries.

## 11. Pre-Flight Confirmation

Zero em-dashes, one accent color (teal) locked across all sections, one radius scale, no 3-equal-card grids, no centered hero, hero ≤ 2-line headline with CTA visible without scroll, eyebrow budget respected (2 of 2 used, both justified), no version labels/scroll cues/locale strips, real project imagery via `next/image` (placeholders flagged in NOTES.md per brief), icons from lucide-react (explicit brief override), motion motivated and reduced-motion-safe throughout.
