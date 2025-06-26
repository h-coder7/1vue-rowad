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
                                        <span> {{ t('about.more_button') }} </span>
                                    </div>
                                    <i class="fal fa-arrow-up-left ms-2"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="img-side h-100">
                            <img src="/images/about.jpg" alt="" class="img-cover radius-30" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="cards pt-50">
                <div class="row gx-5">
                    <div v-for="(card, i) in visionCards" :key="i" class="col-lg-4">
                        <div class="vision-item">
                            <div class="img">
                                <img :src="card.img" class="img-cover" alt="" />
                            </div>
                            <div class="float-info">
                                <div class="cont">
                                    <span class="icon icon-60 mb-50">
                                        <img :src="card.icon" alt="" />
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
        <img src="/images/about-shap.png" alt="" class="shap" />
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visionCards = [
    {
        key: 'goals',
        img: '/images/vs1.jpg',
        icon: '/images/icons/vs1.svg',
    },
    {
        key: 'mission',
        img: '/images/vs2.jpg',
        icon: '/images/icons/vs2.svg',
    },
    {
        key: 'vision',
        img: '/images/vs3.jpg',
        icon: '/images/icons/vs3.svg',
    },
]
</script>
