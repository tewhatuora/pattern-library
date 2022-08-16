import { DocsPage } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../packages/lib/src';

import neutral, { neutralThemeTokens } from '../packages/lib/src/themes/neutral';
import myCovidRecord, { myCovidRecordThemeTokens } from '../packages/lib/src/themes/myCovidRecord';
import myHealthAccount, { myHealthAccountThemeTokens } from '../packages/lib/src/themes/myHealthAccount';

const sbParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  docs: {
    source: {
      type: 'dynamic',
      excludeDecorators: true,
    },
    transformSource: (source) => {
      return source.replaceAll(/\<ContrastWrapper variant\=\"dark\"\>\n|\n\<\/ContrastWrapper\>/gi, '');
    }
  },
  themes: {
    default: 'Neutral',
    clearable: false,
    list: [
      {
        name: 'Neutral',
        class: neutral,
        color: neutralThemeTokens.color.primary100,
      },
      {
        name: 'My Covid Record',
        class: myCovidRecord,
        color: myCovidRecordThemeTokens.color.primary100,
      },
      {
        name: 'My Health Account',
        class: myHealthAccount,
        color: myHealthAccountThemeTokens.color.primary100,
      },
    ],
    Decorator: (props) => <ThemeProvider theme={props.themeClasses}>{props.children}</ThemeProvider>,
  }
};

export default sbParameters;
