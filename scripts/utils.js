function simplifyTokens(tokens) {
  if (tokens.hasOwnProperty('value')) {
    return tokens.value;
  }

  return Object.keys(tokens)
    .reduce((acc, key) => {
      acc[key] = simplifyTokens(tokens[key]);
      return acc;
    }, {});
}

function trim(str) {
  return str.replace(/^\s+/gm, '').trim();
}

module.exports = {
  simplifyTokens,
  trim,
};