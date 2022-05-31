import { RadioGroup, RadioGroupProps } from './RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    labels: {
      defaultValue: ['One', 'Two', 'Three'],
    },
  },
};

export const Default = (args: RadioGroupProps) => {
  return <RadioGroup {...args}></RadioGroup>;
};
