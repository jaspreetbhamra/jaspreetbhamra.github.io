import { PageContainer } from "@/app/layout/PageContainer";

export default function Home() {
	return (
		<PageContainer>
			<div className="flex items-center justify-center min-h-[calc(100vh-16rem)]">
				<div className="max-w-3xl w-full text-center">
					<h1 className="heading-1 mb-4">Welcome</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400">
						Clean, modern portfolio website with dark mode support.
					</p>
				</div>
			</div>
		</PageContainer>
	);
}
