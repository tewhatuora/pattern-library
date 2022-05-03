const StyleDictionary = require('style-dictionary');

const parseTokens = require('./parseTokens');
const prettierFormat = require('./prettierFormat');

const vanillaExtract = ({ dictionary, file, options }) => {
  const values = parseTokens({ dictionary, file, options });

  return prettierFormat(
    `
        ${StyleDictionary.formatHelpers.fileHeader({ file })}
        import RootObject from './tokenTypes';
        
        export const tokens: RootObject = ${JSON.stringify(values, null, 0)};
      `,
  );
};

module.exports = vanillaExtract;
