<template>
    <main>
        <h1>{{ website.name }}</h1>
        <p>{{ website.description }}</p>
    </main>
</template>
<script setup>
const website = useWebsiteStore()

await callOnce(website.fetch)
</script>
