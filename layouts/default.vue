<template>
  <div v-if="ready">
    <NuxtPage />
  </div>

  <!-- Optional Loader -->
  <!-- <div v-else class="loading text-center py-5">
    <p>Loading...</p>
  </div> -->
</template>

<script setup>
import { ref, provide, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguage } from '~/composables/useLanguage'

const { currentLang } = useLanguage()
const { setLocaleMessage, locale } = useI18n()

const ready = ref(false)
const translationsUrl = 'https://raw.githubusercontent.com/h-coder7/nuxt-translations/main/translations.json'
const dataUrl = 'https://h-coder7.github.io/nuxt-files/files.json'

const globalData = ref([])

const loadTranslations = async (lang) => {
  try {
    const res = await fetch(translationsUrl)
    const data = await res.json()

    if (data[lang]) {
      setLocaleMessage(lang, data[lang])
      locale.value = lang
    } else {
      throw new Error(`No translations found for: ${lang}`)
    }
  } catch (e) {
    console.warn('❗ Translation Load Error:', e)
  }
}

const loadGlobalData = async () => {
  try {
    const res = await fetch(dataUrl)
    globalData.value = await res.json()
  } catch (e) {
    console.warn('❗ Global Data Load Error:', e)
  }
}

const loadAll = async (lang) => {
  ready.value = false
  await Promise.all([
    loadTranslations(lang),
    loadGlobalData()
  ])
  ready.value = true
}

// Provide data globally
provide('globalData', globalData)

onMounted(() => {
  loadAll(currentLang.value)
})

watch(currentLang, (lang) => {
  loadAll(lang)
})
</script>
