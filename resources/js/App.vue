<template>
    <div>
        <el-container>
            <el-header>
                <Header @toggleEvent="toggleCollapse"></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <SideBar v-model="isCollapse"></SideBar>
                </el-aside>
                <el-container>
                    <el-main>
                        Main
                        <ExampleComponent></ExampleComponent>
                        <DynamicImport />
                        <!-- <slot></slot> -->
                    </el-main>

                    <el-footer>
                        <Footer></Footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>

    <!-- <h1>How To Install Vue 3 in Laravel 10 : ZWebCourses :)</h1>
    <el-button>Test</el-button>

    <div>
        Page:
        <Page />
    </div>

    <div>
        Components:
        <ExampleComponent />
    </div>

    <div>
        Dynamic import
        <DynamicImport />
    </div> -->
</template>

<!-- ref: https://github.com/laravel/vite-plugin/issues/184 -->
<script>
import { defineAsyncComponent } from "vue";

export default {
    name: "App",
    components: {
        Header: defineAsyncComponent(() => import("./layout/Header.vue")),
        SideBar: defineAsyncComponent(() => import("./layout/SideBar.vue")),
        Footer: defineAsyncComponent(() => import("./layout/Footer.vue")),

        Page: defineAsyncComponent(() => import("./page/index.vue")),
        // ExampleComponent: defineAsyncComponent(() =>
        //     import("./components/ExampleComponent.vue")
        // ),
        // DynamicImport: defineAsyncComponent(() =>
        //     import("./components/DynamicImport.vue")
        // ),
    },
    data() {
        return {
            test123: "test123",
            // menu
            isCollapse: false,
        };
    },
    methods: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
        },
    },
};
</script>
