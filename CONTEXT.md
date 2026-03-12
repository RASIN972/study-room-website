

# CONTEXT.md — Study Room Website

## What Is This File
This is the source-of-truth context document for the **Study Room marketing website**.
Reference this file in every Cursor Composer prompt with `@CONTEXT.md` to ensure
consistent architecture, styling, and decisions across all generated code.

This website is **separate** from the Study Room mobile app codebase.

---

## Project Overview

The Study Room website is a static marketing/landing page for the Study Room mobile app.
It serves two purposes:

1. **App Store requirement** — Apple and Google require a publicly accessible URL with a Privacy Policy and Terms of Service.
2. **Marketing landing page** — A clean, branded page that explains what Study Room is and links to the App Store / Google Play.

### Functional Requirements

The **only interactive functionality** is:
- Clicking a link/button to view the **Privacy Policy** page
- Clicking a link/button to view the **Terms of Service** page
- Clicking App Store / Google Play download badges (external links)
- Clicking a contact email link (`mailto:`)

Everything else is static content. No forms, no auth, no database, no API calls.

---

## Team
- 2 developers (brothers), using Cursor agent mode (Composer)
- Same team building the Study Room mobile app
- Deploying website to Vercel

---

## Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Framework      | Next.js 14 (App Router)           |
| Language       | TypeScript (strict mode)          |
| Styling        | Tailwind CSS v3                   |
| Fonts          | `next/font` (local or Google)     |
| Deployment     | Vercel                            |
| Icons          | Lucide React (minimal use)        |
| Analytics      | None (no tracking, no cookies)    |

### Why Next.js?
- Team already knows React + TypeScript + Tailwind (via the mobile app's NativeWind)
- App Router gives file-based routing (familiar from Expo Router)
- Vercel deployment is zero-config
- Static export possible (`output: 'export'`) if needed
- Built-in font optimization

---

## Project Structure

```
study-room-website/
├── app/
│   ├── layout.tsx              # Root layout (html, body, fonts, nav, footer)
│   ├── page.tsx                # Landing page (home)
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx            # Terms of Service page
│   └── globals.css             # Tailwind directives + global styles
├── components/
│   ├── header.tsx              # Site header / navigation bar
│   ├── footer.tsx              # Site footer (links, copyright)
│   ├── hero.tsx                # Hero section (headline, tagline, CTA)
│   ├── features.tsx            # Feature highlights section
│   ├── how-it-works.tsx        # Step-by-step explanation section
│   ├── social-proof.tsx        # Taglines / trust section
│   ├── cta-section.tsx         # Final call-to-action / download section
│   ├── logo.tsx                # Study Room logo component (SVG)
│   ├── download-badges.tsx     # App Store + Google Play badge links
│   └── legal-layout.tsx        # Shared layout wrapper for legal pages
├── public/
│   ├── favicon.ico             # Favicon (orange square from logo)
│   ├── og-image.png            # Open Graph image (1200×630)
│   ├── apple-touch-icon.png    # Apple touch icon
│   ├── app-store-badge.svg     # "Download on the App Store" badge
│   ├── google-play-badge.png   # "Get it on Google Play" badge
│   ├── app-screenshot-1.png    # App screenshot (optional, for hero)
│   ├── app-screenshot-2.png    # App screenshot (optional, for features)
│   └── fonts/                  # Local font files (if self-hosting)
│       ├── OnSans-Regular.woff2
│       ├── OnSans-Medium.woff2
│       ├── OnSans-Bold.woff2
│       └── AkinBlake.woff2
├── lib/
│   └── constants.ts            # Shared constants (colors, URLs, copy)
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json
├── package.json
├── CONTEXT.md                  # This file
└── vercel.json                 # Vercel config (optional, redirects)
```

---

## Naming Conventions

| Thing            | Convention            | Example                     |
|------------------|-----------------------|-----------------------------|
| Files/folders    | kebab-case            | `how-it-works.tsx`          |
| Components       | PascalCase            | `HowItWorks`               |
| Constants        | SCREAMING_SNAKE       | `APP_STORE_URL`             |
| CSS classes      | Tailwind utilities    | `className="bg-dark ..."`   |

---

## Pages

### 1. Landing Page (`/`)

The home page. Single-page marketing layout with the following sections in order:

#### Header / Nav
- Logo (Study Room mark + wordmark) — top left
- Navigation links: "Features" (anchor scroll), "Privacy Policy" (`/privacy`), "Terms" (`/terms`)
- Sticky/fixed on scroll, dark background with subtle border-bottom
- Mobile: hamburger menu or simplified inline links

#### Hero Section
- **Large headline:** "STUDY TOGETHER." or "YOUR ROOM IS WATCHING."
- **Subheadline:** Brief description — "Timelapse yourself studying. Share with your Room. Stay accountable."
- **CTA buttons:** App Store badge + Google Play badge (side by side)
- **Optional:** App screenshot/mockup on the right or below (phone frame with app UI)
- Background: Dark (`#1F1F1E`) with subtle gradient or orange accent glow

#### How It Works Section
4-step visual explanation:

| Step | Icon/Visual | Title | Description |
|------|-------------|-------|-------------|
| 1 | 📹 Camera icon | **Start a Session** | Tap record, set your subject, and start studying. |
| 2 | ⏱️ Timer icon | **Study on Camera** | The app captures a timelapse of you studying using your front camera. |
| 3 | 🎬 Film icon | **Get Your Timelapse** | When you're done, your session is stitched into a short timelapse video. |
| 4 | 👥 Group icon | **Share to Your Room** | Post your timelapse to your accountability group. Prove you put in the work. |

#### Features Section
Key feature cards (3-4 cards in a grid):

| Feature | Description |
|---------|-------------|
| **Small Groups, Real Pressure** | Rooms of 3–25 people who actually know each other. Not strangers — real accountability. |
| **Streaks & Stats** | Track your study minutes, build streaks, see your progress over time. |
| **Reactions** | Your Room reacts to your sessions with 🔥 💪 🧠 👏 ⭐ — instant motivation. |
| **Privacy First** | Your timelapses are only visible to your Room members. No public feeds. No strangers. |

#### Social Proof / Tagline Section
- Large, bold rotating or stacked taglines:
  - "PROVE IT."
  - "SMALL GROUPS, REAL PRESSURE."
  - "YOUR ROOM IS WATCHING."
- Dark background, orange accent text or white text on dark

#### Final CTA Section
- "Ready to study?" or "Download Study Room"
- App Store + Google Play badges again
- Contact email link

#### Footer
- Logo (small)
- Links: Privacy Policy (`/privacy`), Terms of Service (`/terms`), Contact (`mailto:`)
- Copyright: "© 2025 Study Room. All rights reserved."
- Minimal, dark background

---

### 2. Privacy Policy (`/privacy`)

- **Full legal text** of the Privacy Policy
- Clean, readable typography — legal content styled with proper heading hierarchy
- Use the shared `LegalLayout` component (max-width container, padded, light/dark compatible)
- "Last Updated: [DATE]" at the top
- Back link to home page in header
- **Must be accessible at a stable, public URL** (App Store requirement)

*(Privacy Policy content: use the previously generated comprehensive Privacy Policy)*

---

### 3. Terms of Service (`/terms`)

- **Full legal text** of the Terms of Service
- Same layout and styling as Privacy Policy page (shared `LegalLayout`)
- "Last Updated: [DATE]" at the top
- Back link to home page in header
- **Must be accessible at a stable, public URL** (App Store requirement)

---

## Brand Identity (Source of Truth)

### Color Palette

| Role        | Hex        | Tailwind Custom | Usage                                      |
|-------------|------------|------------------|--------------------------------------------|
| **Orange**  | `#FF5C00`  | `orange`         | Primary accent, CTAs, key elements, logo   |
| **Orange Light** | `#FF7A33` | `orange-light` | Hover states, secondary accent            |
| **White**   | `#F5F5F5`  | `white-brand`    | Text on dark backgrounds                   |
| **Dark**    | `#1F1F1E`  | `dark`           | Primary background, text on light          |
| **Dark Card** | `#2A2A29` | `dark-card`     | Card backgrounds, elevated surfaces        |
| **Dark Border** | `#3A3A39` | `dark-border`  | Subtle borders on dark backgrounds        |
| **Black**   | `#000000`  | (default black)  | Pure black accents                         |
| **Text Secondary** | `#94A3B8` | `text-secondary` | Muted body text, descriptions        |
| **Text Muted** | `#64748B` | `text-muted`    | Footer text, tertiary content              |

### Tailwind Config — Custom Colors

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF5C00',
        'brand-orange-light': '#FF7A33',
        'brand-orange-dark': '#E05200',
        'brand-white': '#F5F5F5',
        'brand-dark': '#1F1F1E',
        'brand-dark-card': '#2A2A29',
        'brand-dark-border': '#3A3A39',
        'brand-text-secondary': '#94A3B8',
        'brand-text-muted': '#64748B',
      },
      fontFamily: {
        'display': ['var(--font-akin-blake)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-on-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Logo Mark

The Study Room logo mark is two overlapping rounded squares:

- **Structure:** Back square + front square, offset +28px in X/Y
- **On dark background (default for website):** Orange square in front, white square behind
- **On orange background:** White square in front, dark square behind; white "STUDY ROOM" text
- **Wordmark:** "STUDY ROOM" in AKIN BLAKE font, all caps, tracked wide

**Logo component should render as inline SVG** for crisp rendering and color control.

**Logo rules (do not violate):**
- Don't use same color for both squares
- Don't reverse layer order
- Don't distort — maintain aspect ratio
- Always pair with "STUDY ROOM" wordmark on the website

### Typography

| Role      | Font        | Weight  | Size (desktop) | Size (mobile) | Usage                             |
|-----------|-------------|---------|----------------|---------------|-----------------------------------|
| Display   | AKIN BLAKE  | Bold    | 64–80px        | 36–48px       | Hero headline, section headers    |
| Heading   | ON SANS     | Bold    | 32–48px        | 24–32px       | Section titles, feature headers   |
| Subhead   | ON SANS     | Medium  | 20–24px        | 16–20px       | Descriptions, step titles         |
| Body      | ON SANS     | Regular | 16–18px        | 14–16px       | Paragraphs, legal text            |
| Label     | ON SANS     | Medium  | 12–14px        | 12–14px       | Nav links, footer links, captions |

**Fallback:** If brand fonts are not available, use `system-ui, -apple-system, sans-serif`.

**For legal pages** (Privacy Policy, Terms): Use ON SANS Regular at 16px body with generous line-height (1.7–1.8) for readability.

### Taglines (Available for Use)

- "STUDY TOGETHER."
- "PROVE IT."
- "YOUR ROOM IS WATCHING"
- "SMALL GROUPS, REAL PRESSURE."
- "WATCHING."
- "REAL PRESSURE."

---

## Design Direction

### Overall Aesthetic
- **Dark-mode-first** — the website should default to dark (`#1F1F1E` background)
- Light mode support is NOT required for the website (dark only)
- Clean, minimal, modern — similar to Linear, Vercel, Arc marketing sites
- High contrast: white text on dark, orange for accents/CTAs
- Generous whitespace and padding between sections
- Subtle animations on scroll (fade-in, slide-up) — keep them minimal and performant
- No heavy imagery — rely on typography, color, and layout

### Component Styling Patterns

#### Buttons / CTAs
```
Primary:    bg-brand-orange text-white rounded-xl px-8 py-4 font-semibold hover:bg-brand-orange-light transition
Secondary:  bg-transparent border border-brand-dark-border text-brand-white rounded-xl px-8 py-4 hover:border-brand-orange transition
Ghost:      bg-transparent text-brand-orange hover:text-brand-orange-light transition underline-offset-4
```

#### Cards (Feature Cards)
```
bg-brand-dark-card border border-brand-dark-border rounded-2xl p-8
hover: border-brand-orange/30 transition
```

#### Section Containers
```
max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32
```

#### Legal Page Container
```
max-w-3xl mx-auto px-6 py-16 sm:py-20
prose prose-invert (if using @tailwindcss/typography)
```

### Responsive Breakpoints
Use Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Mobile-first design. Landing page should look excellent on mobile since users discovering the app will likely be on their phones.

---

## Constants File

```typescript
// lib/constants.ts

export const SITE = {
  NAME: 'Study Room',
  TAGLINE: 'Study Together.',
  DESCRIPTION: 'Timelapse yourself studying. Share with your Room. Stay accountable.',
  URL: 'https://studyroom.app', // UPDATE WITH ACTUAL DOMAIN
  CONTACT_EMAIL: 'contact@studyroom.app', // UPDATE WITH ACTUAL EMAIL
  COPYRIGHT_YEAR: 2025,
} as const;

export const LINKS = {
  APP_STORE: 'https://apps.apple.com/app/study-room/id000000000', // UPDATE WITH ACTUAL ID
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.studyroom.app', // UPDATE WITH ACTUAL ID
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

export const COLORS = {
  orange: '#FF5C00',
  orangeLight: '#FF7A33',
  orangeDark: '#E05200',
  white: '#F5F5F5',
  dark: '#1F1F1E',
  darkCard: '#2A2A29',
  darkBorder: '#3A3A39',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
} as const;
```

---

## SEO & Meta Tags

### Root Layout Meta

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Room — Study Together. Prove It.',
  description: 'Timelapse yourself studying and share sessions with your accountability group. Small groups, real pressure.',
  keywords: ['study', 'accountability', 'timelapse', 'study group', 'productivity', 'study room'],
  authors: [{ name: 'Study Room' }],
  openGraph: {
    title: 'Study Room — Study Together. Prove It.',
    description: 'Timelapse yourself studying and share sessions with your accountability group.',
    url: 'https://studyroom.app',
    siteName: 'Study Room',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Study Room — Study Together',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Room — Study Together. Prove It.',
    description: 'Timelapse yourself studying and share sessions with your accountability group.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Privacy Policy Page Meta
```typescript
export const metadata: Metadata = {
  title: 'Privacy Policy — Study Room',
  description: 'Study Room Privacy Policy. Learn how we collect, use, and protect your data.',
  robots: { index: true, follow: true },
};
```

### Terms of Service Page Meta
```typescript
export const metadata: Metadata = {
  title: 'Terms of Service — Study Room',
  description: 'Study Room Terms of Service. Read the terms governing your use of the app.',
  robots: { index: true, follow: true },
};
```

---

## Open Graph Image (`og-image.png`)

- **Dimensions:** 1200 × 630px
- **Design:** Dark background (`#1F1F1E`), Study Room logo centered or left-aligned, "STUDY TOGETHER." in large AKIN BLAKE text, orange accent elements
- **Keep it simple:** Logo + tagline + dark bg

---

## App Store Requirements Checklist

The following must be true for the website to satisfy Apple App Store and Google Play requirements:

- [x] **Privacy Policy** is accessible at a stable, public URL (`/privacy`)
- [x] **Privacy Policy** covers all data collection, usage, sharing, and user rights
- [x] **Privacy Policy** mentions camera usage and what data is captured
- [x] **Privacy Policy** discloses third-party services (Supabase, Expo, auth providers)
- [x] **Privacy Policy** includes contact information
- [x] **Privacy Policy** addresses children's privacy (COPPA)
- [x] **Privacy Policy** mentions data deletion rights and account deletion process
- [x] **Terms of Service** is accessible at a stable, public URL (`/terms`)
- [x] **Contact information** (email) is visible on the website
- [x] All URLs work on both desktop and mobile browsers
- [x] No login required to view Privacy Policy or Terms of Service
- [x] Website is served over HTTPS

---

## Deployment

### Vercel Configuration

```json
// vercel.json (optional)
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Domain
- Primary: `studyroom.app` (or whatever domain you purchase)
- Vercel preview: `study-room-website.vercel.app`
- **Link this URL in App Store Connect and Google Play Console**

### Environment Variables
None required. This is a fully static website with no backend calls.

---

## Legal Content Placeholders

### Items to Finalize Before Publishing

| Item | Action |
|------|--------|
| `[DATE]` in Privacy Policy | Replace with actual publish date |
| `[DATE]` in Terms of Service | Replace with actual publish date |
| `contact@studyroom.app` | Replace with actual contact email |
| App Store URL | Replace with actual App Store link after approval |
| Google Play URL | Replace with actual Google Play link after approval |
| Domain URL | Replace `studyroom.app` with actual domain |

---

## Accessibility Requirements

- All images have `alt` text
- Links have descriptive text (not "click here")
- Sufficient color contrast (WCAG AA minimum — white on dark passes, orange on dark passes)
- Legal pages are keyboard-navigable
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`)
- Page titles are descriptive (`<title>` via Next.js metadata)

---

## Performance Requirements

- Lighthouse score: 95+ on Performance, Accessibility, SEO
- No external tracking scripts (no Google Analytics, no Facebook Pixel)
- No cookies
- Self-host fonts (no external font CDN requests) via `next/font/local`
- Optimize images: use Next.js `<Image>` component with WebP/AVIF
- Static generation: all pages are statically generated at build time

---

## Rules for AI (Cursor Agent)

1. **ALWAYS** use TypeScript. No `any` types.
2. **ALWAYS** use Tailwind CSS utility classes for styling. No CSS modules, no styled-components.
3. **ALWAYS** use the brand colors defined in this file. Reference `brand-orange`, `brand-dark`, etc.
4. **ALWAYS** use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
5. **ALWAYS** make pages responsive (mobile-first).
6. **ALWAYS** use Next.js `<Link>` for internal navigation. Never `<a>` for internal routes.
7. **ALWAYS** use Next.js `<Image>` for images. Never raw `<img>`.
8. **ALWAYS** include proper `alt` text on all images.
9. **ALWAYS** use `next/font/local` for custom fonts.
10. **NEVER** add analytics, tracking, or cookie scripts.
11. **NEVER** add forms, authentication, or backend API calls — this is a static site.
12. **NEVER** use JavaScript frameworks/libraries beyond React (no jQuery, no GSAP). Tailwind transitions/animations only.
13. File names are kebab-case. Component names are PascalCase.
14. Keep components under 150 lines. Extract sub-components if longer.
15. The website is **dark mode only** — do not implement light mode.
16. All interactive elements are limited to: **navigation links**, **Privacy Policy link**, **Terms of Service link**, **download badge links**, and **mailto link**. Nothing else.
17. Legal pages (`/privacy`, `/terms`) must render the **full legal text** — do not truncate or summarize.
18. Use `@/` path alias for imports.