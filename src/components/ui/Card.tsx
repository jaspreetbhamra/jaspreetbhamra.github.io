import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Badge } from "./Badge";

interface CardProps {
	title: string;
	description: string;
	tags?: string[];
	date?: string;
	image?: string;
	href: string;
	cta?: string;
	children?: ReactNode;
}

export function Card({
	title,
	description,
	tags,
	date,
	image,
	href,
	cta = "Learn more",
	children,
}: CardProps) {
	return (
		<article className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-accent-300 dark:hover:border-accent-600 transition-all duration-300 ease-out">
			<Link to={href} className="block" aria-label={`${cta}: ${title}`}>
				{/* Image */}
				{image && (
					<div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
						<img
							src={image}
							alt=""
							className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
							loading="lazy"
						/>
					</div>
				)}

				{/* Content */}
				<div className="p-6">
					{/* Date and Tags */}
					{(date || tags) && (
						<div className="flex items-center justify-between mb-3">
							{date && (
								<time className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
									{date}
								</time>
							)}
							{tags && tags.length > 0 && (
								<div className="flex gap-2 flex-wrap" role="list" aria-label="Tags">
									{tags.slice(0, 3).map((tag) => (
										<Badge key={tag} variant="neutral" size="sm">
											{tag}
										</Badge>
									))}
								</div>
							)}
						</div>
					)}

					{/* Title */}
					<h3 className="heading-3 text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
						{title}
					</h3>

					{/* Description */}
					<p className="body-base text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
						{description}
					</p>

					{/* Custom children content */}
					{children}

					{/* CTA */}
					<div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-medium group-hover:gap-3 transition-all duration-200">
						<span>{cta}</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
					</div>
				</div>
			</Link>
		</article>
	);
}
