const { sizeToRem, makeSize } = require('../../utils');

/**
 * Format spacing tokens
 * @param {Object} spacingTokens spacing tokens
 * @return {Object} Formatted spacing tokens
 */
const spacing = (spacingTokens) => {
  return Object.keys(spacingTokens).reduce((tokens, size) => {
    for (const bp of Object.keys(spacingTokens[size])) {
      const newSize = makeSize(size);
      const newBp = bp === 'desktop' ? 'tablet' : bp;

      tokens[newSize] = {
        ...tokens[newSize],
        [newBp]: sizeToRem(spacingTokens[size][bp]),
      };
    }

    return tokens;
  }, {});
};

module.exports = spacing;
