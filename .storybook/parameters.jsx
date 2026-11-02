import { ThemeProvider } from '../packages/lib/src';

import { neutral, webSelfService } from '../packages/themes';

const themes = {
  [neutral.className]: neutral,
  [webSelfService.className]: webSelfService,
};

const sbParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // 'todo' reports axe violations as warnings (in the Storybook UI and test runs) without failing.
  // Switch to 'error' once the existing violations are fixed, or per story/component as they're cleaned up.
  a11y: { test: 'todo' },
  backgrounds: { disable: true },
  docs: {
    source: {
      type: 'code',
      excludeDecorators: true,
    },
    transformSource: (source) => {
      // ContrastWrapper is a component that wraps Story components in a `Card` with appropriate
      // variant prop, to show that dark mode should be used within a `Card`.
      return source.replaceAll(/<ContrastWrapper variant="dark">\n|\n<\/ContrastWrapper>/gi, '');
    },
  },
  themes: {
    default: 'Web Self-Service',
    clearable: false,
    list: [
      {
        name: 'Web Self-Service',
        class: webSelfService.className,
        color: webSelfService.tokens.color.primary100,
      },
      {
        name: 'Neutral',
        class: neutral.className,
        color: neutral.tokens.color.primary100,
      },
    ],
    target: 'root',
    Decorator: ({ themeClasses, children }) => {
      const theme = themes[themeClasses] || webSelfService;
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    },
  },
};

export default sbParameters;
