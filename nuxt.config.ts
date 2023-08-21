// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image-edge', '@nuxt/devtools', '@unocss/nuxt', '@vue-macros/nuxt'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/kingfish/image/upload/v1675554521/chomsky/'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Nobel',
      meta: [
        { name: 'description', content: 'Social media if it was good' }
      ],
    }
  }
})
