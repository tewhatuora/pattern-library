const StyleDictionary = require('style-dictionary');
const prettier = require('prettier');

const { simplifyTokens, trim } = require('../utils');

const parseTokens = ({ dictionary, file, options }) => {
  const {
    color: colorTokens,
    space: spaceTokens,
    effect: effectTokens,
    typography: typographyTokens,
    grid: gridTokens,
    ...otherTokens
  } = simplifyTokens(dictionary.tokens);

  // const {
  //   typography: typeSizeTokens,
  //   ...otherSizeTokens
  // } = sizeTokens;

  const color = Object.keys(colorTokens).reduce((acc, key) => {
    for (const subkey of Object.keys(colorTokens[key])) {
      acc[`${key}${subkey}`] = colorTokens[key][subkey];
    }
    return acc;
  }, {});

  const shadows = Object.keys(effectTokens).reduce((acc, key) => {
    const rule = effectTokens[key];

    acc[key] = trim(
      `${rule.shadowType === 'innerShadow' ? 'inset' : ''} ${rule.offsetX}px ${rule.offsetY}px ${rule.radius}px ${
        rule.spread
      }px ${rule.color}`,
    );

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

  return {
    name: options.name,
    displayName: options.displayName,
    typography: typographyTokens,
    space: {},
    transitions: {},
    border: {},
    shadows,
    grid: gridTokens,
    color,

    // fontSizes,
    // lineHeights,
    // ...otherSizeTokens,
    // ...otherTokens,
  };
};

module.exports = parseTokens;
