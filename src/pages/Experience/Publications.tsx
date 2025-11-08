import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Publication } from "@/data/experiences";

interface PublicationsProps {
	publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
	if (!publications || publications.length === 0) {
		return null;
	}

	const getTypeBadgeVariant = (type?: string) => {
		switch (type) {
			case "conference":
				return "accent";
			case "journal":
				return "neutral";
			case "preprint":
				return "neutral";
			case "workshop":
				return "neutral";
			default:
				return "neutral";
		}
	};

	return (
		<div>
			<div className="flex items-center gap-3 mb-8">
				<div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
				<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
					Publications
				</h2>
			</div>

			<div className="space-y-6">
				{publications.map((pub, index) => (
					<div
						key={`${pub.title}-${index}`}
						className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-white dark:bg-neutral-900 hover:border-accent-300 dark:hover:border-accent-700 transition-colors duration-200"
					>
						{/* Publication Title */}
						<div className="flex items-start justify-between gap-4 mb-3">
							<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex-1">
								{pub.title}
							</h3>
							{pub.type && (
								<Badge variant={getTypeBadgeVariant(pub.type)} size="sm">
									{pub.type}
								</Badge>
							)}
						</div>

						{/* Authors */}
						<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
							{pub.authors.join(", ")}
						</p>

						{/* Venue and Year */}
						<p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
							<span className="font-medium">{pub.venue}</span>
							<span className="text-neutral-500 dark:text-neutral-500"> • {pub.year}</span>
						</p>

						{/* Link */}
						<a
							href={pub.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
						>
							<ExternalLink className="w-4 h-4" />
							<span>View Publication</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
