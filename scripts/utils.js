const { SIZE_MAP } = require('./constants');

/**
 * Simplify tokens from Figma export
 * to just their values
 * @param {Object} tokens Exported JSON from Figma
 * @return {Object} Simplified/Formatted tokens object
 */
function simplifyTokens(tokens) {
  if ('value' in tokens) {
    return tokens.value;
  }

  return Object.keys(tokens).reduce((acc, key) => {
    acc[key] = simplifyTokens(tokens[key]);
    return acc;
  }, {});
}

exports.simplifyTokens = simplifyTokens;

/**
 * Trim whitespace from a string
 * @param {string} str String to trim whitespace from
 * @return {string} Trimmed string
 */
exports.trim = (str) => {
  return str.replace(/^\s+/gm, '').trim();
};

/**
 * Map a size from Figma to a size
 * that is used in vanilla extract
 * @param {string} size Figma size, e.g. 2xl
 * @return {string} Converted size, e.g. xxlarge
 */
exports.makeSize = (size) => {
  if (size in SIZE_MAP) {
    return SIZE_MAP[size];
  }

  const extras = /^(\d?)x([s|l])$/g.exec(size);

  if (extras.length) {
    return `${Array(Number(extras[1])).fill('x').join('')}${SIZE_MAP[extras[2]]}`;
  }
};

/**
 * Convert a size to rem units,
 * for a base font size of 62.5% or 16px
 * so that 10px = 1rem
 * @param {number} size
 * @return {string} size in rem units
 */
exports.sizeToRem = (size) => {
  const num = Number(size) / 10;
  const rem = parseFloat(num.toFixed(2).toString());
  return `${rem}rem`;
};
