<template>
    <div>
      <!-- Section Title -->
      <h6 class="fsz-20 mb-10 pb-20 border-bottom">{{ t('contact.title') }}</h6>
  
      <!-- Description -->
      <div class="text fsz-14 mt-20">
        {{ t('contact.description') }}
      </div>
  
      <!-- Contact Info List -->
      <div class="contact-info mt-30">
        <ul>
          <li v-if="info.phone">
            <a :href="`tel:${info.phone}`">
              <i class="fad fa-phone me-2"></i>
              <span class="txt">{{ info.phone }}</span>
            </a>
          </li>
          <li v-if="info.email">
            <a :href="`mailto:${info.email}`">
              <i class="fad fa-envelope me-2"></i>
              <span class="txt">{{ info.email }}</span>
            </a>
          </li>
          <li v-if="info.website">
            <a :href="info.website" target="_blank">
              <i class="fad fa-at me-2"></i>
              <span class="txt">{{ info.website.replace('https://', '') }}</span>
            </a>
          </li>
        </ul>
      </div>
  
      <!-- Social Media Links -->
      <div class="social-links" v-if="hasSocial">
        <a
          v-for="(url, platform) in info.socials"
          :key="platform"
          :href="url"
          target="_blank"
        >
          <i :class="getIconClass(platform)"></i>
        </a>
      </div>
  
      <!-- Google Map -->
      <div class="map mt-30" v-if="info.mapUrl">
        <iframe
          :src="info.mapUrl"
          width="100%" height="450"
          style="border:0;" allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  // Props
  const props = defineProps({
    t: { type: Function, required: true },
    info: { type: Object, required: true }
  })
  
  // Check if social links exist
  const hasSocial = computed(() =>
    props.info.socials && Object.keys(props.info.socials).length > 0
  )
  
  // Icon class map
  function getIconClass(platform) {
    const icons = {
      linkedin: 'fab fa-linkedin-in',
      youtube: 'fab fa-youtube',
      twitter: 'fab fa-x-twitter',
      facebook: 'fab fa-facebook-f'
    }
    return icons[platform] || ''
  }
  </script>
  