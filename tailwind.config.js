/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
			},
			colors: {
				// Neutral palette for light/dark modes
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#0a0a0a",
				},
				// Minimal accent colors
				accent: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#bae6fd",
					300: "#7dd3fc",
					400: "#38bdf8",
					500: "#0ea5e9",
					600: "#0284c7",
					700: "#0369a1",
					800: "#075985",
					900: "#0c4a6e",
				},
			},
			spacing: {
				18: "4.5rem",
				112: "28rem",
				128: "32rem",
			},
			maxWidth: {
				"8xl": "88rem",
				content: "72rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				"soft-sm": "0 1px 2px 0 rgb(0 0 0 / 0.03)",
				soft: "0 2px 8px 0 rgb(0 0 0 / 0.04)",
				"soft-md": "0 4px 12px 0 rgb(0 0 0 / 0.05)",
				"soft-lg": "0 8px 24px 0 rgb(0 0 0 / 0.06)",
				"soft-xl": "0 12px 32px 0 rgb(0 0 0 / 0.08)",
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "72rem",
					},
				},
			},
		},
	},
	plugins: [],
};
