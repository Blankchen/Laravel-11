<template>
    <h1>
        How To Install Vue 3 in Laravel 10 : ZWebCourses :)
    </h1>
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
        <DynamicImport/>
    </div>
</template>

<!-- ref: https://github.com/laravel/vite-plugin/issues/184 -->
<script>
import { defineAsyncComponent } from "vue";

export default {
    name: "App",
    components: {
        Page: defineAsyncComponent(() => import('./components/page/index.vue')),
        ExampleComponent: defineAsyncComponent(() => import('./components/ExampleComponent.vue')),
        DynamicImport: defineAsyncComponent(() => import('./components/DynamicImport.vue')),
    },
}
</script>
