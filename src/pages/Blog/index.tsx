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
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1 h-12 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
							Blog
						</h1>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed ml-7">
						Thoughts on software development, tutorials, and lessons learned from
						building products.
					</p>
				</div>

				{/* Blog Posts */}
				<div className="space-y-8">
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
