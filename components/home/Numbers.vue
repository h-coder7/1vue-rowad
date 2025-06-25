<template>
    <section class="numbers">
        <div class="container">
            <div class="row">
                <div v-for="(item, i) in numberCards" :key="i" class="col-lg-3">
                    <div class="num-card">
                        <div class="cont">
                            <div class="icon">
                                <img :src="item.icon" alt="" class="img-contain" />
                            </div>
                            <div class="num">{{ item.number }}</div>
                            <h6>{{ t(`numberCards.${item.key}.label`) }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const translations = {
    numberCards: {
        projects: { label: 'عدد المشاريع المنجزة' },
        partners: { label: 'عدد الشركاء' },
        employees: { label: 'عدد الموظفين' },
        countries: { label: 'عدد الدول التي نخدمها' }
    }
}

// دالة ترجمة بسيطة
const t = (key) => {
    const keys = key.split('.')
    return keys.reduce((obj, k) => obj?.[k], translations) || key
}

const numberCards = [
    {
        key: 'projects',
        number: '+32',
        icon: '/images/icons/num1.svg'
    },
    {
        key: 'partners',
        number: '+1002',
        icon: '/images/icons/num2.svg'
    },
    {
        key: 'employees',
        number: '+105',
        icon: '/images/icons/num3.svg'
    },
    {
        key: 'countries',
        number: '+32',
        icon: '/images/icons/num4.svg'
    }
]
</script>