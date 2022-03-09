const ribaWebpackConfig = require("@ribajs/webpack-config");
const { resolve } = require("path");

const source = resolve(__dirname);
const tsSourceDir = resolve(source, "ssr");
const assets = resolve(source, "assets");
const outputPath = resolve(assets, "ssr");
const tsIndexPath = resolve(tsSourceDir, "index.ts");

const config = {
  template: "ssr",
  tsSourceDir,
  tsIndexPath,
  output: {
    path: outputPath,
    filename: "[name].bundle.js",
  },
};

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
