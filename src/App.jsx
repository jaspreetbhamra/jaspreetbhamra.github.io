import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Creyon from "./pages/experience/Creyon";
import MorganStanley from "./pages/experience/MorganStanley";
import SDSC from "./pages/experience/SDSC";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/experience/creyon" element={<Creyon />} />
				<Route path="/experience/sdsc" element={<SDSC />} />
				<Route path="/experience/morganstanley" element={<MorganStanley />} />
			</Routes>
		</Router>
	);
}

export default App;

// import Home from './pages/Home.jsx'

// const App = () => {
//   return <Home />
// }

// export default App
