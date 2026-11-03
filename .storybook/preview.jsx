import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { neutral, webSelfService } from '@healthnz/pattern-library-themes';

import { ThemeProvider } from '../packages/lib/src';

import sbParameters from './parameters';

export const parameters = sbParameters;
export const tags = ['autodocs', 'autodocs'];

import '@healthnz/pattern-library/styles';
import '@healthnz/pattern-library-themes/styles';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      ['Neutral']: neutral,
      ['Web Self-Service']: webSelfService,
    },
    defaultTheme: 'Web Self-Service',
    Provider: ThemeProvider,
  }),
];

// storySort must be a literal in this file: Storybook reads it statically, so it ignores it in an imported or spread object
const preview = {
  parameters: {
    options: {
      // Component sections and order follow the Figma library (Web Self-service Library), so designers and developers
      // find components in the same place. Figma names that differ are noted.
      storySort: {
        order: [
          'Overview',
          'Themes',
          'Transactional Components',
          [
            'Accordion',
            'Alert',
            'Avatar',
            'Badge',
            'Banner',
            'Breadcrumbs',
            'Button',
            'Card',
            'Checkbox',
            'CheckboxGroup',
            'Divider',
            'InputDropdown', // Dropdown
            'InputLabel', // FormLabels
            'InputMessage',
            'InputField',
            'InputText',
            'Textarea',
            'InputPhone', // InputPhoneInternational
            'Loader',
            'Notice',
            'RadioGroup', // RadioButton
            'InputSearch', // Search
            'Tabs', // Tab
            'Tag',
            'TextLink', // Text link
            'TextLinkButton',
            'ToggleButton',
            'ToggleSwitch',
            'Tooltip',
          ],
          'Content Components',
          'Patterns',
          [
            'AnchorLink',
            'Dialog',
            'FeatureTile',
            'Footer',
            'Header',
            'HeroBlock',
            'InputDate',
            'InputPassword',
            'Pagination',
            'List',
            'PersonSelector',
            'Navigation',
          ],
          // Not in the Figma library
          'Components',
          'Layout',
          'Typography',
          'Templates',
        ],
      },
    },
  },
};

export default preview;
