## CLAUDE.md
### Project: Clean, Sleek, Modern Profile Website (React + Vite)

**Role**: You are the lead implementation agent. Start from a **clean repository** and produce a concise, numbered **plan first** as a PR description (not as a file). Await approval, then implement in phases. **Do not create any extra summary markdown files** beyond updating `SETUP.md` which should only contain commands to run and test the code.

### Design Direction (No Heavy Themes)

* **Aesthetic**: clean, sleek, modern. Minimal ornamentation, generous whitespace, crisp typography, subtle micro‑interactions.
* **Responsiveness**: first‑class mobile (≥360px) through desktop (≥1440px).
* **Performance**: fast and light; no large background images or heavy animation. Prefer CSS effects over libraries. Target **<150 KB** total JS on first load (post‑minify, pre‑gzip), LCP <2.5s on mid‑tier mobile, CLS <0.1.
* **Inspiration** (DO NOT COPY, just use it as a guide to understand what I want from a "modern" website):

  * [https://pixelswithin.com/](https://pixelswithin.com/)
  * [https://www.marcmcdougall.com/](https://www.marcmcdougall.com/)
  * [https://www.emeryullenberg.com/](https://www.emeryullenberg.com/)

### Core Goals

1. **Pages**: Home, Resume, Experience, Projects, Blog (scaffold only—content placeholders are fine).
2. **Navigation**: Global header + footer; persistent sidebar **optional** (only if it doesn’t harm performance/CLS on mobile). Mobile uses a lightweight drawer or simple inline stack.
3. **Cards**: Experience/Projects/Blog list views use a **shared Card** component (title, brief summary, date/tags, CTA). Detail pages are routable.
4. **Resume**: External link to **PDF** (in `public/`), opens in new tab with `rel="noopener"`.
5. **Consistency**: Unify layout grid, spacing scale, typography, buttons/links.
6. **Routing**: `react-router-dom@^6`, lazy routes + `Suspense`, 404 route, error boundary.
7. **Local testability**: `npm run dev`, `npm run test`, `npm run build` must work (Vitest + React Testing Library; optional Playwright later).
8. **CI/CD**: Add GitHub Actions workflow to build/test/deploy to **GitHub Pages**. Document all steps in `SETUP.md`.

### Functional Requirements

* **Layout System**: `AppLayout` (header/nav/footer) + `PageContainer` with max content width (e.g., 72rem), consistent section spacing, and a skip‑to‑content link.
* **Design Tokens**: Implement CSS variables or Tailwind theme for colors, spacing, radii, shadows, typography scale, breakpoints. Keep palette minimal and accessible.
* **Typography**: One modern sans‑serif family (system stack acceptable). Establish a clamp‑based type scale; consistent heading hierarchy.
* **Interactions**: Lightweight hover/focus/active states; motion respects `prefers-reduced-motion`.
* **Assets**: Inline SVG icons where needed; avoid large image assets; prefer responsive images with width/height attributes.

### Non‑Functional Requirements

* **Performance**: Lazy load routes; tree‑shake; avoid heavy deps; prefetch critical routes on idle; compress images; use `vite` code‑splitting defaults.
* **Accessibility**: WCAG AA color contrast; semantic landmarks; visible focus outlines; keyboard‑navigable menu/drawer; ARIA only when necessary.
* **Security (frontend)**: No secrets in client; sanitize any dynamic HTML; external links use `rel="noopener"`; consider a minimal CSP meta tag.
* **DX**: TypeScript, Biome (or ESLint+Prettier) with `lint`/`format` scripts; path aliases; env via `import.meta.env.VITE_*`.
* **Versioning**: Commit after each task with clear messages; do not push until requested by the user.

### Phased Execution (after approval)

**P0 – Project Scaffold (read‑only → minimal init)**

* Initialize Vite + React + TS. Add base folders and configs.

**P1 – DX Baseline**

* Configure Biome (or ESLint+Prettier); add `lint`/`format`/`typecheck` scripts. Set up Vitest + RTL.

**P2 – Routing & Layout**

* Create `AppLayout`, `PageContainer`, `routes.tsx` (lazy), header/footer, skip link, 404, error boundary.

**P3 – UI Kit & Tokens**

* Add tokens (CSS variables or Tailwind config). Implement `Button`, `Card`, `Link`, and utility classes.

**P4 – Pages & Lists**

* Scaffold Home, Resume, Experience, Projects, Blog. Lists use shared `Card`. Detail routes present (placeholders).

**P5 – A11y & Perf**

* Lighthouse/Axe pass locally; ensure CLS <0.1, LCP <2.5s on cold load; remove dead code.

**P6 – Tests & CI/CD**

* Add route/component unit tests. Introduce `.github/workflows/deploy.yml` for Pages (install → lint → test → build → deploy). Update `SETUP.md` with exact steps.

**P7 – Polish**

* Metadata defaults, favicon/manifest, tidy tokens, final pass.

### Recommended Structure, but you can make changes if needed

```
src/
  app/
    App.tsx
    routes.tsx
    layout/
      AppLayout.tsx
      PageContainer.tsx
      Nav.tsx
      Footer.tsx
  pages/
    Home/
      index.tsx
    Resume/
      index.tsx
    Experience/
      index.tsx
      [id].tsx
    Projects/
      index.tsx
      [id].tsx
    Blog/
      index.tsx
      [slug].tsx
  components/
    ui/ (Button, Card, Link, Input, Badge)
    shared/
  styles/
    globals.css (or tailwind.config.js + globals.css)
    tokens.css (if not Tailwind)
  test/
    setup.ts

public/
  resume.pdf (placeholder)
.vitest.setup.ts (optional)
.biome.json | .eslintrc.*
.github/workflows/deploy.yml
SETUP.md
```

### Tech & Practices Checklist

* **Routing**: `react-router-dom@^6`, lazy routes, `Suspense` boundaries.
* **Styling**: CSS variables + modern CSS or Tailwind; keep bundle small.
* **Testing**: Vitest + RTL; Playwright optional later.
* **Lint/Format**: Biome preferred; otherwise ESLint + Prettier.
* **CI/CD**: GitHub Pages deploy via Actions.

### Acceptance Criteria

* Clean, sleek, modern visuals with consistent spacing and type; fully responsive.
* Fast: initial JS ≤ ~150 KB; LCP <2.5s; CLS <0.1; Lighthouse performance ≥90 on desktop and ≥85 on mobile (local).
* All five pages present with working routes; 404 and error boundary included.
* Resume opens a PDF in a new tab; list pages use shared Card component; detail routes exist.
* `npm run dev/test/build` succeed; CI pipeline green; site deployed to GitHub Pages.
* **No extra summary markdown files** added; only `SETUP.md` updated.

### Implementation Notes (token‑efficient)

* Read/modify files selectively; propose small diffs.
* Avoid heavy UI libraries; prefer native HTML/CSS where possible.
* Document decisions in PR descriptions, not new files.

## Suggested Improvements to the Plan (and Why)

1. **Adopt Biome for lint+format**: Single, fast tool improves DX and enforces consistency.
2. **Introduce Design Tokens**: Central tokens enforce visual consistency without heavy design systems.
3. **Lazy-loaded Routes**: Improves initial load performance.
4. **A11y & Reduced Motion**: Professional polish plus broader usability.
5. **Playwright e2e (optional)**: Catches routing regressions before deploys.
6. **PR-based Plan Review**: Ensures you approve the direction before any sweeping changes.