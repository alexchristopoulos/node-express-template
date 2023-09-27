import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      controllers: path.resolve(__dirname, "./src/controllers"),
    },
  },
});
