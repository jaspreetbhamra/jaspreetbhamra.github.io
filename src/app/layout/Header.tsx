import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { routes } from "@/app/routes";

export function Header() {
	const { theme, toggleTheme } = useTheme();
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
			<div className="container-content">
				<div className="flex h-16 items-center justify-between">
					{/* Logo / Name */}
					<Link
						to="/"
						className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors-fast"
					>
						Jaspreet Kaur Bhamra
					</Link>

					{/* Navigation */}
					<nav aria-label="Main navigation">
						<ul className="flex items-center gap-1 sm:gap-2">
							{routes.map((route) => (
								<li key={route.path}>
									<Link
										to={route.path}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors-fast ${
											isActive(route.path)
												? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50"
												: "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-900"
										}`}
										aria-current={isActive(route.path) ? "page" : undefined}
									>
										{route.label}
									</Link>
								</li>
							))}

							{/* Theme Toggle */}
							<li>
								<button
									type="button"
									onClick={toggleTheme}
									className="ml-2 p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors-fast"
									aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
								>
									{theme === "light" ? (
										<Moon className="w-5 h-5" />
									) : (
										<Sun className="w-5 h-5" />
									)}
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
