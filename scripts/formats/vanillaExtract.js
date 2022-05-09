const StyleDictionary = require('style-dictionary');

const parseTokens = require('./parseTokens');
const prettierFormat = require('./prettierFormat');
const { ROOT_TYPE_NAME } = require('../constants');

const vanillaExtract = ({ dictionary, file, options }) => {
  const values = parseTokens({ dictionary, file, options });

  return prettierFormat(
    `
        ${StyleDictionary.formatHelpers.fileHeader({ file })}
        import { ${ROOT_TYPE_NAME} } from '../../../lib/src/themes/tokenType';
        
        export const tokens: ${ROOT_TYPE_NAME} = ${JSON.stringify(values, null, 0)};
      `,
  );
};

module.exports = vanillaExtract;
