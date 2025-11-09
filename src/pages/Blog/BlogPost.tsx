import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getBlogPost, isBlogPostPublished } from "@/data/blogs";
import { BlogLayout } from "@/components/blog";
import type { BlogFrontmatter } from "@/types/blog";

export default function BlogPost() {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<{
		Component: React.ComponentType;
		frontmatter: BlogFrontmatter;
	} | null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!slug) {
			setNotFound(true);
			setLoading(false);
			return;
		}

		// Check if post is published
		if (!isBlogPostPublished(slug)) {
			setNotFound(true);
			setLoading(false);
			return;
		}

		// Load the MDX post
		getBlogPost(slug).then((loadedPost) => {
			if (loadedPost) {
				setPost(loadedPost);
			} else {
				setNotFound(true);
			}
			setLoading(false);
		});
	}, [slug]);

	// Redirect to blog list if post not found
	if (notFound) {
		return <Navigate to="/blog" replace />;
	}

	// Loading state
	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="inline-block w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mb-4" />
					<p className="text-neutral-600 dark:text-neutral-400">Loading post...</p>
				</div>
			</div>
		);
	}

	// Render the post
	if (!post) {
		return null;
	}

	const { Component, frontmatter } = post;

	return (
		<BlogLayout frontmatter={frontmatter}>
			<Component />
		</BlogLayout>
	);
}
