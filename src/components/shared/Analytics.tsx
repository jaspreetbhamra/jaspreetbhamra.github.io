import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics Measurement ID
// Replace with your actual GA4 Measurement ID (format: G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

// Declare gtag function for TypeScript
declare global {
	interface Window {
		gtag?: (
			command: string,
			targetId: string,
			config?: Record<string, unknown>,
		) => void;
		dataLayer?: unknown[];
	}
}

export function Analytics() {
	const location = useLocation();

	useEffect(() => {
		// Only load analytics in production and if measurement ID is set
		if (!GA_MEASUREMENT_ID || import.meta.env.DEV) {
			console.log("Analytics disabled in development");
			return;
		}

		// Load Google Analytics script
		const script1 = document.createElement("script");
		script1.async = true;
		script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
		document.head.appendChild(script1);

		const script2 = document.createElement("script");
		script2.innerHTML = `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${GA_MEASUREMENT_ID}');
		`;
		document.head.appendChild(script2);

		return () => {
			// Cleanup scripts on unmount
			document.head.removeChild(script1);
			document.head.removeChild(script2);
		};
	}, []);

	// Track page views on route change
	useEffect(() => {
		if (!GA_MEASUREMENT_ID || import.meta.env.DEV) return;

		if (window.gtag) {
			window.gtag("config", GA_MEASUREMENT_ID, {
				page_path: location.pathname + location.search,
			});
		}
	}, [location]);

	return null; // This component doesn't render anything
}
