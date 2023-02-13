// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt/image-edge'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/kingfish/image/upload/v1675554521/chomsky/'
    }
  },
})
