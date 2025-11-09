# Setup Guide

This guide covers local development, testing, building, and deploying the portfolio website to GitHub Pages.

## Prerequisites

- **Node.js** v20 or higher
- **npm** (comes with Node.js)
- **Git** for version control

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/jaspreetbhamra/jaspreetbhamra.github.io.git
cd jaspreetbhamra.github.io
```

### 2. Install Dependencies

```bash
npm ci
```

This installs all dependencies from `package-lock.json` for reproducibility.

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

**Hot reload** is enabled—changes to source files will automatically refresh the browser.

## Testing

### Run Tests

```bash
npm test
```

This runs the Vitest test suite with React Testing Library.

### Run Tests in Watch Mode

```bash
npm run test:watch
```

Tests will re-run automatically when files change.

## Building for Production

### Build the Site

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

## Code Quality

### Linting

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

### Formatting

```bash
npm run format
```

Formats all code with Prettier.

### Check Formatting

```bash
npm run format:check
```

Checks if code is formatted without making changes (useful in CI).

## Deployment to GitHub Pages

### Automated Deployment (CI/CD)

This repository is configured with **GitHub Actions** for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
   - Install dependencies
   - Run tests
   - Build the site
   - Deploy to GitHub Pages

The site will be available at: `https://jaspreetbhamra.github.io/`

### Manual Deployment (if needed)

```bash
npm run build
npm run deploy
```

This builds the site and deploys to the `gh-pages` branch.

## Analytics Setup

The site includes Google Analytics 4 (GA4) tracking for visitor insights.

### 1. Create Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon in bottom left)
3. Under "Property", click "Create Property"
4. Fill in property details:
   - Property name: "Portfolio Website"
   - Time zone and currency
5. Click "Next" and complete business details
6. Click "Create"

### 2. Get Measurement ID

1. In your new property, click "Data Streams"
2. Click "Add stream" → "Web"
3. Enter your website URL: `https://jaspreetbhamra.github.io`
4. Click "Create stream"
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Add Measurement ID to Project

Create a `.env` file in the project root:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Important:** The `.env` file is already in `.gitignore` and won't be committed.

### 4. Configure for GitHub Pages

For production deployment, add the Measurement ID as a GitHub Secret:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click "New repository secret"
4. Name: `VITE_GA_MEASUREMENT_ID`
5. Value: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
6. Click "Add secret"

### 5. Update GitHub Actions Workflow

Add the environment variable to `.github/workflows/deploy.yml`:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
```

### 6. Verify Analytics

After deployment:

1. Visit your website
2. Go to Google Analytics **Reports** → **Realtime**
3. You should see active users on your site
4. Navigate between pages to verify page views are tracked

### Analytics Features

- **Page view tracking**: Automatically tracks all route changes
- **Production only**: Analytics disabled in development (`npm run dev`)
- **Privacy-focused**: No tracking without explicit consent (you can add a cookie banner if needed)

### Viewing Analytics

Access your analytics dashboard at: [analytics.google.com](https://analytics.google.com/)

Key reports:
- **Realtime**: See current visitors
- **Acquisition**: How users find your site
- **Engagement**: Pages viewed, time on site
- **Demographics**: User locations and interests

## Project Structure

```
.
├── .github/workflows/    # GitHub Actions CI/CD
├── public/              # Static assets (images, fonts, PDFs)
├── src/
│   ├── components/      # Reusable React components
│   ├── context/         # React context (ThemeContext)
│   ├── data/           # JSON data files
│   ├── pages/          # Page components
│   ├── styles/         # Global CSS
│   └── utils/          # Utility functions
├── tests/              # Test files
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Key Features

- **Elvish ↔ English Dual Theme**: Toggle between parchment and nebula themes on the home page
- **Persistent Sidebar**: Profile and contact info visible across all pages
- **Lazy Loading**: Routes are code-split for optimal performance
- **Error Boundary**: Graceful error handling
- **Accessibility**: Skip-to-content link, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first, works from 360px up

## Troubleshooting

### Port Already in Use

If `npm run dev` fails because port 5173 is in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

### Build Errors

If you encounter build errors:

1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` to reinstall dependencies
3. Try building again with `npm run build`

### GitHub Pages Not Updating

1. Check the **Actions** tab in your GitHub repository to verify the workflow ran successfully
2. Ensure GitHub Pages is enabled in repository **Settings > Pages**
3. Verify the source is set to "GitHub Actions" (not "gh-pages" branch)

## Environment-Specific Configuration

### Base URL

The base URL is configured in `vite.config.js`:

- **Development** (`npm run dev`): Uses `/`
- **Production** (`npm run build`): Uses `/jaspreetbhamra.github.io/`

This ensures assets load correctly when deployed to GitHub Pages.

## Additional Commands

- **Preview build**: `npm run preview`
- **Deploy manually**: `npm run deploy`
- **Lint**: `npm run lint`
- **Format**: `npm run format`
- **Check format**: `npm run format:check`

## Content Management

This section covers how to add and manage content for your portfolio.

### Creating a New Blog Post

Blog posts are written in MDX (Markdown + React components), allowing you to embed custom components alongside standard markdown.

#### Step 1: Copy the Template

```bash
cp templates/blog-post.mdx content/posts/your-post-slug.mdx
```

#### Step 2: Update Frontmatter

Edit the frontmatter (metadata) at the top of your new file:

```mdx
---
title: "Your Blog Post Title"
date: "2024-03-15"
description: "A brief description for the list view"
tags: ["React", "TypeScript", "Tutorial"]
published: false        # Set to true when ready to publish
slug: "your-post-slug"  # Must match your filename
author: "Your Name"
---
```

#### Step 3: Register the Post

Add an entry to `src/data/blogs.ts`:

```typescript
export const blogPosts: BlogPostMeta[] = [
  { slug: "your-post-slug", published: false },
  // ... other posts
];
```

#### Step 4: Write Your Content

Use standard markdown with optional React components:

**Standard Markdown:**
```mdx
## Heading

Regular content with **bold** and *italic* text.

- Bullet points
- More items

` ``javascript
const code = "syntax highlighted";
` ``
```

**Special Components:**

```mdx
import { HandwrittenNotesPDF, References, Cite } from "@/components/blog";

<!-- Embed handwritten notes PDF -->
<HandwrittenNotesPDF
  src="/pdfs/notes.pdf"
  title="Lecture Notes"
  description="Detailed notes from research"
  height="800px"
/>

<!-- Add citations -->
Text with citation<Cite id="1" />

<!-- References section -->
<References
  references={[
    {
      id: 1,
      authors: "Smith, J.",
      title: "Paper Title",
      source: "Journal Name",
      year: 2024,
      url: "https://...",
      doi: "10.1000/...",
    },
  ]}
/>
```

#### Step 5: Publish

1. Set `published: true` in the MDX frontmatter
2. Update `published: true` in `src/data/blogs.ts`
3. Optionally, set `BLOG_COMING_SOON = false` in `src/data/blogs.ts`

#### Testing

```bash
npm run dev
# Visit http://localhost:5173/blog/your-post-slug
```

---

### Creating a New Project

Projects use a hybrid model: metadata in TypeScript + optional MDX detail page.

#### Option 1: Project with External Link Only

Add to `src/data/projects.ts`:

```typescript
{
  id: "my-project",
  title: "My Project",
  description: "Brief description...",
  tags: ["React", "TypeScript"],
  date: "2024-03-15",
  status: "completed",
  link: "https://github.com/username/project",
  hasDetailPage: false,  // No detail page, links to external URL
}
```

#### Option 2: Project with Detail Page

1. **Add metadata** to `src/data/projects.ts`:

```typescript
{
  id: "my-project",
  title: "My Project",
  description: "Brief description...",
  tags: ["React", "TypeScript"],
  date: "2024-03-15",
  status: "completed",
  hasDetailPage: true,  // Will have a detail page
}
```

2. **Create MDX detail page**:

```bash
cp templates/project-detail.mdx content/projects/my-project.mdx
```

3. **Update frontmatter** in the MDX file:

```mdx
---
title: "My Project"
date: "2024-03-15"
description: "Detailed description"
tags: ["React", "TypeScript"]
---
```

4. **Customize content** using the template sections as a guide

5. **Add assets** (optional):

```bash
mkdir -p public/assets/projects/my-project
# Add screenshots, diagrams, etc.
```

#### Testing

```bash
npm run dev
# Visit http://localhost:5173/projects  (see project in list)
# Visit http://localhost:5173/projects/my-project  (see detail page if hasDetailPage: true)
```

---

### Creating a New Experience

Experiences are defined entirely in TypeScript (no MDX files).

#### Step 1: Use the Template

Open `templates/experience-entry.example.ts` and copy either:
- `minimalExample` for basic entries
- `fullExample` for entries with publications

#### Step 2: Add to experiences.ts

Open `src/data/experiences.ts` and add your entry to the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: "company-slug",
    company: "Company Name",
    logo: "/assets/logos/company.png",  // Optional
    position: "Your Position",
    duration: "2020 - 2023",
    location: "City, Country",
    overview: "High-level summary of your role...",
    tags: ["Python", "Machine Learning"],
    shortDescription: "Brief description for list view.",

    subProjects: [
      {
        title: "Major Project",
        description: "What you built and why...",
        techStack: ["Python", "Docker", "AWS"],
        highlights: [
          "Specific achievement with metrics",
          "Another key accomplishment",
        ],
      },
      // Add more sub-projects...
    ],

    publications: [  // Optional
      {
        title: "Publication Title",
        authors: ["Your Name", "Co-author"],
        venue: "Conference/Journal Name",
        year: "2023",
        link: "https://...",
        type: "journal",
        image: "/assets/images/graphical-abstract.jpg",
      },
    ],
  },
  // ... other experiences
];
```

#### Step 3: Add Logo (Optional)

```bash
# Place logo in public/assets/logos/
# Reference as: logo: "/assets/logos/company.png"
```

#### Step 4: Add Publication Images (Optional)

```bash
# Place graphical abstracts in public/assets/images/
# Reference as: image: "/assets/images/publication.jpg"
```

#### Testing

```bash
npm run dev
# Visit http://localhost:5173/experience  (see in list)
# Visit http://localhost:5173/experience/company-slug  (see detail page)
```

---

### Blog "Coming Soon" Toggle

Control whether the blog page shows "Content coming soon" or actual posts.

#### Page-Level Toggle

Edit `src/data/blogs.ts`:

```typescript
// Set to true to show "Coming soon" message
// Set to false to show published posts
export const BLOG_COMING_SOON = true;
```

#### Per-Post Toggle

Control individual post visibility in two places:

1. **MDX frontmatter** (`content/posts/your-post.mdx`):
```yaml
published: false  # Hidden
published: true   # Visible
```

2. **Blog registry** (`src/data/blogs.ts`):
```typescript
{ slug: "your-post", published: false }  // Hidden
{ slug: "your-post", published: true }   // Visible
```

Both must be `true` for a post to appear.

---

### Interests Section Visibility

Show or hide sections (Paintings, Photography, Music) on the Interests page.

#### Edit Configuration

Open `src/data/interests.config.ts`:

```typescript
export const interestsConfig: InterestsConfig = {
  showPaintings: true,      // Show/hide Paintings section
  showPhotography: true,    // Show/hide Photography section
  showMusic: true,          // Show/hide Music section
};
```

Set any value to `false` to hide that section.

#### Testing

```bash
npm run dev
# Visit http://localhost:5173/interests
```

If all sections are hidden (`false`), a "Content coming soon" message appears automatically.

---

## Contact

For questions or issues, reach out to:
- **Email**: jbhamra24@gmail.com
- **GitHub**: [@jaspreetbhamra](https://github.com/jaspreetbhamra)
