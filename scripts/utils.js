const { SIZE_MAP } = require('./constants');

function simplifyTokens(tokens) {
  if ('value' in tokens) {
    return tokens.value;
  }

  return Object.keys(tokens).reduce((acc, key) => {
    acc[key] = simplifyTokens(tokens[key]);
    return acc;
  }, {});
}

exports.simplifyTokens = simplifyTokens;

exports.trim = (str) => {
  return str.replace(/^\s+/gm, '').trim();
};

exports.makeSize = (size) => {
  if (size in SIZE_MAP) {
    return SIZE_MAP[size];
  }

  const regex = /^(\d?)x([s|l])$/g;
  const extras = regex.exec(size);

  if (extras.length) {
    return `${Array(Number(extras[1])).fill('x').join('')}${SIZE_MAP[extras[2]]}`;
  }
};
