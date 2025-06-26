<template>
  <section class="numbers">
    <div class="container">
      <div class="row">
        <div v-for="item in numberCards" :key="item.id" class="col-lg-3">
          <div class="num-card">
            <div class="cont">
              <div class="icon">
                <img :src="item.icon" alt="icon" class="img-contain" />
              </div>
              <div class="num">{{ item.number }}</div>
              <h6>{{ t(`numberCards.${item.key.replace('num-', '')}.label`) }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Reactive array to store number cards data
const numberCards = ref([])

// Fetch number cards from external API
const loadNumberCards = async () => {
  try {
    const res = await fetch('https://h-coder7.github.io/nuxt-files/files.json')
    const data = await res.json()

    // Filter items with keys that start with "num-" and ensure each item has an id
    numberCards.value = data
      .filter(item => item.key?.startsWith('num-'))
      .map((item, index) => ({
        ...item,
        id: item.id ?? index + 1 // Use existing id or assign a fallback one
      }))
  } catch (err) {
    console.warn('❗ Failed to load number cards:', err)
  }
}

onMounted(loadNumberCards)
</script>

