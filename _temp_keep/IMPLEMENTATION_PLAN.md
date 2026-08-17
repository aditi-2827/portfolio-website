# Implementation Plan
**Project:** Aditi Prajapati - Personal Developer Portfolio
**Status:** Awaiting approval before any code is written
**Design reference:** `DESIGN.md` (locked)

---

## 1. Technology Stack

| Layer | Choice | Reason |
|---|---|---|
| **Framework** | Next.js (App Router, stable version initialized in Phase 0) | SSR/SSG, `next/font`, `next/image`, file-based routing |
| **Styling** | Tailwind CSS v4 | Configured during Phase 0; CSS variable-first approach maps cleanly to design tokens |
| **Animation** | `motion/react` | Installed during Phase 0; `whileInView`, `useMotionValue`, spring physics |
| **Language** | TypeScript | Type-safe data layer (`lib/data.ts`), component props |
| **Package manager** | npm | Standard package manager |

> [!NOTE]
> No additional UI libraries. No icon packs beyond a single thin SVG arrow. No component kits. The design is built entirely from scratch.

---

## 2. Project Architecture

```
portfolio/                          <- current working directory (DO NOT nest)
├── .agents/                        <- PRESERVE - do not touch
├── skills-lock.json                <- PRESERVE - do not touch
│
├── app/
│   ├── layout.tsx                  <- Root layout: fonts, metadata, nav wrapper
│   ├── page.tsx                    <- Main page: section assembly (Server Component)
│   ├── globals.css                 <- Design tokens, base resets (#F6F4F0 canvas, #E8531A accent)
│   └── fonts/
│       ├── CabinetGrotesk-Bold.woff2
│       └── CabinetGrotesk-ExtraBold.woff2
│
├── components/
│   ├── nav/
│   │   └── Nav.tsx                 <- Fixed nav, scroll-aware bg, clip-path hover underlines (CLIENT)
│   ├── hero/
│   │   └── Hero.tsx                <- Entrance choreography: "Building software. Studying systems." (CLIENT)
│   ├── about/
│   │   └── About.tsx               <- Ghost monogram "AP" + body text (server component)
│   ├── projects/
│   │   ├── Projects.tsx            <- Section wrapper (server component)
│   │   └── ProjectRow.tsx          <- Hover interactive horizontal row (CLIENT)
│   ├── skills/
│   │   └── Skills.tsx              <- Two-column text list, zero cards (server component)
│   ├── exploring/
│   │   └── Exploring.tsx           <- Currently exploring (server component)
│   ├── contact/
│   │   └── Contact.tsx             <- Large type + mailto link (server component)
│   └── footer/
│       └── Footer.tsx              <- Dark bookend (server component)
│
├── lib/
│   └── data.ts                     <- All content as typed TypeScript objects
│
└── public/
    └── images/
        └── projects/               <- Project preview images (added in Phase 3)
```

**Server vs Client boundary:**
- **Server Components (default):** `About`, `Projects`, `Skills`, `Exploring`, `Contact`, `Footer`, `page.tsx`
- **Client Components (`"use client"`):** `Nav` (scroll listener), `Hero` (entrance animation), `ProjectRow` (hover interaction)
- No `motion/react` imports in Server Components - Motion is isolated to the three client leaves above

> [!IMPORTANT]
> The Next.js application lives directly in the current `portfolio/` directory. There must be no nested `portfolio/portfolio/` structure. The `.agents/` directory and `skills-lock.json` must never be deleted, moved, overwritten, or recreated.

---

## 3. Required Dependencies

All are installed during Phase 0. No additional packages are needed beyond these.

| Package | Source | Purpose |
|---|---|---|
| `next` | npm (Phase 0) | Framework - stable version from project initialization |
| `react` / `react-dom` | npm (Phase 0) | React runtime |
| `typescript` | npm (Phase 0) | Type safety |
| `tailwindcss` | npm (Phase 0) | Styling |
| `motion` | npm (Phase 0) | Animations (`motion/react`) |
| `eslint` / `eslint-config-next` | npm (Phase 0) | Linting |

**Cabinet Grotesk** is locked to `next/font/local` and served from `app/fonts/` - no npm font package is used.

**No additional packages.** Specifically excluded: GSAP, Radix, shadcn, react-spring, lenis, locomotive-scroll, component kits, or icon libraries.

---

## 4. Component Structure

### `lib/data.ts` - single source of truth

```ts
export type Project = {
  index: string;         // "01", "02"
  title: string;
  description: string;
  tags: string[];
  href: string;          // external URL (GitHub, live site)
  previewImage?: string; // path to /public/images/projects/...
};

export type ExploringItem = {
  topic: string;
  note: string;
};

export const projects: Project[] = [ /* populated in Phase 3 */ ];
export const exploringItems: ExploringItem[] = [ /* populated in Phase 4 */ ];
```

All section content lives in `data.ts`. Components never hardcode strings.

### Key component details

**`Nav.tsx` (Client)**
- `useEffect` scroll listener - adds backdrop-filter class on scroll
- Hover underlines: pure CSS clip-path (`inset(0 100% 0 0)` -> `inset(0 0% 0 0)`)
- Mobile: `useState` toggle for fullscreen overlay

**`Hero.tsx` (Client)**
- Role label: `"Building software. Studying systems."` (`text-xs` JetBrains Mono, `--color-muted`)
- Headline: `"Aditi Prajapati"` (Cabinet Grotesk 800, `--text-display`) + cursor in `#E8531A` Ember Orange (`animation-iteration-count: 3`)
- Motion stagger entrance: role label -> headline -> subtext -> links
- `useReducedMotion()` guard - all transforms disabled when true

**`About.tsx` (Server)**
- Ghost monogram "AP" via `aria-hidden="true"` absolutely positioned element (no photo initially)
- Pure HTML + CSS - no client JS, no Motion

**`ProjectRow.tsx` (Client)**
- Horizontal interactive row layout (zero cards philosophy)
- Hover state via CSS (`:hover` + clip-path preview reveal) - no JS state for hover
- `@media (hover: hover) and (pointer: fine)` gates all hover effects
- `onFocus` replicates hover visual state for keyboard users

---

## 5. Animation Strategy

**Intensity: 4/10 - purposeful only. No decorative animation for spectacle.**

### Entrance (Hero - runs once on mount)
```
role label  -> delay 100ms, y: 16px->0, opacity: 0->1, duration 500ms
headline    -> delay 200ms, same
subtext     -> delay 350ms, same
links       -> delay 450ms, same
cursor      -> CSS keyframes, animation-iteration-count: 3, then stops
```
Easing for all: `cubic-bezier(0.23, 1, 0.32, 1)`

### Scroll reveals (Motion `whileInView`)
Applied only to: section headlines, project rows (staggered), about body.
```ts
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

### Project row hover (CSS-only - no JS)
```css
.project-preview {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 220ms cubic-bezier(0.23, 1, 0.32, 1);
}
.project-row:hover .project-preview { clip-path: inset(0 0% 0 0); }
.project-row { transition: background-color 180ms ease-out, color 180ms ease-out; }
.arrow { transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1); }
.project-row:hover .arrow { transform: translateX(8px); }
```

### Nav hover (CSS-only)
```css
.nav-underline {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 150ms cubic-bezier(0.23, 1, 0.32, 1);
}
.nav-link:hover .nav-underline { clip-path: inset(0 0% 0 0); }
```

### `prefers-reduced-motion` (mandatory everywhere)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
```tsx
const shouldReduce = useReducedMotion();
// Skip all transforms; preserve opacity-only transitions for state comprehension
```

### What is NOT animated
- No perpetual loops of any kind
- No background color shifts on section scroll
- No parallax
- No cursor trail
- No image scale on hover
- No scroll-linked opacity outside `whileInView`

---

## 6. Responsive Strategy

**Mobile-first.** All layout via Tailwind responsive prefixes (`md:`, `lg:`, etc.).

| Breakpoint | px | Use |
|---|---|---|
| base | 0 | Mobile - single column |
| `sm` | 640 | Large phone |
| `md` | 768 | Tablet |
| `lg` | 1024 | Small desktop |
| `xl` | 1280 | Desktop |
| `2xl` | 1536 | Wide desktop |

**Key rules:**
- Hero: `min-h-[100dvh]` always - never `h-screen` (iOS Safari address bar jump)
- All display typography: `clamp()` values - no fixed px per breakpoint
- Project hover reveal: gated behind `@media (hover: hover) and (pointer: fine)` - touch devices navigate directly
- Nav mobile: wordmark left + "Menu" toggle -> fullscreen dark overlay
- About ghost monogram: `hidden md:block` - not visible on mobile
- All tap targets: minimum 44x44px

---

## 7. Accessibility Strategy

| Requirement | Implementation |
|---|---|
| Skip-to-content | First DOM element, visually hidden, visible on `:focus` |
| Heading hierarchy | `<h1>` hero name only | `<h2>` sections | `<h3>` project titles |
| Nav landmark | `<nav aria-label="Primary">` | Active link has `aria-current="page"` |
| Project links | `aria-label="View Codeoscope project"` - never bare `->` |
| Ghost monogram | `aria-hidden="true"` - decorative only |
| Focus rings | `outline: 2px solid #E8531A; outline-offset: 2px` |
| Images | All `next/image` instances require descriptive `alt` text |
| Motion | `useReducedMotion()` in every animated Client Component |
| Contrast | Body `#151210` on `#F6F4F0`: ~14:1 (AAA) | Muted `#8A8580` on `#F6F4F0`: verify >=4.5:1 (AA) |
| Keyboard | All interactive elements reachable via Tab in logical order | `ProjectRow` replicates hover state on focus |

---

## 8. Performance Strategy

| Metric | Target |
|---|---|
| LCP | < 2.5s (mid-range mobile, 4G) |
| CLS | < 0.1 |
| INP | < 200ms |

**Rules:**
- No Motion imports in Server Components
- Animate only `transform` and `opacity` - never layout properties (`width`, `height`, `top`, `left`)
- `will-change: transform` only during active animation; removed after completion
- `next/image` on all project preview images: `loading="lazy"`, correct `sizes` attribute, WebP format
- Hero is typography-only - no large image, no LCP image problem
- `font-display: swap` is handled automatically by `next/font` for all three typefaces
- Zero third-party scripts in Phase 1 (no analytics, no chat widgets)

---

## 9. Asset & Font Strategy

### Cabinet Grotesk - `next/font/local` (LOCKED)

1. Download woff2 files for weights **700 (Bold)** and **800 (ExtraBold)** from Fontshare (free, commercial license)
2. Place files in `app/fonts/`:
   ```
   app/
   └── fonts/
       ├── CabinetGrotesk-Bold.woff2
       └── CabinetGrotesk-ExtraBold.woff2
   ```
3. Load via `next/font/local` in `app/layout.tsx`:
   ```ts
   import localFont from 'next/font/local';

   const cabinetGrotesk = localFont({
     src: [
       { path: './fonts/CabinetGrotesk-Bold.woff2', weight: '700', style: 'normal' },
       { path: './fonts/CabinetGrotesk-ExtraBold.woff2', weight: '800', style: 'normal' },
     ],
     variable: '--font-display',
     display: 'swap',
   });
   ```
`next/font/local` handles all loading optimization, font-display, and performance automatically.

### JetBrains Mono + Outfit - `next/font/google`

```ts
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});
```

### Project preview images
- Sourced or generated at Phase 3
- Stored in `public/images/projects/`
- Used only in `ProjectRow` hover reveal (not visible on touch devices)
- Format: WebP, minimum 400x280px

### Other assets
- No hero background image
- No About photo (ghost monogram replaces it)
- No icon library - single SVG arrow inline in JSX

---

## 10. Development Phases

### Phase 0 - Project Initialization

> [!IMPORTANT]
> The `.agents/` directory and `skills-lock.json` in the current directory must be preserved exactly as-is throughout this phase. The Next.js app is initialized **in the current directory** - not in a subdirectory.

- [ ] Check existing workspace files (`.agents/`, `skills-lock.json`, etc.)
- [ ] Initialize Next.js in current directory:
  ```bash
  npx create-next-app@latest . --typescript --app --tailwind --eslint --no-src-dir --import-alias "@/*"
  ```
  When prompted about existing files, allow scaffold to write new files without overwriting `.agents/` or `skills-lock.json`.
- [ ] Install Motion:
  ```bash
  npm install motion
  ```
- [ ] Verify `npm run dev` starts cleanly on `localhost:3000`
- [ ] Verify production build succeeds: `npm run build`
- [ ] Confirm `.agents/` and `skills-lock.json` are untouched
- [ ] Do not install unnecessary UI libraries
- [ ] **Deliverable:** Clean Next.js + Tailwind + Motion project in current directory, dev and build passing

### Phase 1 - Foundation

- [ ] Download Cabinet Grotesk Bold + ExtraBold woff2 files from Fontshare
- [ ] Place in `app/fonts/`
- [ ] Set up `app/globals.css` with all design tokens from `DESIGN.md` (`#F6F4F0` canvas, `#E8531A` Ember Orange accent)
- [ ] Configure `app/layout.tsx`: all three fonts loaded, metadata, base HTML structure
- [ ] Scaffold `lib/data.ts` with typed interfaces and placeholder content
- [ ] Build `Nav` component (fixed, scroll-aware, clip-path hover, mobile overlay)
- [ ] **Deliverable:** All fonts load correctly in DevTools, design tokens visible in browser, nav renders at all breakpoints

### Phase 2 - Hero + About

- [ ] Build `Hero` component with role `"Building software. Studying systems."` + stagger entrance choreography + cursor blink (3 iterations)
- [ ] Verify `prefers-reduced-motion` disables all transforms in `Hero`
- [ ] Build `About` component with ghost monogram + body text layout (no photo initially)
- [ ] Verify both components render correctly at all breakpoints
- [ ] Ghost monogram hidden on mobile (`hidden md:block`)
- [ ] **Deliverable:** Above-the-fold experience complete and polished

### Phase 3 - Projects + Skills

- [ ] Build `ProjectRow` with clip-path image reveal + row color inversion on hover (horizontal rows, zero cards)
- [ ] Build `Projects` section wrapper with `whileInView` stagger on rows
- [ ] Gate all hover effects behind `@media (hover: hover) and (pointer: fine)`
- [ ] Ensure `ProjectRow` replicates hover state on keyboard focus
- [ ] Build `Skills` section (two-column text list, no icons, no tag clouds, zero cards)
- [ ] Source or generate project preview images -> `public/images/projects/`
- [ ] Populate `lib/data.ts` with real project data
- [ ] **Deliverable:** Core portfolio content fully interactive on desktop; functional on mobile

### Phase 4 - Exploring + Contact + Footer

- [ ] Build `Exploring` section (data-driven from `lib/data.ts`, easy to update)
- [ ] Build `Contact` section (large display type, mailto link, social links)
- [ ] Build `Footer` (dark `#151210` bookend - only dark section on the page)
- [ ] Assemble full page in `page.tsx` in correct section order
- [ ] **Deliverable:** Full page renders end-to-end at all breakpoints

### Phase 5 - Polish, Accessibility & Performance

- [ ] Add skip-to-content link (first DOM element, visually hidden)
- [ ] Keyboard accessibility audit - Tab through full page in logical order
- [ ] Add `aria-label` to all project links and nav items
- [ ] Verify color contrast: muted text `#8A8580` on `#F6F4F0` >= 4.5:1
- [ ] Verify focus ring visibility: `#E8531A` outline on `#F6F4F0` canvas
- [ ] Lighthouse run: LCP < 2.5s, CLS < 0.1
- [ ] Review all animations with `prefers-reduced-motion: reduce` active
- [ ] Cross-browser test: Chrome, Firefox, Safari, mobile Safari
- [ ] **Deliverable:** Production-ready portfolio

---

## Open Questions (confirm before Phase 3)

These do not block Phase 0 or Phase 1, but must be resolved before Phase 3 begins:

1. **About body copy** - 3-4 short paragraphs: who you are, what drives you, what you build. Needed before Phase 2.
2. **Project preview images** - Do you have screenshots or mockups? If not, they will be generated at Phase 3.
3. **Project URLs** - Live URL or GitHub link for each project.
4. **Contact email** - Address for the `mailto:` link.
5. **Social links** - Which accounts to include (GitHub, LinkedIn - anything else)?
6. **Currently Exploring** - 2-3 things you are actively learning or curious about right now.

---

*Ready for approval. No code will be written until this plan is confirmed.*
