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

## Contact

For questions or issues, reach out to:
- **Email**: jbhamra24@gmail.com
- **GitHub**: [@jaspreetbhamra](https://github.com/jaspreetbhamra)
