const devConfig = require('../webpack.config.dev');
const prodConfig = require('../webpack.config.prod');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    // Common config
    config.module.rules = devConfig.module.rules;
    config.resolve.extensions = devConfig.resolve.extensions;
    config.resolve.alias = {
      ...config.resolve.alias,
      ...devConfig.resolve.alias,
    };

    if ((configType = 'DEVELOPMENT')) {
      config.devtool = devConfig.devtool;
    } else if ((configType = 'PRODUCTION')) {
      config.devtool = prodConfig.devtool;
    }

    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
