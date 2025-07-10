import { dirname, join } from 'path';
import { createRequire } from 'module';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { mergeConfig } from 'vite';

const require = createRequire(import.meta.url);

export default {
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
    '@chromatic-com/storybook',
  ],

  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
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
        tsconfigPaths(),
        svgr({
          include: '**/*.svg?component',
          enforce: 'pre',
          exportAsDefault: true,
          svgrOptions: {
            jsxRuntime: 'classic', // inject `import * as React from 'react'`
            dimensions: false,
            replaceAttrValues: {
              '#404040': 'currentColor',
            },
          },
        }),
        vanillaExtractPlugin({ identifiers: 'debug' }),
      ],
    });
  },

  docs: {},
};

function getAbsolutePath(pkg) {
  return dirname(require.resolve(join(pkg, 'package.json')));
}
