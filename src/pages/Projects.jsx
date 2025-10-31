import { FaGithub } from "react-icons/fa";
import Card from "../components/Card";
import PageLayout from "../components/PageLayout";

const projects = [
	{
		name: "Mythical Worlds Explorer",
		description:
			"A RAG-powered fantasy lore explorer built with LangChain + FAISS.",
		link: "https://github.com/yourusername/mythical-worlds",
	},
	{
		name: "Protein Engineer",
		description: "Agentic AI system for protein variant design and evaluation.",
		link: "https://github.com/yourusername/protein-engineer",
	},
	{
		name: "Music Mood Visualizer",
		description: "Maps audio features to visuals and generates mood-based art.",
		link: "https://github.com/yourusername/music-visualizer",
	},
];

const Projects = () => {
	return (
		<PageLayout>
			<section>
				<h1 className="text-4xl font-display text-slate-100 mb-4">Projects</h1>
				<p className="text-slate-300 mb-8">
					A collection of my favorite works — blending machine learning, data
					science, and creativity
				</p>

				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((proj) => (
						<Card
							key={proj.name}
							to={proj.link}
							title={proj.name}
							description={proj.description}
							icon={FaGithub}
							external
						/>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Projects;
