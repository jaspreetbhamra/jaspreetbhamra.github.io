export interface SubProject {
	title: string;
	description: string;
	techStack: string[];
	highlights?: string[];
}

export interface Publication {
	title: string;
	authors: string[];
	venue: string;
	year: string;
	link: string;
	type?: "conference" | "journal" | "preprint" | "workshop";
	image?: string; // Optional graphical abstract or preview image
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
	publications?: Publication[];
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
		publications: [
			{
				title: "Your Paper Title Here",
				authors: ["Author One", "Author Two", "You"],
				venue: "Conference Name or Journal",
				year: "2023",
				link: "https://link-to-paper.com",
				type: "conference" // optional: conference, journal, preprint, workshop
			}
		]
	},
	{
		id: "sdsc",
		company: "San Diego Supercomputer Center",
		logo: "/assets/logos/sdsc.png",
		position: "Machine Learning Engineer",
		duration: "2022 - 2023",
		location: "San Diego, CA, USA",
		overview:
			"Multimodal deep learning system to detect wildfire smoke, combining vision and statistical data for faster, more reliable early-fire detection",
		tags: ["Deep Learning", "PyTorch", "Computer Vision"],
		shortDescription:
			"Multimodal deep learning system to detect wildfire smoke, combining vision and statistical data for faster, more reliable early-fire detection",
		subProjects: [
			{
				title: "Multimodal Deep Learning Model (SmokeyNet)",
				description:
					"Deep Learning Model to detect wildfire smoke using statistical as well as unstructured data (images) via PyTorch Lightning",
				techStack: ["Python", "PyTorch Lightning"],
				highlights: [
					"Designed a multimodal architecture combining image inputs with weather data leading to a 22% reduction in average smoke detection time (RNN, LSTM, ViT, VViT)",
					"Built ensemble architectures to also use multimodal time series data",
				],
			},
			{
				title: "MLOps and Data Processing",
				description:
					"Automated multimodal data ingestion and established a full MLOps workflow",
				techStack: ["Python", "PyTorch", "CUDA", "W&B", "LabelBox", "Docker", "Kubernetes"],
				highlights: [
					"Built an automated pipeline, integrating data from multiple sources based on fire alerts to source new sequences for training",
					"Integrated model pipeline with WandB for MLOps (model tracking, logging, monitoring)",
					"Implemented Distributed CUDA Training in PyTorch Lightning using DDP to train using multiple GPUs",
				],
			},
		],
		publications: [
			{
				title: "Multimodal Wildland Fire Smoke Detection",
				authors: ["Jaspreet Kaur Bhamra", "Shreyas Anantha Ramaprasad", "Siddhant Baldota", "Shane Luna", "Eugene Zen", "Ravi Ramachandra", "Harrison Kim", "Chris Schmidt", "Chris Arends", "Jessica Block", "Ismael Perez", "Daniel Crawl", "Ilkay Altintas", "Garrison W Cottrell", "Mai H Nguyen"],
				venue: "MDPI Remote Sensing",
				year: "2023",
				link: "https://www.mdpi.com/2072-4292/15/11/2790",
				type: "journal" // optional: conference, journal, preprint, workshop
			},
			{
				title: "Multimodal Wildland Fire Smoke Detection",
				authors: ["Siddhant Baldota", "Shreyas Anantha Ramaprasad", "Jaspreet Kaur Bhamra", "Shane Luna", "Ravi Ramachandra", "Eugene Zen", "Harrison Kim", "Daniel Crawl", "Ismael Perez", "Ilkay Altintas", "Garrison W Cottrell", "Mai H Nguyen"],
				venue: "NeurIPS 2022",
				year: "2022",
				link: "https://arxiv.org/pdf/2212.14143",
				type: "workshop" // optional: conference, journal, preprint, workshop
			}
		]
	},
	{
		id: "morgan-stanley",
		company: "Morgan Stanley",
		logo: "/assets/logos/morgan.png",
		position: "Data Engineer",
		duration: "2018 - 2021",
		location: "Mumbai, IN",
		overview:
			"Built large-scale data pipelines and optimized distributed warehouses, turning fragmented enterprise data into fast, reliable, and cost-efficient systems",
		tags: ["Python", "Data Warehousing", "SQL", "MPP", "Java"],
		shortDescription:
			"Built large-scale data pipelines and optimized distributed warehouses, turning fragmented enterprise data into fast, reliable, and cost-efficient systems",
		subProjects: [
			{
				title: "Micro-Batching Ingestion Framework for Data Warehouses",
				description:
					"Developed a Python-based scalable ETL framework for multidimensional data in Greenplum (now VMware Tanzu), designed for parallel ingestion and compatibility with modern distributed data warehouses (MPP)",
				techStack: ["PostgreSQL", "Python", "AutoSys", "Greenplum (MPP)", "IBM DB2", "Sybase"],
				highlights: [
					"Automated micro-batch setup reducing per-job setup time by ~70% and enabling near real-time ingestion",
					"Data ingestion pipeline handling 500GB+ daily",
					"Drove $100K+ annual cost savings by migrating 60TB+ data from OLTP & unstructured sources to the distributed warehouse",
				],
			},
			{
				title: "Data Warehousing and Distributed Query Tuning",
				description:
					"Optimized distributed SQL pipelines and prototyped modern data warehouse solutions, improving query efficiency and enabling near real-time reporting across global systems",
				techStack: ["Python", "Java", "PostgreSQL", "Greenplum (MPP)", "Snowflake", "Azure Synapse", "Tableau", "DataIKU", "Kubernetes", "Jenkins", "Spark"],
				highlights: [
					"Wrote and optimized SQL for MPP architectures (Greenplum, now VMware Tanzu), improving complex query performance by ~30% (PostgreSQL)",
					"Partnered with internal clients to tune queries and reduce compute costs in distributed environments",
					"Migrated ~5TB of OLTP data to the data warehouse to enable performant reporting and downstream pipelines",
					"Prototyped data warehouse PoC using Azure Synapse, Spark; and separately, Snowflake; to evaluate distributed query performance, scaling, and cost trade-offs", 
					"Created and scheduled automated reporting workflows to deliver near real-time analytical summaries for global stakeholders (Tableau, DataIKU)",
				],
			},
			{
				title: "DB Monitor: Using Predictive Modeling to Predict Outages",
				description:
					"Built statistical anomaly detection models on system logs for early outage prediction",
				techStack: ["PostgreSQL", "Python", "Machine Learning", "Greenplum (MPP)"],
				highlights: [
					"Implemented statistical anomaly detection models using historic system logs obtained from the Greenplum data warehouse",
					"Reduced average database outages by ~67% through proactive monitoring and predictive maintenance insights",
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
