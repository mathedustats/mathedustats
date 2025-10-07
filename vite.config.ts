import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8082,
    fs: {
      // Gunakan path absolut agar Vite tidak membatasi akses (hindari error 403)
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname), // izinkan folder root proyek juga
      ],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
        "server/**",
      ],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
}));

// Plugin untuk mengintegrasikan Express ke dalam server dev Vite
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Hanya aktif di mode development
    configureServer(server) {
      const app = createServer();

      // Tambahkan Express sebagai middleware ke Vite
      server.middlewares.use(app);
    },
  };
}
