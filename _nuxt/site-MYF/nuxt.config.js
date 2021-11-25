export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'マンフィーと青年基金NGO | Monphy & Youth Foundation NGO',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'NGO,Ghana,monphy,ボランティア,ガーナ,マンフィー' },
      { hid: 'description', name: 'description', content: 'マンフィーと青年基金NGOは、皆さまの寄付や募金でガーナ共和国の貧困層に衣類や日用品の配布、小学校の建設などをおこなっています。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
