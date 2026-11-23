/**
 * Corrections for misspelt Figma variable names.
 * Remove an entry once the name is fixed in Figma and re-exported.
 */
const NAME_FIXES = {
  'red-colbolt': 'red-cobalt',
  'aqua-cobolt': 'aqua-cobalt',
};

const fixName = (name) => NAME_FIXES[name] ?? name;

/**
 * Join Figma name parts into a camelCase identifier.
 * Any non-alphanumeric character is a word break. Existing camelCase is kept,
 * so already-normalised keys are unchanged.
 * e.g. ('primary', '100') => 'primary100', ('core', 'dark blue') => 'coreDarkBlue',
 * 'link-hover&focus' => 'linkHoverFocus', 'fontWeight' => 'fontWeight'
 * @param {...string} parts Name parts, e.g. group and token name
 * @return {string} camelCase key
 */
export const camelCaseKey = (...parts) => {
  const key = parts
    .flatMap((part) => fixName(String(part)).split(/[^A-Za-z0-9]+/))
    .filter(Boolean)
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');

  return key.charAt(0).toLowerCase() + key.slice(1);
};

/**
 * Rename every key in an object tree.
 * @param {*} node Token tree
 * @param {(key: string) => string} rename Key renamer
 * @return {*} Token tree with renamed keys
 */
export const renameKeys = (node, rename) => {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    return node;
  }

  return Object.keys(node).reduce((acc, key) => {
    const newKey = rename(key);

    if (newKey in acc) {
      throw new Error(`Token key collision: '${key}' and another key both map to '${newKey}'`);
    }

    acc[newKey] = renameKeys(node[key], rename);
    return acc;
  }, {});
};
