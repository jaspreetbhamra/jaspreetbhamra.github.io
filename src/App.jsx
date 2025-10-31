import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingFallback from "./components/LoadingFallback";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Creyon = lazy(() => import("./pages/experience/Creyon"));
const MorganStanley = lazy(() => import("./pages/experience/MorganStanley"));
const SDSC = lazy(() => import("./pages/experience/SDSC"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
	return (
		<ErrorBoundary>
			<ThemeProvider>
				<Router>
					<Suspense fallback={<LoadingFallback />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/experience" element={<Experience />} />
							<Route path="/experience/creyon" element={<Creyon />} />
							<Route path="/experience/sdsc" element={<SDSC />} />
							<Route
								path="/experience/morganstanley"
								element={<MorganStanley />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</Router>
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
