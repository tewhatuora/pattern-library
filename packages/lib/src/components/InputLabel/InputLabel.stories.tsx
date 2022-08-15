import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputLabel.docs.mdx';

export default {
  title: 'Input/InputLabel',
  component: InputLabel,
  argTypes: {
    htmlFor: { control: false },
    onTertiaryLabelClick: { control: false },
    label: {
      defaultValue: 'Label',
    },
    subheading: {
      defaultValue: 'Subheading',
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
    },
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: {
      exclude: ['labelProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: InputLabelProps) => {
  return <InputLabel {...args} />;
};
