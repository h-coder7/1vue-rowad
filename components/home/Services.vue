<template>
    <section class="services section-padding">
        <div class="container">
            <div class="title-wrapper mb-80">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-6">
                        <div class="section-title">
                            <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                                <span class="text-grad"> خدماتنا </span>
                            </h6>
                            <h2 class="fsz-80"> حلول متكاملة... بمعايير استثنائية </h2>
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

            <Swiper class="services-slider" :modules="modules" v-bind="swiperOptions" @swiper="onSwiperInit">
                <SwiperSlide v-for="(item, i) in services" :key="i">
                    <ServiceCard :title="item.title" :description="item.description" :icon="item.icon" />
                </SwiperSlide>
            </Swiper>

            <div class="text-center">
                <NuxtLink  to="/services" class="butn rounded-3 hvr-txt-trans hvr-scale mt-50"> <div class="txt" data-text="عرض جميع الخدمات"><span> عرض جميع الخدمات </span></div> <i class="fal fa-arrow-up-left ms-2"></i> </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '@/components/home/ServiceCard.vue'
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

const services = [
    {
        title: 'الاستشارات',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية التي تغطي احتياجات عملائنا في مختلف القطاعات، مع الالتزام بالجودة، السرعة، والاحترافية.',
        icon: '/images/icons/ser1.png'
    },
    {
        title: 'تأجير العمالة',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية التي تغطي احتياجات عملائنا في مختلف القطاعات، مع الالتزام بالجودة، السرعة، والاحترافية.',
        icon: '/images/icons/ser2.png'
    },
    {
        title: 'التعاقد والدعم',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية التي تغطي احتياجات عملائنا في مختلف القطاعات، مع الالتزام بالجودة، السرعة، والاحترافية.',
        icon: '/images/icons/ser3.png'
    },
    {
        title: 'التعاقد والدعم',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية التي تغطي احتياجات عملائنا في مختلف القطاعات، مع الالتزام بالجودة، السرعة، والاحترافية.',
        icon: '/images/icons/ser3.png'
    }
]
</script>
