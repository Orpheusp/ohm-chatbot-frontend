/* eslint-disable @typescript-eslint/no-var-requires */
// Not clear why webpack.config.js cannot be written in ES6. For the time being,
// disable this linter error to fall back on pre-ES6 module syntax.
/* eslint-disable no-undef */
// Disabling this lint rule since `__dirname` is a global variable in Node.js,
// but it is not recognized by the linter.
const { commonConfig, mergeConfig } = require('./webpack.config.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = mergeConfig(commonConfig, {
  mode: 'production',
  // Defines how exported javascript modules are transformed and which ones are
  // included.
  // Where to put the bundled code.
  module: {
    rules: [
      {
        // Transforming TSX
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.prod.json' },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: false },
          },
        ],
      },
    ],
  },
  output: { filename: '[name].[hash].bundle.js' },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './assets', to: '' },
        { from: './manifest.json', to: '' },
      ],
    }),
  ],
});
