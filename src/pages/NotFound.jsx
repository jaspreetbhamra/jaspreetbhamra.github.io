import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 px-6">
			<div className="max-w-md text-center">
				<h1 className="text-9xl font-bold text-sky-400 mb-4">404</h1>
				<h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
				<p className="text-slate-300 mb-8">
					The page you're looking for has wandered into the mists of time, or
					perhaps it never existed at all.
				</p>
				<Link
					to="/?lang=english"
					className="inline-block px-8 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors font-semibold"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
