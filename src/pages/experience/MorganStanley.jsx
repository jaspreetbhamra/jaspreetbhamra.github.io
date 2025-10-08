import ExperiencePageTemplate from "../../components/ExperiencePageTemplate";

const techStack = {
	Software: ["Python", "SQL", "PySpark"],
	Databases: ["Snowflake", "Oracle DB", "PostgreSQL"],
	"Data Engineering": ["ETL", "Airflow", "Kafka"],
	DevOps: ["Jenkins", "Docker", "GitLab CI"],
};

const projects = [
	{
		title: "Data Pipeline Optimization",
		contributions: [
			"Built and optimized ETL pipelines to support real-time trading and risk analytics systems.",
			"Refactored Python + SQL jobs to achieve 40% reduction in daily processing time.",
			"Implemented automated schema validation and data quality checks.",
		],
	},
	{
		title: "Analytical Tools Development",
		contributions: [
			"Developed Python-based analytics modules for internal trading data exploration.",
			"Designed parameterized reporting workflows using PySpark and Airflow DAGs.",
			"Collaborated with quant researchers to integrate ML-based anomaly detection.",
		],
	},
	{
		title: "Infrastructure Automation",
		contributions: [
			"Built CI/CD pipelines for ETL deployment using Jenkins and Docker.",
			"Implemented monitoring and logging with custom Grafana dashboards.",
			"Ensured compliance with enterprise data governance standards.",
		],
	},
];

const MorganStanley = () => {
	return (
		<ExperiencePageTemplate
			logo="/assets/logos/morgan.png"
			company="Morgan Stanley"
			title="Data Engineer"
			period="2018 – 2021"
			description="Engineered scalable data pipelines and analytics solutions supporting financial risk systems."
			projects={projects}
			techStack={techStack}
		/>
	);
};

export default MorganStanley;
