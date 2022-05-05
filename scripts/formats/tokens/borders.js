/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const color = (tokens) => {
  return {
    radius: {
      standard: '8px',
      large: '12px',
      xlarge: '16px',
    },
    width: {
      standard: '1px',
    },
  };
};

module.exports = color;
