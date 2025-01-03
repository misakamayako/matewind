import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "main",
		lib: {
			entry: "./src/index.ts",
			formats: ["es", "cjs", "umd"],
			name: "tailmate",
		},
	},
});
