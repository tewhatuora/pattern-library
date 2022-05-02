const StyleDictionary = require('style-dictionary');
const prettier = require('prettier');

const { simplifyTokens } = require('../utils');

const vanillaExtract = ({ dictionary, file }) => {
  const {
    color: colorTokens,
    sizes: sizeTokens,
    ...otherTokens
  } = simplifyTokens(dictionary.tokens);

  // const {
  //   typography: typeSizeTokens,
  //   ...otherSizeTokens
  // } = sizeTokens;

  const colors = Object.keys(colorTokens)
    .reduce((acc, key) => {
      for (const subkey of Object.keys(colorTokens[key])) {
        acc[`${key}${subkey}`] = colorTokens[key][subkey];
      }
      return acc;
    }, {});

  // const fontSizes = Object.keys(typeSizeTokens)
  //   .reduce((acc, key) => ({
  //     ...acc,
  //     [key]: typeSizeTokens[key].font,
  //   }), {});
  //
  // const lineHeights = Object.keys(typeSizeTokens)
  //   .reduce((acc, key) => ({
  //     ...acc,
  //     [key]: typeSizeTokens[key].line,
  //   }), {});

  const values = {
    colors,
    // fontSizes,
    // lineHeights,
    // ...otherSizeTokens,
    ...otherTokens,
  };

  return prettier.format(`
      ${StyleDictionary.formatHelpers.fileHeader({file})}
      export const tokens = Object.freeze(${JSON.stringify(values, null, 0)});
    `, {parser: 'typescript'});
};

module.exports = vanillaExtract;
