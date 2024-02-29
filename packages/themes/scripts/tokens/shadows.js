import trim from '../utils/trim.js';
import sizeToRem from '../utils/sizeToRem.js';

/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const shadows = (tokens) => {
  return Object.keys(tokens.shadow).reduce((acc, key) => {
    const rule = tokens.shadow[key];

    acc[key] = trim(
      `${rule.shadowType === 'innerShadow' ? 'inset' : ''} ${sizeToRem(rule.offsetX)} ${sizeToRem(
        rule.offsetY,
      )} ${sizeToRem(rule.radius)} ${sizeToRem(rule.spread)} ${rule.color}`,
    );

    return acc;
  }, {});
};

export default shadows;
