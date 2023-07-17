import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/beer-app/",
  resolve: {
    alias: {
      "react-router-dom": require.resolve("react-router-dom"),
    },
  },
});
