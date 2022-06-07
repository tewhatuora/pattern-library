import { CheckboxGroupProps } from './CheckBoxGroup';
import { CheckboxGroup } from './CheckBoxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    checkboxObject: {
      defaultValue: [
        { label: 'Heading 1', state: 'default', isIndeterminate: false, isRequired: true },
        { label: 'Heading 2', state: 'disabled', isIndeterminate: false, isRequired: true },
        { label: 'Heading 3', state: 'error', isIndeterminate: true, isRequired: true },
      ],
    },
  },
};

export const Default = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};
