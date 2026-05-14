import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// npm install tailwindcss @tailwindcss/vite --legacy-peer-deps
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
