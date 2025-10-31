const LoadingFallback = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-900">
			<div className="text-center">
				<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-400 mx-auto mb-4" />
				<p className="text-slate-300 text-lg">Loading...</p>
			</div>
		</div>
	);
};

export default LoadingFallback;
