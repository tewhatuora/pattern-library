import { CheckboxGroupProps } from './CheckBoxGroup';
import { CheckboxGroup } from './CheckBoxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    label: {
      defaultValue: 'Checkbox 1',
    },

    labelWithHeading: {
      defaultValue: { heading: 'Heading 1', label: 'Checkbox 1' },
    },
  },
};

export const Default = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};
