import { Button, ButtonProps } from './Button';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Button.docs.mdx';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
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
    onPress: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Primary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Primary.args = {
  variant: 'primary',
};
export const Secondary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Secondary.args = {
  variant: 'secondary',
};
export const Tertiary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Tertiary.args = {
  variant: 'tertiary',
};
export const WithIcon = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
WithIcon.args = {
  icon: 'link',
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
  </Button>
);
