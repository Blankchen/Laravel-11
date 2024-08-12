import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    build: {
        target: 'esnext'
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // Vue 外掛會在使用 SFC (單檔案元件) 時複寫 (Re-write) 素材 URL
                    // 以指向 Laravel 網頁伺服器。將此設定值改為 `null`，可讓 Laravel
                    // 外掛改將複寫的素材 URL 重新指向 Vite 伺服器。
                    base: null,

                    // Vue 外掛會解析絕對 URL，並將這些 URL 視為磁碟上的檔案路徑。
                    // 將此設定改為 `false`，就會使這些 URL 保持不動，以按照逾期地
                    // 參照到 public 目錄下的素材。
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(__dirname, 'resources'),
            '~': path.resolve(__dirname, 'node_modules'),
            '^': path.resolve(__dirname, 'public'),
        },
    },
});
