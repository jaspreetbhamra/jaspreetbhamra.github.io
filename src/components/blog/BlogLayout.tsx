import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/app/layout/PageContainer";

export interface BlogLayoutProps {
	frontmatter: {
		title: string;
		date: string;
		description?: string;
		tags?: string[];
		author?: string;
	};
	children: ReactNode;
}

export function BlogLayout({ frontmatter, children }: BlogLayoutProps) {
	const { title, date, description, tags, author = "Jaspreet Bhamra" } = frontmatter;

	return (
		<PageContainer>
			<div className="max-w-4xl mx-auto">
				{/* Back Button */}
				<div className="mb-8">
					<Link to="/blog">
						<Button variant="ghost" size="sm">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Blog
						</Button>
					</Link>
				</div>

				{/* Header */}
				<header className="mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
						{title}
					</h1>

					{description && (
						<p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
							{description}
						</p>
					)}

					<div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
						<time dateTime={date} className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
							{new Date(date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>

						{author && (
							<span className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
								{author}
							</span>
						)}
					</div>

					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-6">
							{tags.map((tag) => (
								<Badge key={tag} variant="neutral" size="sm">
									{tag}
								</Badge>
							))}
						</div>
					)}
				</header>

				{/* Content */}
				<article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-800 prose-img:rounded-lg prose-img:shadow-lg">
					{children}
				</article>
			</div>
		</PageContainer>
	);
}
