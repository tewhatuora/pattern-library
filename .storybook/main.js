const path = require('path');
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');
const svgr = require('@honkhonk/vite-plugin-svgr').default;

const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/lib/src/components/**/*.stories.mdx',
    '../packages/lib/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['./public'],
  // use `mergeConfig` to recursively merge Vite options

  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: process.env.BASE_URL || config.base,
      build: {
        sourcemap: false
      },
      plugins: [
        vanillaExtractPlugin({
          identifiers: 'debug',
        }),
        svgr({
          svgrOptions: {
            jsxRuntime: 'automatic',
            dimensions: false,
          },
        }),
      ],
    });
  },
};
