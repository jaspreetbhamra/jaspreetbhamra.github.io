import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { PageContainer } from "@/app/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getExperienceById, type SubProject } from "@/data/experiences";
import { Publications } from "./Publications";

function CollapsibleProject({ project }: { project: SubProject }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
			{/* Header - Always Visible */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors duration-200"
				aria-expanded={isOpen}
			>
				<div className="flex-1">
					<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
						{project.title}
					</h3>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
						{project.description}
					</p>
				</div>
				<div className="ml-4 flex-shrink-0">
					{isOpen ? (
						<ChevronUp className="w-6 h-6 text-accent-600 dark:text-accent-400" />
					) : (
						<ChevronDown className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
					)}
				</div>
			</button>

			{/* Expandable Content */}
			{isOpen && (
				<div className="px-6 pb-6 border-t border-neutral-200 dark:border-neutral-800">
					{/* Full Description */}
					{/* <div className="pt-6 mb-6">
						<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
							{project.description}
						</p>
					</div> */}

					{/* Tech Stack */}
					<div className="pt-6 mb-6">
						<h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide">
							Tech Stack
						</h4>
						<div className="flex flex-wrap gap-2">
							{project.techStack.map((tech) => (
								<Badge key={tech} variant="accent" size="md">
									{tech}
								</Badge>
							))}
						</div>
					</div>

					{/* Highlights */}
					{project.highlights && project.highlights.length > 0 && (
						<div>
							<h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide">
								Key Highlights
							</h4>
							<ul className="space-y-2">
								{project.highlights.map((highlight, index) => (
									<li
										key={index}
										className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
									>
										<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 flex-shrink-0" />
										<span>{highlight}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default function ExperienceDetail() {
	const { id } = useParams<{ id: string }>();
	const experience = id ? getExperienceById(id) : undefined;

	// If experience not found, redirect to 404 or experience list
	if (!experience) {
		return <Navigate to="/experience" replace />;
	}

	return (
		<PageContainer>
			<div className="max-w-5xl mx-auto">
				{/* Back Button */}
				<div className="mb-8">
					<Link to="/experience">
						<Button variant="ghost" size="sm">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Experience
						</Button>
					</Link>
				</div>

				{/* Company Header */}
				<div className="mb-12">
					<div className="flex items-start gap-6 mb-6">
						{/* Company Logo */}
						<div className="flex-shrink-0 w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-700">
							{/* Replace this with actual logo img when available */}
							{experience.logo ? (
								<img
									src={experience.logo}
									alt={`${experience.company} logo`}
									className="w-full h-full object-contain"
									onError={(e) => {
										// Fallback to initials if logo fails to load
										const target = e.target as HTMLImageElement;
										target.style.display = "none";
										const parent = target.parentElement;
										if (parent) {
											parent.innerHTML = `<span class="text-2xl font-bold text-accent-600 dark:text-accent-400">${experience.company.charAt(0)}</span>`;
										}
									}}
								/>
							) : (
								<span className="text-2xl font-bold text-accent-600 dark:text-accent-400">
									{experience.company.charAt(0)}
								</span>
							)}
						</div>

						{/* Company Info */}
						<div className="flex-1">
							<h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
								{experience.company}
							</h1>
							<p className="text-xl text-accent-600 dark:text-accent-400 font-medium mb-3">
								{experience.position}
							</p>
							<div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
								<span className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
									{experience.duration}
								</span>
								<span className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
									{experience.location}
								</span>
							</div>
						</div>
					</div>

					{/* Overview */}
					<div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
						<h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							Overview
						</h2>
						<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
							{experience.overview}
						</p>
					</div>
				</div>

				{/* Sub-Projects Section */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-8">
						<div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
						<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
							Projects & Contributions
						</h2>
					</div>

					<div className="space-y-6">
						{experience.subProjects.map((project, index) => (
							<CollapsibleProject key={`${project.title}-${index}`} project={project} />
						))}
					</div>
				</div>

				{/* Publications Section (Optional) */}
				{experience.publications && experience.publications.length > 0 && (
					<Publications publications={experience.publications} />
				)}
			</div>
		</PageContainer>
	);
}
