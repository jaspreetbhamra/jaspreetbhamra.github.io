import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { getProjectSummaries } from "@/data/projects";

const projects = getProjectSummaries();

export default function Projects() {
	return (
		<PageContainer>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1 h-12 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
							Projects
						</h1>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed ml-7">
						A collection of projects I've built, showcasing different technologies and
						problem-solving approaches.
					</p>
				</div>

				{/* Projects Grid */}
				{projects.length === 0 ? (
					<div className="flex items-center justify-center min-h-[400px]">
						<div className="text-center max-w-md">
							<h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
								No projects yet
							</h2>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Projects are being added. Check back soon!
							</p>
						</div>
					</div>
				) : (
					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<Card
								key={project.href}
								title={project.title}
								description={project.description}
								tags={project.tags}
								date={project.date}
								href={project.href}
								cta="View project"
							/>
						))}
					</div>
				)}
			</div>
		</PageContainer>
	);
}
