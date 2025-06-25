<template>
    <section class="partners section-padding">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="partners-wrapper">
                        <div class="num">80</div>
                        <h4 class="fsz-35 mt-20">شركاء في جميع أنحاء العالم</h4>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="logos">
                        <div class="row gx-0">
                            <div v-for="(partner, index) in partners" :key="index" class="col-lg-4 col-6">
                                <a href="#" class="partner">
                                    <img :src="partner" alt="" class="img-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const partners = [
    '/images/partners/1.png',
    '/images/partners/2.png',
    '/images/partners/3.png',
    '/images/partners/4.png',
    '/images/partners/5.png',
    '/images/partners/6.png'
]
</script>