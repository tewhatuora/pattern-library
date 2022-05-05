const { trim } = require('../../utils');

/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const shadows = (tokens) => {
  return Object.keys(tokens).reduce((acc, key) => {
    const rule = tokens[key];

    acc[key] = trim(
      `${rule.shadowType === 'innerShadow' ? 'inset' : ''} ${rule.offsetX}px ${rule.offsetY}px ${rule.radius}px ${
        rule.spread
      }px ${rule.color}`,
    );

    return acc;
  }, {});
};

module.exports = shadows;
