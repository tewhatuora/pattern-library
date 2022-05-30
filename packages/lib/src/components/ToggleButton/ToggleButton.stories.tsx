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
  const text = 'ToggleButton';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return (
    <ToggleButton
      {...args}
      onChange={() => {
        return alert('ToggleButtoned!');
      }}
    >
      {label}
    </ToggleButton>
  );
};
