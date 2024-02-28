import { ThemeProvider } from '../packages/lib/src';

import { neutral, webSelfService } from '@te-whatu-ora/anatomic-themes';

const sbParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  docs: {
    source: {
      type: 'code',
      excludeDecorators: true,
    },
    transformSource: (source) => {
      // ContrastWrapper is a component that wraps Story components in a `Card` with appropriate
      // variant prop, to show that dark mode should be used within a `Card`.
      return source.replaceAll(/\<ContrastWrapper variant\=\"dark\"\>\n|\n\<\/ContrastWrapper\>/gi, '');
    },
  },
  themes: {
    default: 'Neutral',
    clearable: false,
    list: [
      {
        name: 'Neutral',
        class: neutral.className,
        color: neutral.tokens.color.primary100,
      },
      {
        name: 'Web Self-Service',
        class: webSelfService.className,
        color: webSelfService.tokens.color.primary100,
      },
    ],
    target: 'root',
    Decorator: (props) => {
      return <ThemeProvider theme={props.themeClasses}>{props.children}</ThemeProvider>;
    },
  },
};

export default sbParameters;
