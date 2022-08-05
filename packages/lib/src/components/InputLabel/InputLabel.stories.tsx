import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  parameters: {
    controls: {
      exclude: ['labelProps'],
    },
  },
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
  },
};

export const Default = (args: InputLabelProps) => {
  return <InputLabel {...args} />;
};
