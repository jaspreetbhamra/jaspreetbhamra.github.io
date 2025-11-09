import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProjectDetail } from "@/data/projects";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { ProjectFrontmatter } from "@/types/project";
import type { Project } from "@/types/project";

export default function ProjectDetail() {
	const { id } = useParams<{ id: string }>();
	const [project, setProject] = useState<{
		Component: React.ComponentType;
		frontmatter: ProjectFrontmatter;
		metadata: Project;
	} | null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!id) {
			setNotFound(true);
			setLoading(false);
			return;
		}

		// Load the MDX project
		getProjectDetail(id).then((loadedProject) => {
			if (loadedProject) {
				setProject(loadedProject);
			} else {
				setNotFound(true);
			}
			setLoading(false);
		});
	}, [id]);

	// Redirect to projects list if not found
	if (notFound) {
		return <Navigate to="/projects" replace />;
	}

	// Loading state
	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="inline-block w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mb-4" />
					<p className="text-neutral-600 dark:text-neutral-400">Loading project...</p>
				</div>
			</div>
		);
	}

	// Render the project
	if (!project) {
		return null;
	}

	const { Component, frontmatter, metadata } = project;
	const { title, date, description, tags } = frontmatter;

	return (
		<PageContainer>
			<div className="max-w-4xl mx-auto">
				{/* Back Button */}
				<div className="mb-8">
					<Link to="/projects">
						<Button variant="ghost" size="sm">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Projects
						</Button>
					</Link>
				</div>

				{/* Header */}
				<header className="mb-12">
					<div className="flex flex-wrap items-center gap-3 mb-4">
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
							{title}
						</h1>
						{metadata.status && (
							<Badge
								variant={
									metadata.status === "active"
										? "accent"
										: metadata.status === "completed"
											? "neutral"
											: "neutral"
								}
								size="md"
							>
								{metadata.status}
							</Badge>
						)}
					</div>

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

					{/* External link if available */}
					{metadata.link && (
						<div className="mt-6">
							<a
								href={metadata.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								<span>View on GitHub</span>
							</a>
						</div>
					)}
				</header>

				{/* Content */}
				<article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-800 prose-img:rounded-lg prose-img:shadow-lg">
					<Component />
				</article>
			</div>
		</PageContainer>
	);
}
