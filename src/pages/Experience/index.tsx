import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { getExperienceSummaries } from "@/data/experiences";

const experiences = getExperienceSummaries();

export default function Experience() {
	return (
		<PageContainer>
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-1 h-12 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
							Experience
						</h1>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed ml-7">
						A timeline of my professional journey and key accomplishments.
					</p>
				</div>

				{/* Experience Cards */}
				<div className="space-y-8">
					{experiences.map((exp) => (
						<Card
							key={exp.href}
							title={exp.title}
							description={exp.description}
							tags={exp.tags}
							date={exp.date}
							href={exp.href}
							cta="View details"
						>
							<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
								{exp.company}
							</p>
						</Card>
					))}
				</div>
			</div>
		</PageContainer>
	);
}
