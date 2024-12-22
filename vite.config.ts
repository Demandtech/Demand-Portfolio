import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@nextui-org")) {
              return "nextui";
            } else if (id.includes("framer-motion")) {
              return "motion";
            } else if (id.includes("@tsparticles")) {
              return "particles";
            }

            return "vendor";
          }
        },
      },
    },
  },
});
