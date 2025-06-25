<template>
    <div class="services-pg">
        <IncludeNavbar />
        <IncludeInnerHeader title="الخدمات" />

        <!-- Services Section -->
        <ServicesSection :services="services" @select="selectedService = $event" />

        <HomeClients />
        <IncludeFooter />

        <!-- Modal -->
        <div class="modal fade modal-service" id="modal-service" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="selectedService" class="project-det text-center pb-50">
                            <div class="section-title mb-40">
                                <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20 fsz-12">
                                    <span class="text-grad"> تفاصيل الخدمة </span>
                                </h6>
                                <h2 class="fsz-30"> {{ selectedService.title }} </h2>
                            </div>
                            <div class="icon th-80">
                                <img :src="selectedService.icon" alt="" class="img-contain" />
                            </div>
                            <div class="text fsz-18 mt-30 cr-777">
                                {{ selectedService.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServicesSection from '@/components/services/ServicesSection.vue'

const selectedService = ref(null)

const services = [
    {
        title: 'الاستشارات',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية...',
        icon: '/images/icons/ser1.png',
    },
    {
        title: 'تأجير العمالة',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية...',
        icon: '/images/icons/ser2.png',
    },
    {
        title: 'التعاقد والدعم',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من الخدمات الحيوية...',
        icon: '/images/icons/ser3.png',
    },
]

onMounted(() => {
    const modalEl = document.getElementById('modal-service')
    if (modalEl) {
        modalEl.addEventListener('hidden.bs.modal', () => {
            selectedService.value = null
        })
    }
})
</script>