<template>
    <section class="contact">
        <div class="container">
            <div class="content radius-20 overflow-hidden">
                <div class="row gx-0">
                    <div class="col-lg-8">
                        <div class="form-wrapper">
                            <div class="form">
                                <h6 class="fsz-20">{{ t('contact.heading') }}</h6>
                                <div class="row">

                                    <div class="col-lg-6">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.name') }}*</div>
                                            <input v-model="form.name" type="text" class="form-control"
                                                :placeholder="t('contact.placeholders.name')" />
                                            <span class="icon"><i class="fal fa-user"></i></span>
                                            <p v-if="validationErrors.name" class="text-danger small mt-1">{{
                                                validationErrors.name }}</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group select-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.subject') }}</div>
                                            <select v-model="form.subject" class="form-control form-select">
                                                <option value="proposal">{{ t('contact.options.proposal') }}</option>
                                                <option value="inquiry">{{ t('contact.options.inquiry') }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.phone') }}*</div>
                                            <input v-model="form.phone" type="text" class="form-control"
                                                :placeholder="t('contact.placeholders.phone')" />
                                            <span class="icon"><i class="fal fa-phone"></i></span>
                                            <p v-if="validationErrors.phone" class="text-danger small mt-1">{{
                                                validationErrors.phone }}</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.email') }}*</div>
                                            <input v-model="form.email" type="email" class="form-control"
                                                :placeholder="t('contact.placeholders.email')" />
                                            <span class="icon"><i class="fal fa-at"></i></span>
                                            <p v-if="validationErrors.email" class="text-danger small mt-1">{{
                                                validationErrors.email }}</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.company') }}</div>
                                            <input v-model="form.company" type="text" class="form-control"
                                                :placeholder="t('contact.placeholders.company')" />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group icon-group">
                                            <div class="label fsz-11 mb-10">{{ t('contact.message') }}*</div>
                                            <textarea v-model="form.message" rows="3" class="form-control"
                                                :placeholder="t('contact.placeholders.message')"></textarea>
                                            <span class="icon"><i class="fal fa-envelope"></i></span>
                                            <p v-if="validationErrors.message" class="text-danger small mt-1">{{
                                                validationErrors.message }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button class="butn rounded-3 hvr-txt-trans hvr-scale mt-30" @click="submitForm">
                                    <div class="txt" :data-text="t('contact.send_now')">
                                        <span>{{ t('contact.send_now') }}</span>
                                    </div>
                                    <i class="fal fa-paper-plane ms-2"></i>
                                </button>

                                <p v-if="success" class="text-success mt-3">{{ t('contact.success_message') }}</p>
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
import { useI18n } from 'vue-i18n'
import axios from '@/composables/useAxios'

const { t } = useI18n()

const form = ref({
    name: '',
    phone: '',
    email: '',
    subject: '',
    company: '',
    message: ''
})

const success = ref(false)
const error = ref(null)
const validationErrors = ref({})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^05\d{8}$/

const validateForm = () => {
    validationErrors.value = {}

    if (!form.value.name.trim()) {
        validationErrors.value.name = t('contact.errors.name_required')
    }

    if (!form.value.phone.trim()) {
        validationErrors.value.phone = t('contact.errors.phone_required')
    } else if (!phoneRegex.test(form.value.phone)) {
        validationErrors.value.phone = t('contact.errors.phone_invalid')
    }

    if (!form.value.email.trim()) {
        validationErrors.value.email = t('contact.errors.email_required')
    } else if (!emailRegex.test(form.value.email)) {
        validationErrors.value.email = t('contact.errors.email_invalid')
    }

    if (!form.value.message.trim()) {
        validationErrors.value.message = t('contact.errors.message_required')
    }

    return Object.keys(validationErrors.value).length === 0
}

const submitForm = async () => {
    success.value = false
    error.value = null

    if (!validateForm()) return

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
        error.value = t('contact.errors.submit_failed')
    }
}
</script>
