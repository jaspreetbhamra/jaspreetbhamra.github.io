import { Link } from "react-router-dom";
import { PageContainer } from "@/app/layout/PageContainer";

export default function NotFound() {
	return (
		<PageContainer>
			<div className="flex items-center justify-center min-h-[calc(100vh-16rem)]">
				<div className="max-w-md w-full text-center">
					<h1 className="heading-1 mb-4">404</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400 mb-6">
						Page not found
					</p>
					<Link
						to="/"
						className="inline-flex items-center justify-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors-fast"
					>
						Go home
					</Link>
				</div>
			</div>
		</PageContainer>
	);
}
