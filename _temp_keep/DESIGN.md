# Portfolio Design Direction

**Owner:** Aditi Prajapati  

**Audience:** Recruiters, senior engineers, potential collaborators  

**Mode (Impeccable):** Experience — the artifact leads; the interface recedes  

**Design Read:** Developer portfolio for a design-aware frontend developer; editorial/minimal language; restrained typographic confidence over decoration. **All design decisions finalized.**



---



## Taste Skill Dials



| Dial | Value | Reasoning |

|---|---|---|

| `DESIGN_VARIANCE` | 6 | Asymmetric but composed — offset grids, not chaos |

| `MOTION_INTENSITY` | 4 | Purposeful only — entrance choreography + hover states, nothing perpetual |

| `VISUAL_DENSITY` | 3 | Art-gallery airy — whitespace is the primary design tool |



---



## Design Personality



**Archetype:** The developer who understands design. Quiet confidence. No performance.



The portfolio should feel like walking into a well-lit architect's studio — white walls, large careful objects, nothing extraneous. The typography does the work. The spacing signals taste. The animations confirm attention to craft.



**Emotional target:** "This person is precise and has strong opinions. I want to work with them."



**Tone:** Calm, unhurried, technically credible, visually distinguished.



**Not:** Flashy, trying-too-hard, a template, a SaaS product, an agency.



---



## Visual References Analysis



### redoyanulhaque.me (Signal extraction)

- React SPA with 3D canvas elements (react-three in bundle) — signals willingness to use custom visual moments, not just flat layouts

- Developer-focused, technical brand

- **What to borrow:** confidence in using unusual visual moments at appropriate scale; strong personal identity

- **What to avoid:** 3D everywhere, heavy canvas work (performance cost, reduced motion issues)



### sawad.framer.website (Signal extraction)

- **Fonts detected:** Satoshi 700 (display), Poppins, Inter

- **Color tokens:** #151312 (near-black), #fff, #998f8f (warm gray), #c5ff41 (electric lime accent), #f46c38 (orange), #faf7f3 (warm off-white canvas)

- **Visual language signals:** warm near-black + lime accent is striking and distinctive; warm off-white canvas avoids the cold blue-gray default

- **What to borrow:** the warm near-black + single high-chroma accent palette; Satoshi-class grotesque display type; warm canvas background

- **What to avoid:** Poppins (too generic/rounded for this brief); their specific lime + orange dual-accent (pick one)



### Synthesis

Both references share: **dark/moody personality with precise typographic decisions and selective use of a vivid accent against a neutral base.** The visual language we are targeting sits between them: warmer than a cold dark tech portfolio, more restrained than Sawad's Framer energy.



---



## Design Principles



1. **Typography is the design.** Every layout decision serves readability and typographic rhythm.

2. **Whitespace is active.** Large margins are a design choice, not an accident.

3. **One accent, everywhere.** The accent color is picked once and used with discipline.

4. **Motion earns its keep.** Per Emil Kowalski: every animation answers "why does this move?" If the answer is "it looks cool," it gets cut.

5. **The interface recedes.** Aditi's work is the content. Navigation and chrome should disappear.

6. **No template tells.** Zero eyebrows on every section. Zero 3-column equal card grids. Zero centered hero. Zero skill clouds.



---



## Typography



### Font Pairing



| Role | Font | Weights | Notes |

|---|---|---|---|

| **Display / Headings** | Cabinet Grotesk | 700, 800 | High character, strong personality; free via Fontshare |

| **Body / UI** | Outfit | 300, 400, 500 | Geometric warmth; avoids Inter's neutrality |

| **Mono / Code / Metadata** | JetBrains Mono | 400, 500 | Tech credibility; project tags, dates, code |



**Why this pairing:** Cabinet Grotesk has visible personality at large sizes without being loud. Outfit at body size is warm and readable. JetBrains Mono grounds the developer identity.



**Self-host via `next/font`** — no Google Fonts link tags in production.



### Type Scale



```

--text-xs:       0.75rem  / 12px   — metadata, labels, timestamps

--text-sm:       0.875rem / 14px   — secondary body, captions

--text-base:     1rem     / 16px   — primary body text

--text-lg:       1.125rem / 18px   — lead paragraphs, about text

--text-xl:       1.25rem  / 20px   — section subheadings

--text-2xl:      1.5rem   / 24px   — card titles, feature labels

--text-4xl:      2.25rem  / 36px   — section headlines (mobile hero)

--text-6xl:      3.75rem  / 60px   — section headlines (desktop)

--text-display:  clamp(2.5rem, 8vw, 8rem)    — hero display name

--text-headline: clamp(1.75rem, 4vw, 3.75rem) — section headlines

```



### Typographic Rules



- **Tracking:** Display headlines at -0.03em to -0.04em. Body at 0. Mono labels at 0.06em.

- **Leading:** Headlines at 0.9-1.05. Body at 1.6-1.7.

- **Max line length:** 65ch hard cap on body text.

- **Weight contrast:** Cabinet Grotesk 800 for primary display. Outfit 300 for body.

- **Italic use:** Only italic of the same font for emphasis within headlines.

- **Descender clearance:** Italic display text with descenders gets leading-[1.1] minimum + pb-1 reserve.



---



## Color System



### Palette



| Token | Name | Value | Role |

|---|---|---|---|

| `--color-canvas` | Warm Paper | `#F6F4F0` | Primary page background |

| `--color-surface` | Lifted Surface | `#FFFFFF` | Elevated containers |

| `--color-ink` | Deep Charcoal | `#151210` | Primary text |

| `--color-muted` | Warm Slate | `#8A8580` | Secondary text, metadata |

| `--color-border` | Whisper Line | `#E5E2DC` | 1px structural dividers |

| `--color-accent` | Warm Ember Orange | `#E8531A` | Single accent — CTAs, active nav, hover reveals, focus rings |

| `--color-accent-dark` | Ember Press | `#CC4615` | Accent pressed/active state |

| `--color-accent-fg` | Accent Text | `#FFFFFF` | Text on orange (always white) |



**Accent discipline (applies to whichever direction is chosen):** The accent appears only on: primary CTA, nav active/hover underline, project hover reveal, focus rings, terminal cursor in hero. Nowhere else.



### Accent — LOCKED

**Chosen: Option B — Warm Ember Orange**

| Token | Value | Role |
|---|---|---|
| `--color-accent` | `#E8531A` | Deep warm orange-red — earthy, confident, human |
| `--color-accent-dark` | `#CC4615` | Pressed / active state |
| `--color-accent-fg` | `#FFFFFF` | Text placed on orange background |

The orange appears exclusively on: primary CTA link underline, nav active/hover state, project row hover reveal element, focus rings, hero cursor. Nowhere else.

### Theme



**Light mode only.** Warm paper background is the design identity. No dark mode switching, no mid-page section inversions.



**One exception:** The footer uses `#151210` background with `#F6F4F0` text — a single deliberate bookend.



---



## Layout & Grid



### Desktop Container

```

max-width: 1320px

margin: 0 auto

padding-inline: clamp(1.5rem, 4vw, 5rem)

```



### Column Grid

```

12-column grid with 24px gutters at desktop

8-column at tablet (768-1079px)

Single column at mobile (<768px)

```



### Section Widths

- **Full bleed:** Footer and horizontal dividers only

- **Wide content:** 10/12 columns, slight inset

- **Body content:** 8/12 columns, generous margins

- **Narrow (about body):** 6/12, editorial measure



### Layout Anti-Symmetry Rules

- Hero: left-aligned, never centered (DESIGN_VARIANCE 6 > threshold 4)

- Project section: alternating asymmetric left-heavy and right-heavy layouts

- No two consecutive sections share the same layout family



---



## Spacing



### Vertical Rhythm System

```

--space-1:   0.25rem  /  4px

--space-2:   0.5rem   /  8px

--space-4:   1rem     / 16px

--space-6:   1.5rem   / 24px

--space-8:   2rem     / 32px

--space-12:  3rem     / 48px

--space-16:  4rem     / 64px

--space-24:  6rem     / 96px

--space-32:  8rem     / 128px

--section-gap: clamp(5rem, 10vw, 9rem)

```



### Internal Section Spacing

- Section headline to body: --space-8 (32px)

- Body to CTA/action: --space-8 (32px)

- Between project items: --space-12 (48px)



---



## Navigation



### Style

- **Position:** Fixed top. Transparent, becomes #F6F4F0/90 with backdrop-filter: blur(12px) on scroll.

- **Height:** 64px desktop, 56px mobile

- **Layout:** Name/initials left. Nav links right. Single line always.

- **Links:** text-sm Outfit 500. tracking-[0.03em]. Default --color-muted. Hover: color to --color-ink + lime underline slides in via clip-path.

- **Active state:** 2px `#E8531A` underline, permanent on current section.

- **Mobile:** Wordmark left, "Menu" text right opens fullscreen overlay. Near-black background, large Cabinet Grotesk 700 nav items centered.



### Nav Links

```

Work  /  About  /  Contact

```



---



## Hero



### Composition

- **Layout:** Left-aligned, min-h-[100dvh]. Two-column desktop: content col-span-8, space col-span-4.

- **Vertical:** Content starts slightly above viewport center.



### Content Elements (max 4)

1. **Role label — LOCKED:** `Building software. Studying systems.`
   text-xs JetBrains Mono, `--color-muted`. Two declarative sentences; confident, direct.

2. **Headline:** "Aditi Prajapati" — Cabinet Grotesk 800, --text-display. A small orange (`#E8531A`) cursor character blinks 3× then stops — CSS `animation-iteration-count: 3`, not an infinite loop.

3. **Subtext:** Max 20 words — Outfit 300, text-lg, --color-muted, max-w-[50ch]

4. **Two text links:** "View work ?" (primary, lime underline on hover) + "Get in touch" (muted). No pill buttons in hero.



### Hero Background

- --color-canvas solid. No gradients, no mesh, no blobs.



### Hero Entrance Animation

1. Role label: opacity 0?1, y 16px?0, 500ms ease-out, delay 0.1s

2. Headline: same, delay 0.2s

3. Subtext: same, delay 0.35s

4. Links: same, delay 0.45s

5. Cursor blinks 3x, CSS animation-iteration-count: 3



prefers-reduced-motion: instant opacity reveal, no transforms.



---



## About

### Composition
The About section is designed to work **without a photograph**. A photo can be added later as an enhancement; the design is complete without one.

**Primary layout (no photo — default):**
- Content in col-span-8 col-start-3 — same generous inset as other body sections
- Left-aligned body text: 3–4 short paragraphs. Outfit 300, text-lg, leading-[1.7]. No bullet lists. Direct, first-person, specific.
- A large ghost monogram ("AP") in Cabinet Grotesk 800 at ~6% opacity of --color-ink, absolutely positioned in the right portion of the grid, partially clipped. Provides visual weight without requiring a photo. `aria-hidden="true"` — purely decorative.
- Metadata line below body: `Mumbai, India  ·  B.Sc. Information Technology` — JetBrains Mono, text-xs, --color-muted.

**Enhanced layout (with photo, if added later):**
- Asymmetric split: Left col-span-5 portrait, right col-span-6 col-start-7 text.
- Portrait uses clip-path: polygon() with a slight chamfer cut on one corner — not a circle, not a square. The only non-rectangular element on the page.
- Ghost monogram is removed when a photo is present.

**Responsive (both variants):**
- Mobile: Single column. If photo present, it stacks above text. Ghost monogram hidden on mobile.

---

## Projects



### Section Label

Headline only: "Selected Work" — Cabinet Grotesk 700, --text-headline. Left-aligned. No eyebrow.



### Presentation Style

Full-width horizontal row list with --color-border dividers.



Row anatomy:

```

[ 01 ]  [ Project Title ]  [ Tags ]  [ Year ]  [ ? ]

???????????????????????????????????????????????????

```



**Hover behavior:**

- Row background: --color-canvas ? --color-ink (180ms ease-out)

- Text: flips to --color-canvas

- Project preview image reveals via clip-path: inset(0 100% 0 0) ? inset(0 0% 0 0) (220ms ease-out)

- Arrow translates 8px right (200ms ease-out)



Index numbers: JetBrains Mono, --color-muted

Tags: JetBrains Mono text-xs, --color-border bordered pills, no fill



### Projects Listed

```

01  Codeoscope               Interactive code analysis & visualization
02  Distributed File System  Hadoop HDFS-based file management
03  PDF Maker                Flutter document scanning & PDF creation
04  [Additional projects]    [placeholder]
```



---



## Experience



### Composition

- **Layout:** Single-column, col-span-8 col-start-3.

- **No cards.** Each experience: border-t --color-border row.

- **Row anatomy:** Role (Outfit 500) | Company (Outfit 400, --color-muted) | Dates (JetBrains Mono, right-aligned)

- One-line description below.

- If no formal experience: rename to "Background" and include education and meaningful contributions.



---



## Skills



### Presentation

No skill cloud. No tag lists. No progress bars.



Two-column compact list with category groupings:

```

Languages          JavaScript  ·  TypeScript  ·  Python  ·  Dart

Frameworks         React  ·  Next.js  ·  Flutter  ·  Node.js

Tools & Infra      Git  ·  Hadoop  ·  Linux  ·  Figma

Currently learning [technology]

```



Category labels: JetBrains Mono text-xs --color-muted uppercase tracking-[0.08em]

Skill values: Outfit 400 text-sm --color-ink



**No logos. No brand icons. Clean text only.**



---



## Currently Exploring



### Composition

- Placement: After Skills, before Contact.

- 2-3 short items. Format: "? [Thing I am exploring]  —  [one sentence why]"

- The ? in --color-accent (lime).

- No section headline — flows naturally.

- Data-driven: easy to update via a data file.



---



## Contact



### Composition

- Large display type: "Let's work together." — Cabinet Grotesk 800, --text-display.

- 1-2 supporting lines: Outfit 300, text-lg, --color-muted.

- Email as large text link (lime underline on hover).

- GitHub + LinkedIn as small JetBrains Mono text-sm links.

- **No contact form. No map.**



---



## Footer



### Composition

- Background: #151210. Full-width.

- Text: --color-canvas at low opacity.

- "Aditi Prajapati — 2025" left. "Designed & built by Aditi" right.

- JetBrains Mono text-xs.

- Padding: --space-8 top/bottom. Nothing else.



---



## Page Section Order



```

1. Navigation (fixed)

2. Hero

3. About

4. Selected Work

5. Skills & Technologies

6. Currently Exploring

7. Contact

8. Footer

```



---



## Animation & Motion



### Emil Kowalski Frequency Test



| Element | Frequency | Decision |

|---|---|---|

| Hero entrance | Once per visit | Entrance choreography — yes |

| Scroll reveals | Once per element | y-translate + opacity — yes |

| Nav hover underline | Tens/day | clip-path slide, < 150ms |

| Project row hover | Occasional | Image reveal + row invert — yes |

| Button/link press | Occasional | scale(0.97) active state — yes |

| Perpetual loops | N/A | **None. Zero infinite animations.** |



### Animation Catalog



#### Scroll Reveals

```tsx

// motion/react whileInView

initial={{ opacity: 0, y: 24 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true, amount: 0.2 }}

transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}

```



#### Project Row Hover (clip-path reveal)

```css

.project-preview {

  clip-path: inset(0 100% 0 0);

  transition: clip-path 220ms cubic-bezier(0.23, 1, 0.32, 1);

}

.project-row:hover .project-preview {

  clip-path: inset(0 0% 0 0);

}

.project-row {

  transition: background-color 180ms ease-out, color 180ms ease-out;

}

```



#### Nav Hover (clip-path underline)

```css

.nav-underline {

  background: var(--color-accent);

  clip-path: inset(0 100% 0 0);

  transition: clip-path 150ms cubic-bezier(0.23, 1, 0.32, 1);

}

.nav-link:hover .nav-underline { clip-path: inset(0 0% 0 0); }

```



#### Active State (all interactive elements)

```css

button, a { transition: transform 160ms ease-out; }

button:active, a:active { transform: scale(0.97); }

```



#### Arrow Translation

```css

.arrow { transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1); }

.project-row:hover .arrow { transform: translateX(8px); }

```



### What Is NOT Animated

- Background colors on sections

- Section headings on hover

- Image scale on hover

- Anything perpetual

- Parallax on background elements

- Scroll position in React state



### Easing Reference

```css

--ease-out-strong:   cubic-bezier(0.23, 1, 0.32, 1);   /* Entrances, reveals */

--ease-in-out-sharp: cubic-bezier(0.77, 0, 0.175, 1);  /* On-screen movement */

--ease-default:      cubic-bezier(0.25, 0.1, 0.25, 1); /* Color, opacity */

```



Never use ease-in. Never use transition: all.



### prefers-reduced-motion

```css

@media (prefers-reduced-motion: reduce) {

  *, *::before, *::after {

    animation-duration: 0.01ms !important;

    transition-duration: 0.01ms !important;

  }

}

```



```tsx

const reduce = useReducedMotion();

initial={reduce ? false : { opacity: 0, y: 24 }}

```



---



## Responsive Strategy



### Breakpoints

```

sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px

```



### Section Behavior



| Section | Desktop | Tablet | Mobile |

|---|---|---|---|

| Hero | Split 8+4 cols | Single col, left-aligned | Single col, clamp type |

| About | Full-width body (default) or split 5+6 (if photo added) | Single col | Single col |

| Projects | Full-width hover rows | Full-width rows | Rows collapse, no image reveal |

| Skills | 2-column | 2-column | Single column |

| Contact | Large type, left-aligned | Left-aligned | Scaled down via clamp |

| Nav | Horizontal 64px | Horizontal 64px | Wordmark + Menu toggle |



### Critical Mobile Rules

- `min-h-[100dvh]` on Hero, never `h-screen`

- All tap targets minimum 44x44px

- No horizontal overflow anywhere

- `@media (hover: hover) and (pointer: fine)` gating on all hover animations

- Project rows on mobile: tap navigates to project, no image reveal



### Typography Responsive

```css

--text-display:  clamp(2.5rem, 8vw, 8rem);

--text-headline: clamp(1.75rem, 4vw, 3.75rem);

```



---



## Accessibility



### Contrast Requirements

- All body text against --color-canvas: min 7:1 (AAA)

- --color-muted #8A8580 against #F6F4F0: verify >= 4.5:1 (AA)

- The accent `#E8531A` is NEVER used as body text on the canvas background — only as background fill or decorative line. Text placed on an orange background must be white (`#FFFFFF`). Verify 4.5:1 contrast ratio for `#FFFFFF` on `#E8531A` (passes at ≈5.2:1).
- Focus rings: `2px solid #E8531A` with `2px offset` — visible against `#F6F4F0` canvas.



### Semantic Structure

- One <h1> per page — the hero name

- Section headlines: <h2>

- Project titles: <h3>

- Proper <nav> with aria-label="Primary"

- Project links: descriptive aria-label, not just "?"

- Skip-to-content link at top of DOM (visually hidden, visible on focus)



### Keyboard Navigation

- All interactive elements reachable via Tab in logical order

- All interactions work without hover



---



## Performance



### Constraints

- LCP < 2.5s on mid-range mobile, 4G

- Server Components by default; Client Components only for interactive islands

- Animate only transform and opacity. Never width, height, top, left, padding.

- will-change: transform only on actively animating elements



### Font Loading

- Self-hosted via next/font. font-display: swap on all faces.

- Preload Cabinet Grotesk 700 and 800 (display-critical)



### Image Strategy

- next/image with loading="lazy" and correct sizes attribute

- No large hero image (typography-only hero = no LCP problem)

- WebP format for all raster images

- Generate project previews with generate_image tool at implementation time



### JavaScript Budget

- No GSAP (insufficient need at this scope)

- Motion (motion/react) only in components that are genuinely animated or interactive

- Do not add Motion to static sections as a default; Server Components handle static layout

- Client Components with Motion are isolated leaves — not imported into layout.tsx or server wrappers



---



## Locked Design Constraints

These are final, non-negotiable constraints. They must not be overridden during implementation.

| Constraint | Status |
|---|---|
| Light mode only — no dark mode | **LOCKED** |
| No glassmorphism | **LOCKED** |
| No excessive gradients | **LOCKED** |
| No skill cloud / tag wall | **LOCKED** |
| No SaaS-style cards | **LOCKED** |
| No excessive rounded containers | **LOCKED** |
| No 3D elements | **LOCKED** |
| No parallax effects | **LOCKED** |
| No cursor trails or custom cursors | **LOCKED** |
| No decoration-only animations | **LOCKED** |
| Project years not displayed | **LOCKED** |
| About section works without photo | **LOCKED** |

---

## Anti-Patterns to Avoid



| Pattern | Why |

|---|---|

| Centered hero layout | DESIGN_VARIANCE 6 > threshold 4 |

| AI-purple / blue gradient accents | The Lila Rule |

| Skill tag clouds or icon grids | Generic AI portfolio tell #1 |

| 3-equal-column card grids | Generic AI portfolio tell #2 |

| Eyebrows on every section | This design uses 0 eyebrows |

| Progress bar "skill levels" | Meaningless and reductive |

| Logo walls | No employment context |

| Giant profile photo in hero | Photo belongs in About |

| Infinite loop animations | Every animation has start and end |

| transition: all | Emil: specify exact properties |

| ease-in on UI elements | Emil: starts slow = feels unresponsive |

| scale(0) entry animations | Emil: nothing appears from nothing |

| Dark mode mid-page section inversions | Footer only, deliberate bookend |

| Pure-black drop shadows | Tint shadows or use borders |

| Glassmorphism | Wrong aesthetic |

| Placeholder text as labels | Never |

| "Let's build something amazing together" | AI cliche |

| Multiple CTAs with same intent | One label per intent |

| window.addEventListener scroll in React | Use Motion useScroll or IntersectionObserver |

| useState for scroll/mouse position | Use useMotionValue + useTransform |



---



## Component Direction



### Corner Radius System

Sharp-ish. border-radius: 4px on interactive elements (buttons, pills, inputs). border-radius: 0 on structural (project rows, dividers). Consistent — one system only.



### Button Style

- **Primary:** No pill fill. Text link style. Orange (`#E8531A`) underline slides in from left via clip-path on hover.

- **Project arrows:** Text + arrow, no button shape.

- No capsule/pill buttons anywhere — they read as SaaS.



### Card Usage

**Zero cards.** Projects use horizontal rows. Skills use inline lists. All groupings use negative space and border-top dividers.



### Form

**None.** Contact is a mailto: link.



---



## Design Tokens



```css

:root {

  /* Color */

  --color-canvas:       #F6F4F0;

  --color-surface:      #FFFFFF;

  --color-ink:          #151210;

  --color-muted:        #8A8580;

  --color-border:       #E5E2DC;

  /* Accent — LOCKED: Warm Ember Orange */
  --color-accent:       #E8531A;
  --color-accent-dark:  #CC4615;
  --color-accent-fg:    #FFFFFF; */

  --color-footer-bg:    #151210;



  /* Typography */

  --font-display: 'Cabinet Grotesk', sans-serif;

  --font-body:    'Outfit', sans-serif;

  --font-mono:    'JetBrains Mono', monospace;



  /* Scale */

  --text-xs:       0.75rem;

  --text-sm:       0.875rem;

  --text-base:     1rem;

  --text-lg:       1.125rem;

  --text-xl:       1.25rem;

  --text-2xl:      1.5rem;

  --text-4xl:      2.25rem;

  --text-display:  clamp(2.5rem, 8vw, 8rem);

  --text-headline: clamp(1.75rem, 4vw, 3.75rem);



  /* Spacing */

  --space-1:    0.25rem;

  --space-2:    0.5rem;

  --space-4:    1rem;

  --space-6:    1.5rem;

  --space-8:    2rem;

  --space-12:   3rem;

  --space-16:   4rem;

  --space-24:   6rem;

  --space-32:   8rem;

  --section-gap: clamp(5rem, 10vw, 9rem);



  /* Layout */

  --container-max: 1320px;

  --container-pad: clamp(1.5rem, 4vw, 5rem);



  /* Easing */

  --ease-out-strong:   cubic-bezier(0.23, 1, 0.32, 1);

  --ease-in-out-sharp: cubic-bezier(0.77, 0, 0.175, 1);

  --ease-default:      cubic-bezier(0.25, 0.1, 0.25, 1);



  /* Border Radius */

  --radius-sm: 2px;

  --radius-md: 4px;

  --radius-lg: 8px;

}

```



---



## Implementation Notes



### Framework

- **Next.js 15** with App Router

- **Tailwind v4** — CSS variables as source of truth

- **Motion (motion/react)** for scroll reveals and entrance animations

- Server Components by default; "use client" only on animated/interactive leaves



### Font Installation

**Cabinet Grotesk** is NOT available via `next/font/google`. It requires self-hosting:
- Download woff2 files from [Fontshare](https://www.fontshare.com/fonts/cabinet-grotesk) (free, commercial license)
- Or install via npm: `@fontsource/cabinet-grotesk`
- Place files in `/public/fonts/` and load via `next/font/local` with explicit `src` paths
- Load weights **700** and **800** only (display use; body text uses Outfit)

**JetBrains Mono** and **Outfit** are available via `next/font/google` natively.

```
Cabinet Grotesk  —  next/font/local  (self-host: Fontshare or @fontsource/cabinet-grotesk)
JetBrains Mono   —  next/font/google (available natively)
Outfit           —  next/font/google (available natively)
```

### File Structure

```

app/

  layout.tsx      — fonts, metadata, nav

  page.tsx        — section assembly

  globals.css     — design tokens, base styles

components/

  nav/  hero/  about/  projects/

  skills/  exploring/  contact/  footer/

lib/

  data.ts         — all project/experience data as typed objects

```



### Content as Data

All projects and experience data in lib/data.ts as typed TypeScript objects. Sections import from data, never hardcode content inline. Makes Currently Exploring trivial to update.



### Accessibility Checklist (pre-ship)

- [ ] Skip-to-content link present and visible on focus

- [ ] All images have descriptive alt text

- [ ] All interactive elements have accessible names

- [ ] prefers-reduced-motion respected in all animated components

- [ ] Color contrast verified: body text, muted text, accent-on-canvas

- [ ] Keyboard navigation tested through full page

- [ ] Screen reader tested (VoiceOver on macOS minimum)



---



*Last updated: Design locked — all decisions finalized. Accent: Warm Ember Orange (`#E8531A`). Hero label: “Building software. Studying systems.” Project years: not displayed. About: ghost monogram (no photo). Ready for implementation.*


