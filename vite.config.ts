import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";
import { jsonX } from "vite-plugin-jsonx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), svelte(), jsonX()],
});
