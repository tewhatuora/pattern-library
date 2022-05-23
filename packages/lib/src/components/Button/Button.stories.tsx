import { Button, ButtonProps } from './Button';
import icons from '../Icon/icons';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
};

export const Default = (args: ButtonProps) => <Button {...args}>Button</Button>;
