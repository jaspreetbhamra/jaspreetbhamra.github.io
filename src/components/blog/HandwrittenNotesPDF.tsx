import { FileText, Download } from "lucide-react";

interface HandwrittenNotesPDFProps {
	src: string;
	title?: string;
	height?: string;
	description?: string;
}

export function HandwrittenNotesPDF({
	src,
	title = "Handwritten Notes",
	height = "600px",
	description,
}: HandwrittenNotesPDFProps) {
	return (
		<div className="my-8 border-2 border-dashed border-accent-300 dark:border-accent-700 rounded-xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800">
			{/* Header with handwritten notes indicator */}
			<div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-neutral-800 dark:to-neutral-700 px-6 py-4 border-b-2 border-dashed border-accent-300 dark:border-accent-700">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<FileText className="w-6 h-6 text-accent-600 dark:text-accent-400" />
						<div>
							<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
								{title}
								<span className="text-xs font-normal px-2 py-1 rounded bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-700">
									Handwritten
								</span>
							</h3>
							{description && (
								<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{description}</p>
							)}
						</div>
					</div>
					<a
						href={src}
						download
						className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 hover:bg-accent-50 dark:hover:bg-accent-900/20 rounded-lg transition-colors duration-200"
						aria-label="Download PDF"
					>
						<Download className="w-4 h-4" />
						<span className="hidden sm:inline">Download</span>
					</a>
				</div>
			</div>

			{/* PDF Embed */}
			<div className="p-4 bg-white dark:bg-neutral-950">
				<iframe
					src={`${src}#view=FitH`}
					title={title}
					className="w-full border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-inner"
					style={{ height }}
				/>
			</div>

			{/* Footer note */}
			<div className="px-6 py-3 bg-amber-50 dark:bg-neutral-800/50 border-t border-dashed border-accent-300 dark:border-accent-700">
				<p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
					These are handwritten notes from my personal collection. If the PDF doesn't load, try{" "}
					<a
						href={src}
						download
						className="text-accent-600 dark:text-accent-400 hover:underline font-medium"
					>
						downloading it
					</a>
					.
				</p>
			</div>
		</div>
	);
}
