import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
        options: [true, false, 'indeterminate'],
      },
    },
  },
};

export const Default = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};
Default.args = {
  checked: true,
  label: 'Label',
  heading: 'Heading',
  required: false,
  id: 'checkbox',
};
