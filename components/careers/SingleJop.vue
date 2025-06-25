<template>
    <section class="jops section-padding" v-if="job">
      <div class="container">
        <div class="row">
          <!-- Job Details -->
          <div class="col-lg-7">
            <JobDetails :job="job" :t="t" />
          </div>
  
          <!-- Application Form -->
          <div class="col-lg-5">
            <JobApplyForm :job="job" :t="t" />
          </div>
        </div>
      </div>
      <img src="/images/about-shap.png" alt="" class="shap" />
    </section>
  </template>
  
  <script setup>
//   import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  import JobDetails from '@/components/careers/JobDetails.vue'
  import JobApplyForm from '@/components/careers/JobApplyForm.vue'
  
  function t(key) {
    const translations = {
      'job.details': 'تفاصيل الوظيفة',
      'form.applyNow': 'قدم الآن!',
      'form.name': 'الاسم الكامل*',
      'form.namePlaceholder': 'مثال: محمد عبد الوهاب',
      'form.phone': 'رقم الجوال*',
      'form.phonePlaceholder': 'XXXX00-43222',
      'form.email': 'البريد الإلكتروني*',
      'form.emailPlaceholder': 'example@email.com',
      'form.sa': 'السعودية (+966)',
      'form.eg': 'مصر (+20)',
      'form.cv': 'رفع السيرة الذاتية*',
      'form.cvLabel': 'السيرة الذاتية',
      'form.cvPlaceholder': 'اسم الملف المختار',
      'form.notes': 'ملاحظات (اختياري)',
      'form.notesPlaceholder': 'اكتب رسالتك هنا...',
      'form.submit': 'تقديم',
      'form.required': 'يرجى تعبئة جميع الحقول المطلوبة.',
      'form.success': 'تم إرسال الطلب بنجاح!',
      'form.error': 'حدث خطأ أثناء إرسال البيانات.'
    }
    return translations[key] || key
  }
  
  const jobs = [
    { id: 1, title: 'مدير مبيعات', requirements: ['مؤهل عالٍ', 'مهارات تواصل', 'خبرة 5 سنوات'], description: '...احترافية.' },
    { id: 2, title: 'مشرف موارد بشرية', requirements: ['بكالوريوس إدارة أعمال', 'خبرة 3 سنوات', 'مهارات تحليل'], description: '...الجودة.' },
    { id: 3, title: 'محاسب مالي', requirements: ['بكالوريوس تجارة', 'خبرة محاسبية', 'معرفة بالمعايير المحاسبية'], description: '...الأنظمة.' },
    { id: 4, title: 'مندوب مبيعات', requirements: ['مهارات إقناع', 'لباقة في الحديث', 'رخصة قيادة'], description: '...إيجابي.' }
  ]
  
  const route = useRoute()
  const job = ref(null)
  
  onMounted(() => {
    const jobId = Number(route.params.id)
    job.value = jobs.find(j => j.id === jobId)
  })
  </script>
  