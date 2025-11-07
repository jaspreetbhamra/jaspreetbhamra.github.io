import { Download, ExternalLink } from "lucide-react";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export default function Resume() {
	return (
		<PageContainer>
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-6">
						<div className="w-1 h-12 bg-gradient-to-b from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
						<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
							Resume
						</h1>
					</div>
					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
						Download or view my resume to learn more about my experience and skills
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
							<h2 className="heading-3 mb-2">Jaspreet Kaur Bhamra</h2>
							<p className="text-neutral-600 dark:text-neutral-400">
								Resume
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
							{/* https://drive.google.com/file/d/1dutCWoKjZ_n3XdYozZNvu5iDTLdihdAT/ */}
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" fullWidth>
									<ExternalLink className="w-5 h-5 mr-2" />
									View Resume
								</Button>
							</a>
							<a href="/resume.pdf" download="resume_jaspreet.pdf">
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
					<div className="group text-center p-8 bg-gradient-to-br from-accent-50 to-neutral-50 dark:from-accent-900/20 dark:to-neutral-900/50 border border-accent-200 dark:border-accent-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div className="text-4xl font-bold bg-gradient-to-br from-accent-600 to-accent-700 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-3">
							5+
						</div>
						<p className="text-neutral-700 dark:text-neutral-300 font-medium">
							Years Experience
						</p>
					</div>
					<div className="group text-center p-8 bg-gradient-to-br from-accent-50 to-neutral-50 dark:from-accent-900/20 dark:to-neutral-900/50 border border-accent-200 dark:border-accent-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div className="text-4xl font-bold bg-gradient-to-br from-accent-600 to-accent-700 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-3">
							10+
						</div>
						<p className="text-neutral-700 dark:text-neutral-300 font-medium">
							Projects Completed
						</p>
					</div>
					<div className="group text-center p-8 bg-gradient-to-br from-accent-50 to-neutral-50 dark:from-accent-900/20 dark:to-neutral-900/50 border border-accent-200 dark:border-accent-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div className="text-4xl font-bold bg-gradient-to-br from-accent-600 to-accent-700 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-3">
							15+
						</div>
						<p className="text-neutral-700 dark:text-neutral-300 font-medium">
							Technologies
						</p>
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
