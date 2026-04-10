# Lighthouse Performance Analysis Report

**Project:** React Portfolio (Vite + React 18 + Tailwind CSS)  
**Date:** April 10, 2026  
**Test Environment:** Development server (`localhost:3000`)  
**Metric Flagged:** LCP — Maximum Critical Path Latency: **1,288 ms**

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Critical Path Chain Analysis](#2-critical-path-chain-analysis)
3. [Bundle Size Breakdown](#3-bundle-size-breakdown)
4. [Font Loading Issues](#4-font-loading-issues)
5. [Icon Library Bloat](#5-icon-library-bloat)
6. [Code Splitting & Lazy Loading](#6-code-splitting--lazy-loading)
7. [Image Optimization](#7-image-optimization)
8. [Resource Hints & Preconnect](#8-resource-hints--preconnect)
9. [Animation & Runtime Performance](#9-animation--runtime-performance)
10. [Unused Code & Dead Weight](#10-unused-code--dead-weight)
11. [Build & Bundler Configuration](#11-build--bundler-configuration)
12. [Prioritized Recommendations](#12-prioritized-recommendations)

---

## 1. Executive Summary

The Lighthouse audit reveals a **deeply nested critical resource chain** with a maximum latency of **1,288 ms**. The primary bottleneck is the **Google Fonts waterfall**: the browser must first download the HTML, then the CSS from `fonts.googleapis.com`, and finally the actual font file from `fonts.gstatic.com` — three sequential network hops before the LCP element (the hero heading) can render with its intended font.

Secondary issues include **massive icon library bundles** (over **10 MB** of JavaScript for react-icons alone), **zero code splitting**, **no resource preconnection**, and **no lazy loading** of below-the-fold content.

---

## 2. Critical Path Chain Analysis

### The Waterfall Problem

The Lighthouse report identifies this critical chain:

```
Initial Navigation (localhost:3000) — 154 ms, 0.94 KiB
  └─ /css2?family=Outfit:wght@300;400;500;600;700&display=swap — 1,033 ms, 0.56 KiB
       └─ …/QGYvz_MVc….woff2 (fonts.gstatic.com) — 1,288 ms, 31.55 KiB
```

**Why this is critical:**

1. **Three-hop waterfall:** HTML → Google Fonts CSS → Font file (`.woff2`). Each step cannot begin until the previous one completes.
2. **Two different origins:** `fonts.googleapis.com` and `fonts.gstatic.com` each require DNS lookup + TCP connection + TLS handshake before any data transfers.
3. **Render-blocking CSS import:** The font CSS is loaded via `@import url(...)` inside `src/index.css`, which is itself a render-blocking resource. The browser discovers the font CSS only after parsing the main stylesheet — adding latency.
4. **No preconnect hints:** The page has **zero preconnected origins**, meaning the browser cannot start DNS/TCP/TLS in parallel with other work.

### Secondary Chain: Module Dependency Waterfall

The Vite dev server serves ES modules that form their own chain:

```
main.tsx (187 ms) → App.tsx (240 ms) → HomePage.tsx (292 ms) → Skills.tsx (329 ms) → react-icons/si (495 ms)
```

Each module import triggers a new HTTP request. In development this is expected (Vite uses native ESM), but in production this highlights the dependency depth. The `react-icons/si` chunk alone is **5,283 KiB** (5.2 MB).

---

## 3. Bundle Size Breakdown

### JavaScript Resources by Size

| Resource | Size | Category |
|----------|------|----------|
| `react-icons_si.js` | **5,283 KiB** | Simple Icons (Skills page) |
| `react-icons_md.js` | **2,340 KiB** | Material Design Icons (Hero) |
| `react-icons_fa6.js` | **1,689 KiB** | Font Awesome 6 (Hero) |
| `react-icons_fa.js` | **1,375 KiB** | Font Awesome (Navbar, Hero, Skills) |
| `chunk-4JVUYMCH.js` | **907 KiB** | Likely React DOM internals |
| `framer-motion.js` | **324 KiB** | Animation library |
| `react-router-dom.js` | **182 KiB** | Routing (single route app) |
| `@vite/client` | **103 KiB** | Dev-only HMR client |
| `chunk-XEXUAUZA.js` | **76 KiB** | Shared chunk |
| `@react-refresh` | **61 KiB** | Dev-only React refresh |

### Total JavaScript Loaded: ~12.4 MB

**Icon libraries alone account for ~10.7 MB (86% of all JS).**

Even though you're importing icons directly (e.g., `import { SiGo } from "react-icons/si"`), the Vite dev server in development mode does not tree-shake — it serves the full module. However, even in production, `react-icons` subpath exports still pull in significant overhead because each icon set ships as a single module containing all icons for that set.

---

## 4. Font Loading Issues

### Current Implementation

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
```

### Problems

| Issue | Impact | Severity |
|-------|--------|----------|
| **`@import` in CSS** | The `@import` is discovered only after the browser parses `index.css`. This adds a full network round-trip of latency compared to a `<link>` tag in HTML. | **HIGH** |
| **Two external origins** | `fonts.googleapis.com` (CSS) and `fonts.gstatic.com` (font file) each need separate connections. Without preconnect, each requires DNS + TCP + TLS. | **HIGH** |
| **5 font weights** | Loading weights 300, 400, 500, 600, and 700 increases the total download. If not all weights are used, this is wasted bandwidth. | **MEDIUM** |
| **No preconnect** | Zero `<link rel="preconnect">` tags in `index.html`. | **HIGH** |
| **No preload** | The browser cannot discover font files until after the CSS is parsed. A `<link rel="preload">` for the `.woff2` file eliminates one round-trip. | **HIGH** |

### Recommended Fix

**Option A: Self-host the font (Best)**

Download the Outfit font files and serve them from your own domain. This eliminates:
- The cross-origin CSS fetch
- The cross-origin font file fetch
- Two DNS lookups
- Two TLS handshakes

```css
/* src/index.css */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url('/fonts/Outfit-Variable.woff2') format('woff2');
}
```

Use a **variable font** file that contains all weights in a single ~35 KiB file instead of multiple files.

**Option B: Preconnect + `<link>` tag (Easier)**

In `index.html`:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />
</head>
```

And remove the `@import` from `index.css`.

---

## 5. Icon Library Bloat

### The Problem

You use icons from **4 separate react-icons packages**:
- `react-icons/fa` — 4 icons used (`FaBars`, `FaTimes`, `FaSun`, `FaMoon`, `FaGithub`, `FaFileDownload`, `FaDatabase`)
- `react-icons/fa6` — 1 icon used (`FaLinkedin`)
- `react-icons/md` — 1 icon used (`MdEmail`)
- `react-icons/si` — 17 icons used (`SiGo`, `SiPython`, etc.)

**Total icons used: ~23 icons.**  
**Total JS shipped for icon libraries: ~10.7 MB.**

Each `react-icons/{package}` subpath exports a single JavaScript module containing **every icon in that set**. In Vite dev mode, the entire module is sent to the browser. In production, tree-shaking helps but the parse cost and intermediate bundle size remain high.

### Recommended Fixes

**Option A: Use `@iconify/react` with on-demand loading**

`@iconify/react` loads only the icons you actually use and can fetch them from a CDN or bundle only the used icons at build time.

```tsx
import { Icon } from '@iconify/react';
// <Icon icon="fa6-brands:linkedin" />
```

**Option B: Inline SVGs for the few icons used**

Since you only use ~23 icons across the entire app, you can copy the SVG paths directly:

```tsx
const GitHubIcon = () => (
  <svg viewBox="0 0 496 512" className="size-5 sm:size-9" fill="currentColor">
    <path d="M165.9 397.4c0 2-2.3 ..." />
  </svg>
);
```

This eliminates **10+ MB** of JavaScript for a few SVG paths.

**Option C: Use `react-icons` with `babel-plugin-transform-imports`**

Configure Vite to resolve each icon to its individual file:

```js
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Each icon resolves to its own file
    }
  },
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/fa6', 'react-icons/md', 'react-icons/si']
  }
});
```

---

## 6. Code Splitting & Lazy Loading

### Current State: No Code Splitting

All components are statically imported:

```tsx
// HomePage.tsx
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Skills from './Skills'
```

This means the browser must download, parse, and execute **all** JavaScript before anything renders, including:
- Components that are below the fold (`About`, `Skills`)
- Disabled components still in the bundle (`Projects`, `Services`) — although these are commented out in the JSX, the import alone is enough to include them if uncommented
- Heavy animation libraries used by below-fold sections

### Recommended Fixes

**Lazy-load below-the-fold sections:**

```tsx
import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));

function HomePage() {
  return (
    <div className='dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500'>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Skills />
      </Suspense>
    </div>
  );
}
```

**Impact:** The browser only needs to load `Navbar` + `Hero` for the initial render. `About` and `Skills` (with their icon dependencies) load in the background.

**Lazy-load the router:**

Since this is a single-page app with only one route, consider whether `react-router-dom` (182 KiB) is even needed. If it's only used for the `BrowserRouter` wrapper, you can remove it entirely.

---

## 7. Image Optimization

### Current State

- Images are imported statically: `import chartsImage from '../../assets/images/charts.avif'`
- Standard `<img>` tags with no optimization attributes
- Mix of formats: `.avif`, `.jpg`, `.png`, `.webp`, `.svg`
- **24 image files** in `src/assets/images/`, many of which appear unused (favicon variants, generic stock images)
- No `loading="lazy"` attributes on any images
- No responsive `srcSet` or `<picture>` elements
- No explicit `width`/`height` attributes (causes layout shift — CLS impact)

### Recommended Fixes

| Fix | Impact |
|-----|--------|
| Add `loading="lazy"` to all below-fold images | Defers download until near viewport |
| Add explicit `width` and `height` to all `<img>` tags | Prevents Cumulative Layout Shift (CLS) |
| Use `<picture>` with `srcSet` for different screen sizes | Reduces mobile download sizes |
| Convert all `.png` and `.jpg` to `.avif` or `.webp` | 30-50% smaller file sizes |
| Remove unused images from `src/assets/images/` | Smaller build output |
| Use `vite-imagetools` plugin for automatic optimization | Generates optimized variants at build time |

---

## 8. Resource Hints & Preconnect

### Current State: Zero Resource Hints

The `index.html` has no resource hints at all:

```html
<!-- index.html (current) -->
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rabee Hasan</title>
</head>
```

### Recommended `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rabee Hasan</title>

  <!-- Preconnect to Google Fonts (if not self-hosting) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Preload font stylesheet -->
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />

  <!-- DNS Prefetch for external resources -->
  <link rel="dns-prefetch" href="https://github.com" />

  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
</head>
```

**Expected impact:** Saves **200-500 ms** by starting DNS/TCP/TLS connections to Google Fonts origins in parallel with the initial HTML parse.

---

## 9. Animation & Runtime Performance

### Framer Motion Usage

Every section uses Framer Motion for entrance animations:

| Component | Animation Type |
|-----------|---------------|
| `Hero.tsx` | Slide-in from left/right, 3D avatar rotation (infinite) |
| `About.tsx` | Fade-in on scroll with `useInView`, staggered card entrance |
| `Skills.tsx` | Fade-in on scroll, staggered grid items |
| `Navbar.tsx` | No animation |

### Issues

| Issue | Impact |
|-------|--------|
| **Framer Motion is 324 KiB** and loaded eagerly for all sections | Increases initial bundle |
| **Avatar `rotateY: 360` runs infinitely** even when off-screen | Continuous GPU compositing, battery drain |
| **`useInView` in About/Skills** creates Intersection Observers — these are fine, but the observer is created even if animation props are not yet needed | Minor |
| **Transition on every dark mode toggle** (`duration-500 ease-in-out` on multiple elements) | Can cause frame drops on low-end devices with many transitioning elements |

### Recommended Fixes

- Consider using CSS animations for simple entrance effects (fade-in, slide-in) instead of Framer Motion. CSS `@keyframes` + `animation` requires zero JavaScript.
- Use Framer Motion's `LazyMotion` + `domAnimation` to reduce the bundle:

```tsx
import { LazyMotion, domAnimation } from 'framer-motion';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      {/* components */}
    </LazyMotion>
  );
}
```

- Pause the avatar rotation when off-screen using Intersection Observer.

---

## 10. Unused Code & Dead Weight

### Identified Dead Code

| Item | Location | Impact |
|------|----------|--------|
| **`Projects` component** | Commented-out import in `HomePage.tsx` | If tree-shaking fails (e.g., side effects), the module still ships |
| **`Services` component** | Commented-out import in `HomePage.tsx` | Same as above |
| **`three` (Three.js)** | `package.json` dependency | LightPillar is commented out; Three.js (~600 KiB) may still be in the bundle if any import references it |
| **`ogl`** | `package.json` dependency | Not visibly used anywhere |
| **Unused images** | `src/assets/images/` has 24 files; only ~5 appear used | Increases build size |
| **`react-router-dom`** | Single route app (`/` → `HomePage`) | 182 KiB for a feature that a simple conditional could replace |
| **`vite-plugin-svgr`** | Dev dependency | No SVG component imports found in the codebase |
| **`App.css`** | Empty file | No impact, but clutters project |

### Recommended Cleanup

1. Remove `three` and `ogl` from `package.json` if LightPillar remains disabled
2. Remove `react-router-dom` if there's only one page (or keep it if you plan to add pages)
3. Delete unused images from `src/assets/images/`
4. Remove the `Projects.tsx` and `Services.tsx` commented-out imports entirely (not just the JSX)
5. Remove `vite-plugin-svgr` from dev dependencies and `vite.config.ts`

---

## 11. Build & Bundler Configuration

### Current Vite Config

```typescript
export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000 },
});
```

**No production optimizations configured.**

### Recommended Vite Optimizations

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          // Icon chunks (if keeping react-icons)
          'icons-fa': ['react-icons/fa'],
          'icons-si': ['react-icons/si'],
        },
      },
    },
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```

### Additional Build Optimizations

- **Enable Gzip/Brotli compression** via `vite-plugin-compression`:
  ```
  npm install -D vite-plugin-compression
  ```
- **Analyze bundle** with `rollup-plugin-visualizer` to identify exactly what's in each chunk
- **Set `target`** in `build` to modern browsers only (`esnext` or `es2022`) to reduce polyfill overhead

---

## 12. Prioritized Recommendations

### Priority 1 — Critical (Immediate Impact on LCP)

| # | Action | Expected Savings | Effort |
|---|--------|-----------------|--------|
| 1 | **Self-host Outfit font** (or at minimum: move `@import` to `<link>` in HTML + add `preconnect`)  | **500-800 ms** off critical path | Low |
| 2 | **Add `<link rel="preconnect">` for Google Fonts origins** to `index.html` | **200-400 ms** saved | Trivial |
| 3 | **Replace react-icons with inline SVGs** for the ~23 icons used | **~10 MB** removed from dev bundle; **hundreds of KiB** from production | Medium |

### Priority 2 — High (Significant Bundle Reduction)

| # | Action | Expected Savings | Effort |
|---|--------|-----------------|--------|
| 4 | **Lazy-load Below-fold components** (`About`, `Skills`) with `React.lazy` + `Suspense` | Defers **~60% of page JS** | Low |
| 5 | **Remove unused dependencies** (`three`, `ogl`, possibly `react-router-dom`, `vite-plugin-svgr`) | **~800+ KiB** from production bundle | Trivial |
| 6 | **Reduce font weights** — audit if you actually use weights 300, 500, 600 | **~10-15 KiB** per unused weight | Trivial |

### Priority 3 — Medium (Production Build Quality)

| # | Action | Expected Savings | Effort |
|---|--------|-----------------|--------|
| 7 | **Configure Vite `manualChunks`** for vendor splitting | Better caching, parallel downloads | Low |
| 8 | **Enable Brotli/Gzip compression** in production | **60-80%** transfer size reduction | Low |
| 9 | **Use `LazyMotion`** from Framer Motion | **~100 KiB** saved | Trivial |
| 10 | **Add `loading="lazy"` and dimensions** to all `<img>` tags | Reduces initial load, prevents CLS | Low |

### Priority 4 — Low (Polish)

| # | Action | Expected Savings | Effort |
|---|--------|-----------------|--------|
| 11 | Delete unused images from `src/assets/images/` | Smaller build output | Trivial |
| 12 | Replace CSS animations where Framer Motion is overkill | Less JS, smoother on low-end devices | Medium |
| 13 | Add `<meta name="description">` and Open Graph tags | SEO, not performance | Trivial |
| 14 | Consider removing `react-router-dom` for a single-page site | **~182 KiB** JS removed | Low |

---

## Summary

The **#1 issue** is the **Google Fonts waterfall** — a 3-hop chain that adds 1,288 ms to the critical path. Self-hosting the font or adding preconnect + `<link>` tags eliminates this entirely.

The **#2 issue** is **react-icons bloat** — 10+ MB of icon JavaScript for 23 icons. Switching to inline SVGs or `@iconify/react` would be the single largest bundle size improvement.

The **#3 issue** is the **lack of code splitting** — everything loads eagerly, including below-fold content and unused dependencies.

Addressing just the top 3 priorities would likely bring the critical path latency well under **500 ms** and reduce the total JS payload by **80%+**.
