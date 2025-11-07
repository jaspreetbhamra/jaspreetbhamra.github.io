import type { ReactNode } from "react";
import { SkipToContent } from "@/components/shared/SkipToContent";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface AppLayoutProps {
	children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<SkipToContent />
			<Header />
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
}
