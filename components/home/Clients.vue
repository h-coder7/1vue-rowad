<template>
    <section class="clients section-padding">
        <div class="container">
            <div class="title-wrapper mb-60">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-8">
                        <div class="section-title">
                            <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                                <span class="text-grad">{{ t('clients.section_title') }}</span>
                            </h6>
                            <h2 class="fsz-50">{{ t('clients.main_heading') }}</h2>
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

            <Swiper v-if="clients.length" class="logos logos-slider" :modules="modules" v-bind="swiperOptions"
                @swiper="onSwiperInit">
                <SwiperSlide v-for="client in clients" :key="client.id">
                    <a href="#" class="brand">
                        <img :src="client.img" alt="client logo" class="img-contain" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import { ref, nextTick, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

import 'swiper/css'
import 'swiper/css/navigation'

const { t } = useI18n()
const globalData = inject('globalData')

// Swiper modules
const modules = [Navigation, Autoplay, Mousewheel, Keyboard]

// Swiper navigation references
const prevEl = ref(null)
const nextEl = ref(null)

// Swiper configuration options
const swiperOptions = ref({
    spaceBetween: 30,
    speed: 1500,
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        787: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1200: { slidesPerView: 5 }
    }
})

// Initialize swiper navigation after DOM is ready
const onSwiperInit = (swiper) => {
    nextTick(() => {
        swiper.params.navigation.prevEl = prevEl.value
        swiper.params.navigation.nextEl = nextEl.value
        swiper.navigation.init()
        swiper.navigation.update()
    })
}

// Get client logos from global data
const clients = computed(() =>
    globalData?.value
        ?.filter(item => item.key?.startsWith('client'))
        .map((item, index) => ({
            ...item,
            id: item.id || `client-${index + 1}`
        })) ?? []
)
</script>
