/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// english: ['Playfair Display', 'serif'],          // for translated English text
				english: ["ui-sans-serif", "system-ui", "sans-serif"],
				elvish: ["Tengwar Feanor", "serif"], // must match your @font-face name
				display: ["ui-serif", "Georgia", "serif"],
				sans: ["ui-sans-serif", "system-ui", "sans-serif"],
			},
			colors: {
				parchment: "#fdf6e3", // light parchment-like background
				gothic: "#0f172a", // dark gothic theme background
				"parchment-burnt": "#ede3c8", // warm parchment base
			},
		},
	},
	plugins: [],
};
