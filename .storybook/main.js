import { dirname, join } from 'path';
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');
const svgr = require('@honkhonk/vite-plugin-svgr').default;

const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/lib/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    getAbsolutePath('@storybook/addon-themes'),
    '@chromatic-com/storybook'
  ],

  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  staticDirs: ['./public'],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },

  // use `mergeConfig` to recursively merge Vite options
  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.BASE_URL || config.base,
      build: {
        sourcemap: false,
      },
      plugins: [
        vanillaExtractPlugin({
          identifiers: 'debug',
        }),
        svgr({
          svgrOptions: {
            jsxRuntime: 'automatic',
            dimensions: false,
            replaceAttrValues: {
              '#404040': 'currentColor',
            },
          },
        }),
      ],
    });
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
