# Task for Codex

Build me the basic scaffold for a personal portfolio/profile website.

## Requirements
1. Framework: React + Vite.
2. Styling: TailwindCSS.
3. Project Structure: Follow repo guidelines in Agents.md (components, pages, assets, utils).
4. Page: Start with the Homepage (`src/pages/Home.jsx`) as the entry point.
5. Theme: Aesthetic should resemble *Lord of the Rings*:
   - Background looks like a page from an old manuscript (parchment style).
   - Add fantasy-style elements/images (Elvish script, subtle graphics, fantasy borders).
6. Content:
   - Title: Display my name (use `"Jay"` as placeholder).
   - Body: Lorem Ipsum text, but rendered in an **Elvish-style fantasy font**.
7. Button:
   - Text: Something cool like `"Reveal the Translation"` (instead of "Click here to Translate").
   - Behavior:
     - On click, call a backend function (mock with `/api/translate`) that returns the English version of the text.
     - Animate a **transition where the Elvish letters transform into English** (fade/morph effect).
   - Put button below the main text.

## Extra Implementation Details
- Put Elvish font in `/src/assets/fonts/` and configure it via Tailwind.
- Mock backend call in a file like `src/utils/api.js` that resolves with English text.
- Implement animation with Tailwind transitions or Framer Motion.
- File structure should look like:
```
src/
pages/Home.jsx
components/TranslateButton.jsx
utils/api.js
styles/global.css
```


## Deliverables
- React component for `Home.jsx` (parchment background, fantasy font).
- `TranslateButton` component that triggers backend call + text transformation.
- Basic mock API function (`api.js`) that returns translated text.
- Ensure homepage is routed as default entry point (`App.jsx`).

