import { FaGithub } from "react-icons/fa"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


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

const textFontClass = 'font-english-display'

const Projects = () => {
  return (
    <div className={`relative min-h-screen theme-dark theme-overlay`}>
        <Navbar />

        {/* Content wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
            {/* Sidebar (reuse component) */}
            <Sidebar textColorClass="text-slate-100" headingFontClass={textFontClass} />
            {/* <main className="flex-1 p-10 flex flex-col gap-10"> */}
            <main className="flex-1 px-6 sm:px-10 flex flex-col gap-10 mt-16 sm:mt-24">
                {/* Blurb */}
                <section className={`text-center lg:text-left ${textFontClass}`}>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">Projects</h1>
                <p className="text-slate-300">
                    A collection of my favorite works — blending machine learning, data science, and creativity.
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
            </main>
        </div>
        <Footer />
    </div>
  )
}

export default Projects