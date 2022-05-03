const prettier = require('prettier');

const prettierConfig = prettier.resolveConfig.sync('./.prettierrc') || {};

module.exports = (input) => prettier.format(input, { ...prettierConfig, parser: 'typescript' });
