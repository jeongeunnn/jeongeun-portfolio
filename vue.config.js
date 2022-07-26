const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variable.scss";
          @import "@/assets/scss/_mixin.scss";
        `
      }
    }
  }
}