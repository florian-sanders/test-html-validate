export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'html-validate-test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', // should throw warning for long title
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/html-validator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  htmlValidator: {
    usePrettier: true,
    options: {
      extends: [
      'html-validate:document',
      'html-validate:recommended'
      ],
      rules: {
        'aria-label-misuse': 'warn',
        'attr-case': 'warn',
        'attr-delimiter': 'warn',
        'attr-quotes': 'warn',
        'attr-spacing': 'warn',
        'attribute-allowed-values': 'warn',
        'attribute-boolean-style': 'warn',
        'attribute-empty-style': 'warn',
        'close-attr': 'warn',
        'close-order': 'warn',
        'deprecated': 'warn',
        'deprecated-rule': 'warn',
        'doctype-html': 'warn',
        'doctype-style': 'warn',
        'element-case': 'warn',
        'element-name': 'warn',
        'element-permitted-content': 'warn',
        'element-permitted-occurrences': 'warn',
        'element-permitted-order': 'warn',
        'element-required-attributes': 'warn',
        'element-required-content': 'warn',
        'empty-heading': 'warn',
        'empty-title': 'warn',
        'heading-level': 'warn',
        'input-attributes': 'warn',
        'input-missing-label': 'warn',
        'long-title': 'warn',
        'meta-refresh': 'warn',
        'missing-doctype': 'warn',
        'multiple-labeled-controls': 'warn',
        'no-autoplay': 'warn',
        'no-conditional-comment': 'warn',
        'no-deprecated-attr': 'warn',
        'no-dup-attr': 'warn',
        'no-dup-class': 'warn',
        'no-dup-id': 'warn',
        'no-implicit-close': 'warn',
        'no-inline-style': 'off',
        'no-missing-references': 'warn',
        'no-multiple-main': 'warn',
        'no-raw-characters': 'warn',
        'no-redundant-for': 'off',
        'no-redundant-role': 'warn',
        'no-self-closing': 'warn',
        'no-trailing-whitespace': 'warn',
        'no-utf8-bom': 'warn',
        'prefer-button': 'off',
        'prefer-native-element': 'off',
        'prefer-tbody': 'warn',
        'require-sri': 'warn',
        'script-element': 'warn',
        'script-type': 'warn',
        'svg-focusable': 'off',
        'text-content': 'warn',
        'unrecognized-char-ref': 'warn',
        'void-content': 'warn',
        'void-style': 'warn',
        'wcag/h30': 'warn',
        'wcag/h32': 'warn',
        'wcag/h36': 'warn',
        'wcag/h37': 'warn',
        'wcag/h67': 'warn',
        'wcag/h71': 'warn'
      }
    }
  }
}
