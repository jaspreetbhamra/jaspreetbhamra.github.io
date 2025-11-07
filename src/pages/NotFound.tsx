import { useNavigate } from "react-router-dom";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<div className="flex items-center justify-center min-h-[calc(100vh-16rem)]">
				<div className="max-w-md w-full text-center">
					<h1 className="heading-1 mb-4">404</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400 mb-6">Page not found</p>
					<Button onClick={() => navigate("/")}>Go home</Button>
				</div>
			</div>
		</PageContainer>
	);
}
