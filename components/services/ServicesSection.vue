<template>
    <section class="services section-padding">
        <div class="container">
            <div class="title-wrapper mb-80">
                <div class="row justify-content-between align-items-end">
                    <div class="col-lg-8">
                        <div class="section-title">
                            <h2 class="fsz-50"> حلول متكاملة... بمعايير استثنائية </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="row">
                    <div class="col-lg-4" v-for="(item, i) in services.slice(0, 3)" :key="i">
                        <ServiceCard :title="item.title" :description="item.description" :icon="item.icon"
                            :showModal="true" @click="$emit('select', item)" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '@/components/home/ServiceCard.vue'
defineProps(['services'])
defineEmits(['select'])
</script>