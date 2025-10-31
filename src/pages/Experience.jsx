import Card from "../components/Card";
import PageLayout from "../components/PageLayout";

const experiences = [
	{
		company: "Creyon Bio",
		role: "Data Scientist - Biological ML",
		period: "2023 – 2025",
		logo: "/assets/logos/creyon.png",
		link: "/experience/creyon",
	},
	{
		company: "San Diego Supercomputer Center",
		role: "ML Researcher",
		period: "2022 – 2023",
		logo: "/assets/logos/sdsc.png",
		link: "/experience/sdsc",
	},
	{
		company: "Morgan Stanley",
		role: "Data Engineer",
		period: "2018 – 2021",
		logo: "/assets/logos/morgan.png",
		link: "/experience/morganstanley",
	},
];

const Experience = () => {
	return (
		<PageLayout>
			<section>
				<h1 className="text-4xl font-display text-slate-100 mb-4">
					Professional Experience
				</h1>
				<p className="text-slate-300 mb-8">
					A journey across data, science, and engineering — distilled from
					research to production systems.
				</p>

				<div className="grid gap-6 md:grid-cols-2">
					{experiences.map((exp) => (
						<Card
							key={exp.company}
							to={exp.link}
							title={exp.company}
							subtitle={exp.role}
							date={exp.period}
							image={exp.logo}
						/>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Experience;
