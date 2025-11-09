import type { Project, ProjectListItem, ProjectFrontmatter } from "@/types/project";

/**
 * Projects registry
 * Add new projects here with their metadata
 */
export const projects: Project[] = [
	// Example project with detail page
	{
		id: "example-project",
		title: "Example Project",
		description:
			"This is an example project demonstrating the hybrid model. Click to see the detailed MDX page.",
		tags: ["React", "TypeScript"],
		date: "2024-03-15",
		status: "completed",
		hasDetailPage: true,
	},
	// Example project with external link only
	{
		id: "another-project",
		title: "Another Project",
		description: "This project links to an external URL (e.g., GitHub repo) instead of a detail page.",
		tags: ["Python", "Machine Learning"],
		date: "2024-02-10",
		status: "active",
		link: "https://github.com/username/repo",
		hasDetailPage: false,
	},
	// Add your projects here
];

/**
 * Get all project summaries for listing
 */
export function getProjectSummaries(): ProjectListItem[] {
	return projects.map((project) => ({
		id: project.id,
		title: project.title,
		description: project.description,
		tags: project.tags,
		date: project.date,
		// If has detail page, link to it; otherwise link to external URL
		href: project.hasDetailPage ? `/projects/${project.id}` : project.link || "#",
	}));
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}

/**
 * Dynamically import a project MDX file
 */
export async function getProjectDetail(id: string) {
	const project = getProjectById(id);
	if (!project || !project.hasDetailPage) {
		return null;
	}

	try {
		const mdx = await import(`../../content/projects/${id}.mdx`);
		return {
			Component: mdx.default,
			frontmatter: mdx.frontmatter as ProjectFrontmatter,
			metadata: project,
		};
	} catch (error) {
		console.error(`Failed to load project: ${id}`, error);
		return null;
	}
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(status: Project["status"]): Project[] {
	return projects.filter((project) => project.status === status);
}

/**
 * Get projects by tag
 */
export function getProjectsByTag(tag: string): Project[] {
	return projects.filter((project) => project.tags.includes(tag));
}
