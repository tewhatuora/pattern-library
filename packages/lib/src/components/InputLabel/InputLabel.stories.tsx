import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  argTypes: {
    heading: {
      defaultValue: 'Heading',
    },
    subheading: {
      defaultValue: 'Subheading',
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
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
