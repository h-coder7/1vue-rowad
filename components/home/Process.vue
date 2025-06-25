<template>
    <section class="process pb-100">
        <div class="container">
            <div class="title-wrapper text-center col-lg-6 mx-auto">
                <h2 class="grad-title fsz-60 fw-900">
                    الجدول الزمني <br />
                    لشركة رواد الإستدامة
                </h2>
            </div>

            <div class="cards">
                <div class="row gx-5 align-items-center">
                    <template v-for="(item, index) in timeline" :key="index">

                        <div v-if="index === 0" class="col-lg-4">
                            <TimelineCard :item="item" />
                        </div>

                        <div v-if="index === 1" class="col-lg-4 d-none d-lg-block">
                            <div class="logo-wrapper text-center mt-80">
                                <a href="#" class="logo th-60">
                                    <img src="/images/logo.svg" alt="" class="img-contain" />
                                </a>
                            </div>
                        </div>

                        <div v-if="index > 0" class="col-lg-4" :class="{ 'offset-lg-1': index === 3 }">
                            <TimelineCard :item="item" reverse />
                        </div>
                    </template>
                </div>

                <div class="lines d-none d-lg-block">
                    <img src="/images/line1.png" alt="" class="line1" />
                    <img src="/images/line2.png" alt="" class="line2" />
                    <img src="/images/line3.png" alt="" class="line3" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import TimelineCard from '@/components/home/TimelineCard.vue'

const timeline = [
    {
        year: '2015',
        title: 'التأسيس',
        text: 'انطلاق شركة رواد الاستدامة برؤية لتقديم خدمات نظافة وتشغيل بمعايير عالية.',
        image: '/images/process/1.png'
    },
    {
        year: '2021',
        title: 'توسع العمليات',
        text: 'فتح فروع جديدة وتوسيع فريق العمل إلى أكثر من 200 موظف في مختلف المناطق.',
        image: '/images/process/2.png'
    },
    {
        year: '2017',
        title: 'أول عقد كبير',
        text: 'نجاح أول شراكة تشغيلية مع جهة حكومية، شكلت انطلاقة جديدة نحو التوسع المؤسسي.',
        image: '/images/process/3.png'
    },
    {
        year: '2019',
        title: 'توسيع الخدمات',
        text: 'إضافة خدمات الضيافة والإعاشة ضمن باقة الحلول المتكاملة لتلبية احتياجات متنوعة.',
        image: '/images/process/4.png'
    }
]
</script>