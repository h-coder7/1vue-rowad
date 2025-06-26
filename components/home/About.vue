<template>
  <section class="about section-padding">
    <div class="container">
      <div class="top-content">
        <div class="row">
          <div class="col-lg-7">
            <div class="info">
              <div class="section-title">
                <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                  <span class="text-grad">{{ t('about.section_title') }}</span>
                </h6>
                <h2 class="fsz-50">{{ t('about.main_heading') }}</h2>
                <div class="text fsz-16 cr-666 mt-15">
                  {{ t('about.description_1') }}
                </div>
                <div class="text fsz-16 cr-666 mt-15">
                  {{ t('about.description_2') }}
                </div>
                <NuxtLink to="/about" class="butn rounded-3 hvr-txt-trans hvr-scale mt-30">
                  <div class="txt" :data-text="t('about.more_button')">
                    <span>{{ t('about.more_button') }}</span>
                  </div>
                  <i class="fal fa-arrow-up-left ms-2"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="img-side h-100">
              <img :src="aboutImg" alt="about image" class="img-cover radius-30" v-if="aboutImg" />
            </div>
          </div>
        </div>
      </div>

      <div class="cards pt-50">
        <div class="row gx-5">
          <div v-for="card in visionCards" :key="card.id" class="col-lg-4">
            <div class="vision-item">
              <div class="img">
                <img :src="card.img" class="img-cover" alt="card image" />
              </div>
              <div class="float-info">
                <div class="cont">
                  <span class="icon icon-60 mb-50">
                    <img :src="card.icon" alt="card icon" />
                  </span>
                  <h3 class="card-title">{{ t(`visionCards.${card.key}.title`) }}</h3>
                  <div class="text">{{ t(`visionCards.${card.key}.text`) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/images/about-shap.png" alt="shape" class="shap" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visionCards = ref([])
const aboutImg = ref('')

const loadData = async () => {
  try {
    const res = await fetch('https://h-coder7.github.io/nuxt-files/files.json')
    const data = await res.json()

    // Filter and assign IDs if missing
    visionCards.value = data
      .filter(item => ['goals', 'mission', 'vision'].includes(item.key))
      .map((item, index) => ({
        ...item,
        id: item.id ?? index + 1
      }))

    // Get the about section image
    const aboutImageItem = data.find(item => item.key === 'about-sec-img')
    if (aboutImageItem) {
      aboutImg.value = aboutImageItem.img
    }
  } catch (e) {
    console.warn('❗ Failed to load about section data:', e)
  }
}

onMounted(loadData)
</script>
