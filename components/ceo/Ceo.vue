<template>
    <section class="ceo-sec pt-100">
        <div class="container">
            <div class="ceo-card position-relative">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="info">
                            <div class="section-title mb-30">
                                <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20 fsz-12">
                                    <span class="text-grad"> رسالة من الرئيس التنفيذي </span>
                                </h6>
                                <h2 class="fsz-50 main-color"> {{ ceo.name }} </h2>
                            </div>
                            <div class="text fsz-16 op-6">
                                {{ ceo.message }}
                            </div>
                            <div class="border-cont ps-4 border-start border-2 main-border">
                                <div class="item mt-30" v-for="(point, i) in ceo.points" :key="i">
                                    <h6 class="mb-10">{{ point.title }}</h6>
                                    <div class="txt">{{ point.text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img :src="ceo.image" alt="صورة الرئيس التنفيذي" class="ceo-img" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const ceo = ref({
    name: 'رائد كردى',
    image: '/images/ceo.jpg',
    message:
        'لقد انطلقنا برؤية طموحة لبناء شركة تُحدث فرقًا حقيقيًا في السوق، من خلال تقديم خدمات عالية الجودة تعتمد على الاحترافية، المصداقية، والاستدامة. نحن لا نقدم حلولًا تقليدية، بل نسعى إلى تطوير معايير جديدة ترتقي بتجربة عملائنا، وتُعزز ثقتهم بنا كشريك موثوق.',
    points: [
        {
            title: 'قيادة برؤية... وتميز نابع من القيم',
            text: 'نقود شركة رواد الاستدامة بثقة، معتمدين على رؤيتنا المستقبلية، وقيمنا الراسخة في الجودة والشفافية والاستدامة.'
        },
        {
            title: 'قيادة برؤية... وتميز نابع من القيم',
            text: 'نقود شركة رواد الاستدامة بثقة، معتمدين على رؤيتنا المستقبلية، وقيمنا الراسخة في الجودة والشفافية والاستدامة.'
        }
    ]
})
</script>