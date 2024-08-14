import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";
import {globSync} from "glob";

let input = [];
let files = globSync(['resources/js/*.js', 'resources/scss/*.scss'])
files.forEach(file => {
    input.push(file.replace(/[\\\/]+/g, '/'));
});

export default (mode) => {
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        build: {
            target: "esnext",

            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
        // https://vitejs.dev/config/server-options#server-proxy
        server: {
            proxy: {
                // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
                [env.VITE_APP_BASE_API]: {
                    target: "http://jsonplaceholder.typicode.com",
                    changeOrigin: true,
                    rewrite: (path) =>
                        path.replace("/^" + env.VITE_APP_BASE_API, ""),
                },
            },
        },
        plugins: [
            laravel({
                input,
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
                vue: "vue/dist/vue.esm-bundler.js",
                "@": path.resolve(__dirname, "resources/js"),
                "~": path.resolve(__dirname, "node_modules"),
                "^": path.resolve(__dirname, "public"),
            },
        },
    });
};
