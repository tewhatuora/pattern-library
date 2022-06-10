import { Checkbox, CheckboxProps } from './CheckBox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'select',
        options: [true, false, 'indeterminate'],
      },
    },
  },
};

export const Default = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};
Default.args = {
  checked: 'indeterminate',
  label: 'Label',
  heading: 'Heading',
  required: false,
};
