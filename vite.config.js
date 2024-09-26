import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser when running `npm run dev`
    port: 3000, // Set the development server port (optional)
    strictPort: true, // Fail if the port is already in use (optional)
  },
  build: {
    outDir: "dist", // Customize the output directory for build
    assetsDir: "assets", // Customize the directory for assets
  },
});
