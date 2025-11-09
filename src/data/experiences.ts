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
		id: "creyon-bio",
		company: "Creyon Bio",
		logo: "/assets/logos/creyon.png",
		position: "Data Scientist - Biological ML",
		duration: "2023 - 2025",
		location: "San Diego, CA, USA",
		overview:
			"Bridged biology and machine learning by designing scalable statistical models, interpretable ML frameworks, and deep learning pipelines that accelerated discovery and improved explainability in drug discovery",
		tags: ["Python", "Machine Learning", "GCP", "Optimization"],
		shortDescription:
			"Bridged biology and machine learning by designing scalable statistical models, interpretable ML frameworks, and deep learning pipelines that accelerated discovery and improved explainability in drug discovery",
		subProjects: [
			{
				title: "Data Narratives from Data Analysis to Dashboard",
				description:
					"Analyzed multimodal toxicology data to establish baseline distributions and normalization standards, publishing interactive dashboards that informed drug development and model reliability",
				techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "BigQuery", "Seaborn", "Plotly", "Streamlit"],
				highlights: [
					"Led statistical analysis of 10+ toxicology data modalities, quantifying variability and establishing baseline distributions to inform drug development decisions",
					"Published a company-wide reference dashboard of “normal” ranges for all data modalities (Plotly and Streamlit)",
					"Identified behavioral deviations in data to uncover confounding variables affecting data distributions and established normalization procedures for consistent downstream analysis and model development",
				],
			},
			{
				title: "Statistical Modeling",
				description:
					"Implemented scalable Bayesian models for gene expression analysis with Monte Carlo sampling and GCP parallelization, cutting workflow time and query costs by more than half",
				techStack: ["Python", "emcee", "Snakemake", "Parquet", "Kubernetes", "GCP"],
				highlights: [
					"Implementation based on 'A Dose-Response Model for Accurate Detection and Quantification of Transcriptome-Wide Gene Knockdown for Oligonucleotide-Based Medicines' by Pekker et al.",
					"Built Bayesian statistical model for differential gene expression analysis using Monte Carlo sampling",
					"Achieved 83% workflow optimization (4hrs to 40min) using Snakemake and Kubernetes/GCP parallelization",
				],
			},
			{
				title: "Interpretable/Explainable Models and Machine Learning",
				description:
					"Engineered an interpretable machine learning framework using Generalized Additive Models (GAMs) with Monte Carlo-based uncertainty estimation, improving prediction accuracy and accelerating experimentation through a modular Python library",
				techStack: ["Python", "PyMC", "Multiprocessing", "Parquet", "Kubernetes", "GCP"],
				highlights: [
					"Engineered a custom suite of Generalized Additive Models (GAMs) with spline-based predictors, enabling interpretable prediction functions typically unavailable in standard ensemble methods",
					"Integrated Monte Carlo sampling to provide error bars and quantify uncertainty, extending the model's interpretability",
					"Packaged the framework as a scikit-learn compatible Python library, streamlining integration into existing pipelines",
					"Implemented more streamlined processes for data cleaning, preprocessing and feature engineering",
					"Achieved 15% improvement in prediction accuracy"
				],
			},
			{
				title: "Deep Learning for RNA Biology",
				description:
					"Work with fine-tuning transformer models for latent space exploration, and study of attention for biological models",
				techStack: ["Python", "BERT", "Transformers", "Attention", "PyTorch"],
				highlights: [
					"Fine-tuned SpliceBERT transformer for biological sequence featurization, enabling latent space exploration",
					"Led a PoC to establish the utility of Attention-based models for enhancing model explainability",
				],
			},
			{
				title: "MLOps, CI/CD & Model Infrastructure",
				description:
					"Designed a production-grade ML model library with built-in model and data provenance and seamless BigQuery integration, enabling faster, traceable experimentation from raw data to deployed models",
				techStack: ["Python", "Pydantic", "scikit-learn", "BigQuery"],
				highlights: [
					" Re-engineered legacy ML workflows into a structured, modular framework, boosting maintainability and accelerating training setup by >90%",
					"Ensured reproducibility of experiments by enforcing structured metadata and version control across datasets, configurations, and models",
					"Optimized BigQuery tables through clustering/partition indexes, reducing per-query costs by ~70%",
				],
			},
		],
		publications: [
			{
				title: "Toxicity of Antisense Oligonucleotides is Determined by the Synergistic Interplay of Chemical Modifications and Nucleotide Sequences, Not by Either Factor Alone",
				authors: ["Jaspreet Bhamra", "Mahati Krishna", "George Samaan", "Sankha Pattanayak", "Swagatam Mukhopadhyay"],
				venue: "ChemBioChem",
				year: "2025",
				link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/cbic.202500584",
				type: "journal", // optional: conference, journal, preprint, workshop
				// TODO: Increase resolution of this image...
				image: "/assets/images/toxicity_oligos.jpg"
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
				type: "journal", // optional: conference, journal, preprint, workshop
				image: "/assets/images/multimodal_smokeynet.png"
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
