import type { ReactNode } from "react";

interface PageContainerProps {
	children: ReactNode;
	className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
	return (
		<main
			id="main-content"
			className={`container-content min-h-screen py-8 md:py-12 ${className}`}
		>
			{children}
		</main>
	);
}
