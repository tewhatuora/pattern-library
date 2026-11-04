import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import * as mdx from 'eslint-plugin-mdx';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { createRequire } from 'node:module';

// eslint-plugin-react's version: 'detect' calls an API removed in ESLint 10, so read the
// installed React version directly instead
const reactVersion = createRequire(import.meta.url)('react/package.json').version;

export default tseslint.config(
  {
    ignores: [
      '**/dist/',
      '**/build/',
      '**/tmp/',
      '**/coverage/',
      'storybook-static/',
      '.yarn/',
      'packages/lib/src/icons/',
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    extends: [
      js.configs.recommended,
      comments.recommended,
      tseslint.configs.recommended,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
    ],
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          noWarnOnMultipleProjects: true,
          project: ['packages/lib/tsconfig.json', 'packages/themes/tsconfig.json'],
        }),
      ],
      react: {
        version: reactVersion,
      },
    },
    rules: {
      // `@typescript-eslint`
      // https://typescript-eslint.io/rules/
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-require-imports': 'off',
      // `eslint-plugin-import-x`
      // https://github.com/un-ts/eslint-plugin-import-x
      // False positives on CommonJS interop (e.g. React.Component, prettier.format)
      'import-x/no-named-as-default-member': 'off',
      'import-x/order': [
        'error',
        {
          groups: ['external', 'internal'],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'no-console': ['error'],
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      // `eslint-plugin-react`
      // https://github.com/jsx-eslint/eslint-plugin-react
      'react/display-name': 'off',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
        },
      ],
      'react/jsx-wrap-multilines': 'error',
      'react/no-array-index-key': 'error',
      'react/no-multi-comp': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',
      // Only the classic hooks rules; v7's `recommended` also enables the React Compiler rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    // Build scripts report progress on the console
    files: ['packages/themes/scripts/**'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      ...mdx.flat.rules,
      'react/display-name': 'off',
      'react/jsx-no-undef': 'off',
      'no-undef': 'off',
    },
  },
  {
    ...mdx.flatCodeBlocks,
    files: ['**/*.mdx/**'],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': 'off',
      'import-x/no-unresolved': 'off',
      'react/jsx-no-undef': 'off',
    },
  },
  prettierRecommended,
);
