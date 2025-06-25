<template>
    <header>
        <div class="container">
            <h6 class="fsz-22 mb-20">{{ t('hero.welcome') }}</h6>
            <h1>{{ t('hero.main') }}</h1>
            <div class="btns mt-50">
                <NuxtLink  to="/contact" class="butn rounded-3 hvr-txt-trans hvr-scale"> <div class="txt" :data-text="t('hero.contact')"><span> {{ t('hero.contact') }} </span></div> <i class="fal fa-arrow-up-left ms-2"></i> </NuxtLink>
                <NuxtLink  to="/services" class="butn butn-white rounded-3 hvr-txt-trans hvr-scale ms-3"> <div class="txt" :data-text="t('hero.services')"><span> {{ t('hero.services') }} </span></div> <i class="fal fa-arrow-up-left ms-2"></i> </NuxtLink>
            </div>
        </div>
        <img src="/images/hero-shap.png" alt="Hero Shape" class="shap" />
    </header>
</template>

<script setup>
const translations = {
    hero: {
        welcome: 'مرحباً بكم في شركة رواد الاستدامة',
        main: 'شركة رائدة تقدم حلولاً متكاملة في مجالات التشغيل والصيانة والضيافة والنظافة، بخبرة واسعة ورؤية استراتيجية جعلتنا في طليعة الشركات المتخصصة.',
        contact: 'تواصل معنا',
        services: 'خدماتنا'
    }
}

const t = (key) => {
    const keys = key.split('.')
    return keys.reduce((obj, k) => obj?.[k], translations) || key
}
</script>
