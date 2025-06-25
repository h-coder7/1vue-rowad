<template>
    <div>
        <footer class="footer">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-4">
                        <a href="#" class="foot-logo">
                            <img src="/images/logo.svg" alt="" />
                        </a>
                        <div class="text col-lg-11">
                            {{ t('footer.about_text') }}
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="links-group">
                            <h6 class="fsz-24 mb-20">{{ t('footer.about_company') }}</h6>
                            <ul class="links">
                                <li><a href="#">{{ t('footer.who_we_are') }}</a></li>
                                <li><a href="#">{{ t('footer.vision') }}</a></li>
                                <li><a href="#">{{ t('footer.mission') }}</a></li>
                                <li><a href="#">{{ t('footer.ceo_message') }}</a></li>
                                <li><a href="#">{{ t('footer.our_services') }}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="links-group">
                            <h6 class="fsz-24 mb-20">{{ t('footer.contact_us') }}</h6>
                            <ul class="links">
                                <li>
                                    <a href="#">
                                        <i class="fal fa-map-marker me-2"></i>
                                        <span class="txt">{{ t('footer.address') }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fal fa-phone me-2"></i>
                                        <span class="txt">0503025916</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fal fa-envelope me-2"></i>
                                        <span class="txt">info@rowad-es.com</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-x-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="foot">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="txt mb-4 mb-lg-0">
                                <strong>{{ t('footer.company_name') }}</strong> © 2025
                                {{ t('footer.rights_reserved') }}
                                <strong>{{ t('footer.design_by') }}</strong>
                                <img src="/images/logo-alyom.svg" alt="" class="alyom-logo th-20" />
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="foot-links text-lg-end">
                                <a href="#">{{ t('footer.help') }}</a>
                                <a href="#">{{ t('footer.privacy') }}</a>
                                <a href="#">{{ t('footer.terms') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>