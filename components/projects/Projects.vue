<template>
    <section class="projects section-padding">
        <div class="container">
            <div class="title-wrapper mb-80">
                <div class="section-title text-center">
                    <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20">
                        <span class="text-grad"> {{ t('projects.label') }} </span>
                    </h6>
                    <h2 class="fsz-50"> {{ t('projects.title') }} </h2>
                </div>
            </div>

            <div class="cards">
                <div class="row gx-5">
                    <div class="col-lg-4" v-for="item in projects" :key="item.id">
                        <ProjectCard :project="item" @open="openModal" />
                    </div>
                </div>
            </div>
        </div>

        <img src="/images/about-shap.png" alt="" class="shap" />

        <div class="modal fade modal-project" id="modal-project" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="project-det text-center pb-50" v-if="selectedProject">
                            <div class="section-title mb-40">
                                <h6 class="d-inline-block py-2 px-4 border radius-8 fw-bold mb-20 fsz-12">
                                    <span class="text-grad"> {{ t('projects.modalLabel') }} </span>
                                </h6>
                                <h2 class="fsz-30">{{ selectedProject.title }}</h2>
                            </div>
                            <div class="icon th-80 mb-3">
                                <img :src="selectedProject.icon" alt="project" class="img-contain" />
                            </div>
                            <div class="text fsz-18 mt-30 cr-777">
                                {{ selectedProject.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const selectedProject = ref(null)

const projects = [
    {
        id: 1,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    },
    {
        id: 2,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    },
    {
        id: 3,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    },
    {
        id: 4,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    },
    {
        id: 5,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    },
    {
        id: 6,
        title: 'اسم المشروع هنا',
        description: 'في شركة رواد الاستدامة، نقدم مجموعة من المشروعات الحيوية',
        icon: '/images/fav-lg.png'
    }
]

function openModal(project) {
    selectedProject.value = project
    const modal = new bootstrap.Modal(document.getElementById('modal-project'))
    modal.show()
}

function t(key) {
    const translations = {
        'projects.label': 'المشاريع',
        'projects.title': 'اخر أعمالنا',
        'projects.modalLabel': 'تفاصيل المشروع'
    }
    return translations[key] || key
}
</script>