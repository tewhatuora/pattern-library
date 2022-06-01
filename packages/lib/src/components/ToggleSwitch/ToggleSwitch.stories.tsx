import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    label: {
      defaultValue: 'ToggleSwitch Component',
    },
    headingLabel: {
      defaultValue: 'Heading',
    },
  },
};

export const Default = (args: ToggleSwitchProps) => {
  return <ToggleSwitch {...args} />;
};
