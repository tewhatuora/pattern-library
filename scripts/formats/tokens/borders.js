const { sizeToRem, makeSize } = require('../../utils');

/**
 * Reduce tokens object to a
 * a formatted value
 * @param {Object} input Token object to format, e.g. tokens.borders
 * @param {string} keys Key to retrieve value from
 * @param {Function} transformName Function to transform token name key
 * @return {Object} Formatted token object
 */
const reducer = (input, keys, transformName = undefined) =>
  Object.keys(input).reduce((tokens, name) => {
    let tokenName = name;

    if (typeof transformName === 'function') {
      tokenName = transformName(name);
    }

    if (keys.length > 1) {
      tokens[tokenName] = keys.reduce((acc, curr) => {
        acc[curr] = sizeToRem(input[name][curr]);
        return acc;
      }, {});
    } else {
      tokens[tokenName] = sizeToRem(input[name][keys[0]]);
    }

    return tokens;
  }, {});

/**
 * Format border width and radius tokens
 * @param {Object} tokens tokens containing `border` & `radii`
 * @return {Object} Formatted border tokens
 */
const border = (tokens) => ({
  radius: reducer(tokens.radii, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  width: reducer(tokens.borders, ['weight'], makeSize),
});

module.exports = border;
