const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //https://medium.com/js-dojo/automatically-import-sass-scss-into-every-vue-js-component-e69d9186e85b
  css: {
    loaderOptions: {
      sass: {
        additionalData : `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
})
