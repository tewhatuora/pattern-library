import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      defaultValue: 'Checkbox 1',
    },

    labelWithHeading: {
      defaultValue: { heading: 'Heading 1', label: 'Checkbox 1' },
    },
  },
};

export const Default = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};
