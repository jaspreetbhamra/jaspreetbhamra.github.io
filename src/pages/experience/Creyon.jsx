import ExperiencePageTemplate from "../../components/ExperiencePageTemplate";

const techStack = {
	Software: [
		"Python",
		"Pandas",
		"Plotly",
		"Streamlit",
		"scikit-learn",
		"PyTorch",
	],
	"Data Engineering": ["GCP", "BigQuery", "dbt", "Airflow"],
	Visualization: ["Tableau", "Streamlit Dashboards"],
	DevOps: ["Docker", "Kubernetes", "GitHub Actions"],
};

const projects = [
	{
		title: "Machine Learning Model Development",
		contributions: [
			"Designed and implemented ML models to predict RNA therapeutic properties, integrating statistical inference with protein sequence modeling.",
			"Built an internal model registry and evaluation pipeline using PyTorch Lightning and Weights & Biases.",
			"Deployed reproducible pipelines for large-scale model training using Kubernetes + GCP Compute.",
		],
	},
	{
		title: "Data Infrastructure and Automation",
		contributions: [
			"Developed ETL workflows for high-throughput screening data using Airflow and BigQuery.",
			"Integrated dbt transformations and quality checks into the CI/CD pipeline.",
			"Built automated dashboards in Streamlit for model performance tracking and exploratory data analysis.",
		],
	},
	{
		title: "Scientific Insights and Reporting",
		contributions: [
			"Collaborated with wet-lab scientists to interpret model outputs and experimental results.",
			"Authored internal data narratives and visualizations to support experimental design decisions.",
			"Contributed to a peer-reviewed publication demonstrating end-to-end ML integration in RNA therapeutics.",
		],
	},
];

const Creyon = () => {
	return (
		<ExperiencePageTemplate
			logo="/assets/logos/creyon.png"
			company="Creyon Bio"
			title="Data Scientist"
			period="Jul 2023 – Present"
			description="Driving data-centric model development for high-throughput drug discovery — bridging biology, data, and ML."
			projects={projects}
			techStack={techStack}
		/>
	);
};

export default Creyon;
