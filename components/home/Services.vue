<template>
    <section class="services section-padding">
        <div class="container">
            <div class="title-wrapper mb-80">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-6">
                        <div class="section-title">
                            <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                                <span class="text-grad">{{ t('services.section_title') }}</span>
                            </h6>
                            <h2 class="fsz-80">{{ t('services.main_heading') }}</h2>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="arrows mb-60">
                            <div ref="prevEl" class="swiper-button-prev"></div>
                            <div ref="nextEl" class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper v-if="services.length" class="services-slider" :modules="modules" v-bind="swiperOptions"
                @swiper="onSwiperInit">
                <SwiperSlide v-for="item in services" :key="item.id">
                    <ServiceCard :title="t(`${item.key}.title`)" :description="t(`${item.key}.description`)"
                        :icon="item.icon" />
                </SwiperSlide>
            </Swiper>

            <div class="text-center">
                <NuxtLink to="/services" class="butn rounded-3 hvr-txt-trans hvr-scale mt-50">
                    <div class="txt" :data-text="t('services.view_all')">
                        <span>{{ t('services.view_all') }}</span>
                    </div>
                    <i class="fal fa-arrow-up-left ms-2"></i>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '@/components/home/ServiceCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import { ref, nextTick, inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import 'swiper/css'
import 'swiper/css/navigation'

const { t } = useI18n()
const modules = [Navigation, Autoplay, Mousewheel, Keyboard]

const prevEl = ref(null)
const nextEl = ref(null)

const swiperOptions = ref({
    spaceBetween: 30,
    speed: 1500,
    mousewheel: false,
    keyboard: true,
    autoplay: { delay: 5000 },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        787: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
})

const onSwiperInit = (swiper) => {
    nextTick(() => {
        swiper.params.navigation.prevEl = prevEl.value
        swiper.params.navigation.nextEl = nextEl.value
        swiper.navigation.init()
        swiper.navigation.update()
    })
}

// fetch data from layout
const globalData = inject('globalData')

const services = computed(() =>
    globalData?.value
        ?.filter(item => item.key?.startsWith('services-sec.'))
        .map(item => ({
            id: item.id,
            key: item.key,
            icon: item.icon
        })) ?? []
)
</script>
