import { ArrowRight, Mail } from "lucide-react";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";

export default function Home() {
	return (
		<PageContainer>
			{/* Hero Section */}
			<section className="flex items-center min-h-[calc(100vh-16rem)] py-12">
				<div className="w-full">
					<div className="max-w-4xl mx-auto text-center">
						{/* Greeting */}
						<p className="text-accent-600 dark:text-accent-400 font-medium mb-6 text-lg tracking-wide">
							Hi! I'm
						</p>

						{/* Name with Gradient */}
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-700 dark:from-accent-400 dark:via-accent-300 dark:to-accent-500 bg-clip-text text-transparent leading-tight tracking-tight">
							Jaspreet
						</h1>

						{/* Tagline */}
						<p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
							Learn, build, and question... Chasing patterns that shape intelligence, nature, and everything in between
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
							<Link to="/projects">
								<Button size="lg">
									View My Work
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
								</Button>
							</Link>
							<Link to="/resume">
								<Button variant="outline" size="lg">
									See Resume
								</Button>
							</Link>
						</div>

						{/* Social Links */}
						<div className="flex items-center justify-center gap-8">
							<a
								href="https://github.com/jaspreetbhamra"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:scale-110 transition-all duration-200"
								aria-label="GitHub"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="https://www.linkedin.com/in/jaspreet-kaur-bhamra/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:scale-110 transition-all duration-200"
								aria-label="LinkedIn"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://scholar.google.com/citations?user=xwU4PZsAAAAJ&hl=en"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:scale-110 transition-all duration-200"
								aria-label="Google Scholar"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
								</svg>
								<span className="sr-only">Google Scholar</span>
							</a>
							<a
								href="mailto:jbhamra24@gmail.com"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:scale-110 transition-all duration-200"
								aria-label="Email"
							>
								<Mail className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-900 dark:text-neutral-100">
						About Me
					</h2>
					<div className="space-y-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
						<p>
							I work at the intersection of data, modeling, and reasoning. I like searching for patterns in messy signals and building systems that can learn, adapt, and make sense of uncertainty to turn raw information into insight
						</p>
						<p>
							When I'm not writing code, I'm usually drawing, painting, or making music. I like turning ideas into sound or color - another kind of data, I guess... another way to perceive the world...
						</p>
					</div>
				</div>
			</section>
		</PageContainer>
	);
}
