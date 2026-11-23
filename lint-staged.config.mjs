export default {
  '*.{js,jsx,ts,tsx,mdx}': ['prettier --write', 'eslint --cache --fix'],
  // Type check the whole project; tsc ignores tsconfig.json when given file paths
  '*.{ts,tsx}': () => 'yarn lint:types',
  '*.{json,yml}': ['prettier --write'],
};
