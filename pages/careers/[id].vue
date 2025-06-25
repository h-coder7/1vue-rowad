
<template>

    <div class="careers-pg">

        <!-- Header -->
        <IncludeNavbar />

        <!-- inner header -->
        <IncludeInnerHeader title="الوظائف" />

        <!-- Careers -->
        <SingleJop />

        <!-- footer -->
        <IncludeFooter />

    </div>

</template>

<script setup>
    import SingleJop from '@/components/careers/SingleJop.vue'
</script>