# Auto-Calculate Resume Stats Plan

  ## Goal
  Auto-calculate Resume page stats (Years Experience, Projects,
  Technologies) from centralized data.

  ## User Decisions
  - **Years Experience**: Total calendar years (earliest start → latest
  end)
  - **Projects Count**: Only Projects page entries
  - **Technologies**: Category-based grouping from master registry
  - **Architecture**: Centralized data layer in `src/data/`

  ## Implementation Steps

  ### 1. Create `src/data/` directory structure

  **`src/data/types.ts`**: Shared interfaces
  - `Experience`, `Project`, `BlogPost`, `SubProject`, `Technology`
  - Experience includes nested `detail` with `subProjects[]`

  **`src/data/technologies.ts`**: Master tech registry
  ```ts
  { name: string, category:
  "Languages"|"Frameworks"|"Tools"|"Databases"|"Cloud/DevOps" }[]

  src/data/experiences.ts: Experience entries
  - Move from Experience/index.tsx (currently 3 entries)
  - Structure: { id, title, company, description, tags[], date, href, 
  detail: { logo, position, location, overview, subProjects[] } }
  - Sub-projects have own technologies[] array

  src/data/projects.ts: Project entries (move from Projects/index.tsx, 6
  entries)

  src/data/posts.ts: Blog posts (move from Blog/index.tsx)

  2. Create src/utils/stats.ts

  calculateYearsExperience(experiences)
  - Parse date strings, handle "Present"
  - Return earliest start year → latest end year

  countProjects(projects)
  - Return projects.length

  getTechnologyStats(technologies)
  - Return { total: number, byCategory: Record<string, number> }

  3. Refactor pages to import from `@/data/*`

  - Experience/index.tsx → import experiences
  - Projects/index.tsx → import projects
  - Blog/index.tsx → import posts
  - Experience/ExperienceDetail.tsx → use experiences.find(e => e.id === id)

  4. Update Resume/index.tsx

  Replace hardcoded stats with:
  - calculateYearsExperience(experiences)
  - countProjects(projects)
  - getTechnologyStats(technologies).total

  Key Points

  - Top-level tags[] = summary for list view
  - Sub-project technologies[] = detail page display
  - Master registry = curated skills for Resume stats
  - All three serve different purposes

  ---