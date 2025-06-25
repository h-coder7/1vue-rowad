<template>
    <section class="inner-header">
      <div class="container">
        <h5 class="mb-20"> {{ title }} </h5>
        <div class="links fsz-13">
          <a href="/"> <i class="fad fa-home me-2"></i> الرئيسية </a>
          <span class="mx-2"> / </span>
          <span>{{ title }}</span>
        </div>
      </div>
      <img src="/images/fav-lg-wh.png" alt="" class="shap">
    </section>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      default: "عنوان"
    }
  })
  </script>
  