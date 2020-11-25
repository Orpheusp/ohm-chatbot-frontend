/* eslint-disable @typescript-eslint/no-var-requires */
// Not clear why webpack.config.js cannot be written in ES6. For the time being,
// disable this linter error to fall back on pre-ES6 module syntax.
/* eslint-disable no-undef */
// Disabling this lint rule since `__dirname` is a global variable in Node.js,
// but it is not recognized by the linter.
const path = require('path');
const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const codeExt = ['.js', '.jsx', '.ts', '.tsx', '.css'];
const imageExt = ['png', 'svg', 'jpg', 'gif'];

const commonConfig = {
  // Where the application starts and where to start bundling the files.
  entry: './src/index.tsx',
  // Which extensions Webpack will resolve, alowing modules being reported
  // without needing to add their extensions.
  resolve: {
    extensions: codeExt.concat(imageExt),
    alias: {
      src: path.join(__dirname, 'src/'),
      image: path.join(__dirname, 'assets/image'),
    },
  },
  // Defines how exported javascript modules are transformed and which ones are
  // included.
  module: {
    rules: [
      {
        // Images
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        // Fonts
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  // Where to put the bundled code.
  output: {
    path: path.join(__dirname, 'dist/'),
    // Specifies what directory the bundle should go in, and tells
    // webpack-dev-server where to serve files from.
    publicPath: './',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      lang: 'en-US',
    }),
  ],
};

const mergeConfig = mergeWithCustomize({
  customizeObject: customizeObject({
    plugins: 'append',
    'module.rules': 'append',
  }),
});

module.exports.commonConfig = commonConfig;
module.exports.mergeConfig = mergeConfig;
