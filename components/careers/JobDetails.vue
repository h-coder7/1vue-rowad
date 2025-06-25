<template>
    <div class="card-det pt-lg-5 mt-lg-5">
        <div class="section-title mb-30">
            <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                <span class="text-grad">{{ t('job.details') }}</span>
            </h6>
            <h2 class="fsz-50">{{ job.title }}</h2>
        </div>

        <ul class="mt-30">
            <li v-for="(req, i) in job.requirements" :key="i" class="my-3 fsz-18">
                <i class="fad fa-arrow-left-long main-color me-3"></i> {{ req }}
            </li>
        </ul>

        <div class="text fsz-16 cr-666 mt-20 col-lg-10">
            {{ job.description }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    job: {
        type: Object,
        required: true
    },
    t: {
        type: Function,
        required: true
    }
})
</script>