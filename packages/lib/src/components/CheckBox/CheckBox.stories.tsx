import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    labels: {
      defaultValue: [
        { label: 'Heading 1', indeterminate: false },
        { label: 'Heading 2', indeterminate: false },
        { label: 'Heading 3', indeterminate: false },
      ],
    },

    labelsWithHeading: {
      defaultValue: [
        { heading: 'Heading 1', label: 'One', indeterminate: false },
        { heading: 'Heading 2', label: 'Two', indeterminate: false },
        { heading: 'Heading 3', label: 'Three', indeterminate: false },
      ],
    },
  },
};

export const Default = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};
