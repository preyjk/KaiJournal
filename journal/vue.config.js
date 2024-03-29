const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:900/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
      },
    ]);
  },
});
