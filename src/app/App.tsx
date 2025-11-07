import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { notFoundRoute, routes } from "./routes";

function LoadingFallback() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-neutral-600 dark:text-neutral-400 body-base">Loading...</div>
		</div>
	);
}

export default function App() {
	return (
		<ErrorBoundary>
			<BrowserRouter basename="/">
				<Suspense fallback={<LoadingFallback />}>
					<Routes>
						{routes.map((route) => (
							<Route key={route.path} path={route.path} element={<route.element />} />
						))}
						<Route path={notFoundRoute.path} element={<notFoundRoute.element />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ErrorBoundary>
	);
}
