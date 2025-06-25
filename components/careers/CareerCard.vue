<template>
    <div class="jop-card">
        <h5> {{ job.title }} </h5>
        <ul class="list">
            <li v-for="(item, i) in job.requirements" :key="i">
                <i class="fad fa-arrow-left me-2"></i> <span class="txt">{{ item }}</span>
            </li>
        </ul>
        <div class="text mt-15 cr-777 fsz-13 col-lg-10"> {{ job.description }} </div>
        <div>
            <NuxtLink :to="`/careers/${job.id}`" class="butn rounded-3 hvr-txt-trans hvr-scale mt-30 md-butn">
                <div class="txt" data-text="قدم الآن"><span>قدم الآن</span></div>
                <i class="fal fa-arrow-up-left ms-2"></i>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    job: {
        type: Object,
        required: true
    }
})
</script>