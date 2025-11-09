import type { BlogFrontmatter, BlogListItem } from "@/types/blog";

/**
 * Global toggle for blog page
 * Set to true to show "Content coming soon" message
 * Set to false to show published blog posts
 */
export const BLOG_COMING_SOON = true;

/**
 * Blog post registry
 * Add new blog posts here with their metadata
 * The slug should match the MDX filename in /content/posts/
 */
interface BlogPostMeta {
	slug: string;
	published: boolean;
	// Frontmatter will be loaded dynamically from MDX
}

export const blogPosts: BlogPostMeta[] = [
	// Example entries - add your actual blog posts here
	{ slug: "example-post", published: false },
	// { slug: "my-first-post", published: true },
	// { slug: "deep-dive-into-react", published: true },
];

/**
 * Dynamically import a blog post MDX file
 */
export async function getBlogPost(slug: string) {
	try {
		const post = await import(`../../content/posts/${slug}.mdx`);
		return {
			Component: post.default,
			frontmatter: post.frontmatter as BlogFrontmatter,
		};
	} catch (error) {
		console.error(`Failed to load blog post: ${slug}`, error);
		return null;
	}
}

/**
 * Get all published blog posts for listing
 */
export async function getPublishedBlogPosts(): Promise<BlogListItem[]> {
	if (BLOG_COMING_SOON) {
		return [];
	}

	const publishedPosts = blogPosts.filter((post) => post.published);
	const posts: BlogListItem[] = [];

	for (const { slug } of publishedPosts) {
		const post = await getBlogPost(slug);
		if (post) {
			posts.push({
				title: post.frontmatter.title,
				description: post.frontmatter.description || "",
				tags: post.frontmatter.tags || [],
				date: post.frontmatter.date,
				href: `/blog/${slug}`,
			});
		}
	}

	// Sort by date (newest first)
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get blog post summaries synchronously (for initial render)
 * Returns metadata without loading MDX content
 */
export function getBlogSummaries(): BlogListItem[] {
	if (BLOG_COMING_SOON) {
		return [];
	}

	// This is a simplified version that doesn't load MDX
	// Used for server-side rendering or initial client render
	// Real metadata will be loaded when the blog list component mounts
	return blogPosts
		.filter((post) => post.published)
		.map((post) => ({
			title: "Loading...", // Will be replaced when MDX loads
			description: "",
			tags: [],
			date: new Date().toISOString(),
			href: `/blog/${post.slug}`,
		}));
}

/**
 * Check if a blog post exists and is published
 */
export function isBlogPostPublished(slug: string): boolean {
	const post = blogPosts.find((p) => p.slug === slug);
	return post ? post.published : false;
}
