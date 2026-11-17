import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.PORT || process.env.PORT || 5173);
  const host = (
    env.HOSTNAME ||
    env.HOST ||
    process.env.HOSTNAME ||
    process.env.HOST ||
    "0.0.0.0"
  ).trim();

  return {
    plugins: [react()],
    server: { host, port, strictPort: true },
    preview: { host, port, strictPort: true },
  };
});
