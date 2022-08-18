import prettierFormat from '../utils/prettierFormat.js';
import parser from '../parser.js';
import { ROOT_TYPE_NAME } from '../constants.js';

const registerFormats = (StyleDictionary) => {
  StyleDictionary.registerFormat({
    name: 'typescript/vanilla-extract-tokens',
    formatter: function ({ dictionary, file, options }) {
      const values = parser({ dictionary, file, options });

      return prettierFormat(
        `
          ${StyleDictionary.formatHelpers.fileHeader({ file })}
          import { ${ROOT_TYPE_NAME} } from '../../../tokenType';
          
          export const tokens: ${ROOT_TYPE_NAME} = ${JSON.stringify(values, null, 0)};
        `,
      );
    },
  });

  StyleDictionary.registerFormat({
    name: 'typescript/theme-index',
    formatter: function ({ options }) {
      return prettierFormat(`
        export { default as className } from './theme.css';
        export { tokens } from './tokens';
      `);
    },
  });

  StyleDictionary.registerFormat({
    name: 'typescript/vanilla-extract-theme',
    formatter: function ({ file }) {
      return prettierFormat(`
          ${StyleDictionary.formatHelpers.fileHeader({ file })}
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
