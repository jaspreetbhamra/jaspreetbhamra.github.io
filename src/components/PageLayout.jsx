import { useTheme } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SkipToContent from "./SkipToContent";

const PageLayout = ({ children }) => {
	const { textColorClass, headingFontClass } = useTheme();

	return (
		<div className="relative min-h-screen theme-dark theme-overlay">
			<SkipToContent />
			{/* Navbar always on top */}
			<Navbar />

			{/* Sidebar + Main content */}
			<div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
				<Sidebar
					textColorClass={textColorClass}
					headingFontClass={headingFontClass}
				/>

				{/* Page content */}
				<main
					id="main-content"
					className="flex-1 px-6 sm:px-10 flex flex-col gap-10 mt-16 sm:mt-24"
				>
					{children}
				</main>
			</div>

			<Footer />
		</div>
	);
};

export default PageLayout;
