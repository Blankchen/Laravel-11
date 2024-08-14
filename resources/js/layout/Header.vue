<script setup>
</script>

<template>
    <div class="header">
        <div class="logo">
            Logo
        </div>
        <div class="toggle" @click="$emit('toggleEvent')">
            <el-icon :size="20"><Expand /></el-icon>
        </div>
        <div class="toolbar">
                <el-dropdown>
                    <el-icon
                        :size="20"
                        style="margin-right: 8px; margin-top: 1px"
                    >
                        <setting />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>View</el-dropdown-item>
                            <el-dropdown-item>Add</el-dropdown-item>
                            <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>Tom</span>
            </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .logo {
        width: 200px;
    }

    .toggle {
        cursor: pointer;
    }

    .toolbar {
        margin-left: auto;
    }
}
</style>
