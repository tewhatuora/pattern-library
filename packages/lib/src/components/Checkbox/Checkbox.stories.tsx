import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
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
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
      defaultValue: false,
      control: {
        type: 'boolean',
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

export const Checked = (args: CheckboxProps) => <Checkbox {...args} checked label="Checked" />;
export const Indeterminate = (args: CheckboxProps) => (
  <Checkbox {...args} checked indeterminate label="Indeterminate" />
);
export const Disabled = (args: CheckboxProps) => <Checkbox {...args} disabled label="Disabled" />;
export const Error = (args: CheckboxProps) => <Checkbox {...args} error label="Error" />;

Default.args = {
  checked: true,
  label: 'Label',
  heading: 'Heading',
  required: false,
  id: 'checkbox',
};
