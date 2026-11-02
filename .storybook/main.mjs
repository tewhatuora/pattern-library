import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';

import { mergeConfig } from 'vite';

export default {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/lib/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
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
      resolve: {
        tsconfigPaths: true,
      },
      plugins: [
        svgr({
          include: '**/*.svg?component',
          enforce: 'pre',
          svgrOptions: {
            jsxRuntime: 'classic', // inject `import * as React from 'react'`
            dimensions: false,
          },
        }),
        vanillaExtractPlugin({ identifiers: 'debug' }),
      ],
    });
  },

  docs: {},
};
