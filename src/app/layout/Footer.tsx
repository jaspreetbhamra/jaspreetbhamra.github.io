import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
			<div className="container-content py-8">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					{/* Copyright */}
					<p className="text-sm text-neutral-600 dark:text-neutral-400">
						© {currentYear} Jaspreet Bhamra. All rights reserved.
					</p>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors-fast"
							aria-label="GitHub"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors-fast"
							aria-label="LinkedIn"
						>
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:contact@example.com"
							className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors-fast"
							aria-label="Email"
						>
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
