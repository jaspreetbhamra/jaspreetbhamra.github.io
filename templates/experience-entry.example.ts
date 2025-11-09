/**
 * Experience Entry Template
 *
 * Copy this template when adding a new experience to src/data/experiences.ts
 *
 * Usage:
 * 1. Copy the object structure below
 * 2. Paste it into the experiences array in src/data/experiences.ts
 * 3. Fill in all the fields with your actual data
 * 4. Ensure the `id` is unique and URL-friendly (lowercase, hyphens)
 */

export const experienceTemplate = {
	// Unique identifier (used in URL: /experience/{id})
	id: "company-name-slug",

	// Company/Organization name
	company: "Company Name",

	// Optional: Path to company logo in /public/assets/logos/
	logo: "/assets/logos/company.png",

	// Your position/role
	position: "Job Title",

	// Duration of employment
	duration: "YYYY - YYYY",

	// Work location
	location: "City, State/Country",

	// High-level overview of your role (1-2 sentences)
	overview:
		"Brief overview of your role and key responsibilities. This appears at the top of the detail page.",

	// Tags for the list view (technologies, skills, domains)
	tags: ["Python", "Machine Learning", "Cloud", "Leadership"],

	// Short description for list view (same as overview or shorter)
	shortDescription: "Brief description that appears in the experience list card.",

	// Sub-projects: Major projects or areas of work during this experience
	subProjects: [
		{
			// Project title
			title: "Project Name 1",

			// Detailed description of the project
			description:
				"Comprehensive description of what the project was about, what problem it solved, and your role in it.",

			// Technologies used in this project
			techStack: ["Python", "TensorFlow", "Docker", "Kubernetes"],

			// Optional: Key achievements or highlights
			highlights: [
				"Specific achievement with metrics if possible (e.g., '40% performance improvement')",
				"Another key accomplishment or learning",
				"Technical innovation or architectural decision",
			],
		},
		{
			title: "Project Name 2",
			description: "Description of second major project or area of responsibility.",
			techStack: ["React", "TypeScript", "PostgreSQL"],
			highlights: [
				"Key achievement or outcome",
				"Technical challenge overcome",
				"Impact on team or organization",
			],
		},
		// Add more sub-projects as needed
	],

	// Optional: Publications from this experience
	publications: [
		{
			// Publication title
			title: "Title of Your Publication",

			// Authors (list yourself and co-authors)
			authors: ["Your Name", "Co-author 1", "Co-author 2"],

			// Venue (journal, conference, etc.)
			venue: "Conference/Journal Name",

			// Publication year
			year: "2024",

			// Link to publication (DOI, arXiv, etc.)
			link: "https://doi.org/...",

			// Type of publication
			type: "journal", // Options: "conference", "journal", "preprint", "workshop"

			// Optional: Path to graphical abstract image
			image: "/assets/images/publication-abstract.jpg",
		},
		// Add more publications as needed
	],
};

/**
 * Minimal Example (required fields only):
 */
export const minimalExample = {
	id: "startup-xyz",
	company: "Startup XYZ",
	position: "Software Engineer",
	duration: "2022 - 2023",
	location: "Remote",
	overview: "Built scalable web applications using modern JavaScript frameworks.",
	tags: ["JavaScript", "React", "Node.js"],
	shortDescription: "Full-stack development for a fast-growing startup.",
	subProjects: [
		{
			title: "E-commerce Platform",
			description: "Developed the core e-commerce features from scratch.",
			techStack: ["React", "Node.js", "MongoDB"],
		},
	],
};

/**
 * Full Example (with all optional fields):
 */
export const fullExample = {
	id: "research-lab",
	company: "AI Research Lab",
	logo: "/assets/logos/research-lab.png",
	position: "Research Scientist",
	duration: "2020 - 2022",
	location: "Boston, MA",
	overview:
		"Led research in deep learning for natural language processing, publishing multiple papers and deploying models to production.",
	tags: ["Machine Learning", "NLP", "Python", "Research"],
	shortDescription:
		"Deep learning research with focus on NLP and real-world applications.",
	subProjects: [
		{
			title: "Transformer Architecture Optimization",
			description:
				"Developed novel techniques to reduce transformer model size by 50% while maintaining 95% accuracy.",
			techStack: ["Python", "PyTorch", "CUDA", "Hugging Face"],
			highlights: [
				"Published paper at NeurIPS 2021",
				"Reduced inference latency by 60%",
				"Open-sourced implementation with 1000+ GitHub stars",
			],
		},
		{
			title: "Production ML Pipeline",
			description:
				"Built end-to-end ML pipeline for deploying NLP models to production at scale.",
			techStack: ["Python", "Kubernetes", "TensorFlow Serving", "MLflow"],
			highlights: [
				"Serving 10M+ predictions daily",
				"Achieved 99.9% uptime SLA",
				"Automated retraining and deployment process",
			],
		},
	],
	publications: [
		{
			title: "Efficient Transformers for Low-Resource Languages",
			authors: ["Your Name", "Jane Doe", "John Smith"],
			venue: "NeurIPS",
			year: "2021",
			link: "https://arxiv.org/abs/...",
			type: "conference",
			image: "/assets/images/neurips-2021.png",
		},
		{
			title: "Neural Architecture Search for Sequence Models",
			authors: ["Your Name", "Collaborator A"],
			venue: "Journal of Machine Learning Research",
			year: "2022",
			link: "https://jmlr.org/papers/...",
			type: "journal",
		},
	],
};

/**
 * Step-by-Step Guide:
 *
 * 1. Open src/data/experiences.ts
 * 2. Copy one of the examples above (minimal or full)
 * 3. Paste it into the experiences array
 * 4. Update all fields with your actual information
 * 5. Ensure the ID is unique and URL-safe (lowercase, hyphens only)
 * 6. Save the file
 * 7. Test by navigating to /experience/{your-id}
 *
 * Tips:
 * - Use concrete metrics and numbers in highlights when possible
 * - Keep descriptions clear and focused on impact
 * - List technologies in order of prominence/importance
 * - For publications, include graphical abstracts if available
 * - Make the overview compelling but concise (1-2 sentences)
 */
