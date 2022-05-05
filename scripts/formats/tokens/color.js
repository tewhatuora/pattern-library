/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const color = (tokens) => {
  return Object.keys(tokens).reduce((acc, key) => {
    for (const subkey of Object.keys(tokens[key])) {
      acc[`${key}${subkey}`] = tokens[key][subkey];
    }
    return acc;
  }, {});
};

module.exports = color;
