const { trim, sizeToRem } = require('../../utils');

/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const shadows = (tokens) => {
  return Object.keys(tokens).reduce((acc, key) => {
    const rule = tokens[key];

    acc[key] = trim(
      `${rule.shadowType === 'innerShadow' ? 'inset' : ''} ${sizeToRem(rule.offsetX)} ${sizeToRem(
        rule.offsetY,
      )} ${sizeToRem(rule.radius)} ${sizeToRem(rule.spread)} ${rule.color}`,
    );

    return acc;
  }, {});
};

module.exports = shadows;
