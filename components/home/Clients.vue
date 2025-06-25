<template>
    <section class="clients section-padding">
        <div class="container">
            <div class="title-wrapper mb-60">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-8">
                        <div class="section-title">
                            <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20"> <span class="text-grad"> شركاء النجاح </span> </h6>
                            <h2 class="fsz-50"> نجاحاتنا تبدأ من ثقة شركائنا </h2>
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
            <Swiper class="logos logos-slider" :modules="modules" v-bind="swiperOptions" @swiper="onSwiperInit">
                <SwiperSlide v-for="(client, index) in clients" :key="index">
                    <a href="#" class="brand">
                        <img :src="client" alt="" class="img-contain">
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import { ref, nextTick } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, Autoplay, Mousewheel, Keyboard]

const prevEl = ref(null)
const nextEl = ref(null)

const swiperOptions = ref({
    // slidesPerView: 5,
    spaceBetween: 30,
    // centeredSlides: true,
    speed: 1500,
    // navigation: {},
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

const onSwiperInit = (swiper) => {
    nextTick(() => {
        swiper.params.navigation.prevEl = prevEl.value
        swiper.params.navigation.nextEl = nextEl.value
        swiper.navigation.init()
        swiper.navigation.update()
    })
}


const clients = [
    '/images/partners/7.svg',
    '/images/partners/8.svg',
    '/images/partners/9.svg',
    '/images/partners/10.svg',
    '/images/partners/11.svg',
    '/images/partners/12.svg',
    '/images/partners/11.svg',
    '/images/partners/12.svg'
]
</script>