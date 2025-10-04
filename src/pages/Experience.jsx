import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const experiences = [
  {
    company: "Creyon Bio",
    role: "Data Scientist",
    period: "2023 – 2025",
    logo: "/src/assets/logos/creyon.jpg",
    link: "/experience/creyon", // detail page
  },
  {
    company: "San Diego Supercomputer Center",
    role: "Researcher (Wildfire Detection)",
    period: "2022 – 2023",
    logo: "/src/assets/logos/sdsc.jpg",
    link: "/experience/sdsc",
  },
  {
    company: "Morgan Stanley",
    role: "Data Engineer",
    period: "2018 – 2021",
    logo: "/src/assets/logos/morganstanley.jpg",
    link: "/experience/morganstanley",
  },
]

const textFontClass = 'font-english-display'

const Experience = () => {
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
                    <h1 className="text-3xl font-bold text-slate-100 mb-2">Experience</h1>
                    <p className="text-slate-300">
                        A look at my career journey so far — blending data science, engineering, and research.
                    </p>
                    </section>

                    {/* Experience Cards */}
                    <section className="grid gap-6 md:grid-cols-2">
                    {experiences.map((exp) => (
                        <a
                        key={exp.company}
                        href={exp.link}
                        className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
                        >
                        <div className="flex items-center gap-4 mb-3">
                            <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-12 rounded-md object-contain" />
                            <div>
                            <h2 className="text-xl font-semibold text-slate-100">{exp.company}</h2>
                            <p className="text-slate-400 text-sm">{exp.period}</p>
                            </div>
                        </div>
                        <p className="text-slate-300">{exp.role}</p>
                        </a>
                    ))}
                </section>
            </main>
        </div>
        <Footer />
    </div>
  )
}

export default Experience
