<template>
    <section class="process pb-100">
        <div class="container">
            <div class="title-wrapper text-center col-lg-6 mx-auto">
                <h2 class="grad-title fsz-60 fw-900">
                    {{ t('timeline.titleLine1') }} <br />
                    {{ t('timeline.titleLine2') }}
                </h2>
            </div>

            <div class="cards">
                <div class="row gx-5 align-items-center">
                    <template v-for="(item, index) in timelineData" :key="index">
                        <div v-if="index === 0" class="col-lg-4">
                            <TimelineCard :item="item" />
                        </div>

                        <div v-if="index === 1" class="col-lg-4 d-none d-lg-block">
                            <div class="logo-wrapper text-center mt-80">
                                <a href="#" class="logo th-60">
                                    <img src="/images/logo.svg" alt="logo" class="img-contain" />
                                </a>
                            </div>
                        </div>

                        <div v-if="index > 0" class="col-lg-4" :class="{ 'offset-lg-1': index === 3 }">
                            <TimelineCard :item="item" reverse />
                        </div>
                    </template>
                </div>

                <div class="lines d-none d-lg-block">
                    <img src="/images/line1.png" alt="line1" class="line1" />
                    <img src="/images/line2.png" alt="line2" class="line2" />
                    <img src="/images/line3.png" alt="line3" class="line3" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import TimelineCard from '@/components/home/TimelineCard.vue'
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const globalData = inject('globalData')

// Get all items whose key starts with "timeline-" from global data
const timelineData = computed(() =>
    globalData?.value
        ?.filter(item => item.key?.startsWith('timeline-'))
        .map((item, index) => ({
            year: item.year ?? `Year ${index + 1}`,
            title: item.title ?? '',
            text: item.text ?? '',
            image: item.image ?? ''
        })) ?? []
)
</script>
