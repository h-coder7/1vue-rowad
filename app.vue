<template v-if="process.client">
    <div>

        <Head>
            <link :href="currentLang === 'ar' ? '/lib/css/bootstrap.rtl.min.css' : '/lib/css/bootstrap.min.css'" rel="stylesheet" />
            <!-- <link rel="stylesheet" href="/swiper/css" /> -->
            <link rel="stylesheet" href="/css/main.css" />
            <!-- <link v-if="currentLang === 'en'" rel="stylesheet" href="/css/style-ltr.css" /> -->
        </Head>

        <NuxtPage />
    </div>
</template>

<script setup>
import { useLanguage } from '~/composables/useLanguage'
import { watch } from 'vue'

const { currentLang } = useLanguage()

watch(currentLang, (lang) => {
    if (typeof document !== 'undefined') {
        const isRTL = lang === 'ar'
        document.body.classList.toggle('rtl', isRTL)
        document.dir = isRTL ? 'rtl' : 'ltr'
        document.lang = lang
    }
}, { immediate: true })
</script>
