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
    valueLeft: {
      defaultValue: 'Left ToggleButton',
    },
    valueRight: {
      defaultValue: 'Right ToggleButton',
    },
  },
};

export const Default = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
