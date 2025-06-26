<template>
    <section class="numbers">
        <div class="container">
            <div class="row">
                <div v-for="item in numberCards" :key="item.id" class="col-lg-3">
                    <div class="num-card">
                        <div class="cont">
                            <div class="icon">
                                <img :src="item.icon" alt="icon" class="img-contain" />
                            </div>
                            <div class="num">{{ item.number }}</div>
                            <h6>{{ t(`numberCards.${item.key.replace('num-', '')}.label`) }}</h6>
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

// Get all items whose key starts with "num-" from global data
const numberCards = computed(() =>
    globalData?.value
        ?.filter(item => item.key?.startsWith('num-'))
        .map((item, index) => ({
            ...item,
            id: item.id ?? index + 1
        })) ?? []
)
</script>
