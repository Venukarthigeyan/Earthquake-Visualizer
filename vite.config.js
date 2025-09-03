import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      ".csb.app", // allow all CodeSandbox preview subdomains
      ".stackblitz.io" // (optional, if you also test on StackBlitz)
    ]
  }
});
