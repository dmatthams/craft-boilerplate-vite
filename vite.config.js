import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
require('dotenv').config()

let url = (new URL(process.env.PRIMARY_SITE_URL));
host = url.hostname;

// https://vitejs.dev/config/
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: './web/dist/',
        rollupOptions: {
            input: {
                app: './src/js/app.js',
            }
        },
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        ViteRestart({
            reload: [
                './templates/**/*',
            ],
        }),
    ],
    server: {
        host: '0.0.0.0',
        hmr: {
            host: host,
            port: '3000',
            path: '/',
        },
    },
});