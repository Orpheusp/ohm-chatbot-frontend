/* eslint-disable @typescript-eslint/no-var-requires */
// Not clear why webpack.config.js cannot be written in ES6. For the time being,
// disable this linter error to fall back on pre-ES6 module syntax.
/* eslint-disable no-undef */
// Disabling this lint rule since `__dirname` is a global variable in Node.js,
// but it is not recognized by the linter.
const { commonConfig, mergeConfig } = require('./webpack.config.common.js');

module.exports = mergeConfig(commonConfig, {
  mode: 'development',
  // Defines how exported javascript modules are transformed and which ones are
  // included.
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
});
