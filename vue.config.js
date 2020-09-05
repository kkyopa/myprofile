module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: "https://kyopa.tokyo",
      }
    }
  }
};