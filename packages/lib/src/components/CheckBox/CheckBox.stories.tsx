import { Checkbox, CheckboxProps } from './CheckBox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      defaultValue: 'Checkbox 1',
    },

    labelWithHeading: {
      defaultValue: { heading: 'Heading 1', label: 'Checkbox 1' },
    },
  },
};

export const Default = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};
