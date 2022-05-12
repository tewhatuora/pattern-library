const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../lib/src/icons');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../lib/src/components/**/*.stories.mdx',
    '../lib/src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon'
  ],
  framework: '@storybook/react',
  core: {
    'builder': '@storybook/builder-webpack5'
  },
  staticDirs: ['./public'],
  webpackFinal: async (config, { configType }) => {
    // Add Vanilla Extract here
    config.plugins = [...config.plugins, new VanillaExtractPlugin()];


    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    });


    return config;
  },
}