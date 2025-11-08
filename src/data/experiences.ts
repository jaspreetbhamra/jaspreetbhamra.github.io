export interface SubProject {
	title: string;
	description: string;
	techStack: string[];
	highlights?: string[];
}

export interface Experience {
	id: string;
	company: string;
	logo?: string;
	position: string;
	duration: string;
	location: string;
	overview: string;
	subProjects: SubProject[];
	// Preview fields for list view
	tags: string[];
	shortDescription: string;
}

export const experiences: Experience[] = [
	{
		id: "tech-company",
		company: "Tech Company Inc.",
		logo: "/logos/tech-company.svg",
		position: "Senior Software Engineer",
		duration: "2021 - Present",
		location: "San Francisco, CA",
		overview:
			"Led development of scalable microservices architecture serving millions of users. Mentored junior developers and established best practices for code quality and testing. Implemented CI/CD pipelines reducing deployment time by 60%.",
		tags: ["React", "Node.js", "AWS", "TypeScript"],
		shortDescription:
			"Led development of scalable microservices architecture serving millions of users. Mentored junior developers and established best practices for code quality and testing. Implemented CI/CD pipelines reducing deployment time by 60%.",
		subProjects: [
			{
				title: "Microservices Platform",
				description:
					"Architected and implemented a comprehensive microservices platform handling 10M+ requests daily. Led technical design decisions and mentored team of 5 developers.",
				techStack: ["Node.js", "TypeScript", "Kubernetes", "Docker", "PostgreSQL"],
				highlights: [
					"Reduced system latency by 45% through optimization",
					"Implemented circuit breakers and retry mechanisms",
					"Established monitoring and alerting infrastructure",
				],
			},
			{
				title: "CI/CD Pipeline Modernization",
				description:
					"Redesigned deployment pipeline from legacy Jenkins to modern GitLab CI, dramatically improving developer productivity.",
				techStack: ["GitLab CI", "Docker", "Terraform", "AWS"],
				highlights: [
					"Deployment time reduced from 2 hours to 20 minutes",
					"Automated testing coverage increased to 85%",
					"Zero-downtime deployments achieved",
				],
			},
		],
	},
	{
		id: "startup-labs",
		company: "Startup Labs",
		logo: "/logos/startup-labs.svg",
		position: "Software Engineer",
		duration: "2019 - 2021",
		location: "Austin, TX",
		overview:
			"Built full-stack web applications using modern JavaScript frameworks. Collaborated with product and design teams to deliver user-centric features. Optimized application performance resulting in 40% faster load times.",
		tags: ["Vue.js", "Python", "PostgreSQL"],
		shortDescription:
			"Built full-stack web applications using modern JavaScript frameworks. Collaborated with product and design teams to deliver user-centric features. Optimized application performance resulting in 40% faster load times.",
		subProjects: [
			{
				title: "Customer Portal Redesign",
				description:
					"Led frontend development of a complete customer portal redesign, improving user engagement and satisfaction scores.",
				techStack: ["Vue.js", "Vuex", "TailwindCSS", "REST API"],
				highlights: [
					"User engagement increased by 35%",
					"Page load time reduced by 40%",
					"Accessibility compliance achieved (WCAG 2.1 AA)",
				],
			},
			{
				title: "Analytics Dashboard",
				description:
					"Built real-time analytics dashboard for business intelligence, processing and visualizing millions of data points.",
				techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js"],
				highlights: [
					"Real-time data updates with sub-second latency",
					"Custom query builder for non-technical users",
					"Automated report generation and distribution",
				],
			},
		],
	},
	{
		id: "morgan-stanley",
		company: "Morgan Stanley",
		logo: "/logos/morgan-stanley.svg",
		position: "Data Engineer",
		duration: "2018 - 2021",
		location: "New York, NY",
		overview:
			"Built large-scale data pipelines and optimized distributed warehouses, turning fragmented enterprise data into fast, reliable, and cost-efficient systems.",
		tags: ["Python", "Data Warehousing", "SQL", "MPP", "Java"],
		shortDescription:
			"Built large-scale data pipelines and optimized distributed warehouses, turning fragmented enterprise data into fast, reliable, and cost-efficient systems.",
		subProjects: [
			{
				title: "Enterprise Data Warehouse",
				description:
					"Designed and implemented data warehouse infrastructure processing TB-scale datasets for financial reporting and analytics.",
				techStack: ["SQL", "Python", "Apache Spark", "Airflow", "Redshift"],
				highlights: [
					"Query performance improved by 60%",
					"Data ingestion pipeline handling 500GB+ daily",
					"Cost reduction of 30% through optimization",
				],
			},
			{
				title: "ETL Pipeline Automation",
				description:
					"Built automated ETL pipelines for data integration from multiple source systems, ensuring data quality and consistency.",
				techStack: ["Python", "Java", "Apache Kafka", "PostgreSQL"],
				highlights: [
					"Automated 50+ manual data processes",
					"Data quality checks with 99.9% accuracy",
					"Reduced processing time from hours to minutes",
				],
			},
		],
	},
];

// Helper function to get experience by ID
export function getExperienceById(id: string): Experience | undefined {
	return experiences.find((exp) => exp.id === id);
}

// Helper function to get all experience summaries for list view
export function getExperienceSummaries() {
	return experiences.map((exp) => ({
		id: exp.id,
		title: exp.position,
		company: exp.company,
		description: exp.shortDescription,
		tags: exp.tags,
		date: exp.duration,
		href: `/experience/${exp.id}`,
	}));
}
