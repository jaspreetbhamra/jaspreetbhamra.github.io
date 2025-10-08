const TechBubble = ({ techGroups }) => {
	return (
		<div className="rounded-2xl border border-slate-600 bg-slate-800/40 p-6 mb-6">
			{Object.entries(techGroups).map(([category, tools]) => (
				<div key={category} className="mb-4 last:mb-0">
					<h3 className="text-sky-400 font-semibold mb-2">{category}</h3>
					<ul className="flex flex-wrap gap-2 text-slate-200">
						{tools.map((tool) => (
							<li
								key={tool}
								className="px-3 py-1 rounded-full border border-slate-500 text-sm bg-slate-700/40"
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default TechBubble;
