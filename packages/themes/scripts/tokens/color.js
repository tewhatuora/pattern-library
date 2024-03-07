/**
 * Format color tokens
 * @param {Object} tokens Color tokens
 * @return {Object} Formatted color tokens
 */
const color = (tokens) => {
  return Object.keys(tokens).reduce((acc, key) => {
    if (key === 'light-mode') {
      acc['semantic'] = tokens[key];
    } else if (key === 'archive') {
      return acc;
    } else {
      for (const subkey of Object.keys(tokens[key])) {
        // ignore `transparent.primary.100` token
        if (`${key}${subkey}` !== 'transparentprimary') {
          acc[`${key}${subkey}`] = tokens[key][subkey];
        }
      }
    }
    return acc;
  }, {});
};

export default color;
