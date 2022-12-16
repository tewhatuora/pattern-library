import { ThemeProvider } from '../packages/lib/src';

import {
  neutral,
  myCovidRecord,
  myHealthAccount
} from '@te-whatu-ora/anatomic-themes';

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
    }
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
        name: 'My Covid Record',
        class: myCovidRecord.className,
        color: myCovidRecord.tokens.color.primary100,
      },
      {
        name: 'My Health Account',
        class: myHealthAccount.className,
        color: myHealthAccount.tokens.color.primary100,
      },
    ],
    target: 'root',
    Decorator: (props) => {
      return <ThemeProvider theme={props.themeClasses}>{props.children}</ThemeProvider>
    },
  }
};

export default sbParameters;
