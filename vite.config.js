import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "tnckqt-5173.csb.app", // your exact sandbox URL
      ".csb.app"             // allow all sandbox subdomains
    ]
  }
});
