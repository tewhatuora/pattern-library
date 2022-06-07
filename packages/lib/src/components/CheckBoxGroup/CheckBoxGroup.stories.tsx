import { CheckBoxGroupProps } from './CheckBoxGroup';
import { CheckBoxGroup } from './CheckBoxGroup';

export default {
  title: 'Components/CheckBoxGroup',
  component: CheckBoxGroup,
  argTypes: {
    label: {
      defaultValue: 'Checkbox 1',
    },

    labelWithHeading: {
      defaultValue: { heading: 'Heading 1', label: 'Checkbox 1' },
    },
  },
};

export const Default = (args: CheckBoxGroupProps) => {
  return <CheckBoxGroup {...args} />;
};
