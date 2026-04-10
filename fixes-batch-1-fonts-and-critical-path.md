# Batch 1: Font Loading & Critical Path Fixes

**Scope:** Fix the Google Fonts waterfall (LCP bottleneck), add resource hints, and fix render-blocking CSS.  
**Expected Impact:** Eliminate ~800-1,200 ms from the critical path latency.

---

## Issue 1: Render-Blocking CSS `@import` for Google Fonts

### Problem

The Outfit font is loaded via `@import url(...)` inside `src/index.css`:

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
```

This creates a **3-hop waterfall** that is the #1 cause of the 1,288 ms critical path:

```
HTML (localhost:3000) — 154 ms
  └─ Google Fonts CSS (fonts.googleapis.com) — 1,033 ms
       └─ Font file .woff2 (fonts.gstatic.com) — 1,288 ms
```

The browser cannot discover the font CSS until it finishes parsing `index.css`. Then it cannot discover the `.woff2` file until it finishes downloading and parsing the font CSS. Each hop adds DNS + TCP + TLS overhead for a different origin.

### Fix

**Remove the `@import` from `src/index.css`** and **move font loading to `index.html`** using `<link>` tags. This lets the browser discover the font CSS immediately during HTML parsing instead of waiting for the CSS file.

**Files to modify:**

**`src/index.css`** — Remove the `@import` line:
```css
/* REMOVE this line: */
/* @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap'); */

@tailwind base;
@tailwind components;
@tailwind utilities;
/* ... rest of file unchanged ... */
```

**`index.html`** — Add `<link>` tags in `<head>`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rabee Hasan</title>

  <!-- Preconnect to Google Fonts origins (start DNS+TCP+TLS early) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Preload the font stylesheet so it's discovered immediately -->
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />

  <!-- Load the font stylesheet -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" />

  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
</head>
```

**Why this fixes it:**
- `<link rel="preconnect">` starts DNS + TCP + TLS to both Google Fonts origins **in parallel** with HTML parsing — saves ~200-400 ms per origin.
- Moving from `@import` to `<link>` in HTML eliminates one round-trip — the browser discovers the font CSS during HTML parse, not after downloading and parsing `index.css`.
- `<link rel="preload" as="style">` tells the browser to fetch the font CSS at highest priority.

---

## Issue 2: No Resource Hints (Zero Preconnects)

### Problem

The current `index.html` has no resource hints at all:

```html
<!-- Current index.html <head> -->
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rabee Hasan</title>
</head>
```

Lighthouse confirms: **"no origins were preconnected"**. Every external origin requires the browser to do DNS + TCP + TLS from scratch when it first encounters a request to that origin, adding hundreds of milliseconds.

### Fix

This is already addressed by the `index.html` changes in Issue 1 above. The `<link rel="preconnect">` tags handle both Google Fonts origins. Additionally, add a DNS prefetch for GitHub (used in social links):

```html
<link rel="dns-prefetch" href="https://github.com" />
```

---

## Issue 3: Excessive Font Weights

### Problem

5 font weights are loaded: 300, 400, 500, 600, 700. Each additional weight adds ~10-15 KiB to the download. If some weights aren't actually used, they're wasted bandwidth.

### Fix

Audit which weights are actually used in the project's Tailwind classes and inline styles. Common findings:
- `font-bold` = weight 700 ✅ (used in Hero heading)
- `font-medium` = weight 500 (check if used)
- `font-semibold` = weight 600 (check if used)
- `font-light` = weight 300 (check if used)
- Default/`font-normal` = weight 400 ✅ (always needed)

If only 400 and 700 are used, change the font URL to:
```
family=Outfit:wght@400;700&display=swap
```

This halves the font download size.

---

## Issue 4 (Bonus — Best Option): Self-Host the Font

### Problem

Even with preconnect, loading from Google Fonts still requires two cross-origin fetches. Self-hosting eliminates all external font requests.

### Fix

1. Download the Outfit variable font `.woff2` file (contains all weights in one ~35 KiB file)
2. Place it in `public/fonts/Outfit-Variable.woff2`
3. Replace the Google Fonts `<link>` tags with a local `@font-face` in `src/index.css`:

```css
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url('/fonts/Outfit-Variable.woff2') format('woff2');
}

@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Remove the Google Fonts `<link>` and `<link rel="preconnect">` tags from `index.html` (no longer needed).

**Impact:** The font loads from the same origin as your HTML — zero DNS lookups, zero extra TLS handshakes, zero waterfall. The 1,288 ms critical path drops to near zero for font loading.

---

## Summary of Changes

| File | Action |
|------|--------|
| `src/index.css` | Remove `@import url(...)` for Google Fonts |
| `index.html` | Add `<link rel="preconnect">`, `<link rel="preload">`, and `<link rel="stylesheet">` for Google Fonts |
| `index.html` | Add `<link rel="dns-prefetch" href="https://github.com" />` |
| (Optional) `public/fonts/` | Self-host Outfit variable font |
| (Optional) Reduce font weights to only those actually used |

**Expected total savings: 500-1,200 ms off the critical path.**
