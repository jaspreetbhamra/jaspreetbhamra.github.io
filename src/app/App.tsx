import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { ThemeProvider } from "@/hooks/useTheme";
import { AppLayout } from "./layout/AppLayout";
import { detailRoutes, notFoundRoute, routes } from "./routes";

export default function App() {
	return (
		<ErrorBoundary>
			<ThemeProvider>
				<BrowserRouter basename="/">
					<AppLayout>
						<Suspense fallback={<LoadingSpinner />}>
							<Routes>
								{routes.map((route) => (
									<Route key={route.path} path={route.path} element={<route.element />} />
								))}
								{detailRoutes.map((route) => (
									<Route key={route.path} path={route.path} element={<route.element />} />
								))}
								<Route path={notFoundRoute.path} element={<notFoundRoute.element />} />
							</Routes>
						</Suspense>
					</AppLayout>
				</BrowserRouter>
			</ThemeProvider>
		</ErrorBoundary>
	);
}
