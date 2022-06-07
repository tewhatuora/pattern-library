import { CheckboxGroupProps } from './CheckBoxGroup';
import { CheckboxGroup } from './CheckBoxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    checkboxObject: {
      defaultValue: [
        { label: 'Checkbox 1', state: 'default', isIndeterminate: false, isRequired: true },
        { label: 'Checkbox 2', state: 'disabled', isIndeterminate: false, isRequired: true },
        { label: 'Checkbox 3', state: 'error', isIndeterminate: true, isRequired: true },
      ],
    },
    checkboxWithHeading: {
      defaultValue: [
        {
          labelWithHeading: { heading: 'Heading 1', label: 'Checkbox 1' },
          state: 'default',
          isIndeterminate: false,
          isRequired: true,
        },
        {
          labelWithHeading: { heading: 'Heading 2', label: 'Checkbox 2' },
          state: 'disabled',
          isIndeterminate: false,
          isRequired: true,
        },
        {
          labelWithHeading: { heading: 'Heading 3', label: 'Checkbox 3' },
          state: 'error',
          isIndeterminate: true,
          isRequired: true,
        },
      ],
    },
  },
};

export const Default = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};
