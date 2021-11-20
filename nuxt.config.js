export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce-vue-ssr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/vendors/bootstrap/bootstrap.min.css',
    'assets/vendors/fontawesome/css/all.min.css',
    'assets/vendors/themify-icons/themify-icons.css',
    'assets/vendors/nice-select/nice-select.css',
    'assets/vendors/owl-carousel/owl.theme.default.min.css',
    'assets/vendors/owl-carousel/owl.carousel.min.css',
    'assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/assets/vendors/jquery/jquery-3.2.1.min.js', mode: 'client'},
    {src: '~/assets/vendors/jquery.ajaxchimp.min.js', mode: 'client'},
    {src: '~/assets/vendors/nice-select/jquery.nice-select.min.js', mode: 'client'},
    {src: '~/assets/vendors/bootstrap/bootstrap.bundle.min.js', mode: 'client'},
    {src: '~/assets/vendors/skrollr.min.js', mode: 'client'},
    {src: '~/assets/vendors/owl-carousel/owl.carousel.min.js', mode: 'client'},
    {src: '~/assets/vendors/mail-script.js', mode: 'client'},
    {src: '~/assets/js/main.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/shared',
      '~/shared/atoms',
      '~/shared/molecules',
      '~/shared/organisams',
    ]
  },

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
