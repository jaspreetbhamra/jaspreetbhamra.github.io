import { PageContainer } from "@/app/layout/PageContainer";
import { Card } from "@/components/ui/Card";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"A full-featured online shopping platform with product catalog, shopping cart, checkout flow, and order management. Built with modern React patterns and optimized for performance. Includes admin dashboard for inventory management.",
		tags: ["React", "TypeScript", "Node.js", "MongoDB"],
		date: "2023",
		href: "/projects/ecommerce-platform",
	},
	{
		title: "Real-Time Chat Application",
		description:
			"Scalable chat application supporting private messages, group conversations, and file sharing. Implemented WebSocket connections for instant messaging and built responsive UI with modern design principles.",
		tags: ["Vue.js", "Socket.io", "Express", "Redis"],
		date: "2022",
		href: "/projects/chat-app",
	},
	{
		title: "Task Management System",
		description:
			"Collaborative project management tool with kanban boards, task assignments, and real-time updates. Features drag-and-drop interface, deadline tracking, and team collaboration tools.",
		tags: ["React", "Firebase", "Tailwind CSS"],
		date: "2022",
		href: "/projects/task-manager",
	},
	{
		title: "Weather Dashboard",
		description:
			"Interactive weather application displaying current conditions and forecasts. Integrates multiple weather APIs for accurate data, features location search, and includes data visualizations for temperature trends.",
		tags: ["JavaScript", "API Integration", "Chart.js"],
		date: "2021",
		href: "/projects/weather-dashboard",
	},
	{
		title: "Portfolio Generator",
		description:
			"Tool for developers to create customizable portfolio websites from templates. Built with React and includes theme customization, markdown support for blog posts, and one-click deployment.",
		tags: ["React", "Next.js", "MDX", "Vercel"],
		date: "2021",
		href: "/projects/portfolio-generator",
	},
	{
		title: "Fitness Tracker",
		description:
			"Mobile-friendly web app for tracking workouts, nutrition, and fitness goals. Features progress charts, workout plans, and integration with popular fitness APIs. Built with progressive web app capabilities.",
		tags: ["PWA", "React", "GraphQL", "PostgreSQL"],
		date: "2020",
		href: "/projects/fitness-tracker",
	},
];

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
						A collection of projects I've built, showcasing different technologies
						and problem-solving approaches.
					</p>
				</div>

				{/* Projects Grid */}
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
			</div>
		</PageContainer>
	);
}
