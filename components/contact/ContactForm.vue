<template>
    <div class="form-wrapper mt-5 mt-lg-0">
        <div class="form">
            <h6 class="fsz-20 mb-4">{{ t('form.contactNow') }}</h6>
            <div class="row">
                <!-- Name -->
                <div class="col-lg-6">
                    <div class="form-group icon-group">
                        <div class="label fsz-11 mb-10">{{ t('form.name') }}*</div>
                        <input v-model="form.name" type="text" class="form-control"
                            :placeholder="t('form.namePlaceholder')" />
                        <span class="icon"><i class="fal fa-user"></i></span>
                        <div class="text-danger fsz-12 mt-1" v-if="errors.name">{{ errors.name }}</div>
                    </div>
                </div>
    
                <!-- Subject -->
                <div class="col-lg-6">
                    <div class="form-group select-group">
                        <div class="label fsz-11 mb-10">{{ t('form.subject') }}</div>
                        <select v-model="form.subject" class="form-control form-select">
                            <option value="">{{ t('form.selectSubject') }}</option>
                            <option value="اقتراح">اقتراح</option>
                            <option value="استفسار">استفسار</option>
                        </select>
                    </div>
                </div>
    
                <!-- Phone -->
                <div class="col-lg-12">
                    <div class="form-group icon-group">
                        <div class="label fsz-11 mb-10">{{ t('form.phone') }}*</div>
                        <div class="input-group mb-3">
                            <input v-model="form.phone" type="text" class="form-control"
                                :placeholder="t('form.phonePlaceholder')" />
                            <div class="form-group select-group mt-0 col-5">
                                <select v-model="form.country" class="form-control form-select">
                                    <option value="+966">{{ t('form.sa') }}</option>
                                    <option value="+20">{{ t('form.eg') }}</option>
                                </select>
                            </div>
                        </div>
                        <span class="icon"><i class="fal fa-phone"></i></span>
                        <div class="text-danger fsz-12 mt-1" v-if="errors.phone">{{ errors.phone }}</div>
                    </div>
                </div>
    
                <!-- Email -->
                <div class="col-lg-6">
                    <div class="form-group icon-group">
                        <div class="label fsz-11 mb-10">{{ t('form.email') }}*</div>
                        <input v-model="form.email" type="text" class="form-control"
                            :placeholder="t('form.emailPlaceholder')" />
                        <span class="icon"><i class="fal fa-at"></i></span>
                        <div class="text-danger fsz-12 mt-1" v-if="errors.email">{{ errors.email }}</div>
                    </div>
                </div>
    
                <!-- Company Field -->
                <div class="col-lg-6">
                    <div class="form-group">
                        <div class="label fsz-11 mb-10">{{ t('form.industry') }}</div>
                        <input v-model="form.industry" type="text" class="form-control"
                            :placeholder="t('form.industryPlaceholder')" />
                    </div>
                </div>
    
                <!-- Message -->
                <div class="col-lg-12">
                    <div class="form-group icon-group">
                        <div class="label fsz-11 mb-10">{{ t('form.notes') }}*</div>
                        <textarea v-model="form.notes" rows="3" class="form-control"
                            :placeholder="t('form.notesPlaceholder')"></textarea>
                        <span class="icon"><i class="fal fa-envelope"></i></span>
                        <div class="text-danger fsz-12 mt-1" v-if="errors.notes">{{ errors.notes }}</div>
                    </div>
                </div>
            </div>
    
            <button @click="submitForm" class="butn rounded-3 hvr-txt-trans hvr-scale mt-30 col-lg-5">
                <div class="txt" :data-text="t('form.submit')">
                    <span>{{ t('form.submit') }}</span>
                </div>
                <i class="fal fa-paper-plane ms-2"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
    t: {
        type: Function,
        required: true
    }
})

const form = reactive({
    name: '',
    subject: '',
    phone: '',
    country: '+966',
    email: '',
    industry: '',
    notes: ''
})

const errors = reactive({
    name: '',
    phone: '',
    email: '',
    notes: ''
})

function validateForm() {
    errors.name = form.name.trim() ? '' : props.t('form.required')
    errors.phone = form.phone.trim() ? '' : props.t('form.required')
    errors.email = form.email.includes('@') ? '' : props.t('form.required')
    errors.notes = form.notes.trim() ? '' : props.t('form.required')

    return !errors.name && !errors.phone && !errors.email && !errors.notes
}

async function submitForm() {
    if (!validateForm()) return

    const body = new FormData()
    body.append('name', form.name)
    body.append('subject', form.subject)
    body.append('phone', `${form.country}${form.phone}`)
    body.append('email', form.email)
    body.append('industry', form.industry)
    body.append('notes', form.notes)

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body
        })

        const result = await res.json()
        if (res.ok) {
            alert(result.message || props.t('form.success'))
        } else {
            alert(result.message || props.t('form.error'))
        }
    } catch (err) {
        console.error('Contact Error:', err)
        alert(props.t('form.error'))
    }
}
</script>