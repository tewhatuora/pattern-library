/**
 * Simplify tokens from Figma export
 * to just their values
 * @param {Object} tokens Exported JSON from Figma
 * @return {Object} Simplified/Formatted tokens object
 */
function simplifyTokens(tokens) {
  if (typeof tokens === 'string') {
    return tokens;
  }

  if ('value' in tokens) {
    return tokens.value;
  }

  return Object.keys(tokens).reduce((acc, key) => {
    acc[key] = simplifyTokens(tokens[key]);
    return acc;
  }, {});
}

export default simplifyTokens;
