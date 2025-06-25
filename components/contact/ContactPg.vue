<template>
    <section class="contact-pg-st2 section-padding">
        <div class="container">
            <!-- Title Section -->
            <div class="title-wrapper col-lg-7 mx-auto mb-80">
                <div class="section-title text-center">
                    <h6 class="d-inline-block py-2 px-4 radius-8 fw-bold mb-20 bg-grad1">
                        <span>{{ t('contact.subtitle') }}</span>
                    </h6>
                    <h2 class="fsz-50">{{ t('contact.title') }}</h2>
                    <div class="text fsz-18 mt-20">
                        {{ t('contact.description') }}
                    </div>
                </div>
            </div>

            <!-- Contact Info + Form -->
            <div class="contact-wrapper">
                <div class="row justify-content-between">
                    <div class="col-lg-5">
                        <ContactInfo :t="t" :info="info" />
                    </div>
                    <div class="col-lg-6">
                        <ContactForm :t="t" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-img">
            <img src="/images/contact2.jpg" alt="" class="img-cover" />
        </div>
        <img src="/images/about-shap.png" alt="" class="shap" />
    </section>
</template>

<script setup>
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

// Fake contact data (temporarily)
const info = {
    phone: '0559191558',
    email: 'info@rowad-es.com',
    website: 'https://www.rowad-es.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=...',
    socials: {
        linkedin: 'https://www.linkedin.com/company/example',
        youtube: 'https://www.youtube.com/channel/example',
        twitter: 'https://twitter.com/example',
        facebook: 'https://facebook.com/example'
    }
}

// Local translation function (temporary)
function t(key) {
    const translations = {
        'contact.subtitle': 'اتصل بنا',
        'contact.title': 'يسعدنا تواصلك معنا',
        'contact.description':
            'نعمل وفق استراتيجية واضحة تهدف إلى تحقيق التكامل بين فرق العمل الإداري، الفني، والميداني، مما يمنحنا القدرة على تقديم خدمات شاملة تتسم بالكفاءة والاحترافية.',
        'form.applyNow': 'تواصل معنا الآن!',
        'form.name': 'الاسم',
        'form.namePlaceholder': 'مثال: محمد عبد الوهاب',
        'form.phone': 'رقم الجوال',
        'form.phonePlaceholder': 'XXXX00-43222',
        'form.email': 'البريد الإلكتروني',
        'form.emailPlaceholder': 'example@email.com',
        'form.notes': 'رسالتك',
        'form.contactNow': 'تواصل معنا الآن!',
        'form.subject': 'الموضوع',
        'form.selectSubject': 'اختر الموضوع',
        'form.industry': 'مجال الشركة',
        'form.industryPlaceholder': 'مثال: تقنية المعلومات',
        'form.notesPlaceholder': 'اكتب رسالتك هنا...',
        'form.submit': 'أرسل الآن',
        'form.required': 'يرجى تعبئة جميع الحقول المطلوبة.',
        'form.success': 'تم إرسال الرسالة بنجاح!',
        'form.error': 'حدث خطأ أثناء الإرسال.',
        'form.sa': 'السعودية (+966)',
        'form.eg': 'مصر (+20)'
    }
    return translations[key] || key
}
</script>