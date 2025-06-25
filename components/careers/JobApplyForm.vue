<template>
  <div class="form-wrapper mt-4 mt-lg-0">
    <div class="form">
      <h6 class="fsz-20 mb-4">{{ t('form.applyNow') }}</h6>

      <!-- Name -->
      <div class="form-group icon-group mb-3">
        <div class="label fsz-11 mb-2">{{ t('form.name') }}</div>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          :placeholder="t('form.namePlaceholder')"
        />
        <span class="icon"><i class="fal fa-user"></i></span>
        <div v-if="errors.name" class="text-danger fsz-12 mt-1">{{ errors.name }}</div>
      </div>

      <!-- Phone -->
      <div class="form-group icon-group mb-3">
        <div class="label fsz-11 mb-2">{{ t('form.phone') }}</div>
        <div class="input-group">
          <input
            v-model="form.phone"
            type="text"
            class="form-control"
            :placeholder="t('form.phonePlaceholder')"
          />
          <div class="form-group select-group mt-0 col-5">
            <select v-model="form.country" class="form-control form-select">
              <option value="+966">{{ t('form.sa') }}</option>
              <option value="+20">{{ t('form.eg') }}</option>
            </select>
          </div>
        </div>
        <span class="icon"><i class="fal fa-phone"></i></span>
        <div v-if="errors.phone" class="text-danger fsz-12 mt-1">{{ errors.phone }}</div>
      </div>

      <!-- Email -->
      <div class="form-group icon-group mb-3">
        <div class="label fsz-11 mb-2">{{ t('form.email') }}</div>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          :placeholder="t('form.emailPlaceholder')"
        />
        <span class="icon"><i class="fal fa-at"></i></span>
        <div v-if="errors.email" class="text-danger fsz-12 mt-1">{{ errors.email }}</div>
      </div>

      <!-- CV Upload -->
      <div class="form-group mb-3">
        <div class="label fsz-11 mb-2">{{ t('form.cv') }}</div>
        <div class="up_group">
          <input type="file" name="cv" class="file" @change="handleFileChange" />
          <div class="input-group">
            <span class="input-group-append">{{ t('form.cvLabel') }}</span>
            <input type="text" class="input_ques form-control" disabled :value="fileName" :placeholder="t('form.cvPlaceholder')" />
          </div>
        </div>
        <div v-if="errors.file" class="text-danger fsz-12 mt-1">{{ errors.file }}</div>
      </div>

      <!-- Notes -->
      <div class="form-group icon-group mb-4">
        <div class="label fsz-11 mb-2">{{ t('form.notes') }}</div>
        <textarea
          v-model="form.notes"
          rows="3"
          class="form-control"
          :placeholder="t('form.notesPlaceholder')"
        ></textarea>
        <span class="icon"><i class="fal fa-envelope"></i></span>
      </div>

      <!-- Submit -->
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
import { reactive, ref } from 'vue'

const props = defineProps({
  job: Object,
  t: Function
})

// Form data
const form = reactive({
  name: '',
  phone: '',
  country: '+966',
  email: '',
  notes: ''
})

// Errors
const errors = reactive({
  name: '',
  phone: '',
  email: '',
  file: ''
})

const selectedFile = ref(null)
const fileName = ref('')

// Handle file
function handleFileChange(e) {
  const file = e.target.files[0]
  selectedFile.value = file || null
  fileName.value = file ? file.name : ''
  errors.file = ''
}

// Validate inputs
function validateForm() {
  let isValid = true

  if (!form.name.trim()) {
    errors.name = props.t('form.required')
    isValid = false
  } else {
    errors.name = ''
  }

  if (!form.phone.trim()) {
    errors.phone = props.t('form.required')
    isValid = false
  } else {
    errors.phone = ''
  }

  if (!form.email.trim() || !form.email.includes('@')) {
    errors.email = props.t('form.required')
    isValid = false
  } else {
    errors.email = ''
  }

  if (!selectedFile.value) {
    errors.file = props.t('form.required')
    isValid = false
  } else {
    errors.file = ''
  }

  return isValid
}

// Submit form
async function submitForm() {
  if (!validateForm()) return

  const body = new FormData()
  body.append('name', form.name)
  body.append('phone', `${form.country}${form.phone}`)
  body.append('email', form.email)
  body.append('notes', form.notes)
  body.append('cv', selectedFile.value)
  body.append('job_id', props.job?.id || '')

  try {
    const res = await fetch('/api/job-apply', {
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
    console.error('Submission Error:', err)
    alert(props.t('form.error'))
  }
}
</script>
