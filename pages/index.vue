<template>
    <div>
        <h1>Welcome to the homepage</h1>

        <h1>Nuxt birthday</h1>
        <p>{{ date }}</p>
        <label for="locale-chooser">Preview a different locale</label>
        <select id="locale-chooser" v-model="locale">
            <option v-for="locale of locales" :key="locale" :value="locale">
                {{ locale }}
            </option>
        </select>
        <p>Current color: {{ color }}</p>
        <pre>{{ data }}</pre>
        <AppAlert> This is an auto-imported component </AppAlert>
    </div>
</template>
<script setup lang="ts">
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))
const color = useColor() // Same as useState('color')
const { data } = await useFetch('/api/hello')
</script>
