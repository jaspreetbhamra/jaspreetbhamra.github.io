import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";

const experiences = [
	{
		title: "Senior Software Engineer",
		company: "Tech Company Inc.",
		description:
			"Led development of scalable microservices architecture serving millions of users. Mentored junior developers and established best practices for code quality and testing. Implemented CI/CD pipelines reducing deployment time by 60%.",
		tags: ["React", "Node.js", "AWS", "TypeScript"],
		date: "2021 - Present",
		href: "/experience/tech-company",
	},
	{
		title: "Software Engineer",
		company: "Startup Labs",
		description:
			"Built full-stack web applications using modern JavaScript frameworks. Collaborated with product and design teams to deliver user-centric features. Optimized application performance resulting in 40% faster load times.",
		tags: ["Vue.js", "Python", "PostgreSQL"],
		date: "2019 - 2021",
		href: "/experience/startup-labs",
	},
	{
		title: "Junior Developer",
		company: "Digital Agency",
		description:
			"Developed responsive websites and web applications for diverse clients. Worked with cross-functional teams to deliver projects on time and within budget. Gained experience in modern front-end frameworks and best practices.",
		tags: ["JavaScript", "HTML/CSS", "React"],
		date: "2018 - 2019",
		href: "/experience/digital-agency",
	},
];

export default function Experience() {
	return (
		<PageContainer>
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
						Experience
					</h1>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
