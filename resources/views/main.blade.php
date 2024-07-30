<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <script src="https://unpkg.com/vue@3"></script>
        <!-- import CSS -->
        <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
        <!-- import JavaScript -->
        <script src="https://unpkg.com/element-plus"></script>
        <title>Element Plus demo</title>
        <!-- JS component -->
        <script src="{{ URL::asset('js/components/ppComponent.js') }}"></script>
    </head>
    <body >
        <div id="app">
            <el-row>
                <el-col :span="24">
                    @{{ date }}
                    <pp-date-picker v-model="date"></pp-date-picker>
                </el-col>
                <el-col :span="24">
                    @{{ select }}
                    <pp-select v-model="select" :list="[1,2,3,4,5,6]"></pp-select>
                </el-col>
            </el-row>
            <el-button>@{{ message }}</el-button>
        </div>
        <script>
        const App = {
            data() {
            return {
                date: '',
                select: '',
                message: "Hello Element Plus",
            };
            },
        };
        const app = Vue.createApp(App);
        app.use(ElementPlus);
        app.use(ppPlugin);
        app.mount("#app");
        </script>
    </body>
</html>
