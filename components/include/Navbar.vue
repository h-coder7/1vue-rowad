<template>
    <nav class="navbar navbar-expand-lg wow fadeInUp">
        <div class="container-fluid p-0">
            <NuxtLink class="navbar-brand" to="/">
                <img src="/images/logo.svg" alt="logo" class="logo" />
            </NuxtLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/" active-class="active">
                            {{ t('navbar.home') }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about" active-class="active">
                            {{ t('navbar.about') }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/Ceo" active-class="active">
                            {{ t('navbar.ceo') }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/services" active-class="active">
                            {{ t('navbar.services') }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/projects" active-class="active">
                            {{ t('navbar.projects') }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/careers" active-class="active">
                            {{ t('navbar.careers') }}
                        </NuxtLink>
                    </li>
                </ul>

                <div class="nav-side d-flex align-items-center">
                    <div class="links">
                        <a href="#" class="fsz-16 pe-4 me-4 border-end fw-bold d-inline-flex">
                            <i class="fas fa-comments fsz-20 main-color me-2"></i>
                            <span class="txt">0503025916</span>
                        </a>
                        <button @click="toggleLanguage" class="btn switch-lang fsz-16">
                            {{ t('navbar.change_language') }}
                            <span class="icon ms-2">
                                <i class="fas fa-circle dot"></i>
                                <small class="ar">AR</small>
                                <small class="en">EN</small>
                            </span>
                        </button>
                        <NuxtLink to="/contact" class="more-btn ms-4">
                            {{ t('navbar.contact') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useI18n()
const { toggleLanguage } = useLanguage()
console.log(t('navbar.projects'))
</script>