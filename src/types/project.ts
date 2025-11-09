export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	date: string;
	status?: "active" | "completed" | "archived";
	thumbnail?: string;
	link?: string; // External link (GitHub, demo, etc.)
	hasDetailPage: boolean; // Whether there's an MDX detail page
}

export interface ProjectListItem {
	id: string;
	title: string;
	description: string;
	tags: string[];
	date: string;
	href: string;
}

export interface ProjectFrontmatter {
	title: string;
	date: string;
	description?: string;
	tags?: string[];
}
