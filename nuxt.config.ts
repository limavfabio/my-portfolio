// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@unocss/nuxt'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
})
