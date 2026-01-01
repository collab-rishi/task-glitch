import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
