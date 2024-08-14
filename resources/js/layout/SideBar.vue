<script setup>
import { defineModel } from 'vue';

const model = defineModel({ required: true })
</script>

<template>
<el-menu :collapse="model">
    <el-sub-menu index="1">
        <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
        <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
    </el-menu-item>
</el-menu>

</template>
