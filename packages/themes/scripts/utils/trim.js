/**
 * Trim whitespace from a string
 * @param {string} str String to trim whitespace from
 * @return {string} Trimmed string
 */
function trim(str) {
  return str.replace(/^\s+/gm, '').trim();
}

export default trim;
