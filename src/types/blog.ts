export interface BlogFrontmatter {
	title: string;
	date: string;
	description?: string;
	tags?: string[];
	published?: boolean;
	slug: string;
	author?: string;
}

export interface BlogPost {
	slug: string;
	frontmatter: BlogFrontmatter;
	Component: React.ComponentType;
}

export interface BlogListItem {
	title: string;
	description: string;
	tags: string[];
	date: string;
	href: string;
}
