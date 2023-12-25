<template>
    <div class="min-h-full">
        <LazyCommonsAppHeader />
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <!-- Your content -->
                <NuxtPage />
            </div>
        </main>
        <!-- <LazyCommonsAppFooter /> -->
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

useHead({
    meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
})
</script>
