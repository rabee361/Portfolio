# Batch 2: Bundle Size, Icon Bloat, Code Splitting & Dead Code

**Scope:** Eliminate react-icons bloat (~10.7 MB), add lazy loading for below-fold components, remove unused dependencies.  
**Expected Impact:** Remove ~80% of JavaScript payload; defer ~60% of remaining JS.

---

## Issue 1: react-icons Library Bloat (~10.7 MB)

### Problem

The project uses ~23 icons from 4 react-icons packages, but ships the **entire icon sets**:

| Package | Icons Used | Bundle Size |
|---------|-----------|-------------|
| `react-icons/si` | 17 (`SiGo`, `SiPython`, `SiElixir`, `SiJavascript`, `SiDjango`, `SiFastapi`, `SiFlask`, `SiReact`, `SiTailwindcss`, `SiGithub`, `SiGit`, `SiBitbucket`, `SiNginx`, `SiLinux`, `SiMysql`, `SiSqlite`, `SiPostgresql`) | **5,283 KiB** |
| `react-icons/md` | 1 (`MdEmail`) | **2,340 KiB** |
| `react-icons/fa6` | 1 (`FaLinkedin`) | **1,689 KiB** |
| `react-icons/fa` | 7 (`FaBars`, `FaTimes`, `FaSun`, `FaMoon`, `FaGithub`, `FaFileDownload`, `FaDatabase`) | **1,375 KiB** |

**Total: ~10.7 MB of JS for 23 icons.**

Each `react-icons/{package}` subpath exports a single large module with every icon in that set. Vite dev mode does not tree-shake, and even in production the parse cost is significant.

### Fix — Replace with inline SVG components

Since only ~23 icons are used, create a single `src/components/Icons.tsx` file with inline SVG components. This replaces **10+ MB** of JavaScript with **~5 KiB** of SVG paths.

**Files to modify:**

**Create `src/components/Icons.tsx`:**

Each icon is a simple SVG component. Get the SVG paths from the react-icons source or from the icon websites (Font Awesome, Simple Icons, Material Design Icons).

Example structure:
```tsx
// src/components/Icons.tsx
import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

// Font Awesome icons
export const FaGithub = (props: IconProps) => (
  <svg viewBox="0 0 496 512" fill="currentColor" {...props}>
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 ..." />
  </svg>
);

export const FaBars = (props: IconProps) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 ..." />
  </svg>
);

// ... repeat for all 23 icons
```

**Then update imports in all files:**

`src/pages/home/Hero.tsx`:
```tsx
// BEFORE:
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// AFTER:
import { FaLinkedin, FaGithub, FaFileDownload, MdEmail } from '../../components/Icons';
```

`src/pages/home/Navbar.tsx`:
```tsx
// BEFORE:
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

// AFTER:
import { FaBars, FaTimes, FaSun, FaMoon } from '../../components/Icons';
```

`src/pages/home/Skills.tsx`:
```tsx
// BEFORE:
import { SiGo, SiPython, SiElixir, ... } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

// AFTER:
import { SiGo, SiPython, SiElixir, ..., FaDatabase } from '../../components/Icons';
```

**Finally, uninstall react-icons:**
```bash
npm uninstall react-icons
```

**Note:** The icon SVG paths need to be extracted from the actual react-icons source. Each icon is just a `<path d="...">` inside an `<svg>`. You can find the paths at:
- Font Awesome: https://fontawesome.com (view SVG source)
- Simple Icons: https://simpleicons.org (click icon → copy SVG)
- Material Design Icons: https://fonts.google.com/icons

---

## Issue 2: No Code Splitting / Lazy Loading

### Problem

All page components are statically imported in `HomePage.tsx`:

```tsx
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Skills from './Skills'
```

The browser must download, parse, and execute ALL component JavaScript before anything renders — including `About` and `Skills` which are below the fold and not visible on initial load.

### Fix

Use `React.lazy()` + `Suspense` for below-fold components.

**File to modify: `src/pages/home/HomePage.tsx`**

```tsx
// BEFORE:
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Skills from './Skills'

function HomePage() {
  return (
    <div className='dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}
```

```tsx
// AFTER:
import { lazy, Suspense } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const About = lazy(() => import('./About'))
const Skills = lazy(() => import('./Skills'))

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
  )
}
```

**Why:** `Navbar` and `Hero` are above-the-fold and must load immediately. `About` and `Skills` (with their heavy icon imports) are deferred and load in the background after the initial render.

**Impact:** Defers ~60% of page JavaScript. The initial render only needs Navbar + Hero code.

---

## Issue 3: Unused Dependencies

### Problem

Several npm packages are installed but not actively used:

| Package | Size Impact | Reason Unused |
|---------|------------|---------------|
| `three` | ~600 KiB (production) | `LightPillar` component is commented out |
| `ogl` | ~100 KiB | Not imported anywhere in the codebase |
| `vite-plugin-svgr` | Dev only, but loaded in vite.config.ts | No SVG component imports found |
| `react-router-dom` | ~182 KiB | Single-page app with only one route (`/` → `HomePage`) |

### Fix

**Remove unused packages:**

```bash
npm uninstall three ogl vite-plugin-svgr
```

**Update `vite.config.ts`** — remove svgr import and plugin:

```typescript
// BEFORE:
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000 },
})
```

```typescript
// AFTER:
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
})
```

**For `react-router-dom`:** Keep it if you plan to add more pages. If not, remove it:

```bash
npm uninstall react-router-dom
```

Then simplify `src/App.tsx`:
```tsx
// BEFORE:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

```tsx
// AFTER:
import HomePage from './pages/home/HomePage'

function App() {
  return <HomePage />
}
```

---

## Issue 4: Dead Code in Source Files

### Problem

- `src/pages/home/Projects.tsx` and `src/pages/home/Services.tsx` are commented-out imports in `HomePage.tsx` but the files still exist
- `src/App.css` is an empty file imported in `App.tsx`
- `src/components/LightPillar.tsx` references `three` which would pull it into the bundle if any file imported it

### Fix

1. **Keep `Projects.tsx` and `Services.tsx`** if you plan to use them later, but ensure they are NOT imported anywhere (even commented-out imports can confuse bundlers in some configurations).

2. **Clean up commented imports in `HomePage.tsx`:**
```tsx
// REMOVE these commented lines:
// import RecentProjects from './RecentProjects'
// import Projects from './Projects'
// import Services from './Services'
```

3. **Remove empty `App.css` import in `App.tsx`:**
```tsx
// REMOVE:
import './App.css'
```

4. **Delete `src/App.css`** (empty file).

---

## Summary of Changes

| File | Action |
|------|--------|
| `src/components/Icons.tsx` | Create with inline SVG components for all 23 icons |
| `src/pages/home/Hero.tsx` | Update icon imports to use `Icons.tsx` |
| `src/pages/home/Navbar.tsx` | Update icon imports to use `Icons.tsx` |
| `src/pages/home/Skills.tsx` | Update icon imports to use `Icons.tsx` |
| `src/pages/home/About.tsx` | Update icon imports to use `Icons.tsx` (if applicable) |
| `src/pages/home/HomePage.tsx` | Add `React.lazy` + `Suspense` for `About` and `Skills`; remove commented imports |
| `src/App.tsx` | Remove `App.css` import; optionally remove `react-router-dom` |
| `vite.config.ts` | Remove `svgr` plugin |
| `package.json` | Uninstall `react-icons`, `three`, `ogl`, `vite-plugin-svgr` |
| `src/App.css` | Delete (empty file) |

**Expected total savings: ~10+ MB removed from dev bundle; ~1-2 MB from production build; 60% of JS deferred.**
