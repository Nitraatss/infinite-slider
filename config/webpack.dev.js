/* eslint-disable */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: paths.build,
    // https: true,
    hot: true,
    port: 9000,
    historyApiFallback: true,
    compress: true,
    disableHostCheck: true,
    open: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
