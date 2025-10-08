import CollapsibleSection from "./CollapsibleSection";
import ExperienceReturnButton from "./ExperienceReturnButton";
import PageLayout from "./PageLayout";
import TechBubble from "./TechBubble";

const ExperiencePageTemplate = ({
	logo,
	company,
	title,
	period,
	description,
	projects,
	techStack,
}) => {
	return (
		<PageLayout>
			<section className="flex flex-col min-h-[80vh] justify-between">
				<div>
					{/* Header with logo bubble */}
					<div className="flex items-center gap-4 mb-6">
						<div className="h-14 w-14 rounded-full border border-slate-600 bg-slate-800/60 flex items-center justify-center shadow-md overflow-hidden logo-bubble">
							<img
								src={logo}
								alt={`${company} logo`}
								className="h-10 w-10 object-contain"
							/>
						</div>
						<div>
							<h1 className="text-4xl font-display text-slate-100">
								{company}
							</h1>
							<p className="text-slate-400 text-sm">{title}</p>
							<p className="text-slate-500 text-xs">{period}</p>
						</div>
					</div>

					{/* Optional description */}
					{description && (
						<p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">
							{description}
						</p>
					)}

					{/* Tech stack bubble */}
					{techStack && (
						<div className="mb-10">
							<TechBubble techGroups={techStack} />
						</div>
					)}

					{/* Collapsible projects */}
					<div className="flex flex-col gap-6">
						{projects.map((proj) => (
							<CollapsibleSection key={proj.title} title={proj.title}>
								{Array.isArray(proj.contributions) &&
								proj.contributions.length > 0 ? (
									<ul className="list-disc ml-6 text-slate-300 leading-relaxed">
										{proj.contributions.map((item, idx) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <the content is statically generated>
											<li key={idx}>{item}</li>
										))}
									</ul>
								) : (
									<p className="text-slate-400 italic">No details available.</p>
								)}
							</CollapsibleSection>
						))}
					</div>
				</div>

				{/* Return Button + spacing */}
				<div className="pt-12 pb-12 flex justify-start">
					<ExperienceReturnButton />
				</div>
			</section>
		</PageLayout>
	);
};

export default ExperiencePageTemplate;
