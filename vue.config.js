module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/variable.less")]
    }
  },
  transpileDependencies: ["htmlparser2", "parse5"]
}
