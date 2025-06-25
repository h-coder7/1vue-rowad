<template>
    <a href="#" class="service-card" @click.prevent="$emit('click')" :data-bs-toggle="showModal ? 'modal' : null"
        :data-bs-target="showModal ? '#modal-service' : null">
        <div class="icon">
            <img :src="icon" alt="" class="img-contain" />
            <img src="/images/icons/ser-line.png" alt="" class="line" />
        </div>
        <div class="info">
            <h6 class="fsz-22 fw-bold">{{ title }}</h6>
            <div class="text fsz-17 cr-777 mt-10 col-lg-11">
                {{ description }}
            </div>
            <div class="arrow-btn">
                <img src="/images/icons/arrow-lf-wh.svg" alt="" />
            </div>
        </div>
        <img src="/images/ser-bg.jpg" alt="" class="bg" />
    </a>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    icon: String,
    showModal: {
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])
</script>