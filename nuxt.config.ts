// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //@ts-ignore
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@storybook-vue/nuxt-storybook', "@nuxt/image"],
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006
  },
})