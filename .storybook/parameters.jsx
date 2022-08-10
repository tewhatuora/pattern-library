import { ThemeProvider } from '../packages/lib/src';

import neutral, { neutralThemeTokens } from '../packages/lib/src/themes/neutral';
import myCovidRecord, { myCovidRecordThemeTokens } from '../packages/lib/src/themes/myCovidRecord';

const sbParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: neutralThemeTokens.color.primary5,
      },
      {
        name: 'Dark',
        value: neutralThemeTokens.color.primary100,
      },
    ],
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
    ],
    Decorator: (props) => <ThemeProvider theme={props.themeClasses}>{props.children}</ThemeProvider>,
  }
};

export default sbParameters;
