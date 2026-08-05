import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("ENV:", env);

  return {
    plugins: [react()],

    server: {
      proxy: {
        "/api/openaq": {
          target: "https://api.openaq.org",
          changeOrigin: true,
          secure: true,

          headers: {
            "X-API-Key": env.OPENAQ_API_KEY,
          },

          rewrite: (ruta) => ruta.replace(/^\/api\/openaq/, ""),
        },
      },
    },
  };
});