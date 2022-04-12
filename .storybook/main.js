const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

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
  staticDirs: ['./public'],
  webpackFinal: async (config, { configType }) => {
    // Add Vanilla Extract here
    config.plugins = [...config.plugins, new VanillaExtractPlugin()]
    return config
  },
}