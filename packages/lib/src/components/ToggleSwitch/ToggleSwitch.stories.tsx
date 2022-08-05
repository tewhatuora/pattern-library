import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    id: { control: false },
    name: { control: false },
    label: {
      defaultValue: 'ToggleSwitch Component',
    },
    heading: {
      defaultValue: 'Heading',
    },
    onChange: {
      control: false,
    },
  },
};

export const Default = (args: ToggleSwitchProps) => {
  return <ToggleSwitch {...args} />;
};
