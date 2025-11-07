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
				<div className="mb-12">
					<h1 className="heading-1 mb-4">Projects</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400">
						A collection of projects I've built, showcasing different technologies
						and problem-solving approaches.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 gap-6">
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
