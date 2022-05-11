const { sizeToRem } = require('../../utils');

/**
 * Reduce tokens object to a
 * a formatted value
 * @param {Object} input Token object to format, e.g. tokens.borders
 * @param {string} key Key to retrieve value from
 * @return {Object} Formatted token object
 */
const reducer = (input, key) =>
  Object.keys(input).reduce((tokens, name) => {
    tokens[name] = sizeToRem(input[name][key]);

    return tokens;
  }, {});

/**
 * Format border width and radius tokens
 * @param {Object} tokens tokens containing `border` & `radii`
 * @return {Object} Formatted border tokens
 */
const border = (tokens) => ({
  radius: reducer(tokens.radii, 'topLeft'),
  width: reducer(tokens.borders, 'weight'),
});

module.exports = border;
