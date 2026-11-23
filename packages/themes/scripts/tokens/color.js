import { camelCaseKey } from '../utils/tokenKey.js';

/**
 * Format color tokens
 * Palette tokens are flattened to camelCase keys, e.g. `primary.100` => `primary100`,
 * `core.dark blue` => `coreDarkBlue`. Semantic tokens keep their nested structure.
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
          acc[camelCaseKey(key, subkey)] = tokens[key][subkey];
        }
      }
    }
    return acc;
  }, {});
};

export default color;
