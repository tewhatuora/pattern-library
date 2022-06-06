import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    // labels: {
    //   defaultValue: ['Content One', 'Two', 'Three'],
    // },
    labels: {
      defaultValue: [
        { label: 'Heading 1', isIndeterminate: false },
        { label: 'Heading 2', isIndeterminate: false },
        { label: 'Heading 3', isIndeterminate: false },
      ],
    },

    labelsWithHeading: {
      defaultValue: [
        { heading: 'Heading 1', label: 'One', isIndeterminate: false },
        { heading: 'Heading 2', label: 'Two', isIndeterminate: false },
        { heading: 'Heading 3', label: 'Three', isIndeterminate: false },
      ],
    },
  },
};

export const Default = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};
