const path = require("path");
const webpack = require('webpack');
const CleanWebpack = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./app/app.js",
    config: "./app/config.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/src")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new CleanWebpack(['dist/src']),
  ]
};
