import { Link } from "react-router-dom";

const Card = ({
	to,
	title,
	subtitle,
	description,
	image,
	icon: Icon,
	date,
	tags,
	external = false,
}) => {
	const CardWrapper = external ? "a" : Link;
	const linkProps = external
		? { href: to, target: "_blank", rel: "noopener noreferrer" }
		: { to };

	return (
		<CardWrapper
			{...linkProps}
			className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
		>
			{/* Header with icon/image */}
			<div className="flex items-center gap-4 mb-4">
				{image && (
					<img
						src={image}
						alt={`${title} logo`}
						className="h-12 w-12 object-contain rounded-md border border-slate-500 bg-slate-700/40"
					/>
				)}
				{Icon && !image && <Icon className="h-12 w-12 text-sky-400" />}
				<div className="flex-1">
					<h2 className="text-xl font-semibold text-slate-100">{title}</h2>
					{subtitle && (
						<p className="text-slate-300 text-sm mt-1">{subtitle}</p>
					)}
					{date && <p className="text-slate-500 text-xs mt-1">{date}</p>}
				</div>
			</div>

			{/* Description */}
			{description && (
				<p className="text-slate-300 text-sm mb-4">{description}</p>
			)}

			{/* Tags */}
			{tags && tags.length > 0 && (
				<div className="flex gap-2 flex-wrap mt-4">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 rounded bg-slate-700/50 text-sky-400 text-xs"
						>
							#{tag}
						</span>
					))}
				</div>
			)}
		</CardWrapper>
	);
};

export default Card;
