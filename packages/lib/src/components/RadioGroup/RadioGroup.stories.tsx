import { RadioGroup, RadioGroupProps } from './RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
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

export const Default = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};
