import { Component, type ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-4">
					<div className="max-w-md w-full text-center">
						<h1 className="heading-2 text-neutral-900 dark:text-neutral-50 mb-4">
							Something went wrong
						</h1>
						<p className="body-base text-neutral-600 dark:text-neutral-400 mb-6">
							{this.state.error?.message || "An unexpected error occurred"}
						</p>
						<button
							type="button"
							onClick={() => window.location.reload()}
							className="inline-flex items-center justify-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors-fast"
						>
							Reload page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
