<template>
    <div class="home">
        <h1>Welcome to the home page</h1>
    </div>
</template>

<script>
export default {
    async mounted() {
        const { default: styles } = await import("@/sass/home.scss");
        styles.use();
    },
};
</script>
