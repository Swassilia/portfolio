import { defineConfig } from "vite";

export default defineConfig({
    // Remplacez "portfolio-main" par le nom de votre dépôt GitHub
    base: "/portfolio/",
    build: {
        minify: "terser",
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    },
    server: {
        cors: true,
        assetsInclude: ['**/*.png', '**/*.jpg', '**/*.ttf', '**/*.wav', '**/*.json']
    }
});