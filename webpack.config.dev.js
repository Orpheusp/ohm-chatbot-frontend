/* eslint-disable @typescript-eslint/no-var-requires */
// Not clear why webpack.config.js cannot be written in ES6. For the time being,
// disable this linter error to fall back on pre-ES6 module syntax.
/* eslint-disable no-undef */
// Disabling this lint rule since `__dirname` is a global variable in Node.js,
// but it is not recognized by the linter.
const path = require('path');
const webpack = require('webpack');
const { commonConfig, mergeConfig } = require('./webpack.config.common.js');

module.exports = mergeConfig(commonConfig, {
  mode: 'development',
  // Defines how exported javascript modules are transformed and which ones are
  // included.
  module: {
    rules: [
      {
        // For processing CSS.
        test: /\.css$/,
        include: path.join(__dirname, 'src/'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]',
              localsConvention: 'camelCase',
              sourceMap: true,
              esModule: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle-dev.js',
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    // Tells the server where the bundled code actually is.
    publicPath: 'http://localhost:3000/',
    watchContentBase: true,
    open: 'Google Chrome',
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.WatchIgnorePlugin([/css\.d\.ts$/])],
});
