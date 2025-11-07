import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";

export default function Home() {
	return (
		<PageContainer className="!px-0 !py-0">
			{/* Hero Banner */}
			<div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 dark:from-accent-600 dark:via-accent-700 dark:to-accent-900" />

				{/* Optional: Replace with actual image */}
				{/* <img
					src="/hero-banner.jpg"
					alt="Hero banner"
					className="absolute inset-0 w-full h-full object-cover opacity-50"
				/> */}

				{/* Overlay pattern */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
			</div>

			{/* Hero Content */}
			<section className="relative -mt-32 px-4 md:px-8 pb-12">
				<div className="w-full">
					<div className="max-w-4xl mx-auto text-center">
						{/* Greeting */}
						<p className="text-accent-400 dark:text-accent-300 font-medium mb-4 drop-shadow-lg">
							Hi, I'm
						</p>

						{/* Name */}
						<h1 className="heading-1 mb-6 drop-shadow-lg">Jaspreet Bhamra</h1>

						{/* Tagline */}
						<p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
							Software Engineer passionate about building clean, modern, and
							accessible web experiences.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link to="/projects">
								<Button size="lg">
									View My Work
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</Link>
							<Link to="/resume">
								<Button variant="outline" size="lg">
									See Resume
								</Button>
							</Link>
						</div>

						{/* Social Links */}
						<div className="flex items-center justify-center gap-6">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors-fast"
								aria-label="GitHub"
							>
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors-fast"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="mailto:contact@example.com"
								className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors-fast"
								aria-label="Email"
							>
								<Mail className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 px-4 md:px-8 border-t border-neutral-200 dark:border-neutral-800">
				<div className="max-w-3xl mx-auto">
					<h2 className="heading-2 mb-6 text-center">About Me</h2>
					<div className="space-y-4 text-neutral-700 dark:text-neutral-300 body-large">
						<p>
							I'm a software engineer with a passion for creating intuitive and
							performant web applications. I enjoy working across the full stack,
							from designing clean user interfaces to architecting scalable backend
							systems.
						</p>
						<p>
							When I'm not coding, you can find me exploring new technologies,
							contributing to open source, or sharing knowledge through technical
							writing.
						</p>
					</div>
				</div>
			</section>
		</PageContainer>
	);
}
