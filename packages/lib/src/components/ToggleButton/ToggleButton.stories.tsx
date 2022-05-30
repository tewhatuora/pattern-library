import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    labelLeft: {
      defaultValue: 'Left',
    },
    labelRight: {
      defaultValue: 'Right',
    },
  },
};

export const Default = (args: ToggleButtonProps) => {
  return <ToggleButton {...args}></ToggleButton>;
};
