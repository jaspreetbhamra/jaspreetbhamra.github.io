import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: command === "serve" ? "/" : "/jaspreetbhamra.github.io/",
	// base: '/',
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup.js",
	},
});
