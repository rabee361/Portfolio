# Batch 3: Build Configuration, Image Optimization & Runtime Performance

**Scope:** Optimize Vite build config, improve image loading, reduce Framer Motion bundle, and add production compression.  
**Expected Impact:** Better caching, smaller production bundles, reduced CLS, smoother animations.

---

## Issue 1: No Vite Production Build Optimizations

### Problem

The current `vite.config.ts` has no production build configuration:

```typescript
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
})
```

This means:
- No manual chunk splitting (all vendor code in one large chunk)
- No compression plugins
- Default minification (esbuild — fast but not as aggressive as terser)
- No build target specified (may include unnecessary polyfills)

### Fix

**File to modify: `vite.config.ts`**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    // Target modern browsers only
    target: 'es2022',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Vendor chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})
```

**Why:**
- `target: 'es2022'` — Skips polyfills for features already supported by modern browsers, reducing output size.
- `manualChunks` — Separates React and Framer Motion into their own cached chunks. When you update your app code, users don't re-download the unchanged vendor libraries.
- `cssCodeSplit: true` — Each lazy-loaded component gets its own CSS chunk instead of one massive CSS file.

### Additional: Add Compression Plugin

Install and configure Brotli/Gzip compression for production:

```bash
npm install -D vite-plugin-compression
```

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotliCompress' }),
  ],
  // ... rest of config
})
```

**Impact:** Brotli compression typically reduces transfer sizes by **60-80%**. A 300 KiB JS file becomes ~60-90 KiB on the wire.

### Optional: Bundle Analysis

To visualize what's in your production bundle:

```bash
npm install -D rollup-plugin-visualizer
```

```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, gzipSize: true }),
  ],
})
```

Run `npm run build` and it opens an interactive treemap showing every module's size.

---

## Issue 2: No Image Optimization

### Problem

- Images use standard `<img>` tags with no optimization attributes
- No `loading="lazy"` on below-fold images
- No explicit `width`/`height` attributes (causes Cumulative Layout Shift)
- No responsive `srcSet` or `<picture>` elements
- Mix of formats (`.png`, `.jpg`, `.avif`, `.webp`) — older formats not converted
- 24 image files in `src/assets/images/`, many appear unused

### Fix

**Add `loading="lazy"` and dimensions to all below-fold `<img>` tags.**

For every `<img>` in `About.tsx`, `Skills.tsx`, `Projects.tsx`:
```tsx
// BEFORE:
<img src={chartsImage} alt="Charts" />

// AFTER:
<img
  src={chartsImage}
  alt="Charts"
  loading="lazy"
  width={600}
  height={400}
/>
```

**Do NOT add `loading="lazy"` to images in the Hero section** — those are above the fold and should load immediately.

**Convert remaining `.png` and `.jpg` images to `.avif` or `.webp`:**

Use a tool like `sharp` or an online converter:
```bash
npx sharp-cli --input src/assets/images/*.png --output src/assets/images/ --format avif
```

Or install `vite-imagetools` for automatic optimization at build time:

```bash
npm install -D vite-imagetools
```

```typescript
// vite.config.ts
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [react(), imagetools()],
})
```

Then use query params in imports:
```tsx
import heroImage from '../assets/images/hero.jpg?format=avif&w=800'
```

**Delete unused images:**

Audit which images are actually imported in the codebase. Images not referenced anywhere should be removed to reduce build output size. Likely unused files in `src/assets/images/`:
- Favicon variants (`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`) — these should be in `public/`, not `src/assets/`
- Stock/placeholder images (`img.jpg`, `img1.jpg`, `img3.jpg`, `w.jpg`, `bar-graph.png`, `bell.png`, `money.png`, etc.)

---

## Issue 3: Framer Motion Bundle Size (324 KiB)

### Problem

Framer Motion ships 324 KiB of JavaScript, all loaded eagerly. Much of this is for features not used (layout animations, drag, etc.). The library is used for:
- Slide-in entrance animations (Hero)
- Fade-in on scroll (About, Skills)
- Infinite avatar rotation (Hero)
- Hover effects (About cards)

### Fix

**Use `LazyMotion` + `domAnimation` to reduce the bundle by ~100 KiB.**

`domAnimation` includes only the most common features (animate, exit, variants) and excludes layout animations, drag, and other heavy features.

**File to modify: `src/App.tsx`**

```tsx
// BEFORE:
import HomePage from './pages/home/HomePage'

function App() {
  return <HomePage />
}
```

```tsx
// AFTER:
import { LazyMotion, domAnimation } from 'framer-motion'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <HomePage />
    </LazyMotion>
  )
}
```

**Then in all component files, replace `motion` with `m`:**

```tsx
// BEFORE:
import { motion } from 'framer-motion'
<motion.div variants={...}>

// AFTER:
import { m } from 'framer-motion'
<m.div variants={...}>
```

Files to update: `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Services.tsx`

**Impact:** Reduces Framer Motion from ~324 KiB to ~220 KiB by excluding unused animation features.

---

## Issue 4: Infinite Avatar Animation When Off-Screen

### Problem

In `Hero.tsx`, the avatar has an infinite `rotateY: 360` animation:

```tsx
const avatarVariants = {
  initial: { rotateY: 0 },
  animate: {
    rotateY: 360,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3.5,
    },
  },
};
```

This runs continuously even when the user has scrolled past the Hero section, causing unnecessary GPU compositing and battery drain on mobile.

### Fix

Use `useInView` to pause the animation when the Hero is off-screen:

```tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);

  const avatarVariants = {
    initial: { rotateY: 0 },
    animate: {
      rotateY: 360,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3.5,
      },
    },
  };

  return (
    <div ref={heroRef} id='contact' className='...'>
      {/* ... */}
      <motion.div
        variants={avatarVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className='avatar rounded-full perspective-1000 relative z-10'
      />
      {/* ... */}
    </div>
  );
}
```

---

## Issue 5: Missing Meta Tags

### Problem

The `index.html` has no `<meta name="description">`, no Open Graph tags, and no theme-color meta tag. While not a performance issue, these affect:
- SEO ranking
- Social media link previews
- Mobile browser theme color

### Fix

**File to modify: `index.html`**

Add inside `<head>`:
```html
<meta name="description" content="Rabee Hasan — Software Engineer, Back-end Developer, and Tech Enthusiast. Portfolio showcasing projects, skills, and experience." />
<meta name="theme-color" content="#201E43" media="(prefers-color-scheme: dark)" />
<meta name="theme-color" content="#EEEEEE" media="(prefers-color-scheme: light)" />

<!-- Open Graph -->
<meta property="og:title" content="Rabee Hasan — Software Engineer" />
<meta property="og:description" content="Back-end Developer &amp; Tech Enthusiast" />
<meta property="og:type" content="website" />
```

---

## Summary of Changes

| File | Action |
|------|--------|
| `vite.config.ts` | Add `build.target`, `manualChunks`, `cssCodeSplit`; optionally add compression plugin |
| Component files with `<img>` | Add `loading="lazy"`, `width`, `height` to below-fold images |
| `src/assets/images/` | Convert `.png`/`.jpg` to `.avif`/`.webp`; delete unused images |
| `src/App.tsx` | Wrap app in `<LazyMotion features={domAnimation}>` |
| `Hero.tsx`, `About.tsx`, `Skills.tsx` | Replace `motion` → `m` for LazyMotion compatibility |
| `Hero.tsx` | Add `useInView` to pause avatar rotation when off-screen |
| `index.html` | Add `<meta name="description">`, theme-color, and Open Graph tags |

**Expected total savings: ~100 KiB from Framer Motion; 60-80% transfer reduction from compression; eliminated CLS from images; better caching from vendor splitting.**
