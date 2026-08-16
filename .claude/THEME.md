---
name: Lumina Tech Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bac9c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#859493'
  outline-variant: '#3c4949'
  surface-tint: '#3cdbd8'
  primary: '#53ebe8'
  on-primary: '#003736'
  primary-container: '#25cfcc'
  on-primary-container: '#005452'
  inverse-primary: '#006a68'
  secondary: '#dbc49c'
  on-secondary: '#3c2e12'
  secondary-container: '#544526'
  on-secondary-container: '#c8b28c'
  tertiary: '#ffcda3'
  on-tertiary: '#4b2700'
  tertiary-container: '#ffa751'
  on-tertiary-container: '#713e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#62f8f5'
  primary-fixed-dim: '#3cdbd8'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#f8dfb6'
  secondary-fixed-dim: '#dbc49c'
  on-secondary-fixed: '#251a02'
  on-secondary-fixed-variant: '#544526'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb877'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-gap-lg: 160px
  section-gap-sm: 80px
---

## Brand & Style

The design system is engineered for high-end professional portfolios within the technology and creative sectors. It evokes an emotional response of precision, technical mastery, and sophisticated minimalism. 

The aesthetic is **High-Contrast Modern**, blending the deep immersion of a pure black environment with the surgical precision of vibrant teal accents. It utilizes generous whitespace (or "blackspace") to create a gallery-like atmosphere where content is given maximum breathing room. The visual narrative is "Tech-Forward Luxury"—clean lines, impeccable typography, and a deliberate absence of unnecessary decorative elements.

## Colors

The palette is anchored in a "True Black" (#000000) foundation to provide infinite depth and focus. 

- **Primary (Teal):** Used for interactive elements, progress indicators, and key brand moments. It serves as the "source of light" in the dark interface.
- **Accent (Sand):** Used sparingly for secondary callouts, specialized labels, or decorative rules to add warmth and a premium, editorial feel against the technical teal.
- **Neutral:** A scale of deep grays starting from #1a1a1a is used for surface containers to maintain hierarchy without breaking the dark immersion.
- **Text:** Pure white (#FFFFFF) is reserved for headings, while a slightly muted gray (#A3A3A3) is used for long-form body text to reduce eye strain on high-contrast displays.

## Typography

This design system uses a strategic pairing of **Lexend** for headlines and **Inter** for body copy. 

- **Headlines:** Lexend’s geometric clarity provides a modern, accessible, yet authoritative voice. For large display headings, use tight tracking to emphasize the "locked-in" technical feel.
- **Body:** Inter provides maximum legibility for project descriptions and resumes.
- **Technical Labels:** JetBrains Mono (monospaced) is introduced for metadata, tags, and small labels to reinforce the tech-forward, developer-friendly narrative.
- **Scaling:** Headings should scale aggressively; mobile views should prioritize verticality and impact, reducing font size but maintaining bold weights.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-margin thresholds. 

- **Grid:** A 12-column grid system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **White Space:** Use exceptionally large gaps (section-gap-lg) between major portfolio sections to create a "breathing" effect. 
- **Alignment:** Consistent left-alignment is preferred for all text blocks to maintain a clean vertical axis, mirroring modern architectural blueprints.

## Elevation & Depth

In a pure black environment, depth is created through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows.

- **Planes:** Base content sits on #000000. Elevated cards or modals use #0A0A0A or #121212.
- **Borders:** Use thin (1px) low-opacity borders (White at 10% opacity) to define shapes. 
- **Interactivity:** Hover states should utilize the Primary Teal color as a "glow" or "inner stroke" rather than an external shadow.
- **Glassmorphism:** Use sparingly for navigation bars. A 20px backdrop blur with a 5% white tint creates a sophisticated "frosted obsidian" look.

## Shapes

The design system employs **Soft** (0.25rem) corner radii to maintain a professional, slightly sharp edge that feels more "engineered" than "bubbly."

- **Interactive Elements:** Buttons and input fields use the standard 4px (0.25rem) radius.
- **Containers:** Large project cards may use `rounded-lg` (8px) to provide a subtle visual distinction from the background structure.
- **Media:** Photography and video embeds should remain perfectly sharp (0px) or use the minimal 4px radius to feel like integrated screens.

## Components

- **Buttons:** Primary buttons are solid Teal with Black text. Secondary buttons are Ghost-style with a Teal outline and Teal text. Use a 200ms transition for hover states.
- **Project Cards:** Full-width or half-width layouts. High-quality imagery with a subtle grayscale filter that transitions to full color on hover.
- **Chips/Tags:** Use the monospaced label font. Backgrounds should be a dark gray (#1A1A1A) with the Accent Sand color for the text.
- **Inputs:** Underline-only or subtle-border style. The active state should change the border color to Primary Teal with a matching glow.
- **Navigation:** Minimalist top-right or centered bottom-docked navigation using the glassmorphism profile defined in the Elevation section.
- **Custom Cursor:** A small Teal dot cursor that expands and turns into an outline when hovering over interactive elements is highly recommended to reinforce the tech-forward feel.