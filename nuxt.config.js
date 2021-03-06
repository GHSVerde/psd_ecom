export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'E-Commerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src: 'primevue/resources/primevue.min.css'},
    {src: 'primevue/resources/themes/md-light-indigo/theme.css'},
    {src: 'primeicons/primeicons.css'},
    {src: '~/assets/css/main.scss'},
    {src: 'primeflex/primeflex.css'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'~/plugins/primevue.js', mode: 'client'},
    { src: '~/plugins/vueagile.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  loading: {
    color: '#e7ab3c',
    height: '5px'
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['@nuxtjs/fontawesome', {
      component: 'FaIcon',
      suffix: false,
      icons: {
        solid: true,
        brands: true
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vueagile']
}
}
