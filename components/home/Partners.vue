<template>
  <section class="partners section-padding">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="partners-wrapper">
            <div class="num">80</div>
            <h4 class="fsz-35 mt-20">{{ t('partners.heading') }}</h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="logos">
            <div class="row gx-0">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="col-lg-4 col-6"
              >
                <a href="#" class="partner">
                  <img :src="partner.img" alt="partner logo" class="img-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed, inject } from 'vue'

const { t } = useI18n()
const globalData = inject('globalData')

// Get partner items from global data
const partners = computed(() =>
  globalData?.value
    ?.filter(item => item.key?.startsWith('partner-'))
    .map((item, index) => ({
      id: item.id ?? index + 1,
      img: item.img
    })) ?? []
)
</script>
