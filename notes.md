# Task for Codex

Update the homepage to use a JSON-based English ↔ Elvish mapping instead of a translation function.

## Requirements

### Initial State (on page load)
- Background: parchment/old manuscript theme (`theme-parchment`).
- Title: Display my name ("Jay").
- Blurb: Render **Elvish version** of the text from a JSON mapping file.
  - JSON file lives in `/src/data/home_translation.json`.
  - Example format:
    ```json
    {
      "blurb": {
        "english": "Lorem ipsum dolor sit amet...",
        "elvish": "⟨Elvish Tengwar text here⟩"
      }
    }
    ```
  - Use the `"elvish"` value for initial rendering.
  - Font: Tengwar (assume `/assets/fonts/tengwarfeanorregular.ttf`).
- Button: `"Click here to translate"` appears below the blurb.

### On Translate Button Click
- Animate a transition:
  - Background/theme shifts from `theme-parchment` → `theme-dark`.
  - Blurb text morphs/fades from Elvish → English (swap from `translations.json`).
  - Font changes from Tengwar → system serif.
- Navigation buttons fade in:
  - "Resume"
  - "Projects"
  - "Contact"

### Implementation Notes
- **Frontend**:
  - React functional components with TailwindCSS.
  - Use Framer Motion for smooth transitions (fade/morph).
  - Blurb text should be dynamically selected from the JSON mapping.
  - Create a `TranslateButton` component with onClick handler.
- **Backend**:
  - Create a utility in `src/utils/api.js` to load and serve `translations.json` content.
  - Function:
    ```js
    export async function getBlurb(language = "elvish") {
      const data = await import("../data/translations.json");
      return data.blurb[language];
    }
    ```
- **Themes**:
  - `theme-parchment`: parchment background, Elvish font, use the parchment background available at `/assets/images/parchment-bg.jpg`.
  - `theme-dark`: dark gothic background, serif font.
- **Fonts**:
  - Assume Tengwar font file exists at `//assets/fonts/tengwarfeanorregular.ttf`.

### Deliverables
- Updated `Home.jsx` with theme + language toggle logic.
- `TranslateButton.jsx` component.
- `api.js` utility to fetch from `translations.json`.
- Tailwind classes for `theme-parchment` and `theme-dark` in `global.css`.

