<template>
    <div class="process-item" :class="{ 'flex-row-reverse': reverse }">
        <div class="img">
            <img :src="item.image" alt="" class="img-cover" />
        </div>
        <div class="info">
            <div class="num">{{ item.year }}</div>
            <h6 class="fsz-24">{{ item.title }}</h6>
            <div class="text fsz-14 lh-2">{{ item.text }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: Object,
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>