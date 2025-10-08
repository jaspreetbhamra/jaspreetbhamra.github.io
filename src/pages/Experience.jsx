import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const experiences = [
	{
		company: "Creyon Bio",
		role: "Data Scientist - Biological ML",
		period: "2023 – 2025",
		logo: "/assets/logos/creyon.png",
		link: "/experience/creyon", // detail page
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

const textFontClass = "font-english-display";

// const Experience = () => {
//   return (
//     <PageLayout>
//         <section className={`text-center lg:text-left ${textFontClass}`}>
//             <h1 className="text-3xl font-bold text-slate-100 mb-2">Experience</h1>
//             <p className="text-slate-300">
//                 A journey across data, science, and engineering — distilled from research to production systems
//             </p>
//             </section>

//             {/* Experience Cards */}
//             <section className="grid gap-6 md:grid-cols-2">
//             {experiences.map((exp) => (
//                 <a
//                 key={exp.company}
//                 href={exp.link}
//                 className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
//                 >
//                 <div className="flex items-center gap-4 mb-3">
//                     <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-12 rounded-md object-contain" />
//                     <div>
//                     <h2 className="text-xl font-semibold text-slate-100">{exp.company}</h2>
//                     <p className="text-slate-400 text-sm">{exp.period}</p>
//                     </div>
//                 </div>
//                 <p className="text-slate-300">{exp.role}</p>
//                 </a>
//             ))}
//         </section>
//     </PageLayout>
//   )
// }

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
						<Link
							key={exp.company}
							to={exp.link}
							className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
						>
							<div className="flex items-center gap-4 mb-4">
								{exp.logo ? (
									<img
										src={exp.logo}
										alt={`${exp.company} logo`}
										className="h-12 w-12 object-contain rounded-md border border-slate-500 bg-slate-700/40"
									/>
								) : (
									<FaBuilding className="h-12 w-12 text-sky-400" />
								)}
								<div>
									<h2 className="text-xl font-semibold text-slate-100">
										{exp.company}
									</h2>
									<p className="text-slate-300 text-sm">{exp.title}</p>
									<p className="text-slate-500 text-xs">{exp.period}</p>
								</div>
							</div>
							<p className="text-slate-400 text-sm italic">
								Click to read more →
							</p>
						</Link>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Experience;
