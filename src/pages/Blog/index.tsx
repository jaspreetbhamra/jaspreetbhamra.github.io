import { useState, useEffect } from "react";
import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { BLOG_COMING_SOON, getPublishedBlogPosts } from "@/data/blogs";
import type { BlogListItem } from "@/types/blog";

export default function Blog() {
	const [posts, setPosts] = useState<BlogListItem[]>([]);
	const [loading, setLoading] = useState(!BLOG_COMING_SOON);

	useEffect(() => {
		if (!BLOG_COMING_SOON) {
			getPublishedBlogPosts().then((blogPosts) => {
				setPosts(blogPosts);
				setLoading(false);
			});
		}
	}, []);

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
						Thoughts on software development, tutorials, and lessons learned from building
						products.
					</p>
				</div>

				{/* Coming Soon Message */}
				{BLOG_COMING_SOON && (
					<div className="flex items-center justify-center min-h-[400px]">
						<div className="text-center max-w-md">
							<div className="mb-6">
								<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-100 dark:bg-accent-900/30 mb-4">
									<svg
										className="w-10 h-10 text-accent-600 dark:text-accent-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
							</div>
							<h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
								Content Coming Soon
							</h2>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								I'm currently working on some exciting blog posts. Check back soon for
								articles on software development, data science, and machine learning.
							</p>
						</div>
					</div>
				)}

				{/* Blog Posts */}
				{!BLOG_COMING_SOON && (
					<>
						{loading && (
							<div className="flex items-center justify-center min-h-[400px]">
								<div className="text-center">
									<div className="inline-block w-8 h-8 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mb-4" />
									<p className="text-neutral-600 dark:text-neutral-400">
										Loading blog posts...
									</p>
								</div>
							</div>
						)}

						{!loading && posts.length === 0 && (
							<div className="flex items-center justify-center min-h-[400px]">
								<div className="text-center max-w-md">
									<h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
										No posts yet
									</h2>
									<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
										Blog posts are being prepared. Stay tuned!
									</p>
								</div>
							</div>
						)}

						{!loading && posts.length > 0 && (
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
						)}
					</>
				)}
			</div>
		</PageContainer>
	);
}
