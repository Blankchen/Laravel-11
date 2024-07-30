<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <script src="https://unpkg.com/vue@3"></script>
        <!-- import CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
        {{-- dark mode --}}
        <link rel="stylesheet" href="https://unpkg.com/element-plus/theme-chalk/dark/css-vars.css">
        <!-- import JavaScript -->
        <script src="https://unpkg.com/element-plus"></script>
        <script src="//unpkg.com/@element-plus/icons-vue"></script>
        <title>Element Plus demo</title>
        <!-- JS component -->
        <script src="{{ asset('js/components/ppComponent.js') }}"></script>
    </head>
    <body >
        <div id="app">
            <el-container class="layout-container">
                @include('common.sidebar')
                <el-container>
                    @include('common.header')
                    <el-main>
                        @section('content') @show
                    </el-main>
                    @include('common.footer')
                </el-container>
            </el-container>
        </div>
        <script>
        const App = {
            data() {
            return {
                // menu
                isCollapse: false,
            };
            },
            methods: {
                toggleCollapse() {
                    this.isCollapse = !this.isCollapse
                }
            }
        };
        const app = Vue.createApp(App);
        app.use(ElementPlus);
        app.use(ppPlugin);
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        app.mount("#app");
        </script>
    </body>
</html>
