import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	base: command === "serve" ? "/" : "/jaspreetbhamra.github.io/",
	plugins: [
		{ enforce: "pre", ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }) },
		react(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@/components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@/pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
			"@/styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
			"@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
			"@/app": fileURLToPath(new URL("./src/app", import.meta.url)),
			"@/content": fileURLToPath(new URL("./content", import.meta.url)),
		},
	},
	test: {
		globals: true,
		"environment": "jsdom",
		setupFiles: "./src/test/setup.ts",
	},
}));
