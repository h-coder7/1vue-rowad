<template>
    <div class="project-card">
      <div class="icon th-40 mb-20">
        <img :src="project.icon" alt="icon" />
      </div>
  
      <div class="info">
        <h4>{{ project.title }}</h4>
        <div class="text">{{ project.description }}</div>
  
        <button
          class="butn rounded-3 hvr-txt-trans hvr-scale mt-30 md-butn"
          @click="$emit('open', project)"
        >
          <div class="txt" :data-text="project.buttonText || 'مشاهدة الآن'">
            <span>{{ project.buttonText || 'تفاصيل المشروع' }}</span>
          </div>
          <i class="fal fa-arrow-up-left ms-2"></i>
        </button>
      </div>
  
      <img src="/images/fav-lg-wh.png" alt="" class="fav" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  
  defineEmits(['open'])
  </script>
  