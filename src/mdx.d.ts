declare module "*.mdx" {
	import type { ComponentType } from "react";

	// Frontmatter interface - extend this per content type
	interface MDXFrontmatter {
		title: string;
		date: string;
		description?: string;
		tags?: string[];
		published?: boolean;
		slug?: string;
		[key: string]: unknown;
	}

	const MDXComponent: ComponentType<{
		components?: Record<string, ComponentType>;
		frontmatter?: MDXFrontmatter;
	}>;

	export const frontmatter: MDXFrontmatter;
	export default MDXComponent;
}
