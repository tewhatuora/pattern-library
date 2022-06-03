import { Button, ButtonProps } from './Button';
import icons from '../Icon/icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      defaultValue: 'right',
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    children: {
      control: {
        type: 'text',
        defaultValue: 'Button',
      },
    },
  },
};

export const Default = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
export const OnPress = (args: ButtonProps) => (
  <Button
    {...args}
    onPress={() => {
      alert('Button pressed!');
    }}
  >
    {args.children || 'Button'}
    <div />
  </Button>
);
