<template>
  <section class="inner-header">
    <div class="container">
      <h5 class="mb-20">{{ t(title) }}</h5>
      <div class="links fsz-13">
        <a href="/"> <i class="fad fa-home me-2"></i> {{ t('navbar.home') }} </a>
        <span class="mx-2"> / </span>
        <span>{{ t(title) }}</span>
      </div>
    </div>
    <img src="/images/fav-lg-wh.png" alt="" class="shap" />
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    default: 'about-page.inner.title'
  }
})
</script>
