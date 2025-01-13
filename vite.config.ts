import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(),react()],
	build: {
		outDir: "main",
		lib: {
			entry: "./src/index.ts",
			formats: ["es", "cjs"],
			name: "matewind",
		},
		rollupOptions: {
			external: ["react", /^react\/.*/, "react-dom", /react-dom\/.*/,"tailwindcss"],
		},
	},
});
