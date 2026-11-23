import { fileHeader } from 'style-dictionary/utils';

import prettierFormat from '../utils/prettierFormat.js';
import parser from '../parser.js';
import { ROOT_TYPE_NAME } from '../constants.js';

const registerFormats = (StyleDictionary) => {
  // style-dictionary 3 (tinycolor) rounded alpha to 2 decimal places; v4+ emits the exact
  // 8-bit value (e.g. 0.7019607843137254). Keep the rounded output so generated CSS is unchanged.
  const colorCss = StyleDictionary.hooks.transforms['color/css'];
  StyleDictionary.registerTransform({
    name: 'color/css-rounded-alpha',
    type: 'value',
    filter: colorCss.filter,
    transform: (token, config, options) =>
      colorCss
        .transform(token, config, options)
        .replace(
          /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/,
          (_, r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${Math.round(a * 100) / 100})`,
        ),
  });

  StyleDictionary.registerFormat({
    name: 'typescript/vanilla-extract-tokens',
    format: async function ({ dictionary, file, options }) {
      const values = parser({ dictionary, file, options });

      return prettierFormat(
        `
          ${await fileHeader({ file })}
          import { ${ROOT_TYPE_NAME} } from '../../../tokenType';
          
          export const tokens: ${ROOT_TYPE_NAME} = ${JSON.stringify(values, null, 0)};
        `,
      );
    },
  });

  StyleDictionary.registerFormat({
    name: 'typescript/theme-index',
    format: async function () {
      return prettierFormat(`
        export { default as className } from './theme.css';
        export { tokens } from './tokens';
      `);
    },
  });

  StyleDictionary.registerFormat({
    name: 'typescript/vanilla-extract-theme',
    format: async function ({ file }) {
      return prettierFormat(`
          ${await fileHeader({ file })}
          import { createTheme } from '@vanilla-extract/css';
          
          import makeVanillaTheme from '../../../makeVanillaTheme';
          import { contract } from '../../../contract.css';
          import { tokens } from './tokens';
          
          export default createTheme(contract, makeVanillaTheme(tokens));
      `);
    },
  });
};

export default registerFormats;
