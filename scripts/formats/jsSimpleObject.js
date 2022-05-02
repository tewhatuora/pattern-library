const StyleDictionary = require('style-dictionary');
const prettier = require('prettier');
const { simplifyTokens } = require('../utils');

const jsSimpleObject = ({ dictionary, file }) => {
  const tokens = simplifyTokens(dictionary.tokens);

  return prettier.format(`
    ${StyleDictionary.formatHelpers.fileHeader({ file })}
    export const tokens = Object.freeze(${JSON.stringify(tokens, null, 0)});
  `, { parser: 'typescript' });
};

module.exports = jsSimpleObject;
