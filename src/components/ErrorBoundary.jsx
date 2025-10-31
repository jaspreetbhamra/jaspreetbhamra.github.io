import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 px-6">
					<div className="max-w-md text-center">
						<h1 className="text-6xl font-bold text-red-400 mb-4">Oops!</h1>
						<h2 className="text-2xl font-semibold mb-4">
							Something went wrong
						</h2>
						<p className="text-slate-300 mb-8">
							We encountered an unexpected error. Please try refreshing the page
							or return home.
						</p>
						<div className="flex gap-4 justify-center">
							<Link
								to="/"
								className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors"
							>
								Return Home
							</Link>
							<button
								type="button"
								onClick={() => window.location.reload()}
								className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
							>
								Refresh Page
							</button>
						</div>
						{process.env.NODE_ENV === "development" && this.state.error && (
							<details className="mt-8 text-left bg-slate-800 p-4 rounded-lg">
								<summary className="cursor-pointer text-slate-400 mb-2">
									Error details
								</summary>
								<pre className="text-xs text-red-300 overflow-auto">
									{this.state.error.toString()}
								</pre>
							</details>
						)}
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
