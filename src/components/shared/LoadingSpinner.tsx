export function LoadingSpinner() {
	return (
		<div className="min-h-[50vh] flex items-center justify-center" role="status" aria-live="polite">
			<div className="flex flex-col items-center gap-4">
				{/* Spinner */}
				<div className="relative w-12 h-12">
					<div className="absolute inset-0 border-4 border-neutral-200 dark:border-neutral-800 rounded-full" />
					<div className="absolute inset-0 border-4 border-accent-500 dark:border-accent-400 rounded-full border-t-transparent animate-spin" />
				</div>

				{/* Loading text */}
				<span className="text-sm text-neutral-600 dark:text-neutral-400">
					Loading...
				</span>
			</div>
		</div>
	);
}
