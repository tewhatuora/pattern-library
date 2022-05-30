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
  const text = 'ToggleSwitch';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <ToggleSwitch {...args}>{label}</ToggleSwitch>;
};
