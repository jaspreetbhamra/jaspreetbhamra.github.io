import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";

const posts = [
	{
		title: "Building Scalable React Applications",
		description:
			"Learn best practices for structuring large-scale React applications. Covers component architecture, state management patterns, code splitting, and performance optimization techniques for production apps.",
		tags: ["React", "Architecture", "Performance"],
		date: "March 15, 2024",
		href: "/blog/scalable-react-apps",
	},
	{
		title: "Getting Started with TypeScript",
		description:
			"A comprehensive guide to TypeScript fundamentals. Explore type systems, interfaces, generics, and how TypeScript improves developer experience and code quality in modern JavaScript projects.",
		tags: ["TypeScript", "JavaScript", "Tutorial"],
		date: "February 28, 2024",
		href: "/blog/typescript-guide",
	},
	{
		title: "Modern CSS Techniques",
		description:
			"Explore the latest CSS features including Grid, Flexbox, custom properties, and container queries. Learn how to create responsive layouts without relying on frameworks.",
		tags: ["CSS", "Web Design", "Frontend"],
		date: "February 10, 2024",
		href: "/blog/modern-css",
	},
	{
		title: "Optimizing Web Performance",
		description:
			"Deep dive into web performance optimization strategies. Cover topics including lazy loading, code splitting, image optimization, caching strategies, and measuring Core Web Vitals.",
		tags: ["Performance", "Optimization", "Web"],
		date: "January 22, 2024",
		href: "/blog/web-performance",
	},
	{
		title: "Introduction to GraphQL",
		description:
			"Understanding GraphQL and how it differs from REST APIs. Learn about queries, mutations, schema design, and how to integrate GraphQL into your applications with practical examples.",
		tags: ["GraphQL", "API", "Backend"],
		date: "January 5, 2024",
		href: "/blog/intro-to-graphql",
	},
	{
		title: "Git Workflow Best Practices",
		description:
			"Master Git workflows for team collaboration. Covers branching strategies, commit conventions, pull request reviews, and how to maintain a clean git history in professional projects.",
		tags: ["Git", "DevOps", "Best Practices"],
		date: "December 18, 2023",
		href: "/blog/git-workflows",
	},
];

export default function Blog() {
	return (
		<PageContainer>
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-12">
					<h1 className="heading-1 mb-4">Blog</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400">
						Thoughts on software development, tutorials, and lessons learned from
						building products.
					</p>
				</div>

				{/* Blog Posts */}
				<div className="space-y-6">
					{posts.map((post) => (
						<Card
							key={post.href}
							title={post.title}
							description={post.description}
							tags={post.tags}
							date={post.date}
							href={post.href}
							cta="Read article"
						/>
					))}
				</div>
			</div>
		</PageContainer>
	);
}
