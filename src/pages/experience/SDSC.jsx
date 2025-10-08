import ExperiencePageTemplate from "../../components/ExperiencePageTemplate";

const techStack = {
	Software: ["Python", "PyTorch Lightning", "OpenCV", "NumPy", "scikit-learn"],
	Data: ["Geospatial imagery", "Satellite pipelines", "AWS S3"],
	Visualization: ["Plotly", "Matplotlib"],
	DevOps: ["Snakemake", "Docker", "Git"],
};

const projects = [
	{
		title: "Wildfire Detection Pipeline",
		contributions: [
			"Developed multimodal CNN architectures for real-time wildfire smoke detection using satellite and sensor data.",
			"Implemented multi-GPU training and model checkpointing with PyTorch Lightning.",
			"Integrated temporal and spatial feature fusion modules for improved smoke localization.",
		],
	},
	{
		title: "Data Curation and Automation",
		contributions: [
			"Automated geospatial preprocessing pipelines using Snakemake.",
			"Built utilities for on-demand dataset generation and quality filtering.",
			"Implemented reproducibility standards for dataset splits and experiment tracking.",
		],
	},
	{
		title: "Research & Publication",
		contributions: [
			"Co-authored NeurIPS Workshop paper on real-time wildfire detection (2022).",
			"Collaborated with SDSC engineers to deploy models for edge inference testing.",
			"Developed visual dashboards for model interpretability and error analysis.",
		],
	},
];

const SDSC = () => {
	return (
		<ExperiencePageTemplate
			logo="/assets/logos/sdsc.png"
			company="San Diego Supercomputer Center"
			title="Researcher — Wildfire Detection"
			period="2022 – 2023"
			description="Designed and deployed deep learning systems for real-time wildfire smoke detection using camera networks."
			projects={projects}
			techStack={techStack}
		/>
	);
};

export default SDSC;
