import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputLabel.docs.mdx';

export default {
  title: 'Forms/InputLabel',
  component: InputLabel,
  argTypes: {
    htmlFor: { control: false },
    onTertiaryLabelClick: { control: false },
    label: {
      defaultValue: 'Label',
    },
    subheading: {
      control: {
        type: 'string',
      },
    },
    tertiaryLabel: {
      control: {
        type: 'string',
      },
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

export const Heading = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" />;
};
export const WithError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" />;
};
export const WithSubHeading = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" subheading="Subheading" />;
};
export const WithSubHeadingAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" subheading="Subheading" />;
};
export const WithTertiaryLabel = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" tertiaryLabel="Tertiary label" />;
};
export const WithTertiaryLabelAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" tertiaryLabel="Tertiary label" />;
};
export const WithSubHeadingAndTertiaryLabel = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" subheading="Subheading" tertiaryLabel="Tertiary label" />;
};
export const WithSubHeadingAndTertiaryLabelAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" subheading="Subheading" tertiaryLabel="Tertiary label" />;
};
