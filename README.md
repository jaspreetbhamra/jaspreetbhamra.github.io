# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





<!-- Scaffold Overview

src/pages/Home.jsx:1 now renders the homepage hero, tech stack callouts, and “coming soon” cards for Resume, Projects, Professional Experience, and Fun Stuff, using Tailwind utility classes throughout.
src/components/TranslateButton.jsx:1 introduces a stateful language toggle stub to show how interactive components will plug into the layout.
src/styles/global.css:1 wires Tailwind base/components/utilities and defines shared body, link, and container styling for a consistent dark theme foundation.
src/utils/api.js:1 adds a placeholder fetch helper to centralize future data loading logic.
SUMMARY.md:1 logs today’s scaffold work so the running changelog stays current.
Dev Tooling

package.json:6 adds formatter, lint, test, and preview scripts plus Prettier/Vitest/Test Library dependencies; eslint.config.js:1, tailwind.config.js:1, and vite.config.js:5 configure linting, Tailwind scanning, and Vitest (jsdom + setup file) while keeping GitHub Pages-friendly build settings.
tests/home.test.jsx:1 seeds the suite with a React Testing Library smoke test for the hero heading.
Setup & Local Commands

# Install dependencies
npm install

# Start local dev server
npm run dev

# Run unit tests (Vitest + RTL)
npm run test -- --run

# Lint and format
npm run lint
npm run format

# Build and preview production bundle
npm run build
npm run preview
Verification

npm run lint
npm run test -- --run
Next options to consider:

Add navigation/content stubs for Resume, Projects, Professional Experience, and Fun Stuff pages under src/pages.
Configure a GitHub Actions workflow to build (npm run build) and push dist/ to GitHub Pages.
Drop in branding assets and typography (e.g., custom fonts) to replace the default dark theme palette. -->