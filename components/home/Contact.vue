<template>
    <section class="contact">
        <div class="container">
            <div class="content radius-20 overflow-hidden">
                <div class="row gx-0">
                    <div class="col-lg-8">
                        <div class="form-wrapper">
                            <div class="form">
                                <h6 class="fsz-20">تواصل معنا الآن!</h6>
                                <div class="row">

                                    <div class="col-lg-6">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10"> الاسم* </div>
                                            <input v-model="form.name" type="text" class="form-control"
                                                placeholder="مثال: محمد عبد الوهاب" />
                                            <span class="icon"><i class="fal fa-user"></i></span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group select-group">
                                            <div class="label fsz-11 mb-10"> الموضوع </div>
                                            <select v-model="form.subject" class="form-control form-select">
                                                <option value="اقتراح">اقتراح</option>
                                                <option value="استفسار">استفسار</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10"> رقم الجوال* </div>
                                            <input v-model="form.phone" type="text" class="form-control"
                                                placeholder="050XXXXXXX" />
                                            <span class="icon"><i class="fal fa-phone"></i></span>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10"> البريد الإلكتروني* </div>
                                            <input v-model="form.email" type="email" class="form-control"
                                                placeholder="ex@domain.com" />
                                            <span class="icon"><i class="fal fa-at"></i></span>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="label fsz-11 mb-10"> مجال الشركة </div>
                                            <input v-model="form.company" type="text" class="form-control"
                                                placeholder="مجال العمل" />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10"> الرسالة* </div>
                                            <textarea v-model="form.message" rows="3" class="form-control"
                                                placeholder="اكتب رسالتك هنا..."></textarea>
                                            <span class="icon"><i class="fal fa-envelope"></i></span>
                                        </div>
                                    </div>
                                </div>

                                <button class="butn col-lg-5 mt-30" @click="submitForm" :disabled="loading">
                                    <i class="fal fa-paper-plane me-2"></i>
                                    <span v-if="!loading"> أرسل الآن </span>
                                    <span v-else> جاري الإرسال... </span>
                                </button>

                                <p v-if="success" class="text-success mt-3">تم الإرسال بنجاح!</p>
                                <p v-if="error" class="text-danger mt-3">{{ error }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="map h-100">
                            <iframe src="https://www.google.com/maps/embed?...etc" width="100%" height="100%"
                                style="border:0;" loading="lazy" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/composables/useAxios'

const form = ref({
    name: '',
    phone: '',
    email: '',
    subject: '',
    company: '',
    message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(null)

const submitForm = async () => {
    loading.value = true
    success.value = false
    error.value = null

    try {
        await axios.post('/contact', form.value)
        success.value = true
        form.value = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            company: '',
            message: ''
        }
    } catch (err) {
        console.error(err)
        error.value = 'حدث خطأ أثناء الإرسال'
    } finally {
        loading.value = false
    }
}
</script>