<script setup>
import { Login } from "@/api/api";
import { ref } from "vue";

const counter = ref(0);

const res = Login()
console.log('axios', res)
</script>

<template>
    <el-button
        type="button"
        @click="counter++"
        class="p-2 text-white bg-gray-500 rounded"
    >
        Counter is: {{ counter }}
    </el-button>
</template>
