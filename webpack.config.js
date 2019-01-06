const path = require('path'),
  webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/ComposePhoto.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        options: {
          'presets': ['@babel/preset-env'],
          'plugins': [
            '@babel/plugin-transform-runtime',
            //支持类注入
            ['@babel/plugin-proposal-decorators',{ "legacy": true }],
            //支持类属性
            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
          ]
        }
      }
    ]}
};
