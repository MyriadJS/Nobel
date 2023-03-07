// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt/image-edge', '@nuxt/devtools'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/kingfish/image/upload/v1675554521/chomsky/'
    }
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Nobel',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Social media if it was good' }
      ],
    }
  }
})
