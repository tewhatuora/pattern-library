import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      include: ['label', 'id', 'heading', 'name', 'required', 'onCheckedChange', 'checked', 'disabled', 'hasError'],
    },
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onCheckedChange: { control: false },
    checked: {
      control: {
        type: 'radio',
        options: [true, false, 'indeterminate'],
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
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
