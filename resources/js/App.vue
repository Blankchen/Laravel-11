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
                        <!-- main -->
                        <slot></slot>
                    </el-main>
                    <el-footer>
                        <Footer></Footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
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
