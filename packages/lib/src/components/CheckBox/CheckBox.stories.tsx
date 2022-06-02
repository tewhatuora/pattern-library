import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    labels: {
      defaultValue: ['Content One', 'Two', 'Three'],
    },
    labelsWithHeading: {
      defaultValue: [
        { heading: 'Heading 1', label: 'One' },
        { heading: 'Heading 2', label: 'Two' },
        { heading: 'Heading 3', label: 'Three' },
      ],
    },
  },
};

export const Default = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};
