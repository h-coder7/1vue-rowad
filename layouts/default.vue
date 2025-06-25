<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguage } from '~/composables/useLanguage'
import { onMounted, watch } from 'vue'

const { currentLang } = useLanguage()
const { setLocaleMessage, locale } = useI18n()

// Fallback translations in case API request fails
const fallbackTranslations = {
    ar: {
        navbar: {
            home: 'الهوم',
            about: 'من نحن',
            ceo: 'كلمة الرئيس التنفيذي',
            services: 'خدماتنا',
            projects: 'المشاريع',
            careers: 'الوظائف',
            contact: 'تواصل معنا',
            change_language: 'تغيير اللغة'
        }
    },
    en: {
        navbar: {
            home: 'Home',
            about: 'About Us',
            ceo: 'CEO Message',
            services: 'Our Services',
            projects: 'Projects',
            careers: 'Careers',
            contact: 'Contact Us',
            change_language: 'Change Language'
        }
    }
}

// Load translation from API or fallback if API is unavailable
const loadTranslations = async (lang) => {
    try {
        const res = await fetch('https://mocki.io/v1/4778f881-b746-4f05-8118-aa56f56a5bc3')
        const data = await res.json()

        if (data[lang]) {
            setLocaleMessage(lang, data[lang])
            locale.value = lang
        } else {
            throw new Error(`No translation found for language: ${lang}`)
        }
    } catch (error) {
        console.warn(`❗ Failed to load translations from API. Falling back to local data`, error)

        const fallback = fallbackTranslations[lang]
        if (fallback) {
            setLocaleMessage(lang, fallback)
            locale.value = lang
        }
    }
}

// Load translations on initial mount
onMounted(() => {
    loadTranslations(currentLang.value)
})

// Reload translations when language changes
watch(currentLang, (lang) => {
    loadTranslations(lang)
})
</script>