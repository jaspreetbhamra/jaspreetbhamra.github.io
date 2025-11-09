import { BookOpen, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface Reference {
	id: number | string;
	authors?: string;
	title: string;
	source?: string;
	year?: string | number;
	url?: string;
	doi?: string;
}

interface ReferencesProps {
	references: Reference[];
	title?: string;
	children?: ReactNode;
}

export function References({ references, title = "References", children }: ReferencesProps) {
	return (
		<div className="my-12 border-t-2 border-neutral-200 dark:border-neutral-800 pt-8">
			<div className="flex items-center gap-3 mb-6">
				<BookOpen className="w-6 h-6 text-accent-600 dark:text-accent-400" />
				<h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{title}</h2>
			</div>

			{children && <div className="mb-6 text-neutral-600 dark:text-neutral-400">{children}</div>}

			<ol className="space-y-4">
				{references.map((ref) => (
					<li key={ref.id} className="flex gap-4">
						<span className="flex-shrink-0 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
							[{ref.id}]
						</span>
						<div className="flex-1">
							<p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
								{ref.authors && <span className="font-medium">{ref.authors}. </span>}
								<span className="italic">{ref.title}</span>
								{ref.source && <span>. {ref.source}</span>}
								{ref.year && <span> ({ref.year})</span>}.
							</p>

							{(ref.url || ref.doi) && (
								<div className="flex flex-wrap gap-3 mt-2">
									{ref.url && (
										<a
											href={ref.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
										>
											<ExternalLink className="w-3.5 h-3.5" />
											<span>View Source</span>
										</a>
									)}
									{ref.doi && (
										<a
											href={`https://doi.org/${ref.doi}`}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
										>
											<span className="font-mono">DOI: {ref.doi}</span>
										</a>
									)}
								</div>
							)}
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}

/**
 * Simplified reference component for inline citations
 * Usage in MDX: <Cite id="1" /> or <Cite id="1-3" />
 */
interface CiteProps {
	id: string | number;
}

export function Cite({ id }: CiteProps) {
	return (
		<sup className="text-accent-600 dark:text-accent-400 font-medium">
			<a href={`#ref-${id}`} className="hover:underline">
				[{id}]
			</a>
		</sup>
	);
}
