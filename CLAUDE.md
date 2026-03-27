# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint on src/ (warnings treated as errors via --max-warnings 0)
npm run deploy     # Build and deploy to GitHub Pages (gh-pages)
```

## Architecture

Single-page portfolio built with React 18 + Vite. No routing — the entire app is one page rendered in `src/App.jsx` as a vertical stack of sections:

```
Header → Home → About → Skills → Projects → Contact → Footer
```

Each section is a self-contained component under `src/components/<section>/`, with a co-located CSS Module (`<Section>.module.css`). There is no global state management; each component manages its own local state.

**Key integrations:**
- **EmailJS** (`@emailjs/browser`): Used in `Contact.jsx` to send form submissions without a backend. Service/template/public key are hardcoded in the component.
- **Smooth scrolling**: Navigation links and CTA buttons use `document.getElementById().scrollIntoView()` — no `react-router-dom` (installed but unused).
- **Icons**: `boxicons` (via CDN link in `index.html`) and `react-icons` are both used across components.

**Styling approach:** CSS Modules per component + global styles in `src/index.css` and `src/App.css`. Responsive design via media queries inside each module.

**Deployment:** GitHub Pages via `gh-pages` package. The `vite.config.js` has `base: '/'` — adjust if deploying to a subdirectory.
