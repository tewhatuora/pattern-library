import prettier from 'prettier';

const prettierConfig = (await prettier.resolveConfig('./.prettierrc')) || {};

export default function (input) {
  return prettier.format(input, { ...prettierConfig, parser: 'typescript' });
}
