<template>
    <section class="jops section-padding">
        <div class="container">
            <div class="title-wrapper mb-80">
                <div class="section-title text-center">
                    <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                        <span class="text-grad"> {{ t('jobs.label') }} </span>
                    </h6>
                    <h2 class="fsz-50"> {{ t('jobs.title') }} </h2>
                </div>
            </div>

            <div class="cards">
                <div class="row">
                    <div class="col-lg-6" v-for="job in jobs" :key="job.id">
                        <JopCard :job="job" />
                    </div>
                </div>
            </div>
        </div>

        <img src="/images/about-shap.png" alt="" class="shap" />
    </section>
</template>

<script setup>
import JopCard from '@/components/careers/CareerCard.vue'

const jobs = [
    {
        id: 1,
        title: 'مدير مبيعات',
        requirements: ['مؤهل عالى', 'مهارات تواصل', 'خبرة 5 سنوات'],
        description:
            'نعمل وفق استراتيجية واضحة تهدف إلى تحقيق التكامل بين فرق العمل الإداري، الفني، والميداني، مما يمنحنا القدرة على تقديم خدمات شاملة تتسم بالكفاءة والاحترافية.'
    },
    {
        id: 2,
        title: 'مشرف موارد بشرية',
        requirements: ['بكالوريوس إدارة أعمال', 'خبرة 3 سنوات', 'مهارات تحليل'],
        description:
            'مسؤول عن تنسيق العمليات الإدارية ودعم الموارد البشرية في الشركة من خلال متابعة الأداء وتحقيق معايير الجودة.'
    },
    {
        id: 3,
        title: 'محاسب مالي',
        requirements: ['بكالوريوس تجارة', 'خبرة محاسبية', 'دراية بالمعايير المحاسبية'],
        description:
            'يتولى تنظيم الحسابات وإعداد التقارير المالية الدقيقة لضمان إدارة مالية سليمة وتحقيق الامتثال للأنظمة.'
    },
    {
        id: 4,
        title: 'مندوب مبيعات',
        requirements: ['مهارات إقناع', 'لباقة في الحديث', 'رخصة قيادة'],
        description:
            'مسؤول عن التواصل مع العملاء وتحقيق أهداف البيع، وتقديم الشركة بأفضل صورة ممكنة.'
    }
]

function t(key) {
    const translations = {
        'jobs.label': 'الوظائف',
        'jobs.title': 'وظائفنا'
    }
    return translations[key] || key
}
</script>