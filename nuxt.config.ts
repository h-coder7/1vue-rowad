export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    // 'bootstrap/dist/css/bootstrap.rtl.min.css',
    'assets/lib/all.min.css',
    'assets/lib/animate.css',
    'swiper/css',
    // 'swiper/css/navigation',
    // 'swiper/css/pagination',
    // 'assets/main.scss',
  ],

  app: {
    head: {
      title: 'Rowad',
      meta: [
        { name: 'description', content: 'وصف عام للموقع' },
        { name: 'keywords', content: 'كلمات, مفتاحية' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'اسم الموقع' },
        { property: 'og:image', content: 'https://example.com/og.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', href: '/fav-lg.png' }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
    vueI18n: './i18n.config.ts'
  }
})
