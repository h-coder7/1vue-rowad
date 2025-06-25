<template>
    <!-- Show page only when translation is ready -->
    <div v-if="ready">
        <NuxtPage />
    </div>

    <!-- Optional: Add loader while waiting -->
    <!-- <div v-else class="loading text-center py-5">
        <p>Loading translations...</p>
    </div> -->
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguage } from '~/composables/useLanguage'
import { ref, onMounted, watch } from 'vue'

const { currentLang } = useLanguage()
const { setLocaleMessage, locale } = useI18n()

// Indicates if translations are ready
const ready = ref(false)

// GitHub raw file URL
const TRANSLATION_API_URL = 'https://raw.githubusercontent.com/h-coder7/nuxt-translations/main/translations.json'

// Load translation by language from API
const loadTranslations = async (lang) => {
    try {
        const res = await fetch(TRANSLATION_API_URL)
        const data = await res.json()

        if (data[lang]) {
            setLocaleMessage(lang, data[lang])
            locale.value = lang
        } else {
            throw new Error(`No translation found for: ${lang}`)
        }
    } catch (error) {
        console.warn('❗ Failed to load translations from API', error)
    } finally {
        ready.value = true
    }
}

// Load initial language on mount
onMounted(() => {
    loadTranslations(currentLang.value)
})

// Reload translation when language changes
watch(currentLang, (lang) => {
    ready.value = false
    loadTranslations(lang)
})
</script>