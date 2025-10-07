import { FaGithub } from "react-icons/fa"
import PageLayout from "../components/PageLayout"

const projects = [
  {
    name: "Mythical Worlds Explorer",
    description: "A RAG-powered fantasy lore explorer built with LangChain + FAISS.",
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
]

const Projects = () => {
  return (
    <PageLayout>
      {/* Blurb */}
      <section className="text-center lg:text-left font-display">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Projects</h1>
        <p className="text-slate-300 max-w-2xl">
          A collection of my favorite works — blending machine learning, data science, and creativity
        </p>
      </section>

      {/* Project Panels */}
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaGithub className="h-6 w-6 text-sky-400" />
              <h2 className="text-xl font-semibold text-slate-100">{proj.name}</h2>
            </div>
            <p className="text-slate-300">{proj.description}</p>
          </a>
        ))}
      </section>
    </PageLayout>
  )
}

export default Projects
