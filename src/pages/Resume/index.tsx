import { Download, ExternalLink } from "lucide-react";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export default function Resume() {
	return (
		<PageContainer>
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
						Resume
					</h1>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
						Download or view my resume to learn more about my experience and skills.
					</p>
				</div>

				{/* Resume Card */}
				<div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 shadow-soft-md">
					<div className="flex flex-col items-center gap-6">
						{/* Icon/Visual */}
						<div className="w-24 h-24 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center">
							<svg
								className="w-12 h-12 text-accent-600 dark:text-accent-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>

						{/* Title */}
						<div className="text-center">
							<h2 className="heading-3 mb-2">Jaspreet Bhamra</h2>
							<p className="text-neutral-600 dark:text-neutral-400">
								Software Engineer Resume
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
							<a
								href="/resume_jaspreet.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" fullWidth>
									<ExternalLink className="w-5 h-5 mr-2" />
									View Resume
								</Button>
							</a>
							<a href="/resume_jaspreet.pdf" download>
								<Button variant="outline" size="lg" fullWidth>
									<Download className="w-5 h-5 mr-2" />
									Download PDF
								</Button>
							</a>
						</div>
					</div>
				</div>

				{/* Quick Summary */}
				<div className="mt-16 grid md:grid-cols-3 gap-8">
					<div className="text-center p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
						<div className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2">
							5+
						</div>
						<p className="text-neutral-600 dark:text-neutral-400">
							Years Experience
						</p>
					</div>
					<div className="text-center p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
						<div className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2">
							10+
						</div>
						<p className="text-neutral-600 dark:text-neutral-400">
							Projects Completed
						</p>
					</div>
					<div className="text-center p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
						<div className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2">
							15+
						</div>
						<p className="text-neutral-600 dark:text-neutral-400">
							Technologies
						</p>
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
