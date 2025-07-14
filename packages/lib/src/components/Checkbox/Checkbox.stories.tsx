import { Checkbox, CheckboxProps } from './Checkbox';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Checkbox.docs.mdx';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      include: ['label', 'id', 'heading', 'name', 'required', 'onCheckedChange', 'checked', 'disabled', 'hasError'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onCheckedChange: { control: false },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
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
  args: {
    checked: false,
    indeterminate: false,
  },
};

export const Default = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Checked = (args: CheckboxProps) => <Checkbox {...args} />;
Checked.args = {
  checked: true,
  label: 'Checked',
};
export const Indeterminate = (args: CheckboxProps) => <Checkbox {...args} />;
Indeterminate.args = {
  checked: true,
  indeterminate: true,
  label: 'Indeterminate',
};
export const Disabled = (args: CheckboxProps) => <Checkbox {...args} />;
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
export const CheckedAndDisabled = (args: CheckboxProps) => <Checkbox {...args} />;
CheckedAndDisabled.args = {
  disabled: true,
  checked: true,
  heading: 'Checked',
  label: 'Disabled',
};
export const Error = (args: CheckboxProps) => <Checkbox {...args} />;
Error.args = {
  error: true,
  label: 'Error',
};

Default.args = {
  checked: true,
  indeterminate: false,
  label: 'Label',
  heading: 'Heading',
  required: false,
  id: 'checkbox',
};
