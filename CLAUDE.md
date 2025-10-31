## CLAUDE.md

## Feature Brief & UX Spec — “Elvish ↔ English Dual-Theme Home + Site Scaffold”

**You are the lead refactor agent.** Read the existing React + Vite codebase incrementally (repo tree → targeted files). Produce a **short, numbered plan first** as a PR description (not as a file), wait for approval, then execute in phases. **Do NOT create any extra summary markdown files** beyond updating `SETUP.md` as required.

### Core Goals

1. **Preserve all existing pages** and content stubs; reorganize if needed but don’t delete pages.
2. **Home page**:

   * Default state renders **Elvish** text (already provided in code or as placeholders), on an **old-parchment fantasy** theme (textured background, subtle grain, elegant calligraphic feel).
   * A **Translate to English** button toggles content to English *and* switches theme to an **outer-space / nebula** visual.
   * A **persistent sidebar** shows profile photo & contact info in both modes.
3. **English mode extras**: reveal navigation links to **Resume**, **Experience**, **Projects**, **Blog**.
4. **Other pages**:

   * Each (except Resume) shows **card lists** with short summaries linking to detail pages.
   * **Resume** links to a **PDF** (open in new tab; ensure reliable path/build output).
5. **Styling consistency**: Beautiful, creative, professional; honor existing style direction and tokens; ensure responsive from 360px up.
6. **Routing**: Ensure all pages have routes and are reachable from nav; add 404 and error boundary.
7. **Local testability**: `npm run dev`, `npm run test`, `npm run build` must work; include Vitest + React Testing Library (and optional Playwright).
8. **CI/CD**: Provide GitHub Actions workflow for build/test/deploy (GitHub Pages). Document steps in `SETUP.md`.
9. **No extra summary files**: Use PR descriptions and commit messages for summaries; only update `SETUP.md`.

### Functional Requirements

* **Mode toggle** on Home:

  * Toggles **language** (Elvish ↔ English) and **theme** (Parchment ↔ Nebula).
  * Maintain state across navigation (router state or a small store).
  * Respect `prefers-reduced-motion`.
* **Persistent sidebar**:

  * Always visible on desktop; collapsible/drawer on mobile.
  * Contains profile photo, name, short tagline (placeholder), contact links (email, GitHub, LinkedIn).
  * Ensure keyboard accessibility and focus order.
* **Navigation in English mode**:

  * Header/nav shows: Home, Resume (PDF), Experience, Projects, Blog.
  * Use `react-router-dom@^6` with lazy routes and `Suspense`.
* **Cards** (Experience/Projects/Blog):

  * Uniform card component with title, brief summary, date/tags (placeholder), “View details” link.
  * Grid that collapses gracefully on mobile.
* **Resume PDF**:

  * Served from `public/` or a stable path (e.g., `/assets/resume.pdf`).
  * Link opens in a new tab with `rel="noopener"`.
* **Themes & tokens**:

  * Parchment theme: warm neutrals, subtle paper texture, calligraphic headline style.
  * Nebula theme: deep space backdrop, soft gradients/particle field, clean sans serif headings.
  * Implement via CSS variables/design tokens; avoid heavy dependencies.
* **Internationalization**:

  * No full i18n system needed—just a clean toggle and a thin content map for Home (Elvish/English).
  * Pages other than Home do **not** need generated content—leave placeholders.

### Non-Functional Requirements

* **Performance**: Lazy load routes; optimize background images; limit new dependencies.
* **Accessibility**: Color contrast (AA), focus states, semantic landmarks, skip link, reduced motion.
* **Security (frontend)**: Never embed secrets; sanitize any dynamic HTML; use `rel="noopener"` on external links; set a minimal CSP meta if possible.
* **DX**: Keep Tailwind/CSS Modules if present; otherwise propose minimal styling choice in the **plan** and proceed after approval. Use Biome (or ESLint+Prettier) with scripts for `lint`/`format`.
* **Versioning**: After every task, commit the new changes to the git tree with an approprate commit message, but don't push any changes.

### Phases (after plan approval)

1. **Audit (read-only)**: File tree, route map, style inventory, duplication, dead code.
2. **DX Baseline**: TypeScript (if absent), aliases, Biome/ESLint, Vitest + RTL setup.
3. **Routing & Layout**: `AppLayout`, `PageContainer`, `routes.tsx` (lazy), 404, error boundary.
4. **Themes & Sidebar**: Tokenize themes; implement Parchment↔Nebula toggle with language switch; persistent, accessible sidebar.
5. **Cards & Pages**: Uniform Card component; Experience/Projects/Blog list views + detail routes; Resume PDF link.
6. **A11y & Perf**: Pass Lighthouse/Axe locally; image and bundle optimizations.
7. **Tests & CI**: Route/component unit tests; optional Playwright smoke; GH Actions for Pages.
8. **Polish**: Metadata defaults, favicon/manifest, dead code removal.

### Acceptance Criteria

* Home toggles **both** language and theme; state persists during navigation.
* Sidebar is persistent on desktop; accessible and mobile-friendly.
* English mode shows nav links to **Resume/Experience/Projects/Blog**; routes function; 404 present.
* Cards are consistent and responsive; detail pages reachable; Resume opens the PDF.
* `npm run dev/test/build` succeed; `SETUP.md` contains clear steps for local run, tests, build, and GH Pages deploy.
* CI pipeline green; deployed site renders correctly.
* **No extra summary markdown files** added.

### Implementation Notes (token-efficient workflow)

* Read the repo with a tree first; only open large files when needed.
* Prefer diff-style edits over full rewrites.
* Keep theme assets lightweight (one optimized parchment texture, one nebula gradient/asset).
* Document decisions in the **PR description**, not in new files.

