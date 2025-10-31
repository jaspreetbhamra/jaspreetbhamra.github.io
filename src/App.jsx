import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingFallback from "./components/LoadingFallback";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Creyon = lazy(() => import("./pages/experience/Creyon"));
const MorganStanley = lazy(() => import("./pages/experience/MorganStanley"));
const SDSC = lazy(() => import("./pages/experience/SDSC"));
const AIBiology = lazy(() => import("./pages/blog/AIBiology"));
const DataToML = lazy(() => import("./pages/blog/DataToML"));
const StorytellingData = lazy(() => import("./pages/blog/StorytellingData"));
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
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/ai-biology" element={<AIBiology />} />
							<Route path="/blog/data-to-ml" element={<DataToML />} />
							<Route
								path="/blog/storytelling-data"
								element={<StorytellingData />}
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
