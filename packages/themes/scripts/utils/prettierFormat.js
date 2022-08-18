import prettier from 'prettier';

const prettierConfig = prettier.resolveConfig.sync('./.prettierrc') || {};

export default function (input) {
  return prettier.format(input, { ...prettierConfig, parser: 'typescript' });
}
